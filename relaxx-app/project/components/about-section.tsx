"use client";

import { Clock, Euro } from "lucide-react";
import { motion } from "framer-motion";
// import { WaveDivider } from "./wave-divider";

export function AboutSection() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast & Convenient",
      description: "",
    },
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Affordable",
      description: "Starting at €1,50 per session",
    },
  ];

  return (
    <section id="about" className="relative bg-cream-100 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.span
            className="block text-xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What is RelaxX?
          </motion.span>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What is RelaxX?</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                RelaxX offers high-quality-fully automated massage chairs in busy locations. Experience deep relaxation in minutes – no appointment, no waiting.
              </p>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    {benefit.description && (
                      <p className="text-black/80">{benefit.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}