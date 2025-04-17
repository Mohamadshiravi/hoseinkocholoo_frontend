import { Checkbox } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";

interface SizeFilterSectionProps {
  variants: { id: number; title: string }[];
  setVariantsSort: (value: string) => void;
  variantsSort: string;
}

export default function SizeFilterSection({
  variants,
  setVariantsSort,
  variantsSort,
}: SizeFilterSectionProps) {
  return (
    <div className="border border-zinc-300 rounded-sm relative px-3 select-none ">
      <input id="size" type="checkbox" className="absolute peer hidden" />
      <label
        htmlFor="size"
        className="flex items-center justify-between text-zinc-400 text-sm h-[38px]"
      >
        <span className="vazir-medium text-zinc-800 px-1">سایز</span>
      </label>
      <IoIosArrowBack className="absolute top-3 left-2.5 peer-checked:-rotate-90 text-zinc-400 transition" />
      <div className="w-full hidden peer-checked:flex flex-col p-1">
        {variants.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <Checkbox
              onChange={(event) =>
                setVariantsSort(event.target.checked ? `size=${e.title}` : "")
              }
              size="small"
              checked={variantsSort === `size=${e.title}` ? true : false}
            />
            <span className="text-sm text-zinc-500">{e.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
