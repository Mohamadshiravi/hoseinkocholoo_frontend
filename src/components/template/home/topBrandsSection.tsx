import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks";
import { fetchTopBrandsFromServer } from "../../../redux/slices/brands";

export default function TopBrandsSection() {
  useEffect(() => {
    dispatch(fetchTopBrandsFromServer());
  }, []);

  const { data, loading } = useTypedSelector((state) => state.brnads.topBrands);

  const dispatch = useTypedDispatch();
  return (
    <div className=" mt-4">
      <h3 className="moraba-bold text-xl text-center">برند های منتخب</h3>
      <div className="grid md:grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr_1.5fr_1.5fr_1.5fr_1.5fr] grid-cols-[3fr_3fr_3fr_3fr] gap-3 mt-3">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-full aspect-square bg-zinc-200 rounded-sm"
              ></div>
            ))
          : data?.map((e) => (
              <div
                key={e.id}
                className="w-full aspect-square group relative transition-all border border-zinc-300 p-3 rounded-sm cursor-pointer flex items-center justify-center"
              >
                <img src={e.logo} alt={e.name} className="w-full h-full" />
                <div className="w-full h-full absolute bg-primary/50 border border-primary opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            ))}
      </div>
    </div>
  );
}
