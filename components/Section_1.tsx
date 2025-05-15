"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Humberg from "@/assets/humber.svg";
import Logo from "@/assets/logo.svg";
import Subtract from "@/assets/subtract.svg";
import Title from "@/assets/title.svg";
import { karla_400, karla_500, plus_Jakarta_Sans_500 } from "@/contant";
import AIGirl from "@/assets/ai_girl.webp";
import Robot from "@/assets/robot.webp";
import Big_Border from "@/assets/big_border.svg";
import Border from "@/assets/border.svg";

import { useState } from "react";

export default function Section_1() {
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const borderRef = useRef(null);
  const aiGirlRef = useRef(null);
  const robotRef = useRef(null);
  const titleRef = useRef(null);
  const subheadingRef = useRef(null);
  const inputContainerRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Function to add animation class with delay
            interface AnimateWithDelay {
              (
                element: HTMLElement | null,
                className: string,
                delay: number
              ): void;
            }

            const animateWithDelay: AnimateWithDelay = (
              element,
              className,
              delay
            ) => {
              if (element) {
                setTimeout(() => {
                  element.classList.add(className);
                }, delay);
              }
            };

            // Animate elements
            animateWithDelay(headerRef.current, "animate-header", 0);
            animateWithDelay(mainRef.current, "animate-main", 200);
            animateWithDelay(borderRef.current, "animate-image", 200);
            animateWithDelay(aiGirlRef.current, "animate-image", 400);
            animateWithDelay(robotRef.current, "animate-image", 600);
            animateWithDelay(titleRef.current, "animate-child-1", 800);
            animateWithDelay(subheadingRef.current, "animate-child-2", 1000);
            animateWithDelay(
              inputContainerRef.current,
              "animate-child-3",
              1200
            );
            animateWithDelay(tagsRef.current, "animate-child-3", 1200);

            // Stop observing after animations are triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white relative">
      {/* Inline CSS for animations */}
      <style jsx>{`
        /* Fade-in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-in from top animation */
        @keyframes slideInFromTop {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Slide-in from bottom animation */
        @keyframes slideInFromBottom {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Scale-in animation for images */
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Animation classes */
        .animate-header {
          animation: slideInFromTop 0.8s ease-out forwards;
        }

        .animate-main {
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .animate-child-1 {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-child-2 {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-child-3 {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-image {
          animation: scaleIn 1s ease-out forwards;
        }

        /* Ensure elements are initially hidden */
        [ref="headerRef"],
        [ref="mainRef"],
        [ref="borderRef"],
        [ref="aiGirlRef"],
        [ref="robotRef"],
        [ref="titleRef"],
        [ref="subheadingRef"],
        [ref="inputContainerRef"],
        [ref="tagsRef"] {
          opacity: 0;
        }
      `}</style>

      {/* Background Images */}
      <div ref={borderRef}>
        <Image
          src={Border.src}
          height={Border.height}
          width={Border.width}
          alt="Border menu icon"
          className="absolute top-[-10vw] left-[-35vw] -translate-x-[-50%] w-full max-[1280px]:hidden"
        />
        <Image
          src={Big_Border.src}
          height={Big_Border.height}
          width={Big_Border.width}
          alt="Big_Border menu icon"
          className="absolute top-0 w-[1800px] max-[1280px]:hidden"
        />
      </div>

      {/* Header */}
      <header ref={headerRef} className="flex justify-between items-center p-4">
        <Image
          src={Humberg.src}
          height={Humberg.height}
          width={Humberg.width}
          alt="Humberg menu icon"
          className="h-8 w-8 max-[425px]:h-6 max-[425px]:w-6"
        />
        <div className="text-4xl font-bold flex items-center max-[667px]:text-xl">
          <Image
            src={Logo.src}
            height={Logo.height}
            width={Logo.width}
            alt="Logo menu icon"
            className="h-12 w-12 max-[667px]:h-8 max-[667px]:w-8 max-[425px]:h-6 max-[425px]:w-6"
          />
          Opt
          <Image
            src={Subtract.src}
            height={Subtract.height}
            width={Subtract.width}
            alt="Subtract menu icon"
            className="h-8 w-8 max-[667px]:h-6 max-[667px]:w-6 max-[425px]:h-4 max-[425px]:w-4"
          />
          doce
        </div>
        <div className="flex space-x-4 max-[425px]:space-x-1">
          <button
            className={`${karla_500.className} px-4 py-2 max-[425px]:py-2 max-[425px]:px-4 text-[#010102] max-[425px]:text-[12px] max-[425px]:rounded-4xl bg-white rounded-full`}
          >
            Login
          </button>
          <button
            className={`${karla_500.className} px-4 py-2 bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full max-[425px]:px-4 max-[425px]:py-2 max-[425px]:text-[12px] max-[425px]:rounded-4xl`}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main
        ref={mainRef}
        className="relative flex flex-col items-center justify-center text-center mt-20 z-10"
      >
        <Image
          ref={aiGirlRef}
          src={AIGirl.src}
          height={AIGirl.height}
          width={AIGirl.width}
          alt="AIGirl menu icon"
          className="absolute top-0 left-[-4%] -translate-x-[-50%] -translate-y-[-50%] max-[1280px]:hidden"
        />
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
            <Image
              ref={titleRef}
              src={Title.src}
              height={Title.height}
              width={Title.width}
              alt="Title menu icon"
            />
            <p
              ref={subheadingRef}
              className={`${karla_400.className} w-[45%] max-[991px]:w-[80%] text-white my-8`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            {/* Input and Button */}
            <div
              ref={inputContainerRef}
              className={`flex items-center w-full px-[10px] py-[10px] max-w-2xl max-[1280px]:max-w-lg max-[425px]:max-w-lg mb-4 bg-[#343435] rounded-full`}
            >
              <input
                type="text"
                placeholder="An Astronaut riding a horse on mars, hd"
                className={`${karla_500.className} flex-1 p-3 rounded-l-full text-white placeholder-gray-400 focus:outline-none truncate`}
              />
              <button
                className={`${karla_500.className} px-6 py-3 bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full max-[425px]:px-2 max-[425px]:text-[12px]`}
              >
                Generate Now
              </button>
            </div>
            {/* Tags */}
            <div
              ref={tagsRef}
              className="flex flex-wrap gap-y-2 items-center space-x-4 max-[667px]:space-x-2"
            >
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
          ref={robotRef}
          src={Robot.src}
          height={Robot.height}
          width={Robot.width}
          alt="Robot menu icon"
          className="absolute bottom-[18%] right-[12%] -translate-x-[-50%] -translate-y-[-40%] max-[1280px]:hidden"
        />
      </main>
    </div>
  );
}
