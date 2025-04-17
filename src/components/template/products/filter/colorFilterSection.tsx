import { Checkbox } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";

interface ColorFilterSectionProps {
  variants: { id: number; name: string; hex_code: string }[];
  setVariantsSort: (value: string) => void;
  variantsSort: string;
}

export default function ColorFilterSection({
  variants,
  setVariantsSort,
  variantsSort,
}: ColorFilterSectionProps) {
  return (
    <div className="border border-zinc-300 rounded-sm relative px-3 select-none ">
      <input id="color" type="checkbox" className="absolute peer hidden" />
      <label
        htmlFor="color"
        className="flex items-center justify-between text-zinc-400 text-sm h-[38px]"
      >
        <span className="vazir-medium text-zinc-800 px-1">رنگ</span>
      </label>
      <IoIosArrowBack className="absolute top-3 left-2.5 peer-checked:-rotate-90 text-zinc-400 transition" />
      <div className="w-full hidden peer-checked:flex flex-col p-1">
        {variants.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <Checkbox
              onChange={(event) =>
                setVariantsSort(event.target.checked ? `color=${e.name}` : "")
              }
              size="small"
              checked={variantsSort === `color=${e.name}` ? true : false}
            />
            <span className="text-sm text-zinc-500">{e.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
