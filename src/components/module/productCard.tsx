import ProductType from "../../types/products";

export default function ProductCard({
  product,
  offered,
}: {
  product: ProductType;
  offered?: boolean;
}) {
  return (
    <div
      key={product.id}
      className="keen-slider__slide h-[250px] flex flex-col justify-between relative border border-zinc-200 !min-w-[200px] !max-w-[200px] bg-white p-2 rounded-lg flex-shrink-0"
    >
      <div className="w-[130px] h-[130px] object-cover flex items-center justify-center m-auto">
        <img
          src={
            product.images.map((img) =>
              img.is_main ? img.image : "/img/layers/no-image.jpg"
            )[0]
          }
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xs font-semibold mt-2 text-zinc-800 h-[30px] line-clamp-2 vazir-light">
        {product.title}
      </h3>

      <div className="flex items-center justify-between mt-2">
        {offered && (
          <span className="bg-primary w-[30px] h-[20px] rounded-sm flex items-center justify-center vazir-medium text-white text-xs">
            {product.discount.label}
          </span>
        )}
        <div className="flex flex-col items-center gap-1">
          <p className="text-zinc-800 text-base mt-1 vazir-bold flex items-center gap-1">
            {Number(product.price).toLocaleString()}{" "}
            <span className="text-[9px] rotate-270 block">تومان</span>
          </p>
          <span className="text-sm text-zinc-400 line-through">
            {Number(product.price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
