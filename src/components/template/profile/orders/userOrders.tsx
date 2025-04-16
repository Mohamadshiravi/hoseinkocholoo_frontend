import ProfileLayout from "../profileLayout";

export default function UserOrders() {
  return (
    <ProfileLayout>
      <section className="w-full flex flex-col gap-3">
        <div className="w-full border border-zinc-200 rounded-md">
          <h2 className="flex text-lg items-center justify-between text-zinc-500 border-b p-4 border-zinc-200 vazir-bold">
            سفارش های من
          </h2>
          <div className="w-full">
            <nav className="flex items-center overflow-x-scroll noScrollbar gap-6 vazir-medium p-4 border-b border-zinc-200">
              <span className="whitespace-nowrap relative text-blue-500 after:content-[''] after:absolute after:-bottom-4 px-3 after:left-0 after:w-full after:bg-blue-500 after:h-[2px]">
                سفارشات جاری
              </span>
              <span
                className="whitespace-nowrap
"
              >
                تحویل داده شده
              </span>
              <span
                className="whitespace-nowrap
"
              >
                مرجوعی
              </span>
              <span
                className="whitespace-nowrap
"
              >
                لغو شده
              </span>
            </nav>
            <h3 className="text-center w-full px-3 py-8 text-zinc-500">
              محتوایی جهت نمایش وجود ندارد
            </h3>
          </div>
        </div>
        <div className="w-full border border-zinc-200 rounded-md">
          <h2 className="flex text-lg items-center justify-between text-zinc-500 border-b p-4 border-zinc-200 vazir-bold">
            بازدید های اخیر
          </h2>
          <div className="w-full">
            <h3 className="text-center w-full px-3 py-8 text-zinc-500">
              محتوایی جهت نمایش وجود ندارد
            </h3>
          </div>
        </div>
      </section>
    </ProfileLayout>
  );
}
