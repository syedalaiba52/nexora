import ButtonOne from "../components/ButtonOne";
import ButtonTwo from "../components/ButtonTwo";
import CallCard from "../components/CallCard";

function home() {
  return (
    <>
      <div className="w-full bg-blue-100 pt-14">
        <div className="w-11/12 mx-auto py-7">
          <div className="flex justify-start md:justify-between items-center flex-col md:flex-row gap-5">
            {/* left */}
            <div className="w-full md:w-2/4">
              <ul className="ms-5 text-sm uppercase font-bold text-blue-700">
                <li className="list-disc">Trusted by 480+ growing companies</li>
              </ul>

              <h1 className="my-5 md:my-7 text-5xl w-full md:w-md font-bold leading-14">
                Build, launch and scale your{" "}
                <span className="text-blue-700">digital product</span> faster.
              </h1>

              <p className="text-xl text-gray-500 mb-5">
                Nexora is your end-to-end product partner — strategy, design and
                engineering teams that ship measurable results for SaaS and
                tech-driven businesses.
              </p>

              <div className="flex gap-4 md:gap-10 items-center justify-start">
                <ButtonOne />
                <ButtonTwo />
              </div>
            </div>

            {/* right */}
            <div className="w-full md:w-2/4  flex items-center justify-center">
              <div className="w-5/6  m-3 rounded-3xl bg-gray-50 flex flex-col items-center justify-evenly py-8">
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
                <div className="w-full lg:w-5/6 flex items-center justify-center gap-3 flex-wrap">
                  <div className="w-2/5 flex flex-col mt-3 p-5 bg-blue-100 rounded-2xl">
                    <span className="text-3xl">📈</span>
                    <span className="font-semibold">+148%</span>
                    <span className="text-gray-500 text-sm">Conversions</span>
                  </div>
                  <div className="w-2/5 flex flex-col mt-3 p-5 bg-blue-100 rounded-2xl">
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
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="w-full bg-white">
        <div className="w-11/12 mx-auto flex items-center justify-center flex-col">
          <div className=" mt-5 md:mt-10">
            <span className="uppercase text-gray-500 font-semibold text-sm w-full">
              Powering product teams at
            </span>
          </div>
          <div className="w-full py-7 text-2xl flex items-center justify-evenly flex-wrap">
            <span className="text-gray-400 hover:text-black font-bold">
              <span className="text-3xl">⬟</span>
              <span>Flowbit</span>
            </span>
            <span className="text-gray-400 hover:text-black font-bold">
              <span className="text-3xl">●</span>
              <span>Orbiq</span>
            </span>
            <span className="text-gray-400 hover:text-black font-bold">
              <span className="text-3xl">▲</span>
              <span>Verta</span>
            </span>
            <span className="text-gray-400 hover:text-black font-bold">
              <span className="text-3xl">■</span>
              <span>Cloudra</span>
            </span>
            <span className="text-gray-400 hover:text-black font-bold">
              <span className="text-3xl">❖</span>
              <span>Pivotal</span>
            </span>
            <span className="text-gray-400 hover:text-black font-bold">
              <span className="text-3xl">◆</span>
              <span>Northpeak</span>
            </span>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="w-full bg-blue-50 pt-14">
        <div className="w-11/12 mx-auto py-7">
          <div className="flex justify-start md:justify-between items-center flex-col md:flex-row gap-5">
            {/* left */}
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
                    <span className="text-gray-500 text-sm">Growth Surge</span>
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

            {/* right */}
            <div className="w-full md:w-2/4">
              <span className="ms-5 text-xs uppercase font-extrabold text-blue-700 flex items-center justify-start bg-blue-100 rounded-2xl p-2 w-1/3 md:w-1/4">
                <span className="mx-2">●</span>
                Why Nexora
              </span>

              <h2 className="my-5 md:my-7 text-3xl w-full font-bold">
                A senior team, embedded in your workflow
              </h2>

              <p className="text-lg text-gray-500 mb-5">
                We don&apos;t hand off decks and disappear. Our designers and
                engineers work inside your tools — Slack, Linear, Figma — as an
                extension of your team.
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
          </div>
        </div>
      </div>

      <CallCard />
    </>
  );
}

export default home;
