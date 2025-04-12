import { LuLocate, LuMail, LuPhoneCall } from "react-icons/lu";
import { useTypedSelector } from "../../redux/typedhooks";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  const { data } = useTypedSelector((state) => state.categories);
  return (
    <footer>
      <div className="flex justify-between bg-zinc-50 py-10 px-32 text-zinc-500">
        <div className="flex items-center justify-center text-6xl font-black ">
          LOGO
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {data?.slice(0, 8).map((e) => (
            <span>{e.title}</span>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span>وبلاگ</span>
          <span>پرسش های متداول</span>
          <span>شرایط بازگشت کالا</span>
          <span>همکاری تجاری</span>
          <span>درباره ما</span>
        </div>
        <div className="flex flex-col gap-1 w-[200px]">
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
        © تمامی حقوق متعلق به | فروشگاه آنلاین مدیسه (شرکت توسعه تجارت الکترونیک
        گلستان) میباشد.
      </div>
    </footer>
  );
}
