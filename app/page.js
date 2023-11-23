"use client";

import HomeNav from "./components/HomeNav";
import Hero from "./components/Home";
import About from "./components/About";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen w-screen bg-stone-950 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HomeNav />
        <Hero />
        <About />
        <Featured />
        <Gallery />
      </motion.div>
    </AnimatePresence>
  );
}
