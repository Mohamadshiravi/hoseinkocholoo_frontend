import { GrMap } from "react-icons/gr";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { LuNotebookText, LuWallet } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";

export default function ProfileMenu() {
  const profileMenu = [
    {
      icon: <FaRegHeart className="text-xl text-zinc-500" />,
      name: "علاقه مندی ها",
      route: "/profile/favorites",
    },
    {
      icon: <FaRegCircleUser className="text-xl text-zinc-500" />,
      name: "حساب کاربری",
      route: "/profile/favorites",
    },
    {
      icon: <GrMap className="text-xl text-zinc-500" />,
      name: "نشانی ها",
      route: "/profile/favorites",
    },
    {
      icon: <LuWallet className="text-xl text-zinc-500" />,
      name: "کیف پول",
      route: "/profile/favorites",
    },
  ];
  return (
    <main className="p-3 py-8">
      <section className="sm:w-[300px] w-full">
        <div className="flex flex-col gap-3 border-b border-zinc-200 pb-3">
          <div className="flex items-center justify-between text-zinc-400">
            <div className="flex flex-col gap-2 items-center w-full">
              <FaRegCircleUser className="text-6xl" />
              <span className="vazir-medium">کاربر گرامی</span>
              <span className="text-center text-xs">09011468142</span>
            </div>
          </div>
          <Link
            to={"/profile/orders"}
            className="flex cursor-pointer items-center justify-center gap-3 bg-primary text-white rounded-md p-4"
          >
            <LuNotebookText className="text-xl text-white" />
            سفارش های من
          </Link>
          <button className="flex cursor-pointer items-center justify-between text-primary vazir-bold bg-primary/10 rounded-md p-4">
            کد معرف
            <MdOutlineContentCopy className="text-primary text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col gap-3 mt-3">
          {profileMenu.map((e, i) => (
            <Link
              to={e.route}
              key={i}
              className="flex cursor-pointer items-center justify-between bg-zinc-100 vazir-bold rounded-md p-4"
            >
              <div className="flex items-center gap-4 w-full">
                {e.icon}
                <span>{e.name}</span>
              </div>
              <IoIosArrowBack className="text-xl text-zinc-500" />
            </Link>
          ))}
          <li className="border-t pt-3 border-zinc-200 cursor-pointer">
            <span className="p-3 block text-primary border-2 text-center rounded-md border-primary vazir-medium">
              خروج از حساب کاربری
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
