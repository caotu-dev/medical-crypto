import { APP_NAME } from "@/core/constants/app-constant";
import { memo } from "react";
import Image from "next/image";

const headerMenu = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/" },
  { id: 3, name: "Roadmap", url: "/" },
  { id: 4, name: "Faq", url: "/" },
  { id: 5, name: "Blog", url: "/" },
];

export default memo(function Header() {
  return (
    <header className="relative z-50 w-full h-24">
      <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <a
          href="/"
          className="relative flex items-center inline-block h-5 h-full font-black leading-none"
        >
          <Image src={"/logo.png"} width={50} height={50} alt="logo" />
          <span className="ml-3 text-xl text-gray-800">{APP_NAME}</span>
        </a>

        <nav
          id="nav"
          className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
        >
          {headerMenu.map((menu) => (
            <a
              href={menu.url}
              key={menu.id}
              className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
            >
              {menu.name}
            </a>
          ))}

          <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
            <a
              href="#_"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 fold-bold"
            >
              Get Started
            </a>
          </div>
        </nav>

        <div
          className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b
          border-gray-200 md:relative md:w-auto md:bg-color-second-theme rounded
          md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between"
        >
          <a
            href="#_"
            className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all
            transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-color-second-theme
            lg:text-white sm:w-full lg:shadow-none hover:shadow-xl"
          >
            Get Started
          </a>
        </div>

        <div
          id="nav-mobile-btn"
          className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10"
        >
          <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
          <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
        </div>
      </div>
    </header>
  );
});
