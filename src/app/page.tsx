import Link from "next/link";
import Carousel from "./components/ui/Carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-500">Captured in Love</h1>
      < Carousel />
      <div>
        <h2 className="text-gray-500">What people are saying!</h2>
        <p className="text-gray-500">Hi I love this woman doing my wedding, how good 10 out of 10</p>
      </div>
    </main>
  );
}
