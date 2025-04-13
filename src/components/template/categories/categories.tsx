import { Link, useParams } from "react-router";
import { useTypedSelector } from "../../../redux/typedhooks";

export default function Categories() {
  const { data, loading } = useTypedSelector((state) => state.categories);

  const { category } = useParams();
  return (
    <section className="grid grid-cols-[6fr_6fr] gap-3 lg:px-42 sm:px-4 px-3 sm:py-4 py-3">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-zinc-200 sm:rounded-lg rounded-md"
            ></div>
          ))
        : data
            ?.filter((e) => e.slug === category)[0]
            .subcategories.map((e) => (
              <Link
                key={e.id}
                to={`/categories/${category}/${e.slug}`}
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
  );
}
