"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Ship from "@/assets/ship.webp";
import Cat from "@/assets/cat.webp";
import Fish from "@/assets/fish.webp";
import Girl from "@/assets/girl.webp";
import { karla_400, karla_500, karla_700 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const shipRef = useRef(null);
  const catRef = useRef(null);
  const fishRef = useRef(null);
  const girlRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const statRef = useRef(null);

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

            // Animate images
            animateWithDelay(shipRef.current, "animate-image", 0);
            animateWithDelay(catRef.current, "animate-image", 200);
            animateWithDelay(fishRef.current, "animate-image", 400);
            animateWithDelay(girlRef.current, "animate-image", 600);

            // Animate text, button, and stat
            animateWithDelay(textRef.current, "animate-text", 800);
            animateWithDelay(buttonRef.current, "animate-button", 1000);
            animateWithDelay(statRef.current, "animate-stat", 1200);

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
      className="bg-black text-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 mt-[50px]"
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

        /* Scale-in for images (mimics GSAP power3.out) */
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
        .animate-image {
          animation: scaleIn 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .animate-text {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-button {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-stat {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        /* Ensure elements are initially hidden */
        [ref="shipRef"],
        [ref="catRef"],
        [ref="fishRef"],
        [ref="girlRef"],
        [ref="textRef"],
        [ref="buttonRef"],
        [ref="statRef"] {
          opacity: 0;
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col">
            {loading ? (
              <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-700 rounded-lg animate-pulse"></div>
            ) : (
              <div ref={shipRef}>
                <Image
                  src={Ship.src}
                  height={Ship.height}
                  width={Ship.width}
                  alt="Ship image"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
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
                    ref={textRef}
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
                      ref={buttonRef}
                      className={`${karla_500.className} px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full hover:brightness-110 active:scale-95 transition-transform duration-200`}
                    >
                      Get Started
                    </button>
                    <span
                      ref={statRef}
                      className={`${karla_400.className} text-sm sm:text-base flex items-center`}
                    >
                      <span
                        className={`${karla_700.className} text-lg sm:text-xl lg:text-2xl`}
                      >
                        100K+
                      </span>
                       Happy Customers
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
                  <div ref={catRef}>
                    <Image
                      src={Cat.src}
                      height={Cat.height}
                      width={Cat.width}
                      alt="Cat image"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div ref={fishRef}>
                    <Image
                      src={Fish.src}
                      height={Fish.height}
                      width={Fish.width}
                      alt="Fish image"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
            {loading ? (
              <div className="w-full h-40 sm:h-48 lg:h-56 bg-gray-700 rounded-lg mt-4 sm:mt-6 animate-pulse"></div>
            ) : (
              <div ref={girlRef}>
                <Image
                  src={Girl.src}
                  height={Girl.height}
                  width={Girl.width}
                  alt="Girl image"
                  className="w-full h-auto object-cover rounded-lg mt-4 sm:mt-6"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
