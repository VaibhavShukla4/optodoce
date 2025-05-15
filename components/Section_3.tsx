"use client";
import { useEffect, useRef, useState } from "react";
import SmallHair from "@/assets/small_hair.webp";
import LongHair from "@/assets/long_hair.webp";
import SmallGirl from "@/assets/small_girl.webp";
import SweetGirl from "@/assets/sweet_girl.webp";
import Star from "@/assets/Star.svg";
import Image from "next/image";
import { karla_400, karla_500, plus_Jakarta_Sans_600 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const sweetGirlRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const smallHairRef = useRef(null);
  const longHairRef = useRef(null);
  const smallGirlRef = useRef(null);
  const buttonRef = useRef(null);
  const starRef = useRef(null);
  const descriptionRef = useRef(null);

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

            // Animate main image
            animateWithDelay(sweetGirlRef.current, "animate-image", 0);

            // Animate content column
            animateWithDelay(tagRef.current, "animate-tag", 200);
            animateWithDelay(titleRef.current, "animate-title", 400);
            animateWithDelay(smallHairRef.current, "animate-image", 600);
            animateWithDelay(longHairRef.current, "animate-image", 800);
            animateWithDelay(smallGirlRef.current, "animate-image", 1000);
            animateWithDelay(buttonRef.current, "animate-button", 1200);
            animateWithDelay(starRef.current, "animate-star", 1400);
            animateWithDelay(
              descriptionRef.current,
              "animate-description",
              1400
            );

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
      className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14 rounded-4xl"
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

        /* Scale-in for star (mimics GSAP power3.out with slight rotation) */
        @keyframes scaleInStar {
          from {
            transform: scale(0.8) rotate(-15deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        /* Animation classes */
        .animate-image {
          animation: scaleIn 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .animate-tag {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-title {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-button {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-star {
          animation: scaleInStar 0.6s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .animate-description {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        /* Ensure elements are initially hidden */
        [ref="sweetGirlRef"],
        [ref="tagRef"],
        [ref="titleRef"],
        [ref="smallHairRef"],
        [ref="longHairRef"],
        [ref="smallGirlRef"],
        [ref="buttonRef"],
        [ref="starRef"],
        [ref="descriptionRef"] {
          opacity: 0;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Main Image */}
        {loading ? (
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        ) : (
          <div ref={sweetGirlRef}>
            <Image
              src={SweetGirl.src}
              height={SweetGirl.height}
              width={SweetGirl.width}
              alt="Sweet Girl image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        )}

        {/* Content Column */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          {/* Tag */}
          {loading ? (
            <div className="h-8 w-40 bg-gray-200 rounded-full animate-pulse"></div>
          ) : (
            <span
              ref={tagRef}
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
              ref={titleRef}
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
              <div ref={smallHairRef}>
                <Image
                  src={SmallHair.src}
                  height={SmallHair.height}
                  width={SmallHair.width}
                  alt="Small Hair image"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div ref={longHairRef}>
                <Image
                  src={LongHair.src}
                  height={LongHair.height}
                  width={LongHair.width}
                  alt="Long Hair image"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div ref={smallGirlRef}>
                <Image
                  src={SmallGirl.src}
                  height={SmallGirl.height}
                  width={SmallGirl.width}
                  alt="Small Girl image"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
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
                ref={buttonRef}
                className={`${karla_500.className} min-w-fit px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full hover:brightness-110 active:scale-95 transition-transform duration-200`}
              >
                Try Now
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div ref={starRef}>
                  <Image
                    src={Star.src}
                    height={Star.height}
                    width={Star.width}
                    alt="Star icon"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </div>
                <p
                  ref={descriptionRef}
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
