import { Checkbox } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../../../redux/typedhooks";
import { useEffect } from "react";
import { fetchAllBrandsFromServer } from "../../../../redux/slices/brands";

interface BrandFilterSectionProps {
  setVariantsSort: (value: string) => void;
  variantsSort: string;
}

export default function BrandFilterSection({
  setVariantsSort,
  variantsSort,
}: BrandFilterSectionProps) {
  const { data } = useTypedSelector((state) => state.brnads.allBrands);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(fetchAllBrandsFromServer());
    }
  }, [data]);
  return (
    <div className="border border-zinc-300 rounded-sm relative px-3 select-none ">
      <input id="brand" type="checkbox" className="absolute peer hidden" />
      <label
        htmlFor="brand"
        className="flex items-center justify-between text-zinc-400 text-sm h-[38px]"
      >
        <span className="vazir-medium text-zinc-800 px-1">برند</span>
      </label>
      <IoIosArrowBack className="absolute top-3 left-2.5 peer-checked:-rotate-90 text-zinc-400 transition" />
      <div className="w-full hidden peer-checked:flex flex-col p-1">
        {data?.map((e) => (
          <div key={e.id} className="flex items-center gap-2">
            <Checkbox
              onChange={(event) =>
                setVariantsSort(event.target.checked ? `brand=${e.name}` : "")
              }
              size="small"
              checked={variantsSort === `brand=${e.name}` ? true : false}
            />
            <img src={e.logo} alt={e.name} className="w-[25px]" />
            <span className="text-xs text-zinc-500">{e.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
