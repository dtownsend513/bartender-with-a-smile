"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      eventType: formData.get("eventType"),
      eventDate: formData.get("eventDate"),
      guestCount: formData.get("guestCount"),
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
        setStatusMessage("Thank you! Your request has been sent.");
        form.reset();
      } else {
        setStatusMessage("Message failed to send. Please call 513-344-4446.");
      }
    } catch (error) {
      setStatusMessage("Something went wrong. Please call 513-344-4446.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080604] text-white">
      <section className="relative px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Request Availability
            </p>

            <h1 className="mb-8 text-5xl font-light leading-tight md:text-7xl">
              Let’s Talk About
              <br />
              Your Event
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/70">
              Tell us the date, location, guest count, and the type of
              celebration you are planning. Bartender With A Smile will follow
              up with availability and next steps.
            </p>

            <div className="grid gap-5">
              <a
                href="tel:5133444446"
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-amber-300/60 hover:bg-white/[0.07]"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Call
                </p>
                <p className="text-xl font-semibold transition group-hover:text-amber-300">
                  513-344-4446
                </p>
              </a>

              <a
                href="mailto:bartenderwithasmile@myyahoo.com"
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-amber-300/60 hover:bg-white/[0.07]"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Email
                </p>
                <p className="break-all text-xl font-semibold transition group-hover:text-amber-300">
                  bartenderwithasmile@myyahoo.com
                </p>
              </a>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Serving
                </p>
                <p className="text-xl font-semibold">
                  Cincinnati, Ohio 45213
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/[0.07] p-6">
              <p className="text-sm leading-relaxed text-white/75">
                Certificate of Insurance (COI) provided upon request. Perfect
                for venues, corporate events, weddings, and private
                celebrations that require vendor documentation.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="https://www.theknot.com/marketplace/bartender-with-a-smile-cincinnati-oh-2087539"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/15 bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105 hover:bg-amber-300"
              >
                Read Reviews On The Knot
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-amber-300/30 via-white/5 to-transparent blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#120d09]/90 p-6 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Booking Form
                </p>

                <h2 className="text-3xl font-light md:text-4xl">
                  Request A Quote
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-amber-300"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-amber-300"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-amber-300"
                      placeholder="513-000-0000"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition focus:border-amber-300"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Wedding</option>
                      <option>Private Party</option>
                      <option>Birthday Celebration</option>
                      <option>Corporate Event</option>
                      <option>Holiday Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition focus:border-amber-300"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                      Guest Count
                    </label>
                    <input
                      type="text"
                      name="guestCount"
                      className="w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-amber-300"
                      placeholder="Approx. number of guests"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Event Details
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-amber-300"
                    placeholder="Tell us about your event, location, timing, and anything the bartender should know."
                  />
                </div>

                {statusMessage && (
                  <p className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/75">
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-amber-400 px-8 py-5 text-sm font-bold uppercase tracking-[0.22em] text-black transition hover:scale-[1.02] hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending Request..." : "Send Booking Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}