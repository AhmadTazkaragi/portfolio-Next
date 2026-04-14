"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LampScene = dynamic(() => import("../3d/LampScene"), {
  ssr: false,
  loading: () => (
    <div className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-black/10 animate-pulse rounded-xl" />
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
        flex flex-col md:flex-row 
        items-center justify-center md:justify-between 
        gap-4 md:gap-0 min-h-screen"
      >
        {/* TEXT */}
        <div
          className="relative z-10 w-full md:max-w-3xl 
          text-center md:text-left 
          order-2 md:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100"
          >
            Hi, I'm{" "}
            <span className="text-blue-500">Ahmad Tazkaragi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-600 dark:text-gray-300 text-lg"
          >
            Frontend Engineer | React & Next.js |
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400"
          >
            Informatics Engineering Student at the University of Aleppo
          </motion.p>
        </div>

        {/* 3D LAMP */}
        <motion.div
          initial={{ opacity: 0, y: -120, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 
          w-[250px] h-[250px] 
          md:w-[450px] md:h-[450px] 
          order-1 md:order-2 
          mt-2 md:mt-0"
        >
          <Suspense fallback={null}>
            <LampScene />
          </Suspense>
        </motion.div>

      </div>
    </section>
  );
}