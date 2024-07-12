import { memo } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default memo(function SectionHero() {
  return (
    <section
      id="hero-section"
      className="bg-hero-section relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64"
    >
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="flipOutY"
          animateOnce={true}
          className="w-full"
        >
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Medical with crypto
            </h1>
            <p className="pr-0 mb-8 text-base text-black sm:text-lg xl:text-xl lg:pr-20">
              Our app will change your experience of Crypto Currency
            </p>
            <a
              href="#_"
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-color-second-theme rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              Detect now
            </a>
          </div>
        </ScrollAnimation>
        <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
          <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
            {/* <Image
              src="/medical-1.png"
              className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
              width={300}
              height={100}
              alt="laptop"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
});
