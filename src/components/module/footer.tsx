import { LuMail, LuPhoneCall } from "react-icons/lu";
import { useTypedSelector } from "../../redux/typedhooks";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  const { data } = useTypedSelector((state) => state.categories);
  return (
    <footer>
      <div className="flex md:flex-row flex-col md:items-start sm:gap-8 gap-4 items-center justify-between bg-zinc-50 sm:py-10 py-4 lg:px-32 sm:px-10 px-4 text-zinc-500">
        <img
          src="/img/logo/logo-2.png"
          alt="logo"
          className="sm:w-[200px] w-[120px]"
        />

        <div className="flex md:items-start items-center gap-30">
          <div className="flex flex-col gap-2 text-sm md:w-auto w-full">
            {data?.slice(0, 8).map((e) => (
              <span key={e.id}>{e.title}</span>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm md:w-auto w-full">
            <span>وبلاگ</span>
            <span>پرسش های متداول</span>
            <span>شرایط بازگشت کالا</span>
            <span>همکاری تجاری</span>
            <span>درباره ما</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:w-[200px] w-full">
          <span className="moraba-regular text-lg">ارتباط با ما</span>
          <div className="flex items-center gap-1">
            <LuPhoneCall />
            <span>000-000-0000</span>
          </div>
          <div className="flex items-center gap-1">
            <LuMail />
            <span>someemail@gmail.com</span>
          </div>
          <span className="text-sm">
            شنبه تا پنجشنبه و ایام تعطیل رسمی به جز جمعه ها از ساعت ۰۸:۰۰ الی ۱۹
          </span>
          <div className="flex gap-1">
            <div>
              <IoLocationOutline />
            </div>
            <span className="text-sm">
              خيابان دكتر عبيدی ، خيابان دوم ، پلاک 12 ، طبقه دوم ، واحد جنوبی
              كد پستی : 1389798308
            </span>
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 w-full text-center px-6 py-3 text-zinc-500 text-sm">
        © تمامی حقوق متعلق به | فروشگاه آنلاین پوشاک حسین کوچولو میباشد
      </div>
    </footer>
  );
}
