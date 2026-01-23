import Carousel from "./components/ui/HeroCarousel";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden flex items-center">
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
      <section className="py-24 md:py-32 lg:py-40 max-w-7xl mx-auto px-6">
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
                <div className="min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] bg-neutral-300 flex items-center justify-center bg-neutral-300 flex items-center transition-transform duration-500 group-hover:scale-105 hover:shadow-xl transition-shadow duration-300">
                  <span className="text-neutral-600"> Image Placeholder</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 md:py-32 lg:py-40 bg-white">
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
      <section className="py-24 md:py-32 lg:py-40 max-w-5xl mx-auto px-6 text-center">
        <blockquote className="text-xl font-serif mb-6">
            "We had Tammy at our wedding and she was absolutely incredible. Not only does Tammy do a fabulous job with her content creation, she also has such a lovely, kind aura which is great to have around on your wedding day. Your wedding day goes by so fast and many moments are easily forgotten but Tammy captured so many of those small moments and we still regularly watch the videos 9 months later. The best part was she sent through our gallery the very next day so we didn't have to wait long at all. Thank you Tammy for your service!! We are SO grateful and highly recommend Tammy to be your Content Creator."
        </blockquote>
        <p className="text-neutral-600"> - Geena & Hamish.</p>
      </section>
      <section className="py-32 md:py-40 lg:py-48 bg-[#E8CFC5] text-center">
        <h2 className="text-4xl font-serif mb-8">Let's Capture Your Story</h2>
        <button className="rounded-2xl px-10 py-6 text-lg">Get in Touch</button>
      </section>
    </main>
  );
}
