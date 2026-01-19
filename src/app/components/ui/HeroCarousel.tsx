"use client";

import { useEffect, useState } from "react";

const slides = [
  { id: 1, image: "https://images.squarespace-cdn.com/content/v1/61f8418556cc1a10dda1bdc6/129e74d1-7105-4aaa-9ca5-04999abab6cd/CURATEWEDDINGS+58_websize.jpg?format=1000w" },
  { id: 2, image: "https://images.squarespace-cdn.com/content/v1/61f8418556cc1a10dda1bdc6/1f5e510e-b1c5-45da-8696-d0ec59285b38/CURATEWEDDINGS+84_websize.jpg?format=1500w" },
  { id: 3, image: "https://images.squarespace-cdn.com/content/v1/61f8418556cc1a10dda1bdc6/16b871d3-38a5-4331-ac46-efb723387d63/CURATEWEDDINGS+84_websize+%282%29.jpg?format=1000w" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, 7000)

    return () => clearInterval(interval);
  }, [slides])

  return (
     <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 text-black ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
    </div>
  );
}
