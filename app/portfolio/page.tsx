import React from "react";
import CallCard from "../components/CallCard";

function page() {
  return (
    <>
      <div className="w-full">
        <div className="bg-blue-950 w-full flex items-center justify-center text-white">
          <h2 className="text-4xl w-full text-center font-extrabold py-28">
            Our Portfolio
          </h2>
        </div>

        {/* services cards */}
        <div className="w-full bg-blue-100 pt-14">
          <div className="w-11/12 mx-auto py-7">
            <div className="text-center flex flex-col items-center">
              <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 bg-blue-200 rounded-2xl py-2 px-3 flex items-center justify-center">
                <span className="mx-2">●</span>
                Case studies
              </span>

              <h2 className="my-5 md:my-7 text-3xl w-full font-bold">
                Work we&apos;re proud of
              </h2>

              <p className="mb-5 lg:mb-15 w-full lg:w-1/2 text-gray-500">
                A selection of recent engagements across industries and project
                types.
              </p>
              <div className="mb-10 w-full lg:w-3/4 text-gray-500">
                <button className="font-semibold me-5 py-2 px-4 rounded-lg bg-blue-800 text-white border-transparent hover:border hover:border-blue-800 hover:bg-transparent hover:text-blue-800">
                  All Work
                </button>
                <button className="font-semibold me-5 border py-2 px-4 rounded-lg text-black border-gray-400 hover:border-gray-300 hover:text-gray-600">
                  Product Design
                </button>
                <button className="font-semibold me-5 border py-2 px-4 rounded-lg text-black border-gray-400 hover:border-gray-300 hover:text-gray-600">
                  Development
                </button>
                <button className="font-semibold me-5 border py-2 px-4 rounded-lg text-black border-gray-400 hover:border-gray-300 hover:text-gray-600">
                  Branding
                </button>
              </div>
            </div>

            {/* cards */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500 mb-20">
              {/* card-1 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent rounded-2xl w-4/5 lg:w-1/4">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center py-10">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    ⚡
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Lightning Fast Delivery
                  </h3>
                  <p>
                    I prioritize meeting deadlines strictly, ensuring your
                    high-quality project is launched efficiently without any
                    delays.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    View Workflow →
                  </button>
                </div>
              </div>

              {/* card-2 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent rounded-2xl w-4/5 lg:w-1/4">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center py-10">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🎯
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Pixel Perfect Design
                  </h3>
                  <p>
                    Crafting structured, clean, and highly sophisticated
                    responsive user interfaces that translate perfectly onto any
                    desktop grid.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Quality Standards →
                  </button>
                </div>
              </div>

              {/* card-3 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent rounded-2xl w-4/5 lg:w-1/4">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center py-10">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    📱
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Fully Responsive UI
                  </h3>
                  <p>
                    Your website will load and function flawlessly on
                    smartphones, tablets, and desktop devices without breaking
                    layout alignment.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Test Responsiveness →
                  </button>
                </div>
              </div>

              {/* card-4 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent rounded-2xl w-4/5 lg:w-1/4">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center py-10">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    💬
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Transparent Communication
                  </h3>
                  <p>
                    I maintain continuous channels of updates throughout
                    development to keep your specific targets and ideas in sync.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Get in Touch →
                  </button>
                </div>
              </div>

              {/* card-5 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent rounded-2xl w-4/5 lg:w-1/4">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center py-10">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🚀
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    SEO Optimized Code
                  </h3>
                  <p>
                    Writing highly accessible semantic code and optimizing
                    metadata tags according to Next.js best practices.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    SEO Performance →
                  </button>
                </div>
              </div>

              {/* card-6 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent rounded-2xl w-4/5 lg:w-1/4">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center py-10">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🛠️
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Post-Launch Support
                  </h3>
                  <p>
                    Providing dependable technical maintenance and bug fixing
                    even after deployment to guarantee your app runs smoothly.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Support Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallCard />
    </>
  );
}

export default page;
