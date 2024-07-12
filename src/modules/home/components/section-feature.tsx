import { memo } from "react";
import Image from "next/image";

export default memo(function SectionFeature() {
  return (
    <section
      id="feature-section"
      className="py-10 bg-gray-50 sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
            Our Features
          </h2>
          <h3 className="px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Awesome features for business
          </h3>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/feature-1.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  The true game changer
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/feature-2.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Solid blockchain infrastructure
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                className="flex-shrink-0 w-16 h-16 text-fuchsia-600"
                src={"/icons/feature-3.png"}
                width={100}
                height={60}
                alt="hero-1"
              />
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Global system intigration
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Image
              className="w-full rounded-lg shadow-xl"
              src="/bg-feature.jpg"
              width={800}
              height={400}
              alt="feature"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
