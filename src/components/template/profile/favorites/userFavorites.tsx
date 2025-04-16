import { useEffect } from "react";
import { useTypedSelector } from "../../../../redux/typedhooks";
import ProductCard from "../../../module/productCard";
import ProfileLayout from "../profileLayout";

export default function UserFavorites() {
  const { favorites, loading } = useTypedSelector((state) => state.user);

  return (
    <ProfileLayout>
      <section className="w-full flex flex-col gap-3">
        <div className="w-full border border-zinc-200 rounded-md">
          <h2 className="flex text-lg items-center justify-between text-zinc-500 border-b p-4 border-zinc-200 vazir-bold">
            علاقه مندی ها
          </h2>
          <div className="grid lg:grid-cols-[4fr_4fr_4fr] sm:grid-cols-[6fr_6fr] grid-cols-[1fr] gap-4 p-4 overflow-hidden">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className=" bg-zinc-200 h-[270px] w-full rounded-md"
                  ></div>
                ))
              : favorites?.map((e) => (
                  <ProductCard inProducts key={e.id} product={e} />
                ))}
          </div>
        </div>
      </section>
    </ProfileLayout>
  );
}
