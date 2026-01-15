// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg max-w-xl text-center">
        Welcome to our Next.js website! This About page was created using the App Router and TypeScript.
        Next.js lets you build powerful websites with server-side rendering, static generation, and API routes all in one project.
      </p>
    </main>
  );
}
