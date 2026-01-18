// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div>

      <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-500">About Me</h1>
      <p className="text-lg max-w-xl text-center text-gray-500">
        I'm Tammy, I've got a husband and cat to feed.
      </p>
      </div>
      <div>
        <h1>Where I started</h1>
        <p>I love content creation and weddings</p>
      </div>
      <div>
        <h1>What am I doing?</h1>
        <p>Helping people with Weddings </p>
      </div>
      <div>
        <h1>Image placeholder</h1>
      </div>
      </div>
    </main>
  );
}
