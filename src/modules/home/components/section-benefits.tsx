import TickIcon from "@/shared/icons/tick-icon";
import Image from "next/image";
import { memo } from "react";

export default memo(function SectionBenefits() {
  return (
    <section id="benefit-section" className="bg-black 2xl:bg-gray-50">
      <div className="px-4 mx-auto bg-black sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div className="lg:order-2 2xl:-mr-24">
              <Image
                className="w-full rounded-lg shadow-xl"
                src="/bg-ai.jpeg"
                width={800}
                height={400}
                alt="feature"
              />
            </div>

            <div className="lg:order-1">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">
                How You Get Benefited
              </h2>

              <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                <li className="flex items-center">
                  <TickIcon />
                  <span className="ml-3 font-medium text-white">
                    {" "}
                    High Potential Returns{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <TickIcon />
                  <span className="ml-3 font-medium text-white">
                    {" "}
                    Decentralization{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <TickIcon />
                  <span className="ml-3 font-medium text-white">
                    {" "}
                    Accessibility and Liquidity{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <TickIcon />
                  <span className="ml-3 font-medium text-white">
                    {" "}
                    Diversification{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <TickIcon />
                  <span className="ml-3 font-medium text-white">
                    {" "}
                    Innovation and Technological Advancements{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <TickIcon />
                  <span className="ml-3 font-medium text-white">
                    {" "}
                    Hedge Against Inflation{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
