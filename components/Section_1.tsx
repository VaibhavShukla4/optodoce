"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Humberg from "@/assets/humber.svg";
import Logo from "@/assets/logo.svg";
import Subtract from "@/assets/subtract.svg";
import Title from "@/assets/title.svg";
import { karla_400, karla_500, plus_Jakarta_Sans_500 } from "@/contant";
import AIGirl from "@/assets/ai_girl.webp";
import Robot from "@/assets/robot.webp";
import Big_Border from "@/assets/big_border.svg";
import Border from "@/assets/border.svg";
export default function Section_1() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-black text-white relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Image
          src={Humberg.src}
          height={Humberg.height}
          width={Humberg.width}
          alt="Humberg menu icon"
          className="h-8 w-8"
        />
        <div className="text-4xl font-bold flex items-center">
          <Image
            src={Logo.src}
            height={Logo.height}
            width={Logo.width}
            alt="Logo menu icon"
            className="h-12 w-12"
          />{" "}
          Opt
          <Image
            src={Subtract.src}
            height={Subtract.height}
            width={Subtract.width}
            alt="Subtract menu icon"
            className="h-8 w-8"
          />{" "}
          doce
        </div>
        <div className="flex space-x-4">
          <button
            className={`${karla_500.className} px-4 py-2 text-[#010102] bg-white rounded-full`}
          >
            Login
          </button>
          <button
            className={`${karla_500.className} px-4 py-2 bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full`}
          >
            Sign Up
          </button>
        </div>
      </header>
      {/* Main Section */}
      <main className="relative flex flex-col items-center justify-center text-center mt-20 z-10">
        <Image
          src={AIGirl.src}
          height={AIGirl.height}
          width={AIGirl.width}
          alt="AIGirl menu icon"
          className="absolute top-0 left-[-4%] -translate-x-[-50%] -translate-y-[-50%]"
        />{" "}
        {loading ? (
          <>
            {/* Skeleton for Headline */}
            <div className="h-12 w-3/4 bg-gray-700 rounded mb-4 animate-pulse"></div>
            <div className="h-12 w-1/2 bg-gray-700 rounded mb-4 animate-pulse"></div>
            {/* Skeleton for Subheading */}
            <div className="h-6 w-3/4 bg-gray-700 rounded mb-8 animate-pulse"></div>
            {/* Skeleton for Input and Button */}
            <div className="flex items-center w-full max-w-md mb-4">
              <div className="flex-1 h-12 bg-gray-800 rounded-l-full animate-pulse"></div>
              <div className="h-12 w-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded-r-full animate-pulse"></div>
            </div>
            {/* Skeleton for Tags */}
            <div className="flex space-x-4">
              <div className="h-8 w-20 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-8 w-20 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          </>
        ) : (
          <>
            {/* <h1
              className={`${plus_Jakarta_Sans_500.className} text-5xl font-bold mb-4`}
            >
              Best AI Content Platform <br /> Image Generator
            </h1> */}
            <Image
              src={Title.src}
              height={Title.height}
              width={Title.width}
              alt="Title menu icon"
              className=""
            />{" "}
            <p className={`${karla_400.className} w-[45%] text-white my-8`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            {/* Input and Button */}
            <div className="flex items-center w-full px-[10px] py-[10px] max-w-2xl  mb-4 bg-[#343435] rounded-full">
              <input
                type="text"
                placeholder="An Astronaut riding a horse on mars, hd"
                className={`${karla_500.className} flex-1 p-3 rounded-l-full text-white placeholder-gray-400 focus:outline-none`}
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full ">
                Generate Now
              </button>
            </div>
            {/* Tags */}
            <div className="flex items-center space-x-4">
              <span
                className={`${plus_Jakarta_Sans_500.className} text-white text-[18px]`}
              >
                Popular tags:
              </span>
              <span
                className={`${karla_500.className} px-4 py-1 text-[14px] bg-[#343435] rounded-full`}
              >
                Creative
              </span>
              <span
                className={`${karla_500.className} px-4 py-1 text-[14px] bg-[#343435] rounded-full`}
              >
                Space
              </span>
              <span
                className={`${karla_500.className} px-4 py-1 text-[14px] bg-[#343435] rounded-full`}
              >
                Art
              </span>
              <span
                className={`${karla_500.className} px-4 py-1 text-[14px] bg-[#343435] rounded-full`}
              >
                Fantasy
              </span>
            </div>
          </>
        )}
        <Image
          src={Robot.src}
          height={Robot.height}
          width={Robot.width}
          alt="Robot menu icon"
          className="absolute bottom-[18%]  right-[12%] -translate-x-[-50%] -translate-y-[-40%] "
        />{" "}
        <Image
          src={Border.src}
          height={Border.height}
          width={Border.width}
          alt="Border menu icon"
          className="absolute top-[-90%]  left-[-15%] -translate-x-[-50%] -translate-y-[-40%] "
        />{" "}
      </main>
      <Image
        src={Big_Border.src}
        height={Big_Border.height}
        width={Big_Border.width}
        alt="Big_Border menu icon"
        className="absolute top-0 w-[1800px] "
      />{" "}
    </div>
  );
}
