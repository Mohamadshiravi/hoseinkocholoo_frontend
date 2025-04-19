import { IoIosArrowBack } from "react-icons/io";
import { useTypedSelector } from "../../../redux/typedhooks";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import SubCategorySection from "./subCategoriesSection";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios/axios";
import ProductType from "../../../types/products";
import RenderProductSection from "./renderProductsSection";

export default function ProductsSortedByCategories() {
  const [productSort, setProductSort] = useState("newest");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [variantsSort, setVariantsSort] = useState("");

  const [productVariants, setProductVariants] = useState({
    colors: [],
    sizes: [],
    price: [],
  });

  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { category, subcategory } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, loading: pageLoading } = useTypedSelector(
    (state) => state.categories
  );
  //bread crumb
  const currentCategory = data
    ?.filter((e) => e.slug === category)[0]
    .subcategories.filter((e) => e.slug === subcategory)[0];

  const prewCategory = data?.filter((e) => e.slug === category)[0];
  //>

  const navigate = useNavigate();

  useEffect(() => {
    FetchProducts();
  }, [category, productSort, page, variantsSort]);

  async function FetchProducts() {
    setLoading(true);
    const res = await axiosInstance.get(
      `/products/products/filtered/?category_slug=${subcategory}&ordering=${productSort}&page=${page}&${variantsSort}`
    );

    if (variantsSort === "" && res.data.results.length !== 0) {
      SortProductsVariants(res.data.results);
    }

    setTotalPage(res.data.total_count);
    setProducts(res.data.results);
    setLoading(false);
  }

  function SortProductsVariants(allProducts: ProductType[]) {
    const variants: any = {
      colors: [],
      sizes: [],
    };

    //set color variants
    let allColors = allProducts.flatMap((product) =>
      product.variants.map((e) => e.color)
    );
    const allColorsUnique = allColors.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    variants.colors = allColorsUnique;

    //set size variants
    let allSizes = allProducts.flatMap((product) =>
      product.variants.map((e) => e.size)
    );
    const allSizesUnique = allSizes.filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    );
    variants.sizes = allSizesUnique;

    //set Price variants
    const sortedByPrice = allProducts.sort(
      (a, b) => +a.final_price - +b.final_price
    );
    const price = [
      sortedByPrice[0].final_price,
      sortedByPrice[sortedByPrice.length - 1].final_price,
    ];
    variants.price = price;

    setProductVariants(variants);
  }

  return (
    <>
      <main className="w-full lg:px-32 sm:px-4 px-3 sm:py-8 py-3">
        <section className="flex items-center gap-2 text-xs text-zinc-500">
          <Link to={"/"}>خانه</Link>
          <span>
            <IoIosArrowBack />
          </span>
          {pageLoading ? (
            <span className="bg-zinc-200 w-[80px] h-[20px]"></span>
          ) : (
            <Link
              to={`/products/${category}`}
              className="vazir-medium text-zinc-800"
            >
              {prewCategory?.title}
            </Link>
          )}
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
            subCategory={subcategory || ""}
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
          variantsSort={variantsSort}
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
    </>
  );
}
