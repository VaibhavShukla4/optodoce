"use client";
import { useState, useEffect } from "react";
import Number1 from "@/assets/number_1.webp";
import Number2 from "@/assets/number_2.webp";
import Number3 from "@/assets/number_3.webp";
import Number4 from "@/assets/number_4.webp";
import Dot from "@/assets/dot.webp";
import Image from "next/image";
import { nunito_Sans_400, nunito_Sans_600 } from "@/contant";

export default function Section_6() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-50 flex flex-col items-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      {/* Get in Touch Button */}
      {loading ? (
        <div className="h-10 w-40 mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
      ) : (
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <button
            className={`${nunito_Sans_600.className} px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#EF8431] to-[#E71A86] text-white rounded-full font-semibold hover:brightness-110 active:scale-95 transition-transform duration-200 w-full max-w-48`}
          >
            Get in Touch
          </button>
        </div>
      )}

      {/* Timeline Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto relative">
        {/* Vertical Line (Hidden on Mobile) */}
        {loading ? (
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gray-300 animate-pulse"></div>
        ) : (
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-px border border-[#707070]"></div>
        )}

        {/* Left Column (Right-Aligned) */}
        <div className="flex flex-col items-center md:items-end gap-6 sm:gap-8 lg:gap-12">
          {loading ? (
            <>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md">
                <div className="h-6 w-40 ml-auto bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-3/4 ml-auto bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="absolute top-[18rem] sm:top-[20rem] lg:top-[22rem] left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md">
                <div className="h-6 w-40 ml-auto bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-3/4 ml-auto bg-gray-200 rounded animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              <Image
                src={Number1.src}
                height={Number1.height}
                width={Number1.width}
                alt="Number 1 icon"
                className="w-16 sm:w-20 h-auto object-contain"
              />
              <Image
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot icon"
                className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-auto object-contain"
              />
              <div className="flex flex-col gap-3 sm:gap-4 text-right max-w-md">
                <p
                  className={`${nunito_Sans_600.className} text-[#231F20] text-base sm:text-lg lg:text-xl`}
                >
                  PLAN FOR THE SUCCESS
                </p>
                <p
                  className={`${nunito_Sans_400.className} text-gray-500 text-sm sm:text-base`}
                >
                  We analyze, design, develop, and test the whole project with
                  eagle vision.
                </p>
              </div>
              <Image
                src={Number3.src}
                height={Number3.height}
                width={Number3.width}
                alt="Number 3 icon"
                className="w-16 sm:w-20 h-auto object-contain"
              />
              <Image
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot icon"
                className="absolute top-[18rem] sm:top-[20rem] lg:top-[22rem] left-1/2 -translate-x-1/2 w-4 sm:w-5 h-auto object-contain"
              />
              <div className="flex flex-col gap-3 sm:gap-4 text-right max-w-md">
                <p
                  className={`${nunito_Sans_600.className} text-[#231F20] text-base sm:text-lg lg:text-xl`}
                >
                  YOUR DREAM, OUR GOAL
                </p>
                <p
                  className={`${nunito_Sans_400.className} text-gray-500 text-sm sm:text-base`}
                >
                  We discover & innovate your dream with a look & feel
                  experience.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right Column (Left-Aligned) */}
        <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8 lg:gap-12">
          {loading ? (
            <>
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="absolute top-[10rem] sm:top-[11rem] lg:top-[12rem] left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="absolute top-[26rem] sm:top-[29rem] lg:top-[32rem] left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 sm:gap-4 max-w-md">
                <p
                  className={`${nunito_Sans_600.className} text-[#231F20] text-base sm:text-lg lg:text-xl`}
                >
                  LET’S HAVE A CUP OF COFFEE
                </p>
                <p
                  className={`${nunito_Sans_400.className} text-gray-500 text-sm sm:text-base`}
                >
                  Initiate a meeting to understand the requirements and goals of
                  the client.
                </p>
              </div>
              <Image
                src={Number2.src}
                height={Number2.height}
                width={Number2.width}
                alt="Number 2 icon"
                className="w-16 sm:w-20 h-auto object-contain"
              />
              <Image
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot icon"
                className="absolute top-[10rem] sm:top-[11rem] lg:top-[12rem] left-1/2 -translate-x-1/2 w-4 sm:w-5 h-auto object-contain"
              />
              <div className="flex flex-col gap-3 sm:gap-4 max-w-md">
                <p
                  className={`${nunito_Sans_600.className} text-[#231F20] text-base sm:text-lg lg:text-xl`}
                >
                  QUALITY SOLUTIONS
                </p>
                <p
                  className={`${nunito_Sans_400.className} text-gray-500 text-sm sm:text-base`}
                >
                  For us, the quality solution is what brings clients success &
                  exposure together.
                </p>
              </div>
              <Image
                src={Number4.src}
                height={Number4.height}
                width={Number4.width}
                alt="Number 4 icon"
                className="w-16 sm:w-20 h-auto object-contain"
              />
              <Image
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot icon"
                className="absolute top-[26rem] sm:top-[29rem] lg:top-[32rem] left-1/2 -translate-x-1/2 w-4 sm:w-5 h-auto object-contain"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
