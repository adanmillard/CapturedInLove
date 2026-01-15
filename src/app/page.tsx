import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Captured in Love</h1>
      <Link href="/about" className="text-blue-500 underline">
        Go to About Page
      </Link>
    </main>
  );
}
