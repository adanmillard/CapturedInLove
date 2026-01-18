// app/about/page.tsx
import React from "react";

export default function Faqs() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div>
        <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-500">FAQS</h1>
      <p className="text-lg max-w-xl text-center text-gray-500">
        FAQS
      </p>
        </div>
        <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-500">Q1</h1>
      <p className="text-lg max-w-xl text-center text-gray-500">
        A1
      </p>
        </div>
        <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-500">Q2</h1>
      <p className="text-lg max-w-xl text-center text-gray-500">
        A2
      </p>
        </div>
        <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-500">Q3</h1>
      <p className="text-lg max-w-xl text-center text-gray-500">
        A3
      </p>
        </div>
      </div>
    </main>
  );
}
