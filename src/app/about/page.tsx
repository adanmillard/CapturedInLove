// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="py-32 bg-[#F8F8F6)] text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          About Captured In Love
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-neutral-700">
          Behind the camera is someone who genuinely cares about the moments you'll want to remember forever.
        </p>
      </section>
      <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden bg-neutral-200 h-[28rem] md:h-[36rem] flex items-center justify-center">
            <span className="text-neutral-500">Portrait Image</span>
          </div>
          <div>
           <h2 className="text-3xl font-serif mb-6">Hey, I'm Tammy</h2>
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p>
                I started Captured In Love Media because I believe the most
                meaningful moments aren't staged, they're felt.
              </p>
              <p>
                Whether it's a wedding, a quiet glance, or a laugh you didn't
                know was happening, my goal is simple: to capture moments as
                they truly are.
              </p>
              <p>
                This isn't about trends or perfection. It's about emotion,
                connection, and memories that still feel real years later.
              </p>
            </div>
            </div>
        </div>
      </section>
<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-serif mb-16 text-center">
My Approach
</h2>
<div className="grid md:grid-cols-3 gap-12 text-center">
<div>
<h3 className="text-xl font-semibold mb-4">Unobtrusive</h3>
<p className="text-neutral-600">
I blend into the background so your moments unfold naturally.
</p>
</div>
<div>
<h3 className="text-xl font-semibold mb-4">Emotion First</h3>
<p className="text-neutral-600">
I focus on feeling, not forcing poses or moments.
</p>
</div>
<div>
<h3 className="text-xl font-semibold mb-4">Story-Driven</h3>
<p className="text-neutral-600">
Every session is captured as a story, not a highlight reel.
</p>
</div>
</div>
</div>
      </section>
      <section className="py-24 md:py-32 max-w-4xl mx-auto px-6 text-center">
<blockquote className="text-2xl md:text-3xl font-serif mb-6">
“We didn't just get photos — we got memories that still feel alive.”
</blockquote>
<p className="text-neutral-600">— Past Client</p>
      </section>
      <section className="py-32 bg-[#E8CFC5] text-center px-6">
<h2 className="text-4xl font-serif mb-6">Let's Tell Your Story</h2>
<p className="mb-8 text-neutral-700">
If this resonates with you, I'd love to hear about what you're planning.
</p>
<button className="rounded-2xl px-10 py-6 text-lg bg-white text-black">
Get in Touch
</button>
</section>
    </main>
  );
}
