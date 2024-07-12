import Image from "next/image";
import { memo } from "react";
export default memo(function SectionIntro() {
  return (
    <section
      id="intro-section"
      className="relative px-2 md:px-8 pb-10 md:-mt-12 border-gray-200 md:pb-16 lg:pb-24 xl:pb-30 xl:px-0"
    >
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <div className="max-w-full mx-auto md:max-w-6xl sm:px-8">
          <div className="relative flex flex-col items-center block sm:flex-row gap-5">
            <div className="relative z-0 w-11/12 max-w-sm my-8 shadow-lg border border-gray-200 rounded-lg sm:w-3/5 lg:w-1/3 sm:my-5">
              <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                  <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">
                    Secure ICO System
                  </h3>
                  <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                    <Image
                      src={"/icons/hero-1.png"}
                      width={100}
                      height={60}
                      alt="hero-1"
                    />
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sed sollicitudin arcu sect etur adip isici uta magna eget
                    posuere ferme ntum, leo nisl luctus risu Sed sollicitudin
                    arcu sect etur adip isici uta magna eget posuere ferme ntum,
                    leo nisl luctus risu
                  </p>
                </div>
                <div className="flex items-center block p-8 uppercase">
                  <a
                    href="#_"
                    className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:text-black hover:bg-color-main-theme"
                  >
                    Readmore
                  </a>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full max-w-md my-8 shadow-lg bg-white rounded-lg border-2 border-gray-100 sm:w-2/3 lg:w-1/3 sm:my-5">
              <div className="py-4 text-sm font-semibold leading-none tracking-wide text-center text-white uppercase rounded-t"></div>
              <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">
                  Easy System Integration
                </h3>
                <div className="flex items-center justify-center pb-6 text-5xl font-bold text-center text-gray-900">
                  <Image
                    src={"/icons/hero-2.png"}
                    width={100}
                    height={60}
                    alt="hero-2"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Sed sollicitudin arcu sect etur adip isici uta magna eget
                  posuere ferme ntum, leo nisl luctus risu Sed sollicitudin arcu
                  sect etur adip isici uta magna eget posuere ferme ntum, leo
                  nisl luctus risu
                </p>
              </div>

              <div className="flex items-center block p-8 uppercase">
                <a
                  href="#_"
                  className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:text-black hover:bg-color-main-theme"
                >
                  Readmore
                </a>
              </div>
            </div>
            <div className="relative z-0 w-11/12 max-w-sm my-8 shadow-lg border border-gray-200 rounded-lg sm:w-3/5 lg:w-1/3 sm:my-5">
              <div className="overflow-hidden text-black bg-white rounded-lg">
                <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-8">
                  <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">
                    One to One Token Sale
                  </h3>
                  <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                    <Image
                      src={"/icons/hero-3.png"}
                      width={100}
                      height={60}
                      alt="hero-3"
                    />
                  </h4>
                  <p className="pl-2 text-sm text-gray-600">
                    Sed sollicitudin arcu sect etur adip isici uta magna eget
                    posuere ferme ntum, leo nisl luctus risu Sed sollicitudin
                    arcu sect etur adip isici uta magna eget posuere ferme ntum,
                    leo nisl luctus risu
                  </p>
                </div>

                <div className="flex items-center block p-8 uppercase">
                  <a
                    href="#_"
                    className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:text-black hover:bg-color-main-theme"
                  >
                    Readmore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
