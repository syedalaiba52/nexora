import React from "react";
import ButtonOne from "./ButtonOne";

function CallCard() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="w-11/12 mx-auto my-32">
          <div className="flex flex-col lg:flex-row items-center text-start lg:text-center bg-blue-950 w-full rounded-4xl py-2 lg:py-4">
            {/* left */}
            <div className="w-full md:max-w-2/3 flex items-center justify-center">
              <div className="w-5/6 flex flex-col items-start justify-evenly py-12">
                <h1 className="my-2 lg:my-5 text-3xl w-full font-extrabold leading-14 text-white">
                  Ready to build something great?
                </h1>
                <p className="text-lg text-gray-300 mb-5">
                  Book a free 30-minute strategy call — no pressure, no sales
                  script.
                </p>
              </div>
            </div>

            {/* right */}
            <div className="w-full lg:w-2/6 flex items-center justify-center lg:justify-end px-20 py-4 border-red-700">
              <ButtonOne />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallCard;
