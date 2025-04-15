import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import ProductType from "../../../types/products";
import { useTypedSelector } from "../../../redux/typedhooks";
import axiosInstance from "../../../utils/axios/axios";
import Header from "../../module/header";
import { IoIosArrowBack } from "react-icons/io";
import SubCategorySection from "./subCategoriesSection";
import RenderProductSection from "./renderProductsSection";
import Footer from "../../module/footer";
import { Pagination } from "@mui/material";

export default function ProductsSortedByLevel2SubCategories() {
  const [productSort, setProductSort] = useState("newest");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { category, subcategory, level2subcategory } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data } = useTypedSelector((state) => state.categories);

  //bread crumb
  const currentCategory = data
    ?.filter((e) => e.slug === category)[0]
    .subcategories.filter((e) => e.slug === subcategory)[0]
    .subcategories.filter((e) => e.slug === level2subcategory)[0];

  const prewCategory = data
    ?.filter((e) => e.slug === category)[0]
    .subcategories.filter((e) => e.slug === subcategory)[0];

  const firstCategory = data?.filter((e) => e.slug === category)[0];
  //>

  const navigate = useNavigate();

  useEffect(() => {
    FetchProducts();
  }, [category, productSort, page]);

  async function FetchProducts() {
    setLoading(true);
    const res = await axiosInstance.get(
      `/products/products/filtered?category_slug=${subcategory}&ordering=${productSort}&page=${page}`
    );

    console.log(res.data);

    setTotalPage(res.data.total_count);
    setProducts(res.data.results);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <main className="w-full lg:px-32 sm:px-4 px-3 sm:py-8 py-3">
        <section className="flex items-center gap-2 text-xs text-zinc-500">
          <Link to={"/"}>خانه</Link>
          <span>
            <IoIosArrowBack />
          </span>
          {loading ? (
            <span className="bg-zinc-200 w-[80px] h-[20px]"></span>
          ) : (
            <Link
              to={`/products/${category}`}
              className="vazir-medium text-zinc-800"
            >
              {firstCategory?.title}
            </Link>
          )}
          <span>
            <IoIosArrowBack />
          </span>
          {loading ? (
            <span className="bg-zinc-200 w-[80px] h-[20px]"></span>
          ) : (
            <Link
              to={`/products/${category}/${subcategory}`}
              className="vazir-medium text-zinc-800"
            >
              {prewCategory?.title}
            </Link>
          )}
          <span>
            <IoIosArrowBack />
          </span>
          {loading ? (
            <span className="bg-zinc-200 w-[80px] h-[20px]"></span>
          ) : (
            <span className="vazir-medium text-zinc-800">
              {currentCategory?.title}
            </span>
          )}
        </section>

        <RenderProductSection
          loading={loading}
          products={products}
          productSort={productSort}
          setProductSort={setProductSort}
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
