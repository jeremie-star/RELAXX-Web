"use client";

import { motion } from "framer-motion";
import { Wrench, Cloud, Wallet } from "lucide-react";
import Link from "next/link";

export default function B2BPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Onze Missie
              </h1>
              <p className="text-xl mb-6">
                Een stressvrije ervaring creëren waar gemak, confort en kwaliteit centraal staan.
              </p>
              <p className="text-xl">
                Snel, toegankelijk en duurzaam—dat is onze belofte.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/7479883/pexels-photo-7479883.jpeg"
                alt="Massage Chair Experience"
                className="rounded-lg w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Standard Section */}
      <section className="bg-sky-100 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              De nieuwe standaard<br />in on-demand wellness
            </h2>
            <p className="text-xl">
              Of je nu nan het winkelen bent, onderwegg naaroe vonisse locaties<br />
              als stratregisch locaties zis winkelcentra, luchthaven en stations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb12 flex-1">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Flexibele<br />verdienmodellen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <Wrench className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Geen zorgen</h3>
              </div>
              <div className="text-center">
                <Cloud className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Extra service</h3>
              </div>
              <div className="text-center">
                <Wallet className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Nieuwe inkomstenstroom</h3>
              </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Flexisbele verzeinmodel</h3>
                <p className="text-lg mb-4">Revenue-sharing model</p>
                <p className="text-lg">
                  Ontvang en vakt ja vervangst stolen bevoegzt saken oond zorgen.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Lease model</h3>
                <p className="text-lg mb-4">Betaal oven 100 vam achabe</p>
                <p className="text-lg mb-8">
                  Betaal α met elts bedrag p mera ann en behoud sell 1/50-vamnlgen.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#partner"
                    className="bg-[#1B2B3A] text-white px-6 py-3 rounded hover:bg-[#1B2B3A]/90 transition-colors"
                  >
                    Word partner
                  </Link>
                  <Link
                    href="#proposal"
                    className="border border-[#1B2B3A] px-6 py-3 rounded hover:bg-gray-50 transition-colors"
                  >
                    Vraag en voorstel
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}