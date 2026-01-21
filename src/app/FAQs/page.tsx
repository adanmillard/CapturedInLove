"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do we book a session?",
    a: "Simply get in touch via the contact form or Instagram. From there we'll chat through your vision, availability, and next steps."
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes — I'm available for travel both within New Zealand and internationally. Travel costs are discussed transparently during booking."
  },
  {
    q: "How far in advance should we book?",
    a: "For weddings, I recommend booking as early as possible. For content creation and smaller shoots, availability can often be flexible."
  },
  {
    q: "What's your shooting style?",
    a: "My approach is natural and unobtrusive. I focus on real moments, genuine emotion, and storytelling rather than stiff posing."
  },
  {
    q: "When will we receive our photos or videos?",
    a: "Turnaround times depend on the project, but you can expect a clear delivery timeline before we begin."
  },
  {
    q: "Can we request specific shots or ideas?",
    a: "Absolutely. I love collaborating and welcome inspiration while still keeping things natural and authentic."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#F9F8F6] text-[#1C1C1C]">
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-neutral-600">
          Everything you need to know — and if it’s not here, just ask.
        </p>
      </section>
      <section className="pb-32 max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left px-8 py-6"
                >
                  <span className="text-lg font-medium">
                    {item.q}
                  </span>
                  <span className="text-2xl">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-8 pb-6 text-neutral-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-32 bg-[#E8CFC5] text-center px-6">
        <h2 className="text-4xl font-serif mb-6">
          Still Have Questions?
        </h2>
        <p className="mb-8 text-neutral-700">
          I'm always happy to chat and help you figure out what's right for you.
        </p>
        <button className="rounded-2xl px-10 py-6 text-lg bg-black text-white">
          Get in Touch
        </button>
      </section>
    </main>
  );
}
