import { IoIosArrowBack } from "react-icons/io";
import { useTypedSelector } from "../../../redux/typedhooks";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import SubCategorySection from "./subCategoriesSection";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios/axios";
import ProductType from "../../../types/products";
import Footer from "../../module/footer";
import Header from "../../module/header";
import RenderProductSection from "./renderProductsSection";

export default function ProductsSortedByCategories() {
  const [productSort, setProductSort] = useState("newest");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [variantsSort, setVariantsSort] = useState("");

  const [productVariants, setProductVariants] = useState({
    colors: [],
    sizes: [],
  });

  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, loading: pageLoading } = useTypedSelector(
    (state) => state.categories
  );
  const currentCategory = data?.filter((e) => e.slug === category)[0];

  const navigate = useNavigate();

  useEffect(() => {
    FetchProducts();
  }, [category, productSort, page]);

  async function FetchProducts() {
    setLoading(true);
    const res = await axiosInstance.get(
      `/products/products/filtered?category_slug=${category}&ordering=${productSort}&page=${page}`
    );
    SortProductsVariants(res.data.results);

    setTotalPage(res.data.total_count);
    setProducts(res.data.results);
    setLoading(false);
  }

  function SortProductsVariants(allProducts: ProductType[]) {
    const varinats: any = {
      colors: [],
      sizes: [],
    };

    //set color variants
    let allColors: { id: number; name: string; hex_code: string }[] = [];
    allProducts.map((e) => {
      e.variants.map((v) => allColors.push(v.color));
    });
    const allColorsUnique = allColors.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    varinats.colors = allColorsUnique;

    setProductVariants(varinats);
  }

  useEffect(() => {
    async function FetchVariantsSortedProducts() {
      const res = await axiosInstance.get(
        `/products/products/filtered?category_slug=${category}&ordering=${productSort}&page=${page}&color=${"سفید"}`
      );
      console.log(res.data);
    }
    FetchVariantsSortedProducts();
  }, [variantsSort]);

  return (
    <>
      <Header />
      <main className="w-full lg:px-32 sm:px-4 px-3 sm:py-8 py-3">
        <section className="flex items-center gap-2 text-xs text-zinc-500">
          <Link to={"/"}>خانه</Link>
          <span>
            <IoIosArrowBack />
          </span>
          {pageLoading ? (
            <span className="bg-zinc-200 w-[80px] h-[20px]"></span>
          ) : (
            <span className="vazir-medium text-zinc-800">
              {currentCategory?.title}
            </span>
          )}
        </section>
        <section className="sm:mt-6 mt-3">
          {pageLoading ? (
            <span className="bg-zinc-200 w-[100px] h-[30px] block"></span>
          ) : (
            <h1 className="moraba-bold">{currentCategory?.title}</h1>
          )}

          <SubCategorySection
            category={category || ""}
            data={currentCategory?.subcategories}
            loading={pageLoading}
          />
        </section>
        <RenderProductSection
          loading={loading}
          products={products}
          productSort={productSort}
          setProductSort={setProductSort}
          variants={productVariants}
          setVariantsSort={setVariantsSort}
        />
        <div className="flex items-center justify-center mt-10">
          <Pagination
            onChange={(_, v) => navigate(`/products/${category}?page=${v}`)}
            page={page}
            count={totalPage}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
