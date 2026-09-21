import React from "react";
import CallCard from "../components/CallCard";

function page() {
  return (
    <>
      <div className="w-full">
        <div className="bg-blue-950 w-full flex items-center justify-center text-white">
          <h2 className="text-4xl w-full text-center font-extrabold py-28">
            Simple, Transparent Pricing
          </h2>
        </div>

        {/* services cards */}
        <div className="w-full bg-blue-100 pt-14">
          <div className="w-11/12 mx-auto py-7">
            <div className="text-center flex flex-col items-center">
              <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 bg-blue-200 rounded-2xl py-2 px-3 flex items-center justify-center">
                <span className="mx-2">●</span>
                Retainer plans
              </span>

              <h3 className="my-5 md:my-7 text-3xl w-full font-bold">
                Choose the plan that fits your stage
              </h3>

              <p className="mb-5 lg:mb-15 w-full lg:w-1/2 text-gray-500">
                All plans include a dedicated project lead, weekly demos and a
                shared Slack channel. Cancel or switch plans anytime.
              </p>
              <div className="mb-10 w-full lg:w-3/4 text-gray-500">
                <button className="font-semibold me-5 py-2 px-4 rounded-lg bg-blue-800 text-white border-transparent hover:border hover:border-blue-800 hover:bg-transparent hover:text-blue-800">
                  Monthly <span className="font-medium">(Regular)</span>
                </button>
                <button className="font-semibold me-5 border py-2 px-4 rounded-lg text-black border-gray-400 hover:border-gray-300 hover:text-gray-600">
                  Yearly <span className="text-blue-700">(Save 15%)</span>
                </button>
              </div>
            </div>

            {/* cards */}
            <div className="w-full flex items-center justify-center p-2 flex-wrap gap-5 mb-10">
              {/* card-1 */}
              <div className="border border-gray-400 flex flex-col p-5 justify-center items-center bg-white rounded-2xl">
                <h4 className=" text-3xl font-bold w-full text-blue-950 mt-3">
                  Starter
                </h4>
                <p className=" w-full text-gray-500 mt-3">
                  For early-stage teams validating an MVP.
                </p>
                <span className=" text-4xl w-full font-extrabold text-blue-950 mt-5">
                  $4,500{" "}
                  <span className="text-gray-500 text-base font-normal">
                    /mo
                  </span>
                </span>
                <ul className="w-full text-gray-500 mt-5 leading-10">
                  <li className="list-none ">✅ 1 dedicated designer</li>
                  <li className="list-none">✅ Up to 40 hours/month</li>
                  <li className="list-none">✅ Weekly progress demos</li>
                  <li className="list-none">✅ Shared Slack channel</li>
                  <li className="list-none text-gray-400">
                    ❌ Dedicated engineer
                  </li>
                  <li className="list-none text-gray-400">
                    ❌ Priority support
                  </li>
                </ul>

                <button className="w-full border border-gray-400 font-semibold hover:bg-gray-50 hover:text-gray-600 rounded-md px-20 py-3 mt-4">
                  Get Started
                </button>
              </div>

              {/* card-2 */}
              <div className="border border-gray-400 flex flex-col p-5 justify-center items-center bg-blue-950 rounded-2xl">
                <h4 className=" text-3xl font-bold w-full text-white mt-3">
                  Growth
                </h4>
                <p className=" w-full text-gray-500 mt-3">
                  For scaling teams shipping every sprint.
                </p>
                <span className=" text-4xl w-full font-extrabold text-white mt-5">
                  $9,500{" "}
                  <span className="text-gray-500 text-base font-normal">
                    /mo
                  </span>
                </span>
                <ul className="w-full text-gray-300 mt-5 leading-10">
                  <li className="list-none ">✅ 1 designer + 1 engineer</li>
                  <li className="list-none">✅ Up to 100 hours/month</li>
                  <li className="list-none">✅ Twice-weekly demos</li>
                  <li className="list-none">✅ Shared Slack channel</li>
                  <li className="list-none">✅ Priority support (24h)</li>
                  <li className="list-none">✅ Custom SLAs & contracts</li>
                  <li className="list-none text-gray-400">
                    ❌ Dedicated QA engineer
                  </li>
                </ul>

                <button className="w-full border-transparent bg-blue-700 font-semibold text-white rounded-md px-20 py-3 mt-4">
                  Get Started
                </button>
              </div>

              {/* card-3 */}
              <div className="border border-gray-400 flex flex-col p-5 justify-center items-center bg-white rounded-2xl">
                <h4 className=" text-3xl font-bold w-full text-blue-950 mt-3">
                  Enterprise
                </h4>
                <p className=" w-full text-gray-500 mt-3">
                  For complex, product organizations.
                </p>
                <span className=" text-4xl w-full font-extrabold text-blue-950 mt-5">
                  Custom
                </span>
                <ul className="w-full text-gray-500 mt-5 leading-10">
                  <li className="list-none ">
                    ✅ Full pod (design + dev + QA)
                  </li>
                  <li className="list-none">✅ Up to 40 hours/month</li>
                  <li className="list-none">✅ Unlimited hours</li>
                  <li className="list-none">✅ Daily stand-ups</li>
                  <li className="list-none">✅ Dedicated account manager</li>
                  <li className="list-none">✅ Priority support (4h)</li>
                </ul>

                <button className="w-full border border-gray-400 font-semibold hover:bg-gray-50 hover:text-gray-600 rounded-md px-20 py-3 mt-4">
                  Get Started
                </button>
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
