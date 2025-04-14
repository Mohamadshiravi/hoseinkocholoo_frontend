import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { useTypedSelector } from "../../../redux/typedhooks";
import { useParams } from "react-router";
import SubCategorySection from "./subCategoriesSection";
import { MenuItem, Select, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios/axios";
import ProductCard from "../../module/productCard";
import ProductType from "../../../types/products";
import Footer from "../../module/footer";
import Header from "../../module/header";

export default function ProductsSortedByCategories() {
  const [productSort, setProductSort] = useState("newest");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { category } = useParams();

  const { data } = useTypedSelector((state) => state.categories);
  const currentCategory = data?.filter((e) => e.slug === category)[0];

  useEffect(() => {
    FetchProducts();
  }, [category, productSort]);

  async function FetchProducts() {
    setLoading(true);
    const res = await axiosInstance.get(
      `/products/products/filtered?category_slug=${category}&ordering=${productSort}&page=${2}`
    );

    console.log(res.data);

    setProducts(res.data);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <main className="w-full lg:px-32 sm:px-4 px-3 sm:py-8 py-3">
        <section className="flex items-center gap-2 text-xs text-zinc-500">
          <span>خانه</span>
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
        <section className="sm:mt-6 mt-3">
          {loading ? (
            <span className="bg-zinc-200 w-[100px] h-[30px] block"></span>
          ) : (
            <h1 className="moraba-bold">{currentCategory?.title}</h1>
          )}

          <SubCategorySection
            data={currentCategory?.subcategories}
            loading={loading}
          />
        </section>
        <section className="flex sm:flex-row flex-col gap-2 sm:mt-10 mt-3">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden flex items-center justify-between px-3 h-[39px] text-zinc-400 text-sm  border border-zinc-300 rounded-sm"
          >
            <span className="vazir-medium text-zinc-800 px-1">فیلتر کردن</span>
            <IoIosArrowDown
              className={`${
                isFilterOpen ? "rotate-180" : "rotate-0"
              } transition`}
            />
          </button>
          <div
            className={`${
              isFilterOpen ? "flex" : "hidden"
            } lg:flex sm:w-[250px] w-full flex-col gap-2`}
          >
            <div className="flex items-center justify-between px-3 h-[39px] text-zinc-400 text-sm  border border-zinc-300 rounded-sm">
              <span className="vazir-medium text-zinc-800 px-1">قیمت</span>
              <IoIosArrowBack />
            </div>
            <div className="flex items-center justify-between px-3 h-[39px] text-zinc-400 text-sm  border border-zinc-300 rounded-sm">
              <span className="vazir-medium text-zinc-800 px-1">برند</span>
              <IoIosArrowBack />
            </div>
            <div className="flex items-center justify-between px-3 h-[39px] text-zinc-400 text-sm  border border-zinc-300 rounded-sm">
              <span className="vazir-medium text-zinc-800 px-1">سایز</span>
              <IoIosArrowBack />
            </div>
            <div className="flex items-center justify-between px-3 h-[39px] text-zinc-400 text-sm  border border-zinc-300 rounded-sm">
              <span className="vazir-medium text-zinc-800 px-1">رنگ</span>
              <IoIosArrowBack />
            </div>
            <div className="flex items-center justify-between gap-1">
              <span className="text-sm">فقط کالاهای موجود</span>
              <Switch color="primary" />
            </div>
          </div>
          <div className="w-full">
            <div>
              <Select
                sx={{ fontSize: "15px" }}
                onChange={(e) => {
                  setProductSort(e.target.value);
                }}
                value={productSort}
                fullWidth
                color="primary"
                size="small"
              >
                <MenuItem value={"newest"}>جدید ترین ها </MenuItem>
                <MenuItem value={"most_cheapest"}>ارزان ترین ها </MenuItem>
                <MenuItem value={"most_expensive"}>گران ترین ها </MenuItem>
                <MenuItem value={"most_discount"}>پر تخفیف ترین ها</MenuItem>
                <MenuItem value={"sold_count"}>پر فروش ترین ها </MenuItem>
              </Select>
            </div>
            <div className="w-full grid lg:grid-cols-[3fr_3fr_3fr_3fr] md:grid-cols-[4fr_4fr_4fr] grid-cols-[6fr_6fr] mt-2 gap-2">
              {loading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className=" bg-zinc-200 h-[270px] w-full rounded-lg"
                    ></div>
                  ))
                : products?.map((e) => (
                    <ProductCard key={e.id} product={e} inProducts />
                  ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
