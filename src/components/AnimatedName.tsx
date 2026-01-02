"use client";

import { useEffect, useState } from "react";

export default function AnimatedName() {
  const text = "Hello, I'm Peter.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="mb-8">
      <h1 className="font-handwritten text-5xl md:text-6xl">
        {displayedText}
      </h1>
    </div>
  );
}
