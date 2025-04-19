import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link } from "react-router";
import { TfiTruck } from "react-icons/tfi";
import { RiBankCardLine } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "@mui/material";

export default function Cart() {
  return (
    <main className="w-full lg:px-32 sm:px-4 px-3">
      <Link to={"/"} className=" w-full flex items-center justify-center ">
        <img
          src="/img/logo/logo-2.png"
          className="lg:h-[90px] sm:h-[80px] h-[70px]"
        />
      </Link>

      <section>
        <div className="flex items-center justify-between sm:w-[400px] w-full m-auto relative">
          <div className="border-2 border-zinc-500 absolute w-[80%] top-9 left-[50%] translate-x-[-50%] -z-1"></div>
          <div className={`flex items-center flex-col gap-1`}>
            <span
              className={`p-4 border-2  rounded-full ${
                true
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-zinc-500 border-zinc-200"
              }`}
            >
              <PiShoppingCartSimpleLight className="text-3xl" />
            </span>
            <span
              className={` moraba-bold ${
                true ? "text-primary" : "text-zinc-500"
              }`}
            >
              سبد خرید
            </span>
          </div>
          <div className={`flex items-center flex-col gap-1 `}>
            <span
              className={`p-4 border-2  rounded-full ${
                false
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-zinc-500 border-zinc-200"
              }`}
            >
              <TfiTruck className="text-3xl" />
            </span>
            <span
              className={` moraba-bold ${
                false ? "text-primary" : "text-zinc-500"
              }`}
            >
              اطلاعات ارسال
            </span>
          </div>
          <div className={`flex items-center flex-col gap-1`}>
            <span
              className={`p-4 border-2  rounded-full ${
                false
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-zinc-500 border-zinc-200"
              }`}
            >
              <RiBankCardLine className="text-3xl" />
            </span>
            <span
              className={` moraba-bold ${
                false ? "text-primary" : "text-zinc-500"
              }`}
            >
              اطلاعات پرداخت
            </span>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col sm:gap-6 gap-4 md:mb-8 md:mt-8 mt-6 mb-20">
        <section className="w-full flex flex-col sm:gap-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full border border-zinc-200 rounded-lg flex items-center p-4 gap-2"
            >
              <img
                src="/img/product/OIP.jpg"
                alt="product"
                className="w-[100px]"
              />
              <div className="w-full flex flex-col items-start gap-3">
                <h3 className="text-sm vazir-medium">
                  کرم ضد آفتاب کرم پودری و پرایمری SPF50 مات سان سیف Sun Safe
                  مدل Maquisun بژ طبیعی
                </h3>
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-4 text-primary border border-zinc-300 px-4 h-[40px] rounded-md">
                    <span className="cursor-pointer">
                      <FaPlus />
                    </span>
                    <span>1</span>
                    <span className="cursor-pointer">
                      <FaMinus />
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex flex-col items-center text-zinc-400 text-xs line-through">
                      <span>11,300,000</span>
                      <span>تومان</span>
                    </div>
                    <div className="flex flex-col items-center vazir-bold">
                      <span>1,000,000</span>
                      <span>تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="md:w-[450px] w-full h-[260px] flex flex-col justify-between bg-zinc-50 border border-zinc-300 rounded-lg sticky top-6 p-4">
          <div>
            <h2 className="vazir-bold text-lg text-zinc-500">خلاصه سفارش</h2>
            <div className="py-3 my-2 border-y border-zinc-300 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span>قیمت کل مرسولات</span>
                <span>1,130,000 تومان</span>
              </div>
              <div className="flex items-center justify-between text-sm text-primary vazir-bold">
                <span>مجموع تخفیف</span>
                <span>1,130,000 تومان</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-lg vazir-medium tex-zinc-800">
            <span>قابل پرداخت</span>
            <span>2,130,000 تومان</span>
          </div>
          <div>
            <Button fullWidth variant="contained" size="large">
              تکمیل فرم ارسال
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}
