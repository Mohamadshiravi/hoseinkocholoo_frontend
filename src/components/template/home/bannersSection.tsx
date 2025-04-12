export default function BannersSection() {
  return (
    <section className=" lg:px-0 px-2 lg:mt-8 mt-4">
      <div className="grid lg:grid-cols-[3fr_3fr_3fr_3fr] grid-cols-[6fr_6fr] gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full flash-once">
            <img
              src="/img/layers/banner.webp"
              alt="banner"
              className="rounded-lg w-full "
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-3 lg:h-auto h-[100px] flash-once ">
        <img
          src="/img/layers/banner-2.webp"
          alt="banner"
          className="rounded-lg w-full h-full object-cover object-right"
        />
      </div>
    </section>
  );
}
