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
    <section className="sm:my-20 my-10">
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
        <h1 className="text-4xl moraba-bold">فروشگاه اینترنتی مدیسه</h1>
        <div className="flex gap-6">
          <p className="text-justify mt-10">
            فروشگاه اینترنتی مدیسه که فعالیت خود را سال ۱۳۹۴ آغاز کرده، امروز به
            یک فروشگاه چندمنظوره پویا و جامع تبدیل شده است. ما در مدیسه افتخار
            داریم که طیف گسترده‌ای از محصولات شامل پوشاک و لوازم متنوع برای
            مردان، زنان و کودکان، عطر و لوازم آرایشی و بهداشتی، محصولات خانه و
            آشپزخانه، لوازم الکترونیک، تجهیزات ورزشی و ملزومات سفر به همراه
            کالاهای سوپرمارکتی متنوع را با بهترین قیمت‌ها در اختیار شما قرار
            دهیم. فلسفه ما در مدیسه بر پایه‌ی ایجاد یک تجربه خرید آنلاین سریع،
            راحت و به‌صرفه است، که با تکیه بر سه اصل کلیدی تحقق می‌یابد: روش‌های
            پرداخت متنوع ، ۷ روز ضمانت بازگشت کالا و تضمین اصالت محصولات . ما
            همواره در تلاشیم تا با ارائه محصولات با کیفیت، نیازهای مختلف
            مشتریان‌مان را برآورده کنیم. از روز نخست، هدف ما چیزی فراتر از تنها
            فروش بوده است؛ ما به دنبال جلب رضایت مشتریان و ارتقای دائمی کیفیت
            خدمات هستیم. امروز، به لطف همراهی و اعتماد شما، مدیسه به یکی از
            فروشگاه‌های آنلاین محبوب و کاربردی در ایران تبدیل شده است و با تمام
            انرژی در مسیر رشد و بهبود مداوم گام برمی‌دارد. به همین دلیل، ما در
            مدیسه همیشه آماده‌ایم تا با رویکردی نوآورانه و مشتری‌محور، تجربه‌ای
            لذت‌بخش از خرید اینترنتی را برای شما رقم بزنیم.{" "}
            <span className="text-primary">بیشتر بخوانید</span>
          </p>
          <div className="flex items-center gap-2">
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
