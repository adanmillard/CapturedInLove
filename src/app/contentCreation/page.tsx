// app/about/page.tsx
import React from "react";
import Carousel from "../components/ui/Carousel";

export default function ContentCreation() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div>
      <div>
      <h3 className="text-4xl font-bold mb-4 text-gray-500">Content Creation</h3>
      <p className="text-lg max-w-xl text-center text-gray-500">I create beautiful work for you to take away and love forever
      </p>
      </div>
        <div>
          <Carousel/>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-4 text-gray-500">Why Captured in Love Media?</h3>
          <p className="text-gray-500">I have a cat I have to feed</p>
        </div>
      </div>
    </main>
  );
}
