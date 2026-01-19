import Carousel from "./components/ui/HeroCarousel";

export default function Home() {
  return (
    <main>
      <section className="relative h-screen overflow-hidden">
      < Carousel />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 text-shadow-md">
            Captured In Love Media
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 text-shadow-md">
            We capture moments you'll relive forever.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="rounded-2xl px-8 py-4 bg-white text-black">View Portfolio</button>
            <button className="rounded-2xl px-8 py-4 bg-white text-black">Book a Session</button>
          </div>
        </div>
      </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Recent Moments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="h-80 bg-neutral-300 flex items-center transition-transform duration-500 group-hover:scale-105">
                  <span className="text-neutral-600"> Image Placeholder</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
            How it Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Connect", desc: "We learn your story and vision." },
              { title: "Capture", desc: "We film and photograph your moments." },
              { title: "Deliver", desc: "Beautifully edited memories, ready to share." },
            ].map((step) => (
              <div key={ step.title}>
                <h3 className="text-xl font-semibold mb-4">
                  { step.title}
                </h3>
                <p className="text-neutral-600">
                  { step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
