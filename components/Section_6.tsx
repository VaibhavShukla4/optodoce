"use client";
import { useState, useEffect } from "react";
import Number1 from "@/assets/number_1.webp";
import Number2 from "@/assets/number_2.webp";
import Number3 from "@/assets/number_3.webp";
import Number4 from "@/assets/number_4.webp";
import Dot from "@/assets/dot.webp";
import Image from "next/image";
import { nunito_Sans_400, nunito_Sans_600 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-50 flex flex-col items-center py-12 max-[991px]:px-[20px]">
      {/* Get in Touch Button */}
      <div className="mb-12">
        <button
          className={`px-6 ${nunito_Sans_400.className} w-[200px] py-3 bg-gradient-to-r from-[#EF8431] to-[#E71A86] text-white rounded-full font-semibold hover:from-orange-500 hover:to-pink-600`}
        >
          Get in Touch
        </button>
      </div>

      {/* Timeline Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-[100px] w-full md:w-[70%] mx-auto relative">
        <div className="absolute max-[991px]:hidden top-1/6 left-1/2 -translate-x-1/2 -translate-y-[10%] border-[1px] border-[#707070] h-[425px]"></div>
        <div className="flex flex-col items-end gap-y-[50px] text-right">
          <Image
            src={Number1.src}
            height={Number1.height}
            width={Number1.width}
            alt="Number1 menu icon"
          />
          {!loading && (
            <Image
              src={Dot.src}
              height={Dot.height}
              width={Dot.width}
              alt="Dot menu icon"
              className="absolute top-[35px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
              priority
            />
          )}
          <div className="flex flex-col gap-y-[20px]">
            <p
              className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
            >
              PLAN FOR THE SUCCESS:
            </p>
            <p
              className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
            >
              We analyze, design, develop and test the whole project with eagle
              vision.
            </p>
          </div>
          <Image
            src={Number3.src}
            height={Number3.height}
            width={Number3.width}
            alt="Number3 menu icon"
          />
          {!loading && (
            <Image
              src={Dot.src}
              height={Dot.height}
              width={Dot.width}
              alt="Dot menu icon"
              className="absolute top-[310px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
              priority
            />
          )}
          <div className="flex flex-col gap-y-[20px]">
            <p
              className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
            >
              YOUR DREAM OUR GOAL:
            </p>
            <p
              className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
            >
              We discover & innovate your dream with a look & feel, experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[50px]">
          <div className="flex flex-col gap-y-[20px]">
            <p
              className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
            >
              LET’S HAVE A CUP OF COFFEE:
            </p>
            <p
              className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
            >
              Initiate a meeting to understand the requirements and goals of the
              client.
            </p>
          </div>
          <Image
            src={Number2.src}
            height={Number2.height}
            width={Number2.width}
            alt="Number2 menu icon"
          />
          {!loading && (
            <Image
              src={Dot.src}
              height={Dot.height}
              width={Dot.width}
              alt="Dot menu icon"
              className="absolute top-[170px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
              priority
            />
          )}
          <div className="flex flex-col gap-y-[20px]">
            <p
              className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
            >
              QUALITY SOLUTIONS:
            </p>
            <p
              className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
            >
              For us, the quality solution is what brings clients success &
              exposure together.
            </p>
          </div>
          <Image
            src={Number4.src}
            height={Number4.height}
            width={Number4.width}
            alt="Number4 menu icon"
          />
          {!loading && (
            <Image
              src={Dot.src}
              height={Dot.height}
              width={Dot.width}
              alt="Dot menu icon"
              className="absolute top-[450px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
