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
      <section style={{ backgroundColor: '#99D3FF' }} className="bg-sky-200 pt-24 pb-16 px-4">
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
                src="/images/service_image_1.png" 
                alt="Massage Chair"
                className="w-full"
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
              <div className="w-full max-w-md ml-6">
              <img
                src="/images/section_service.png" 
                alt="Massage Chair"
                className="w-full"
              />
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
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Rates & Session Duration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mb-8 w-full">
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
            className="text-center" 
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
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