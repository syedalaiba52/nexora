import React from "react";
import CallCard from "../components/CallCard";
import ButtonOne from "../components/ButtonOne";

function page() {
  return (
    <>
      <div className="w-full">
        <div className="bg-blue-950 w-full flex items-center justify-center text-white">
          <h2 className="text-4xl w-full text-center font-extrabold py-28">
            Our Services
          </h2>
        </div>

        {/* services cards */}
        <div className="w-full bg-blue-100 pt-14">
          <div className="w-11/12 mx-auto py-7">
            <div className="text-center flex flex-col items-center">
              <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 bg-blue-200 rounded-2xl py-2 px-3 flex items-center justify-center">
                <span className="mx-2">●</span>
                Full-stack capability
              </span>

              <h2 className="my-5 md:my-7 text-3xl w-full font-bold">
                Everything you need under one roof
              </h2>

              <p className="mb-10 lg:mb-20 w-full lg:w-1/2 text-gray-500">
                Mix and match services to fit your stage — from a single design
                sprint to a fully managed product team.
              </p>
            </div>

            {/* cards */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-gray-500 mb-20">
              {/* card-1 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent h-80 rounded-2xl w-4/5 lg:w-2/5">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    📊
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Product Strategy
                  </h3>
                  <p>
                    User research, competitive analysis and roadmap planning
                    that aligns your team around what matters most.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Learn more →
                  </button>
                </div>
              </div>

              {/* card-2 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent h-80 rounded-2xl flex flex-col items-center justify-center w-4/5 lg:w-2/5">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🎨
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">UI/UX Design</h3>
                  <p>
                    Wireframes, interactive prototypes and a documented design
                    system your team can scale with.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Learn more →
                  </button>
                </div>
              </div>

              {/* card-3 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent h-80 rounded-2xl flex flex-col items-center justify-center w-4/5 lg:w-2/5">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🧑‍💻
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Web Development
                  </h3>
                  <p>
                    Production-grade front-end and back-end engineering using
                    modern, maintainable frameworks.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Learn more →
                  </button>
                </div>
              </div>

              {/* card-4 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent h-80 rounded-2xl flex flex-col items-center justify-center w-4/5 lg:w-2/5">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    ☁️
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Cloud & DevOps
                  </h3>
                  <p>
                    Infrastructure-as-code, CI/CD pipelines and observability so
                    your platform scales reliably.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Learn more →
                  </button>
                </div>
              </div>

              {/* card-5 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent h-80 rounded-2xl flex flex-col items-center justify-center w-4/5 lg:w-2/5">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    📢
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    Growth Marketing
                  </h3>
                  <p>
                    SEO, content and lifecycle campaigns engineered to lower CAC
                    and increase retention.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Learn more →
                  </button>
                </div>
              </div>

              {/* card-6 */}
              <div className="bg-gray-50 hover:border hover:border-gray-300 border-transparent h-80 rounded-2xl flex flex-col items-center justify-center w-4/5 lg:w-2/5">
                <div className="flex flex-col items-center justify-center h-full w-11/12 lg:w-2/3 mx-auto text-center">
                  <span className="my-3 text-3xl h-15 ps-1 w-15 bg-blue-200 rounded-2xl flex items-center justify-center">
                    🛡️
                  </span>
                  <h3 className="font-extrabold my-3 text-lg">
                    QA & Security Audits
                  </h3>
                  <p>
                    Automated test suites, penetration testing and compliance
                    reviews before you ship.
                  </p>

                  <button className="text-blue-500 font-bold mt-5 cursor-pointer hover:text-blue-800">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* services */}
          <div className="w-full bg-blue-50 pt-14">
            <div className="w-11/12 mx-auto py-7">
              <div className="flex justify-start md:justify-between items-center flex-col md:flex-row gap-5">
                {/* Left */}
                <div className="w-full md:w-2/4">
                  <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 flex items-center justify-start bg-blue-100 rounded-2xl p-2 w-1/3 md:w-1/4">
                    <span className="mx-2">●</span>
                    Why Nexora
                  </span>

                  <h2 className="my-5 md:my-7 text-3xl w-full font-bold">
                    A senior team, embedded in your workflow
                  </h2>

                  <p className="text-lg text-gray-500 mb-5">
                    We don&apos;t hand off decks and disappear. Our designers
                    and engineers work inside your tools — Slack, Linear, Figma
                    — as an extension of your team.
                  </p>
                  <p className="text-md text-gray-500 mb-5 leading-10">
                    <span>
                      <span className="pe-2 text-lg">✔️</span>
                      <span className="font-semibold text-black">
                        Dedicated senior squad
                      </span>{" "}
                      — no junior bait-and-switch, ever.
                    </span>{" "}
                    <br />
                    <span>
                      <span className="pe-2 text-lg">✔️</span>
                      <span className="font-semibold text-black">
                        Transparent weekly sprints
                      </span>{" "}
                      with shared dashboards and demos.
                    </span>{" "}
                    <br />
                    <span>
                      {" "}
                      <span className="pe-2 text-lg">✔️</span>
                      <span className="font-semibold text-black">
                        Flexible engagement models
                      </span>{" "}
                      — project, retainer or staff augmentation.
                    </span>
                  </p>

                  <ButtonOne />
                </div>

                {/* Right */}
                <div className="w-full md:w-2/4  flex items-center justify-center">
                  <div className="w-5/6  m-3 rounded-3xl bg-white flex flex-col items-center justify-evenly py-8">
                    <div className="w-5/6 h-12 flex items-center justify-end">
                      <span className="font-semibold text-blue-600 text-sm px-4 py-2 bg-blue-100 rounded-2xl">
                        Available
                      </span>
                    </div>
                    <div className="w-5/6 h-3 flex">
                      <span className="bg-blue-100 w-4/5 rounded-full"></span>
                    </div>
                    <div className="w-5/6 h-3 flex mt-3">
                      <span className="bg-blue-100 w-6/12 rounded-full"></span>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-3 flex-wrap">
                      <div className="w-2/5 flex flex-col mt-3 px-3 py-5 lg:p-5 bg-blue-100 rounded-2xl">
                        <span className="text-3xl">🚀</span>
                        <span className="font-semibold">200%</span>
                        <span className="text-gray-500 text-sm">
                          Growth Surge
                        </span>
                      </div>
                      <div className="w-2/5 flex flex-col mt-3 p-5 bg-blue-100 rounded-2xl">
                        <span className="text-3xl">⚡</span>
                        <span className="font-semibold">2.5x</span>
                        <span className="text-gray-500 text-xs md:text-sm">
                          Engagement
                        </span>
                      </div>
                    </div>
                    <div className="w-5/6 mt-3 py-7 bg-blue-100 rounded-2xl"></div>
                  </div>
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
