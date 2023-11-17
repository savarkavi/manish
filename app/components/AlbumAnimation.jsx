"use client";

import React from "react";
import { AlbumProvider } from "@/context/AlbumContext";
import AlbumHeader from "../components/AlbumHeader";
import AlbumPhotos from "../components/AlbumPhotos";
import { motion, AnimatePresence } from "framer-motion";

const AlbumAnimation = ({ urls }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AlbumProvider>
          <AlbumHeader />
          <AlbumPhotos urls={urls} />
        </AlbumProvider>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlbumAnimation;
