"use client";

export default function Contact() {
  return (
    <main className="bg-[#F9F8F6] text-[#1C1C1C] ">

      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-neutral-600">
          Tell me a little about what you're planning and let's see if we're the right fit.
        </p>
      </section>
      <section className="pb-32 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <form className="bg-white rounded-2xl shadow-sm p-10 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">What are you looking for?</label>
              <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Wedding</option>
                <option>Content Creation</option>
                <option>Brand / Lifestyle</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tell me about your idea</label>
              <textarea
                rows={5}
                placeholder="A few details about your vision, dates, or goals..."
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl px-8 py-4 bg-black text-white text-lg"
            >
              Send Enquiry
            </button>
          </form>
          <div className="bg-white rounded-2xl shadow-sm p-10">
            <h2 className="text-2xl font-serif mb-6">
              Preferred Date
            </h2>
            <p className="text-neutral-600 mb-6">
              Select a date you're considering. Availability will be confirmed after your enquiry.
            </p>
            <input
              type="date"
              className="w-full rounded-xl border border-neutral-300 px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="mt-10 p-6 bg-[#F1F0EE] rounded-xl text-sm text-neutral-600">
              <p>
                For weddings, dates can book out far in advance. Submitting a date doesn't reserve it — this just helps start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-[#E8CFC5] text-center px-6">
        <h2 className="text-4xl font-serif mb-6">
          Let's Create Something Meaningful
        </h2>
        <p className="mb-8 text-neutral-700">
          I reply personally to every enquiry.
        </p>
      </section>
    </main>
  );
}
