"use client";
import { useEffect, useRef, useState } from "react";
import Tree from "@/assets/tree.webp";
import Space from "@/assets/space.webp";
import Avtar from "@/assets/avtar.webp";
import Bird from "@/assets/bird.webp";
import Blind from "@/assets/blind.webp";
import Image from "next/image";
import { karla_500, plus_Jakarta_Sans_400 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const filterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const treeRef = useRef(null);
  const avtarRef = useRef(null);
  const spaceRef = useRef(null);
  const birdRef = useRef(null);
  const blindRef = useRef(null);
  const buttonRef = useRef(null);

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

            // Animate elements
            animateWithDelay(tagRef.current, "animate-tag", 0);
            animateWithDelay(titleRef.current, "animate-title", 200);

            // Animate filter bar items
            filterRefs.current.forEach((ref, index) => {
              animateWithDelay(ref, "animate-filter", 400 + index * 100);
            });

            // Animate images
            animateWithDelay(treeRef.current, "animate-image", 800);
            animateWithDelay(avtarRef.current, "animate-image", 1000);
            animateWithDelay(spaceRef.current, "animate-image", 1200);
            animateWithDelay(birdRef.current, "animate-image", 1400);
            animateWithDelay(blindRef.current, "animate-image", 1600);

            // Animate button
            animateWithDelay(buttonRef.current, "animate-button", 1800);

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
      className="flex flex-col gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-black"
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
        .animate-tag {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-title {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-filter {
          animation: slideInFromBottom 0.5s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        .animate-image {
          animation: scaleIn 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .animate-button {
          animation: slideInFromBottom 0.6s cubic-bezier(0.33, 0, 0.2, 1)
            forwards;
        }

        /* Ensure elements are initially hidden */
        [ref="tagRef"],
        [ref="titleRef"],
        [ref="treeRef"],
        [ref="avtarRef"],
        [ref="spaceRef"],
        [ref="birdRef"],
        [ref="blindRef"],
        [ref="buttonRef"] {
          opacity: 0;
        }

        /* Ensure filter items are initially hidden */
        .filter-item {
          opacity: 0;
        }
      `}</style>

      {/* Tag */}
      {loading ? (
        <div className="h-8 w-40 mx-auto bg-gray-700 rounded-full animate-pulse"></div>
      ) : (
        <span
          ref={tagRef}
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
          ref={titleRef}
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
          {["All", "|", "Cartoon", "|", "Realistic", "|", "3D"].map(
            (item, index) => (
              <span
                key={index}
                ref={(el) => (filterRefs.current[index] = el)}
                className={`${karla_500.className} text-base sm:text-lg lg:text-xl filter-item`}
              >
                {item}
              </span>
            )
          )}
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
            ref={treeRef}
            src={Tree.src}
            height={Tree.height}
            width={Tree.width}
            alt="Tree image"
            className="w-full h-auto object-cover rounded-lg col-span-1 sm:col-span-1 lg:col-span-2"
          />
          <div className="col-span-1 sm:col-span-1 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Image
                ref={avtarRef}
                src={Avtar.src}
                height={Avtar.height}
                width={Avtar.width}
                alt="Avatar image"
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                ref={spaceRef}
                src={Space.src}
                height={Space.height}
                width={Space.width}
                alt="Space image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <Image
              ref={birdRef}
              src={Bird.src}
              height={Bird.height}
              width={Bird.width}
              alt="Bird image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <Image
            ref={blindRef}
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
          ref={buttonRef}
          className={`${karla_500.className} px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full w-fit mx-auto hover:brightness-110 active:scale-95 transition-transform duration-200`}
        >
          Go to our AI gallery
        </button>
      )}
    </div>
  );
}
