import { useEffect } from "react";
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../../../redux/typedhooks";
import ProductCard from "../../../module/productCard";
import ProfileLayout from "../profileLayout";
import { fetchUserFavorites } from "../../../../redux/slices/user";

export default function UserFavorites() {
  const { favorites, loading } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (!favorites) {
      console.log(favorites);
      dispatch(fetchUserFavorites());
    }
  }, [favorites]);

  const dispatch = useTypedDispatch();

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
          {favorites?.length === 0 && (
            <h3 className="w-full py-20 px-4 text-center flex items-center justify-center text-zinc-500">
              شما هیج محصولی را به مورد علاقه های خود اضافه نکردید !
            </h3>
          )}
        </div>
      </section>
    </ProfileLayout>
  );
}
