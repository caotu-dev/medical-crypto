import TickIcon from "@/shared/icons/tick-icon";
import { memo } from "react";

export default memo(function SectionRoadmap() {
  return (
    <section
      id="roadmap-section"
      className="py-10 bg-gray-100 sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
            How it Goes
          </h2>
          <h3 className="px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            The Road Map
          </h3>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <TickIcon width={10} height={10} />
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-black">01/07/2024</h3>
              <div>
                <h4 className="mt-2 text-lg font-semibold text-gray-600">
                  Idea Generation
                </h4>
                <p className=" text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </li>

          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <TickIcon width={10} height={10} />
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-black">01/08/2024</h3>
              <div>
                <h4 className="mt-2 text-lg font-semibold text-gray-600">
                  Concept Making, R & D
                </h4>
                <p className=" text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </li>

          <li className="relative flex items-start">
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <TickIcon width={10} height={10} color="text-gray-300" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-black">01/09/2024</h3>
              <div>
                <h4 className="mt-2 text-lg font-semibold text-gray-600">
                  The Launch
                </h4>
                <p className=" text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
});
