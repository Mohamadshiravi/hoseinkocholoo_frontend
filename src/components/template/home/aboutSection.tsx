export default function AboutSection() {
  const artBoardArray = [
    {
      id: 1,
      src: "/img/layers/Artboard_4-min.webp",
      title: " ضمانت اصالت کالا",
    },
    {
      id: 2,
      src: "/img/layers/Artboard_3-min.webp",
      title: "امکان پرداخت در محل",
    },
    { id: 3, src: "/img/layers/Artboard_2-min.webp", title: " ارسال اکسپرس" },
  ];
  return (
    <section className="sm:my-20 my-10 px-1">
      <div className="flex items-center justify-center sm:gap-20 gap-6 flex-wrap">
        {artBoardArray.map((e) => (
          <div key={e.id} className="flex flex-col gap-1 items-center">
            <img
              src={e.src}
              alt="artboard"
              className="sm:w-[70px] w-[50px] aspect-square"
            />
            <span className="moraba-regular text-zinc-500 sm:text-sm text-xs">
              {e.title}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h1 className="sm:text-4xl text-2xl moraba-bold">
          فروشگاه اینترنتی حسین کوچولو
        </h1>
        <div className="flex md:flex-row flex-col gap-6 sm:mt-10 mt-4">
          <p className="text-justify sm:text-base text-sm">
            فروشگاه اینترنتی حسین کوچولو عرضه کننده انواع پوشاک بچگانه و زنانه{" "}
            <span className="text-primary">بیشتر بخوانید</span>
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-zinc-100 w-[80px] aspect-square"></div>
            <div className="bg-zinc-100 w-[80px] aspect-square"></div>
            <div className="bg-zinc-100 w-[80px] aspect-square"></div>
            <div className="bg-zinc-100 w-[80px] aspect-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
