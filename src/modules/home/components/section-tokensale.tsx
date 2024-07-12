import { memo } from "react";

export default memo(function SectionTokenSale() {
  return (
    <section id="token-sale-section" className="bg-color-main-theme">
      <div className="block md:flex justify-center items-start lg:py-24 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 pb-4 md:pb-0">
          <h5 className="text-xl lg:pb-4">Token Sale</h5>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">
            Our live selling is happenning now
          </h2>
          <p className="text-gray-600 mt-4">
            Metetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-4 mb-4 text-center bg-white">
            <span className="text-gray-600 text-2xl uppercase">Expired</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-full md:w-1/2">
              <div className="p-4">
                <h5 className="text-md uppercase">START DATE</h5>
                <p className="text-sm text-gray-600">
                  April 20, 2018 - 20.00 Am GMT
                </p>
              </div>
              <div className="p-4">
                <h5 className="text-md uppercase">TOTAL TOKEN AMOUNT</h5>
                <p className="text-sm text-gray-600">1,000,000.000 ICC</p>
              </div>
              <div className="p-4">
                <h5 className="text-md uppercase">CURRENCIES</h5>
                <p className="text-sm text-gray-600">ETH, BTC</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="p-4">
                <h5 className="text-md uppercase">END DATE</h5>
                <p className="text-sm text-gray-600">
                  April 20, 2018 - 20.00 Am GMT
                </p>
              </div>
              <div className="p-4">
                <h5 className="text-md uppercase">EXCHANGE RATE</h5>
                <p className="text-sm text-gray-600">
                  1 ETH = 1000 ICC, 1 BTC = 2000 ICC
                </p>
              </div>
              <div className="p-4">
                <h5 className="text-md uppercase">MINIMUM AMOUNT</h5>
                <p className="text-sm text-gray-600">10 ETH / BTC</p>
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <button className="rounded-full bg-color-second-theme px-6 py-4 text-white text-bold">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
