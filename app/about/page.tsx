import React from "react";
import ButtonOne from "../components/ButtonOne";

function page() {
  return (
    <>
      <div className="w-full">
        <div className="bg-blue-950 w-full flex items-center justify-center text-white">
          <h2 className="text-4xl w-full text-center font-extrabold py-28">
            About Nexora
          </h2>
        </div>

        {/* services */}
        <div className="w-full bg-gray-100 py-10">
          <div className="mx-10">
            <div className="flex justify-start md:justify-between items-center flex-col md:flex-row gap-5">
              {/* left */}
              <div className="w-full md:w-2/4  flex items-center justify-center">
                <div className="w-5/6  m-3 rounded-3xl bg-white flex flex-col items-center justify-evenly py-8">
                  <div className="w-5/6 h-12 flex items-center justify-end">
                    <span className="font-semibold text-blue-600 text-sm px-4 py-2 bg-blue-100 rounded-2xl">
                      Live
                    </span>
                  </div>
                  <div className="w-5/6 h-3 flex">
                    <span className="bg-blue-100 w-4/5 rounded-full"></span>
                  </div>
                  <div className="w-5/6 h-3 flex mt-3">
                    <span className="bg-blue-100 w-6/12 rounded-full"></span>
                  </div>
                  <div className="w-5/6 flex items-center justify-between gap-5">
                    <div className="w-2/4 h-full flex flex-col mt-3 p-5 bg-blue-100 rounded-2xl">
                      <span className="text-3xl">📈</span>
                      <span className="font-semibold">+148%</span>
                      <span className="text-gray-500 text-sm">Conversions</span>
                    </div>
                    <div className="w-2/4 h-full flex flex-col mt-3 p-5 bg-blue-100 rounded-2xl">
                      <span className="text-3xl">👥</span>
                      <span className="font-semibold">12.4k</span>
                      <span className="text-gray-500 text-xs md:text-sm">
                        Active Users
                      </span>
                    </div>
                  </div>
                  <div className="w-5/6 mt-3 py-7 bg-blue-100 rounded-2xl"></div>
                </div>
              </div>

              {/* right */}
              <div className="w-full md:w-2/4">
                <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 flex items-center justify-start bg-blue-100 rounded-2xl p-2 w-32">
                  <span className="mx-2">●</span>
                  Our story
                </span>

                <h2 className="my-5 md:my-7 text-3xl w-full font-bold">
                  Founded by operators, built for operators
                </h2>

                <p className="text-lg text-gray-500 mb-5">
                  Nexora started in 2014 when three product leads, frustrated
                  with slow agency turnaround, decided to build the studio they
                  wished they could hire. Over a decade later, we&apos;ve
                  shipped products for fintech, healthtech and B2B SaaS
                  companies across 34 countries.
                </p>
                <p className="text-lg text-gray-500 mb-5">
                  Today our team of 42 designers, engineers and strategists
                  works in small, senior pods — each dedicated to two or three
                  clients at a time so quality never slips.
                </p>

                <ButtonOne />
              </div>
            </div>
          </div>
        </div>

        {/* services */}
        <div className="w-full bg-blue-100 pt-14">
          <div className="w-11/12 mx-auto py-7">
            <div className="text-center flex flex-col items-center">
              <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 bg-blue-200 rounded-2xl py-2 px-3 flex items-center justify-center">
                <span className="mx-2">●</span>
                What drives us
              </span>

              <h2 className="my-5 md:my-7 text-3xl w-full font-bold">
                Founded by operators, built for operators
              </h2>
            </div>

            {/* cards */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500">
              <div className="border h-80 rounded-2xl w-60">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🎯
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Outcomes over output
                  </h3>
                  <p>
                    We measure success in business impact, not hours logged or
                    pages shipped.
                  </p>
                </div>
              </div>
              <div className="border h-80 rounded-2xl flex flex-col items-center justify-center w-60">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    💬
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Radical transparency
                  </h3>
                  <p>
                    Shared boards, honest timelines, and direct access to the
                    people doing the work.
                  </p>
                </div>
              </div>
              <div className="border h-80 rounded-2xl flex flex-col items-center justify-center w-60">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    💎
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Craft as a default
                  </h3>
                  <p>
                    Every detail — copy, spacing, micro-interaction — is treated
                    as part of the product.
                  </p>
                </div>
              </div>
              <div className="border h-80 rounded-2xl flex flex-col items-center justify-center w-60">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🔄
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Built to evolve
                  </h3>
                  <p>
                    We design systems and codebases that your internal team can
                    extend long after launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
