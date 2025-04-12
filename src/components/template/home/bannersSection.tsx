export default function BannersSection() {
  return (
    <section className="lg:mt-8 mt-4">
      <div className="grid lg:grid-cols-[3fr_3fr_3fr_3fr] grid-cols-[6fr_6fr] gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full flash-once">
            <img
              src="/img/layers/banner.webp"
              alt="banner"
              className="rounded-lg w-full lg:h-[150px] h-[100px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-3 flash-once">
        <img
          src="/img/layers/banner-2.webp"
          alt="banner"
          className="rounded-lg w-full lg:h-[150px] h-[100px] object-cover object-right"
        />
      </div>
    </section>
  );
}
