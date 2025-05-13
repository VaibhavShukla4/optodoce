"use client";
import { useState, useEffect } from "react";
import Ship from "@/assets/ship.webp";
import Cat from "@/assets/cat.webp";
import Fish from "@/assets/fish.webp";
import Girl from "@/assets/girl.webp";
import Image from "next/image";
import { karla_400, karla_500, karla_700 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      {/* Tags */}
      <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
        {loading ? (
          <>
            <div className="h-8 w-16 sm:w-20 lg:w-24 bg-gray-700 rounded-full animate-pulse"></div>
            <div className="h-8 w-16 sm:w-20 lg:w-24 bg-gray-700 rounded-full animate-pulse"></div>
            <div className="h-8 w-16 sm:w-20 lg:w-24 bg-gray-700 rounded-full animate-pulse"></div>
          </>
        ) : (
          <>
            <span
              className={`${karla_500.className} px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-200`}
            >
              Creative
            </span>
            <span
              className={`${karla_500.className} px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-200`}
            >
              Space
            </span>
            <span
              className={`${karla_500.className} px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-200`}
            >
              Fantasy
            </span>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col">
            {loading ? (
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-700 rounded-lg animate-pulse"></div>
            ) : (
              <Image
                src={Ship.src}
                height={Ship.height}
                width={Ship.width}
                alt="Ship image"
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
            <div className="text-center mt-4 sm:mt-6 lg:mt-8">
              {loading ? (
                <>
                  {/* Skeleton for Text */}
                  <div className="h-5 w-4/5 mx-auto bg-gray-700 rounded mb-3 animate-pulse"></div>
                  <div className="h-5 w-3/5 mx-auto bg-gray-700 rounded mb-6 animate-pulse"></div>
                  {/* Skeleton for Button and Stat */}
                  <div className="flex justify-center gap-4 sm:gap-6">
                    <div className="h-10 w-28 sm:w-32 lg:w-36 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 sm:w-24 lg:w-28 bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </>
              ) : (
                <>
                  <p
                    className={`${karla_400.className} text-sm sm:text-base lg:text-lg text-left`}
                  >
                    We’re passionate about empowering creatives with the tools
                    they need to{" "}
                    <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
                      bring their vision
                    </span>{" "}
                    to life. That’s why we’ve developed
                  </p>
                  <div className="flex mt-6 sm:mt-8 lg:mt-10 gap-4 sm:gap-6 justify-center md:justify-start">
                    <button
                      className={`${karla_500.className} px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full hover:brightness-110 active:scale-95 transition-transform duration-200`}
                    >
                      Get Started
                    </button>
                    <span
                      className={`${karla_400.className} text-sm sm:text-base flex items-center`}
                    >
                      <span
                        className={`${karla_700.className} text-lg sm:text-xl lg:text-2xl`}
                      >
                        100K+
                      </span>
                      &nbsp;Happy Customers
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {loading ? (
                <>
                  <div className="w-full h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg animate-pulse"></div>
                  <div className="w-full h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg animate-pulse"></div>
                </>
              ) : (
                <>
                  <Image
                    src={Cat.src}
                    height={Cat.height}
                    width={Cat.width}
                    alt="Cat image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <Image
                    src={Fish.src}
                    height={Fish.height}
                    width={Fish.width}
                    alt="Fish image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </>
              )}
            </div>
            {loading ? (
              <div className="w-full h-40 sm:h-48 lg:h-56 bg-gray-700 rounded-lg mt-4 sm:mt-6 animate-pulse"></div>
            ) : (
              <Image
                src={Girl.src}
                height={Girl.height}
                width={Girl.width}
                alt="Girl image"
                className="w-full h-auto object-cover rounded-lg mt-4 sm:mt-6"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
