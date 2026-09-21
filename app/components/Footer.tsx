import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-blue-950 text-white">
        <div className="px-10 mt-10 mx-auto flex items-center flex-col lg:flex-row">
          {/* logo */}
          <div className="py-5 flex flex-col items-center lg:items-start text-center lg:text-start">
            <div className="pb-5">
              <span className="font-extrabold">
                Nexora<span className="text-blue-600">.</span>
              </span>
            </div>
            <div className="w-5/6">
              <span className="text-gray-400 leading-7">
                We help ambitious SaaS and tech companies design, build and
                scale digital products that customers love.
              </span>
            </div>

            <div className="pt-5 flex items-center justify-start gap-4">
              <div className="w-11 h-11 bg-gray-500 p-5 rounded-full flex items-center justify-center hover:bg-blue-600">
                𝕏
              </div>
              <div className="w-11 h-11 bg-gray-500 p-5 rounded-full flex items-center justify-center hover:bg-blue-600">
                💼
              </div>
              <div className="w-11 h-11 bg-gray-500 p-5 rounded-full flex items-center justify-center hover:bg-blue-600">
                🌐
              </div>
              <div className="w-11 h-11 bg-gray-500 p-5 rounded-full flex items-center justify-center hover:bg-blue-600">
                📸
              </div>
            </div>
          </div>

          {/* company */}
          <div className="w-full lg:w-2/5 py-5 flex flex-col items-center justify-around">
            <span className="font-bold text-center pb-2 uppercase">
              Company
            </span>
            <ul className="text-center font-medium text-sm">
              <Link
                href="/"
                className="cursor-pointer outline-0 leading-6 hover:text-white text-gray-400"
              >
                <li>Home</li>
              </Link>

              <Link
                href="/about"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>About</li>
              </Link>

              <Link
                href="/services"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>Services</li>
              </Link>

              <Link
                href="/portfolio"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>Portfolio</li>
              </Link>

              <Link
                href="/blog"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>Blog</li>
              </Link>
            </ul>
          </div>

          {/* services */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-around py-5">
            <span className="font-bold text-center pb-2 uppercase">
              Services
            </span>
            <ul className="text-center font-medium text-sm">
              <Link
                href="/services"
                className="cursor-pointer outline-0 leading-8 hover:text-white text-gray-400"
              >
                <li>Product Strategy</li>
              </Link>

              <Link
                href="/services"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>UI/UX Design</li>
              </Link>

              <Link
                href="/services"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>Web Development</li>
              </Link>

              <Link
                href="/services"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>Cloud & DevOps</li>
              </Link>

              <Link
                href="/services"
                className="hover:text-white text-gray-400 leading-8 cursor-pointer"
              >
                <li>Growth Marketing</li>
              </Link>
            </ul>
          </div>

          {/* loop */}
          <div className="w-full lg:w-4/5 flex flex-col py-5">
            <div>
              <span className="font-bold uppercase mb-5 flex justify-center">
                Stay in the loop
              </span>
            </div>

            <div className="w-full flex justify-center">
              <span className="text-gray-400 leading-7 lg:w-2/3">
                Get product updates and insights from our team, once a month.
              </span>
            </div>
            <div className="mt-5 flex flex-col md:flex-row justify-center gap-3">
              <input
                type="email"
                placeholder="contactus@gmail.com"
                className="border border-gray-500 px-10 py-4 rounded-xl outline-0"
              />
              <button className="bg-blue-800 py-4 px-5 rounded-lg">✈️</button>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="w-11/12 mx-auto flex py-5 md:py-7 justify-start md:justify-between items-center flex-col md:flex-row gap-5 border-t border-t-gray-700">
          <span className="text-mauve-400 text-center w-full">
            &copy; 2026 Nexora. All rights reserved by{" "}
            <span className="font-bold cursor-pointer text-mauve-300">
              Harshad Mahadik
            </span>{" "}
            • Distributed by{" "}
            <span className="font-bold cursor-pointer text-mauve-300">
              Themewagon
            </span>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
