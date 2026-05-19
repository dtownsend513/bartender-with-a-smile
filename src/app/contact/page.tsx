"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#0f0b08] text-white">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-amber-400 font-semibold mb-5">
              Contact
            </p>

            <h1 className="text-5xl md:text-7xl font-light mb-8">
              Get In Touch
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mb-12">
              For bookings, weddings, private events, or general inquiries,
              please call or send a message using the form.
            </p>

            <div className="space-y-8 text-lg">
              <div>
                <p className="text-amber-400 mb-2 uppercase text-sm tracking-[0.2em]">
                  Phone
                </p>

                <a
                  href="tel:5133444446"
                  className="hover:text-amber-400 transition"
                >
                  513-344-4446
                </a>
              </div>

              <div>
                <p className="text-amber-400 mb-2 uppercase text-sm tracking-[0.2em]">
                  Email
                </p>

                <a
                  href="mailto:bartenderwithasmile@myyahoo.com"
                  className="hover:text-amber-400 transition"
                >
                  bartenderwithasmile@myyahoo.com
                </a>
              </div>

              <div>
                <p className="text-amber-400 mb-2 uppercase text-sm tracking-[0.2em]">
                  Location
                </p>

                <p>Cincinnati, Ohio 45213</p>
              </div>
            </div>

            {/* The Knot CTA */}
            <div className="mt-14">
              <a
                href="https://www.theknot.com/marketplace/bartender-with-a-smile-cincinnati-oh-2087539"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 rounded-2xl hover:scale-105 transition"
              >
                <span className="font-semibold">
                  Read Reviews On The Knot
                </span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#18120d] border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-semibold mb-8">
              Contact Us
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-white/60 mb-3">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-white/60 mb-3">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-white/60 mb-3">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-white/60 mb-3">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-400 hover:bg-amber-300 text-black py-5 rounded-2xl font-semibold transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}