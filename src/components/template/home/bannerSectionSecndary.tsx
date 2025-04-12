export default function BannersSectionSecondary() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-[6fr_6fr] gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="w-full flash-once">
            <img
              src="/img/layers/banner.webp"
              alt="banner"
              className="rounded-lg w-full max-h-[200px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
