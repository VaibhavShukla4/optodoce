"use client";
import { useEffect, useRef, useState } from "react";
import Number1 from "@/assets/number_1.webp";
import Number2 from "@/assets/number_2.webp";
import Number3 from "@/assets/number_3.webp";
import Number4 from "@/assets/number_4.webp";
import Dot from "@/assets/dot.webp";
import Image from "next/image";
import { nunito_Sans_400, nunito_Sans_600 } from "@/contant";
import Vision from "@/assets/vision.webp";

export default function Section_2() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const number1Ref = useRef(null);
  const dot1Ref = useRef(null);
  const title1Ref = useRef(null);
  const text1Ref = useRef(null);
  const number2Ref = useRef(null);
  const dot2Ref = useRef(null);
  const title2Ref = useRef(null);
  const text2Ref = useRef(null);
  const number3Ref = useRef(null);
  const dot3Ref = useRef(null);
  const title3Ref = useRef(null);
  const text3Ref = useRef(null);
  const number4Ref = useRef(null);
  const dot4Ref = useRef(null);
  const title4Ref = useRef(null);
  const text4Ref = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    // Simulate loading delay for skeleton loaders
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Function to add animation class with delay
            interface AnimateWithDelayFn {
              (
                element: HTMLElement | null,
                className: string,
                delay: number
              ): void;
            }

            const animateWithDelay: AnimateWithDelayFn = (
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

            // Animate Get in Touch Button
            animateWithDelay(buttonRef.current, "animate-button", 0);

            // Animate Timeline (staggered by section)
            animateWithDelay(number1Ref.current, "animate-image", 200);
            animateWithDelay(dot1Ref.current, "animate-dot", 300);
            animateWithDelay(title1Ref.current, "animate-title", 400);
            animateWithDelay(text1Ref.current, "animate-text", 500);

            animateWithDelay(title2Ref.current, "animate-title", 600);
            animateWithDelay(text2Ref.current, "animate-text", 700);
            animateWithDelay(number2Ref.current, "animate-image", 800);
            animateWithDelay(dot2Ref.current, "animate-dot", 900);

            animateWithDelay(number3Ref.current, "animate-image", 1000);
            animateWithDelay(dot3Ref.current, "animate-dot", 1100);
            animateWithDelay(title3Ref.current, "animate-title", 1200);
            animateWithDelay(text3Ref.current, "animate-text", 1300);

            animateWithDelay(title4Ref.current, "animate-title", 1400);
            animateWithDelay(text4Ref.current, "animate-text", 1500);
            animateWithDelay(number4Ref.current, "animate-image", 1600);
            animateWithDelay(dot4Ref.current, "animate-dot", 1700);

            // Animate Vision Image
            animateWithDelay(visionRef.current, "animate-image", 1800);

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
    <div
      ref={sectionRef}
      className="relative bg-gray-50 flex flex-col items-center py-12 max-[991px]:px-[20px]"
    >
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

        /* Slide-in from bottom (mimics GSAP power3.out) */
        @keyframes slideInFromBottom {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Scale-in for images and dots (mimics GSAP power3.out) */
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Animation classes */
        .animate-button {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-image {
          animation: scaleIn 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .animate-dot {
          animation: scaleIn 0.6s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .animate-title {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-text {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        /* Ensure elements are initially hidden */
        [ref="buttonRef"],
        [ref="number1Ref"],
        [ref="dot1Ref"],
        [ref="title1Ref"],
        [ref="text1Ref"],
        [ref="number2Ref"],
        [ref="dot2Ref"],
        [ref="title2Ref"],
        [ref="text2Ref"],
        [ref="number3Ref"],
        [ref="dot3Ref"],
        [ref="title3Ref"],
        [ref="text3Ref"],
        [ref="number4Ref"],
        [ref="dot4Ref"],
        [ref="title4Ref"],
        [ref="text4Ref"],
        [ref="visionRef"] {
          opacity: 0;
        }
      `}</style>

      {/* Get in Touch Button */}
      <div className="mb-12">
        {loading ? (
          <div className="h-12 w-[200px] bg-gray-200 rounded-full animate-pulse"></div>
        ) : (
          <button
            ref={buttonRef}
            className={`px-6 ${nunito_Sans_400.className} w-[200px] py-3 bg-gradient-to-r from-[#EF8431] to-[#E71A86] text-white rounded-full font-semibold hover:from-orange-500 hover:to-pink-600`}
          >
            Get in Touch
          </button>
        )}
      </div>

      {/* Timeline Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-[100px] w-full md:w-[70%] mx-auto relative mb-[20px]">
        <div className="absolute max-[991px]:hidden top-1/6 left-1/2 -translate-x-1/2 -translate-y-[10%] border-[1px] border-[#707070] h-[425px]"></div>
        <div className="flex flex-col items-end gap-y-[50px] text-right">
          {loading ? (
            <>
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="flex flex-col gap-y-[20px]">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              <Image
                ref={number1Ref}
                src={Number1.src}
                height={Number1.height}
                width={Number1.width}
                alt="Number1 menu icon"
              />
              <Image
                ref={dot1Ref}
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot menu icon"
                className="absolute top-[35px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
                priority
              />
              <div className="flex flex-col gap-y-[20px]">
                <p
                  ref={title1Ref}
                  className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
                >
                  PLAN FOR THE SUCCESS:
                </p>
                <p
                  ref={text1Ref}
                  className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
                >
                  We analyze, design, develop and test the whole project with
                  eagle vision.
                </p>
              </div>
            </>
          )}
          {loading ? (
            <>
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="flex flex-col gap-y-[20px]">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              <Image
                ref={number3Ref}
                src={Number3.src}
                height={Number3.height}
                width={Number3.width}
                alt="Number3 menu icon"
              />
              <Image
                ref={dot3Ref}
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot menu icon"
                className="absolute top-[310px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
                priority
              />
              <div className="flex flex-col gap-y-[20px]">
                <p
                  ref={title3Ref}
                  className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
                >
                  YOUR DREAM OUR GOAL:
                </p>
                <p
                  ref={text3Ref}
                  className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
                >
                  We discover & innovate your dream with a look & feel,
                  experience.
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-y-[50px]">
          {loading ? (
            <>
              <div className="flex flex-col gap-y-[20px]">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse"></div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-y-[20px]">
                <p
                  ref={title2Ref}
                  className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
                >
                  LET’S HAVE A CUP OF COFFEE:
                </p>
                <p
                  ref={text2Ref}
                  className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
                >
                  Initiate a meeting to understand the requirements and goals of
                  the client.
                </p>
              </div>
              <Image
                ref={number2Ref}
                src={Number2.src}
                height={Number2.height}
                width={Number2.width}
                alt="Number2 menu icon"
              />
              <Image
                ref={dot2Ref}
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot menu icon"
                className="absolute top-[170px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
                priority
              />
            </>
          )}
          {loading ? (
            <>
              <div className="flex flex-col gap-y-[20px]">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse"></div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-y-[20px]">
                <p
                  ref={title4Ref}
                  className={`${nunito_Sans_600.className} text-[#231F20] text-[20px]`}
                >
                  QUALITY SOLUTIONS:
                </p>
                <p
                  ref={text4Ref}
                  className={`${nunito_Sans_400.className} text-[#878787] text-[14px]`}
                >
                  For us, the quality solution is what brings clients success &
                  exposure together.
                </p>
              </div>
              <Image
                ref={number4Ref}
                src={Number4.src}
                height={Number4.height}
                width={Number4.width}
                alt="Number4 menu icon"
              />
              <Image
                ref={dot4Ref}
                src={Dot.src}
                height={Dot.height}
                width={Dot.width}
                alt="Dot menu icon"
                className="absolute top-[450px] left-1/2 -translate-x-1/2 -translate-y-[10%] w-8 h-8 max-[991px]:hidden"
                priority
              />
            </>
          )}
        </div>
      </div>
      {loading ? (
        <div className="h-64 w-full max-w-md bg-gray-200 rounded animate-pulse"></div>
      ) : (
        <Image
          ref={visionRef}
          src={Vision.src}
          height={Vision.height}
          width={Vision.width}
          alt="Vision menu icon"
        />
      )}
    </div>
  );
}
