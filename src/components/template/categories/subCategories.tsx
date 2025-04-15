import { Link, useParams } from "react-router";
import { useTypedSelector } from "../../../redux/typedhooks";
import Header from "../../module/header";

export default function SubCategories() {
  const { category, subcategory } = useParams();

  const loading = useTypedSelector((state) => state.categories).loading;
  const data = useTypedSelector((state) => state.categories)
    .data?.filter((e) => e.slug === category)[0]
    .subcategories.filter((e) => e.slug === subcategory)[0];

  return (
    <>
      <Header />
      <section className="grid grid-cols-[6fr_6fr] gap-3 lg:px-42 sm:px-4 px-3 sm:py-4 py-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-full aspect-square bg-zinc-200 sm:rounded-lg rounded-md"
              ></div>
            ))
          : data?.subcategories.map((e) => (
              <Link
                key={e.id}
                to={`/products/${category}/${subcategory}/${e.slug}`}
                className="w-full aspect-square relative"
              >
                <img
                  src={e.banner}
                  alt={e.title}
                  className="w-full h-full sm:rounded-lg rounded-md"
                />
                <h2 className="absolute top-[50px] right-0 bg-white sm:px-4 px-2 py-1 moraba-bold rounded-l-sm sm:text-base text-[10px]">
                  {e.title}
                </h2>
              </Link>
            ))}
      </section>
    </>
  );
}
