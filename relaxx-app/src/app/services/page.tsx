"use client";

import { motion } from "framer-motion";
import { AlertTriangle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-sky-200 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Experience comfort and technology in one. Relaxation begins as soon as you sit down.
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6588581/pexels-photo-6588581.jpeg"
                alt="Massage Chair"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shiatsu Massage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">Shiatsu Back Massage</h2>
              <h3 className="text-2xl mb-6">Technology with depth</h3>
              <ul className="space-y-4 text-lg">
                <li>• Relieve tension</li>
                <li>• Restore energy balance (Qi)</li>
                <li>• Reduce stress</li>
              </ul>
              <div className="mt-8 space-y-4">
                <p>• Rotating massage heads that knead and press</p>
                <p>• Rollers that smoothly move along the spine</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <svg
                  viewBox="0 0 200 300"
                  className="w-full h-auto"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M70,50 Q100,30 130,50 Q160,70 160,100 L160,200 Q160,230 130,250 Q100,270 70,250 Q40,230 40,200 L40,100 Q40,70 70,50" />
                  <line x1="100" y1="70" x2="100" y2="230" strokeDasharray="5,5" stroke="red" />
                  <circle cx="120" cy="100" r="15" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Rates & Session Duration</h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mb-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-2xl font-bold mb-2">4 min</div>
                <div className="text-xl">€1,50</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-2xl font-bold mb-2">10 min</div>
                <div className="text-xl">€3,00</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-2xl font-bold mb-2">45 min</div>
                <div className="text-xl">€4,50</div>
              </div>
            </div>
            <p className="text-lg text-center">
              Pay quickly and securely with contactless card or smartphone
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-2xl">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg p-2">
                  <AccordionTrigger className="flex gap-2 hover:no-underline">
                    <AlertTriangle className="h-5 w-5" />
                    How are the chairs kept hygienic?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    Our chairs are cleaned and sanitized daily to maintain the highest standards of hygiene.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg p-2">
                  <AccordionTrigger className="flex gap-2 hover:no-underline">
                    <AlertTriangle className="h-5 w-5" />
                    What if the chair doesn't work?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    Please contact our support team immediately, and we'll assist you or provide a refund.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg p-2">
                  <AccordionTrigger className="flex gap-2 hover:no-underline">
                    <HelpCircle className="h-5 w-5" />
                    Is it true that every 10,000th user wins €2,000?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    Yes! Every 10,000th user of our massage chairs has a chance to win a prize of €2,000.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}