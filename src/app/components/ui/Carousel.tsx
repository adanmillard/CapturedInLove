"use client";

import { useState } from "react";

const slides = [
  { id: 1, text: "Slide One  Placeholder Image" },
  { id: 2, text: "Slide Two  Placeholder Image" },
  { id: 3, text: "Slide Three  Placeholder Image" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto ">
      <div className="h-64 flex items-center justify-between bg-black rounded-lg text-xl font-semibold">
        <button
          onClick={prevSlide}
          className="px-4 py-2 text-white items-start"
        >
          {'<' }
        </button>
        {slides[currentIndex].text}
        <button
          onClick={nextSlide}
          className="px-4 py-2 text-white"
        >
          { '>'}
        </button>
      </div>
    </div>
  );
}
