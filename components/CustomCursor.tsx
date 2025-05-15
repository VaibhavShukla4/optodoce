"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [bubbleEffects, setBubbleEffects] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const positionRef = useRef({ x: 0, y: 0 }); // Current cursor position
  const targetRef = useRef({ x: 0, y: 0 }); // Target mouse position
  const sizeRef = useRef({ current: 24, target: 24 }); // Current and target size (diameter in pixels)
  let bubbleId = 0;

  useEffect(() => {
    // Linear interpolation function
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    // Animation loop for smooth cursor movement and scaling
    const animate = () => {
      if (cursorRef.current) {
        // Smoothly interpolate position
        positionRef.current.x = lerp(
          positionRef.current.x,
          targetRef.current.x,
          0.1
        );
        positionRef.current.y = lerp(
          positionRef.current.y,
          targetRef.current.y,
          0.1
        );

        // Smoothly interpolate size
        sizeRef.current.current = lerp(
          sizeRef.current.current,
          sizeRef.current.target,
          0.1
        );

        // Update cursor position and size
        cursorRef.current.style.transform = `translate(${
          positionRef.current.x - sizeRef.current.current / 2
        }px, ${positionRef.current.y - sizeRef.current.current / 2}px)`;
        cursorRef.current.style.width = `${sizeRef.current.current}px`;
        cursorRef.current.style.height = `${sizeRef.current.current}px`;

        // Continue animation
        requestAnimationFrame(animate);
      }
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Mouse move handler
    const moveCursor = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      // Add new bubble effect at cursor position (throttled internally)
      const newBubble = { id: bubbleId++, x: e.clientX, y: e.clientY };
      setBubbleEffects((prev) => [...prev, newBubble]);

      // Remove bubble effect after animation (1s)
      setTimeout(() => {
        setBubbleEffects((prev) =>
          prev.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, 1000);
    };

    // Hover handlers
    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isHoverable =
          e.target.tagName === "BUTTON" ||
          e.target.closest("button") ||
          e.target.tagName === "IMG" ||
          e.target.closest("img") ||
          [
            "P",
            "SPAN",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "A",
            "DIV"
          ].includes(e.target.tagName);

        if (isHoverable) {
          setIsHovering(true);
          sizeRef.current.target = 48; // Larger size when hovering
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isHoverable =
          e.target.tagName === "BUTTON" ||
          e.target.closest("button") ||
          e.target.tagName === "IMG" ||
          e.target.closest("img") ||
          [
            "P",
            "SPAN",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "A",
            "DIV"
          ].includes(e.target.tagName);

        if (isHoverable) {
          setIsHovering(false);
          sizeRef.current.target = 24; // Default size
        }
      }
    };

    // Throttle mousemove to ~30fps (33.33ms) to reduce bubble frequency
    let lastUpdate = 0;
    const throttleMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdate >= 33.33) {
        moveCursor(e);
        lastUpdate = now;
      }
    };

    window.addEventListener("mousemove", throttleMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", throttleMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference bg-white transition-opacity duration-300 ${
          isHovering ? "opacity-80" : "opacity-100"
        }`}
        style={{ width: "24px", height: "24px" }} // Initial size
      />
      {bubbleEffects.map((bubble) => (
        <div
          key={bubble.id}
          className="fixed pointer-events-none z-40 rounded-full mix-blend-difference bg-white animate-bubble"
          style={{
            left: bubble.x - 15, // Center the bubble effect
            top: bubble.y - 15,
            width: "30px",
            height: "30px"
          }}
        />
      ))}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: scale(0.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(2)
              translate(
                ${Math.random() * 20 - 10}px,
                ${Math.random() * 20 - 10}px
              ); /* Random drift for bubble effect */
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}
