"use client";
import { useState, useEffect } from "react";
import Team from "@/assets/Team.webp";
import Mission from "@/assets/mission.webp";
import Image from "next/image";
import { nunito_Sans_400, nunito_Sans_700, nunito_Sans_900 } from "@/contant";

export default function Section_2() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          {loading ? (
            <>
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-24 sm:h-32 lg:h-40 w-full bg-gray-200 rounded animate-pulse"></div>
            </>
          ) : (
            <>
              <span
                className={`${nunito_Sans_700.className} text-xl sm:text-2xl lg:text-3xl text-[#231F20]`}
              >
                Our Mission
              </span>
              <p
                className={`${nunito_Sans_400.className} text-gray-500 text-sm sm:text-base lg:text-lg`}
              >
                We believe in serving quality services which can meet customers'
                requirements. Our vision is to bring out the best in people,
                technology, and processes with top-notch quality. We build
                customer experience. Our mission is to place a consistent
                innovation to bring about an ultimate crest of triumph as our
                service.
              </p>
            </>
          )}
        </div>
        {loading ? (
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        ) : (
          <Image
            src={Team.src}
            height={Team.height}
            width={Team.width}
            alt="Team image"
            className="w-full h-auto object-cover rounded-lg"
          />
        )}
      </div>

      {/* Mission Image */}
      {loading ? (
        <div className="w-full max-w-5xl h-40 sm:h-48 lg:h-64 mx-auto my-6 sm:my-8 lg:my-10 bg-gray-200 rounded-lg animate-pulse"></div>
      ) : (
        <Image
          src={Mission.src}
          height={Mission.height}
          width={Mission.width}
          alt="Mission image"
          className="w-full max-w-5xl h-auto object-cover rounded-lg mx-auto my-6 sm:my-8 lg:my-10"
        />
      )}

      {/* What We Do Section */}
      {loading ? (
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 sm:h-24 lg:h-32 w-3/4 mx-auto bg-gray-200 rounded animate-pulse relative">
            <div className="h-6 w-48 bg-gray-200 rounded absolute top-1/4 left-0 -translate-x-4 translate-y-2"></div>
          </div>
          <div className="h-16 sm:h-20 lg:h-24 w-full max-w-3xl mx-auto bg-gray-200 rounded mt-4 sm:mt-6 animate-pulse"></div>
        </div>
      ) : (
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className={`${nunito_Sans_900.className} text-gray-100 text-4xl sm:text-5xl lg:text-7xl w-fit mx-auto relative`}
          >
            WHAT WE DO
            <p
              className={`${nunito_Sans_700.className} text-[#231F20] text-base sm:text-lg lg:text-xl absolute top-1/10 left-1/5 -translate-x-4 sm:-translate-x-6 lg:-translate-x-8 translate-y-2 sm:translate-y-3 lg:translate-y-4`}
            >
              What do we do to be remembered for?
            </p>
          </h1>
          <p
            className={`${nunito_Sans_400.className} text-gray-500 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mt-4 sm:mt-6 lg:mt-8 text-center`}
          >
            To connect smart actions and execute it with laser-like focus is our
            success mantra. Exploring client’s business for online exposure is
            an ultimately worthy goal for us. We want to be a voice of client’s
            success.
          </p>
        </div>
      )}
    </div>
  );
}
