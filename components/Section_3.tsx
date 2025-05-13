"use client";
import { useState, useEffect } from "react";
import SmallHair from "@/assets/small_hair.webp";
import LongHair from "@/assets/long_hair.webp";
import SmallGirl from "@/assets/small_girl.webp";
import SweetGirl from "@/assets/sweet_girl.webp";
import Star from "@/assets/Star.svg";
import Image from "next/image";
import {
  karla_400,
  karla_500,
  karla_700,
  plus_Jakarta_Sans_600
} from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Main Image */}
        {loading ? (
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        ) : (
          <Image
            src={SweetGirl.src}
            height={SweetGirl.height}
            width={SweetGirl.width}
            alt="Sweet Girl image"
            className="w-full h-auto object-cover rounded-lg"
          />
        )}

        {/* Content Column */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          {/* Tag */}
          {loading ? (
            <div className="h-8 w-40 bg-gray-200 rounded-full animate-pulse"></div>
          ) : (
            <span
              className={`${karla_500.className} text-[#010102] w-fit bg-[#6A41FB33] text-xs sm:text-sm lg:text-base rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5`}
            >
              Introduce optpdoce AI
            </span>
          )}

          {/* Title */}
          {loading ? (
            <div className="h-20 w-4/5 bg-gray-200 rounded animate-pulse"></div>
          ) : (
            <h1
              className={`${plus_Jakarta_Sans_600.className} text-black text-3xl sm:text-4xl lg:text-5xl leading-tight`}
            >
              Unlocking the Power of{" "}
              <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
                AI for a Smarter
              </span>{" "}
              Future
            </h1>
          )}

          {/* Image Grid */}
          {loading ? (
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full h-24 sm:h-32 lg:h-40 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-full h-24 sm:h-32 lg:h-40 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-full h-24 sm:h-32 lg:h-40 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <Image
                src={SmallHair.src}
                height={SmallHair.height}
                width={SmallHair.width}
                alt="Small Hair image"
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src={LongHair.src}
                height={LongHair.height}
                width={LongHair.width}
                alt="Long Hair image"
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src={SmallGirl.src}
                height={SmallGirl.height}
                width={SmallGirl.width}
                alt="Small Girl image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}

          {/* Button and Description */}
          {loading ? (
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="h-10 w-28 sm:w-32 lg:w-36 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-5 w-48 sm:w-64 lg:w-80 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                className={`${karla_500.className} min-w-fit px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full hover:brightness-110 active:scale-95 transition-transform duration-200`}
              >
                Try Now
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src={Star.src}
                  height={Star.height}
                  width={Star.width}
                  alt="Star icon"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
                <p
                  className={`${karla_400.className} text-xs sm:text-sm lg:text-base text-[#010102]`}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
