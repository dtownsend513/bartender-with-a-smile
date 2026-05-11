"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      alert(
        "Email integration will be connected before launch."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f3ee]">
      
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <p className="uppercase tracking-[0.3em] text-sm text-amber-700 font-semibold mb-5">
            Contact Komposition Beauty
          </p>

          <h1 className="text-5xl md:text-7xl font-light text-gray-950 leading-tight mb-8">
            We’d Love
            <br />
            To Hear From You
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
            Questions, product inquiries, collaborations, or custom requests —
            connect with us anytime.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
            
            {/* Contact Form */}
            <Card className="border-0 rounded-[2rem] shadow-sm bg-white">
              <CardContent className="p-8 md:p-12">
                
                <div className="mb-10">
                  <h2 className="text-3xl font-light text-gray-950 mb-4">
                    Send A Message
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    We’ll respond as soon as possible regarding your inquiry.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="h-14 rounded-2xl border-[#d8c7b6]"
                    />

                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="h-14 rounded-2xl border-[#d8c7b6]"
                    />
                  </div>

                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="h-14 rounded-2xl border-[#d8c7b6]"
                  />

                  <textarea
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your inquiry..."
                    className="w-full rounded-[1.5rem] border border-[#d8c7b6] bg-white px-5 py-4 text-gray-900 outline-none transition-all focus:border-amber-700 focus:ring-2 focus:ring-amber-100 resize-none"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-7 text-lg font-semibold"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Location */}
              <Card className="border-0 rounded-[2rem] shadow-sm bg-white">
                <CardContent className="p-8">
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-amber-700 mt-1" />

                    <div>
                      <h3 className="text-xl font-semibold text-gray-950 mb-3">
                        Based In Cincinnati
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        Handmade bath and body products crafted with care and shipped across the United States.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 rounded-[2rem] shadow-sm bg-white">
                <CardContent className="p-8">
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-amber-700 mt-1" />

                    <div>
                      <h3 className="text-xl font-semibold text-gray-950 mb-3">
                        Customer Support
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        Email integration will be connected before launch.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Socials */}
              <Card className="border-0 rounded-[2rem] shadow-sm bg-white">
                <CardContent className="p-8">
                  
                  <h3 className="text-xl font-semibold text-gray-950 mb-6">
                    Follow Along
                  </h3>

                  <div className="space-y-4">
                    
                    <a
                      href="https://www.instagram.com/kompbeau/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-[#eadfd4] px-5 py-4 transition-all hover:bg-[#f8f3ee]"
                    >
                      <Instagram className="h-5 w-5 text-amber-700" />
                      <span className="text-gray-800 font-medium">
                        Instagram
                      </span>
                    </a>

                    <a
                      href="https://www.facebook.com/profile.php?id=61554421294812"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-[#eadfd4] px-5 py-4 transition-all hover:bg-[#f8f3ee]"
                    >
                      <Facebook className="h-5 w-5 text-amber-700" />
                      <span className="text-gray-800 font-medium">
                        Facebook
                      </span>
                    </a>

                    <a
                      href="https://www.youtube.com/@The_Komposition"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-[#eadfd4] px-5 py-4 transition-all hover:bg-[#f8f3ee]"
                    >
                      <Youtube className="h-5 w-5 text-amber-700" />
                      <span className="text-gray-800 font-medium">
                        YouTube
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-0 rounded-[2rem] shadow-sm bg-white">
                <CardContent className="p-8">
                  
                  <h3 className="text-xl font-semibold text-gray-950 mb-6">
                    Frequently Asked
                  </h3>

                  <div className="space-y-6">
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Do you ship nationwide?
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        Yes — we ship our products throughout the United States.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Are your products handmade?
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        Yes — our bath and body products are crafted in small batches.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Do you accept custom requests?
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        Contact us directly to discuss custom product inquiries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}