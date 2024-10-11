"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smoothly update cursor position using requestAnimationFrame
    const updatePosition = () => {
      setPosition((prev) => ({
        x: prev.x + (mouseX - prev.x) * 0.2, // Higher factor for faster response
        y: prev.y + (mouseY - prev.y) * 0.2,
      }));
      requestAnimationFrame(updatePosition);
    };

    // Start the cursor follower animation loop
    updatePosition();

    // Show/hide cursor on mouse events
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none w-40 h-40 rounded-full border-2 border-black transition-opacity duration-150 ease-in-out transform ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x - 40}px, ${position.y - 40}px, 0)`,
      }}
    ></div>
  );
}
