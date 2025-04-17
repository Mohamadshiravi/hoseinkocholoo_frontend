import { MenuItem, Select, Switch } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ProductType from "../../../types/products";
import ProductCard from "../../module/productCard";
import { PiEmptyBold } from "react-icons/pi";
import ColorFilterSection from "./filter/colorFilterSection";
import SizeFilterSection from "./filter/sizeFilterSection";
import BrandFilterSection from "./filter/brandFilterSection";
import PriceFilterSection from "./filter/priceFilterSection";

interface RenderProductSectionProps {
  loading: boolean;
  products: ProductType[];
  productSort: string;
  setProductSort: (value: string) => void;
  variants: {
    colors: { id: number; name: string; hex_code: string }[];
    sizes: { id: number; title: string }[];
    price: number[];
  };
  setVariantsSort: (value: string) => void;
  variantsSort: string;
}

const RenderProductSection = React.memo(
  ({
    loading,
    products,
    productSort,
    setProductSort,
    variants,
    setVariantsSort,
    variantsSort,
  }: RenderProductSectionProps) => {
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
          } sm:flex sm:w-[250px] w-full flex-col gap-2`}
        >
          <PriceFilterSection
            variants={variants.price}
            setVariantsSort={setVariantsSort}
          />

          <BrandFilterSection
            setVariantsSort={setVariantsSort}
            variantsSort={variantsSort}
          />

          {variants.sizes.length !== 0 && (
            <SizeFilterSection
              variants={variants.sizes}
              setVariantsSort={setVariantsSort}
              variantsSort={variantsSort}
            />
          )}
          {variants.colors.length !== 0 && (
            <ColorFilterSection
              variants={variants.colors}
              setVariantsSort={setVariantsSort}
              variantsSort={variantsSort}
            />
          )}
          <div className="flex items-center justify-between gap-1">
            <span className="text-sm">فقط تخفیف دار ها</span>
            <Switch
              color="primary"
              onChange={(e) =>
                setVariantsSort(e.target.checked ? `has_discount=true` : ``)
              }
              checked={variantsSort === `has_discount=true` ? true : false}
            />
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
              ? Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className=" bg-zinc-200 h-[270px] w-full rounded-lg"
                  ></div>
                ))
              : products.length !== 0 &&
                products?.map((e) => (
                  <ProductCard key={e.id} product={e} inProducts />
                ))}
          </div>
          {products.length === 0 && (
            <div className="w-full h-full p-2 vazir-bold text-lg text-zinc-500 flex flex-col gap-1 items-center justify-center">
              <PiEmptyBold className="text-5xl" />
              هنوز محصولی موجود نیست
            </div>
          )}
        </div>
      </section>
    );
  }
);

export default RenderProductSection;
