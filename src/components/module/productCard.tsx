import ProductType from "../../types/products";

export default function ProductCard({
  product,
  inProducts,
}: {
  product: ProductType;
  inProducts?: boolean;
}) {
  return (
    <div
      className={`${
        inProducts
          ? "shadow-lg border border-zinc-300"
          : " keen-slider__slide !min-w-[200px] !max-w-[200px] flex-shrink-0"
      } h-[270px] flex flex-col justify-between relative bg-white p-2 rounded-sm`}
    >
      <div className="w-full h-[150px] object-cover flex items-center justify-center m-auto">
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
      <h3 className="text-xs font-semibold mt-2 text-zinc-800 h-[35px] line-clamp-2 vazir-light">
        {product.title}
      </h3>

      <div
        className={`${
          product.discount ? "justify-between" : "justify-center"
        } flex items-center mt-2`}
      >
        {product.discount && (
          <span className="bg-primary w-[30px] h-[20px] rounded-sm flex items-center justify-center vazir-medium text-white text-xs">
            {product.discount.label}
          </span>
        )}
        <div className="flex flex-col items-center gap-1">
          <p className="text-zinc-800 text-base mt-1 vazir-bold flex items-center gap-1">
            {Number(product.final_price).toLocaleString()}{" "}
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
