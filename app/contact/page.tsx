import React from "react";

function page() {
  return (
    <>
      <div className="w-full mb-5">
        <div className="bg-blue-950 w-full flex items-center justify-center text-white">
          <h2 className="text-4xl w-full text-center font-extrabold py-28">
            Get In Touch
          </h2>
        </div>
        {/* cards */}
        <div className="w-full flex items-center justify-center p-2 flex-wrap gap-5 my-20 text-center">
          {/* card-1 */}
          <div className="border border-gray-400 flex flex-col p-5 justify-center items-center bg-white rounded-2xl">
            <span className="text-2xl">📍</span>
            <h2 className=" text-xl font-bold w-full text-gray-600 mt-3">
              Visit Us
            </h2>
            <p className="  text-gray-500 mt-3 w-4/5">
              148 Innovation Drive, Suite 400 San Francisco, CA 94107
            </p>
          </div>

          {/* card-2 */}
          <div className="border border-gray-400 flex flex-col p-5 justify-center items-center bg-white rounded-2xl ">
            <span className="text-2xl">✉️</span>
            <h2 className=" text-xl font-bold w-full text-gray-600 mt-3">
              Email Us
            </h2>
            <p className=" text-gray-500 mt-3 w-4/5">
              148 Innovation Drive, Suite 400 San Francisco, CA 94107
            </p>
          </div>

          {/* card-3 */}
          <div className="border border-gray-400 flex flex-col p-5 justify-center items-center bg-white rounded-2xl ">
            <span className="2xl">📞</span>
            <h2 className=" text-xl font-bold text-gray-600 mt-3">Call Us</h2>
            <p className=" text-gray-500 mt-3 w-4/5">
              148 Innovation Drive, Suite 400 San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
