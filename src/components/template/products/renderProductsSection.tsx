import { MenuItem, Select, Switch } from "@mui/material";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import ProductType from "../../../types/products";
import ProductCard from "../../module/productCard";

interface RenderProductSectionProps {
  loading: boolean;
  products: ProductType[];
  productSort: string;
  setProductSort: (value: string) => void;
}

export default function RenderProductSection({
  loading,
  products,
  productSort,
  setProductSort,
}: RenderProductSectionProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <section className="flex sm:flex-row flex-col gap-2 sm:mt-10 mt-3">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="sm:hidden flex items-center justify-between px-3 h-[39px] text-zinc-400 text-sm  border border-zinc-300 rounded-sm"
      >
        <span className="vazir-medium text-zinc-800 px-1">فیلتر کردن</span>
        <IoIosArrowDown
          className={`${isFilterOpen ? "rotate-180" : "rotate-0"} transition`}
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
          <span className="text-sm">فقط تخفیف دار ها</span>
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
          {loading ? (
            Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className=" bg-zinc-200 h-[270px] w-full rounded-lg"
              ></div>
            ))
          ) : products.length === 0 ? (
            <div className="w-full h-full p-2 vazir-bold text-lg text-zinc-500">
              هنوز محصولی موجود نیست
            </div>
          ) : (
            products?.map((e) => (
              <ProductCard key={e.id} product={e} inProducts />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
