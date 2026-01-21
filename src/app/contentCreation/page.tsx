export default function ContentCreation() {
  return (
    <main className="bg-[#F9F8F6] text-[#1C1C1C]">
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Content That Connects
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-10">
          Cinematic, social-first content for brands, creators, and couples who value storytelling over trends.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="rounded-2xl px-8 py-4 bg-black text-white">
            View Work
          </button>
          <button className="rounded-2xl px-8 py-4 border border-black">
            Start a Project
          </button>
        </div>
      </section>
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
            What I Create
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Short-Form Video</h3>
              <p className="text-neutral-600">
                Instagram Reels, TikTok, and social-first edits designed to stop the scroll.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Photography</h3>
              <p className="text-neutral-600">
                Editorial, natural imagery for social media, websites, and campaigns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Brand Storytelling</h3>
              <p className="text-neutral-600">
                Content that communicates emotion, identity, and atmosphere — not just products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-[#F1F0EE]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">
            Who This Is For
          </h2>
          <ul className="space-y-4 text-lg text-neutral-700">
            <li>Personal brands & creators</li>
            <li>Wedding & event professionals</li>
            <li>Lifestyle & hospitality brands</li>
            <li>Couples wanting elevated social content</li>
          </ul>
          <p className="mt-8 text-neutral-600 italic">
            If your brand values emotion, connection, and aesthetics — this is for you.
          </p>
        </div>
      </section>
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">
            My Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Understand</h3>
              <p className="text-neutral-600">
                We align on your brand, goals, and audience before anything is shot.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Create</h3>
              <p className="text-neutral-600">
                I capture intentional content that feels natural and cinematic.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Deliver</h3>
              <p className="text-neutral-600">
                High-quality, ready-to-post assets optimised for social platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div className="overflow-hidden rounded-2xl shadow-lg bg-neutral-300 h-80 flex items-center justify-center">
                <span className="text-neutral-600">Content Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-32 bg-white text-center px-6">
        <blockquote className="text-2xl md:text-3xl font-serif mb-6 max-w-4xl mx-auto">
          “The content didn't just look good — it felt like us.”
        </blockquote>
        <p className="text-neutral-600">— Content Client</p>
      </section>
      <section className="py-32 bg-[#E8CFC5] text-center px-6">
        <h2 className="text-4xl font-serif mb-8">
          Let's Create Something That Connects
        </h2>
        <button className="rounded-2xl px-10 py-6 text-lg bg-black text-white">
          Start a Project
        </button>
      </section>

    </main>
  );
}
