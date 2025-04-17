import { IoIosArrowBack } from "react-icons/io";
import MultiRangeSlider from "./multiRangeSelector";

interface PriceFilterSectionProps {
  variants: number[];
  setVariantsSort: (value: string) => void;
}

export default function PriceFilterSection({
  variants,
  setVariantsSort,
}: PriceFilterSectionProps) {
  return (
    <div className="border border-zinc-300 rounded-sm relative px-3 select-none ">
      <input id="price" type="checkbox" className="absolute peer hidden" />
      <label
        htmlFor="price"
        className="flex items-center justify-between text-zinc-400 text-sm h-[38px]"
      >
        <span className="vazir-medium text-zinc-800 px-1">قیمت</span>
      </label>
      <IoIosArrowBack className="absolute top-3 left-2.5 peer-checked:-rotate-90 text-zinc-400 transition" />
      <div className="w-full hidden peer-checked:flex flex-col px-1 py-3">
        <MultiRangeSlider
          min={variants[0]}
          max={variants[1]}
          onChange={(e) => setVariantsSort(`price=${e.min}-${e.max}`)}
        />
      </div>
    </div>
  );
}
