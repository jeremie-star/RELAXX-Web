"use client";

import { Clock, Euro, Plane, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Fast & Convenient",
      description: "",
    },
    {
      icon: <Euro className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Affordable",
      description: "Starting at €1,50 per session",
    },
    {
      icon: <Sparkles className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Hygienic & Maintained",
      description: "Cleaned daily, always ready",
    },
    {
      icon: <Plane className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Various Locations",
      description: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative bg-cream-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-4 p-4 rounded-full border-2 border-black">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
              {feature.description && (
                <p className="text-black/80">{feature.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-24 max-w-5xl mx-auto">
          <hr className="border-black/20" />
        </div>
      </div>
    </section>
  );
}