"use client";

import { motion } from "framer-motion";
import { Monitor, User, GraduationCap } from "lucide-react";

const testimonials = [
  {
    quote: "Tussen uvee vluchten evenxusl, zalig!",
    name: "Thomas",
    location: "Brussel",
    icon: <Monitor className="w-12 h-12 text-green-600" />
  },
  {
    quote: "Mûn vaste stop in het shoppingcenter. Heerur, antspannen.",
    name: "Lotte",
    location: "Gent",
    icon: <User className="w-12 h-12 text-blue-600" />
  },
  {
    quote: "Ik kom speciaal voor de stoel ha college.",
    name: "Jamal",
    location: "KU Leuven",
    icon: <GraduationCap className="w-12 h-12 text-yellow-600" />
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-sky-200 text-black pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-between gap-2 "
          >
            <div className="max-w-xl mg-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              "Een perfect moment<br />
              om op te laden tijdens<br />
              het shoppen!"
            </h1>
            <p className="text-xl">Sophie, 34 aar, Antwerp</p>
            </div>
            <div className="w-full h-full">
              <img
                src="/images/testimone.png"
                alt="Massage Chair Experience"
                className="w-full "
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">WAT ONZE GEBRUIKERS ZEGGEN</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {testimonial.icon}
                    </div>
                    <p className="text-lg mb-4">{testimonial.quote}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">RELAXX BLOG - ONTSPANNING IN JE LEVEN</h2>
            <p className="text-lg mb-12">Elke maand een artikel over gezondheid, lifestyle en stressmanagement.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">5 redenen waarom korte pauzes je dag verbeteren</h3>
                  <p className="text-gray-600">5 redenen waarom korte pauzes je dag verbeteren</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">NIEUWE LOCATIES!</h3>
                  <ul className="space-y-2">
                    <li>Shopping Gent Zuid</li>
                    <li>Brussels Airport Terminal B</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-6">DE Gelukszitter</h2>
              <h3 className="text-2xl mb-4">Rust nemen loont - letterlijk!</h3>
              <p className="text-lg">
                Hoe werkt het; Elkeke10.000e sessle per stoel is een winnend moment. 
                De gebruiker wint dan een bedrag van € 2.000,-
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}