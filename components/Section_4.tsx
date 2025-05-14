"use client";
import { useState, useEffect } from "react";
import Tree from "@/assets/tree.webp";
import Space from "@/assets/space.webp";
import Avtar from "@/assets/avtar.webp";
import Bird from "@/assets/bird.webp";
import Blind from "@/assets/blind.webp";
import Image from "next/image";
import { karla_500, plus_Jakarta_Sans_400 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Tag */}
      {loading ? (
        <div className="h-8 w-40 mx-auto bg-gray-700 rounded-full animate-pulse"></div>
      ) : (
        <span
          className={`${karla_500.className} text-white bg-[#6A41FB33] px-4 sm:px-6 py-2 text-xs sm:text-sm lg:text-base rounded-full w-fit mx-auto`}
        >
          Recently Created
        </span>
      )}

      {/* Title */}
      {loading ? (
        <div className="h-12 sm:h-16 lg:h-20 w-3/4 mx-auto bg-gray-700 rounded animate-pulse"></div>
      ) : (
        <h1
          className={`${plus_Jakarta_Sans_400.className} text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-center`}
        >
          Create anything with{" "}
          <span className="bg-gradient-to-r from-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
            Optpdoce
          </span>{" "}
          AI
        </h1>
      )}

      {/* Filter Bar */}
      {loading ? (
        <div className="flex justify-center gap-2 sm:gap-4 w-full max-w-sm mx-auto">
          <div className="h-6 w-12 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-6 w-12 bg-gray-700 rounded animate-pulse"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 text-white w-full max-w-sm md:max-w-md mx-auto">
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            All
          </span>
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            |
          </span>
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            Cartoon
          </span>
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            |
          </span>
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            Realistic
          </span>
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            |
          </span>
          <span
            className={`${karla_500.className} text-base sm:text-lg lg:text-xl`}
          >
            3D
          </span>
        </div>
      )}

      {/* Image Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 h-64 sm:h-80 lg:h-96 bg-gray-700 rounded-lg animate-pulse"></div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-32 sm:h-40 lg:h-48 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 h-64 sm:h-80 lg:h-96 bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <Image
            src={Tree.src}
            height={Tree.height}
            width={Tree.width}
            alt="Tree image"
            className="w-full h-auto object-cover rounded-lg col-span-1 sm:col-span-1 lg:col-span-2"
          />
          <div className="col-span-1 sm:col-span-1 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Image
                src={Avtar.src}
                height={Avtar.height}
                width={Avtar.width}
                alt="Avatar image"
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src={Space.src}
                height={Space.height}
                width={Space.width}
                alt="Space image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <Image
              src={Bird.src}
              height={Bird.height}
              width={Bird.width}
              alt="Bird image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <Image
            src={Blind.src}
            height={Blind.height}
            width={Blind.width}
            alt="Blind image"
            className="w-full h-auto object-cover rounded-lg col-span-1 sm:col-span-1 lg:col-span-2"
          />
        </div>
      )}

      {/* Button */}
      {loading ? (
        <div className="h-10 w-40 mx-auto bg-gradient-to-r from-gray-700 to-gray-600 rounded-full animate-pulse"></div>
      ) : (
        <button
          className={`${karla_500.className} px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full w-fit mx-auto hover:brightness-110 active:scale-95 transition-transform duration-200`}
        >
          Go to our AI gallery
        </button>
      )}
    </div>
  );
}
