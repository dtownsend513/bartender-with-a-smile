import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111018] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-semibold text-amber-400 mb-6">
              About Bartender With a Smile
            </h2>

            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
              Bartender With a Smile has been serving customers in
              Cincinnati, Ohio, and surrounding areas for years.
              Our mission is to serve refreshing drinks while delivering
              professional service and unforgettable experiences for every guest.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin
                className="text-amber-400 mt-1"
                size={22}
              />

              <div>
                <p className="text-xl font-medium">
                  Cincinnati, Ohio 45213
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                className="text-amber-400 mt-1"
                size={22}
              />

              <div>
                <a
                  href="tel:5133444446"
                  className="text-xl hover:text-amber-400 transition"
                >
                  513-344-4446
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock3
                className="text-amber-400 mt-1"
                size={22}
              />

              <div className="space-y-1">
                <p className="text-xl">
                  Monday - Saturday: 9:00am - 7:00pm
                </p>

                <p className="text-white/60">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-white/10 mt-16 pt-10">
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-[0.2em]">
            <Link
              href="/"
              className="hover:text-amber-400 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-amber-400 transition"
            >
              About
            </Link>

            <Link
              href="/bar-services"
              className="hover:text-amber-400 transition"
            >
              Bar Services
            </Link>

            <Link
              href="/gallery"
              className="hover:text-amber-400 transition"
            >
              Gallery
            </Link>

            <Link
              href="/private-events"
              className="hover:text-amber-400 transition"
            >
              Private Events
            </Link>

            <Link
              href="/contact"
              className="hover:text-amber-400 transition"
            >
              Contact
            </Link>
          </div>

          <div className="text-center text-white/40 text-sm mt-10">
            © {new Date().getFullYear()} Bartender With A Smile.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}