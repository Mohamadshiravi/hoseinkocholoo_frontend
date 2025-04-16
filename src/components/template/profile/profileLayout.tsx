import { GrMap } from "react-icons/gr";
import { MdExitToApp, MdOutlineContentCopy } from "react-icons/md";
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { LuNotebookText, LuWallet } from "react-icons/lu";
import { ReactNode } from "react";
import Header from "../../module/header";
import Footer from "../../module/footer";
import { Link, useLocation } from "react-router";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const profileMenu = [
    {
      icon: <LuNotebookText className="text-xl text-primary" />,
      name: "سفارش های من",
      route: "orders",
    },
    {
      icon: <FaRegHeart className="text-xl text-primary" />,
      name: "علاقه مندی ها",
      route: "favorites",
    },
    {
      icon: <FaRegCircleUser className="text-xl text-primary" />,
      name: "حساب کاربری",
    },
    {
      icon: <GrMap className="text-xl text-primary" />,
      name: "نشانی ها",
    },
    {
      icon: <LuWallet className="text-xl text-primary" />,
      name: "کیف پول",
    },
  ];

  const path = useLocation().pathname;
  return (
    <>
      <Header />
      <main className="w-full  lg:px-32 sm:px-4 px-3 flex py-4 gap-4">
        <section className="w-[300px] border border-zinc-200 rounded-md md:block hidden">
          <div className="flex flex-col gap-3 border-b p-4 border-zinc-200">
            <div className="flex items-center justify-between text-zinc-400">
              <div className="flex flex-col gap-3 items-cneter">
                <div className="flex items-center gap-3 ">
                  <FaRegCircleUser className="text-2xl" />
                  <span className=" vazir-medium">کاربر گرامی</span>
                </div>
                <span className="text-center text-xs">09011468142</span>
              </div>
              <span className="text-sm">ویرایش</span>
            </div>
            <button className="flex cursor-pointer items-center justify-between border border-primary/50 text-primary vazir-bold bg-primary/10 rounded-md p-2 px-4">
              کد معرف
              <MdOutlineContentCopy className="text-primary text-xl" />
            </button>
          </div>
          <ul className="p-4 flex flex-col gap-6">
            {profileMenu.map((e, i) => (
              <Link
                to={`/profile/${e.route}`}
                key={i}
                className="flex items-center gap-3 text-zinc-700 cursor-pointer"
              >
                {e.icon}
                <span
                  className={`${
                    path === `/profile/${e.route}` && "text-primary"
                  } vazir-bold text-sm`}
                >
                  {e.name}
                </span>
              </Link>
            ))}
            <li className="flex items-center cursor-pointer gap-3 text-zinc-700 border-t border-zinc-200 pt-4">
              <MdExitToApp className="text-xl text-primary" />
              <span className="vazir-bold text-sm">خروج از حساب کاربری</span>
            </li>
          </ul>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
