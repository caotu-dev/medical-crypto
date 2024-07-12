import { memo } from "react";
import Image from "next/image";

export default memo(function SectionWhyUs() {
  return (
    <section
      id="why-us-section"
      className="py-10 bg-color-main-theme sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Why buying our token will be a great inventment for you?
          </h2>
        </div>

        <div className="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/benefit-1.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">
                  Multichain with device
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/benefit-2.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">
                  Initial coin offering
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/benefit-3.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">
                  Payment integration
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/benefit-4.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-black">
                  Full data ownership
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
