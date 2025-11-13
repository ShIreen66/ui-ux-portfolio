"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const moreImages = [
  "/images/gallery/gallery-img-9.png",
  "/images/gallery/gallery-img-10.png",
  "/images/gallery/gallery-img-11.png",
  "/images/gallery/gallery-img-12.png",
  "/images/gallery/gallery-img-13.png",
  "/images/gallery/gallery-img-14.png",
  "/images/gallery/gallery-img-15.png",
  "/images/gallery/gallery-img-16.png",
  "/images/gallery/gallery-img-17.png",
  "/images/gallery/gallery-img-18.png",
  "/images/gallery/gallery-img-19.png",
  "/images/gallery/gallery-img-20.png",
  "/images/gallery/gallery-img-21.png",
  "/images/gallery/gallery-img-22.png",
  "/images/gallery/gallery-img-23.png",
  "/images/gallery/gallery-img-24.png",
  "/images/gallery/gallery-img-25.png",
  "/images/gallery/gallery-img-26.png",
  "/images/gallery/gallery-img-27.png",
  "/images/gallery/gallery-img-28.png",
  "/images/gallery/gallery-img-29.png",
  "/images/gallery/gallery-img-61.png",
];

export default function MoreGalleryPage() {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-gradient-to-b from-white container to-gray-50 dark:from-gray-950 dark:to-gray-900 pt-32 pb-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
          <h2>Design Gallery</h2>
          <p className="text-xl text-orange-500">( 05 )</p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Extended collection of creative projects and UI explorations beyond
          the main gallery.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ gap: "24px" }}
      >
        {moreImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <span className="text-white text-lg font-medium tracking-wide">
                Project {index + 7}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/#gallery">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-black/20 dark:border-white/20 text-gray-900 dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            Back to Gallery
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
