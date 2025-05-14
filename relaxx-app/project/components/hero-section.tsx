"use client";

import { motion } from "framer-motion";
import { WaveDivider } from "@/components/wave-divider";
import { Navbar } from "@/components/navbar";

export function HeroSection() {
  return (
    <section className="relative bg-sky-200 min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-32 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            RELAX ON THE GO— 
            <br />
            IN JUST MINUTES.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Premium massage chairs in shopping centers, airports &amp; campuses. 
            Recharge anytime with a quick, affordable.
          </motion.p>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="/images/HomePage1.png" 
              alt="Premium Massage Chair" 
              className="mx-auto w-full max-w-[1600px]"
            />
          </motion.div>
        </div>
      </div>
      <WaveDivider position="bottom" fill="fill-cream-100" />
    </section>
  );
}