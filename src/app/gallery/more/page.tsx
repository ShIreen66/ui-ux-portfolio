"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const moreImages = [
  "/images/gallery/img-gallery-6.png",
  "/images/gallery/gallery-img-29.png",
  "/images/gallery/img-gallery-3.png",
  "/images/gallery/img-gallery-5.png",
  "/images/gallery/img-gallery-7.png",

  "/images/gallery/img-gallery-23.png",
  "/images/gallery/img-gallery-24.png",
  "/images/gallery/img-gallery-25.png",
  "/images/gallery/img-gallery-26.png",
  "/images/gallery/img-gallery-28.png",

  "/images/gallery/img-gallery-1.png",
  "/images/gallery/img-gallery-2.png",
  "/images/gallery/img-gallery-8.png",
  "/images/gallery/img-gallery-9.png",
  "/images/gallery/img-gallery-10.png",
  "/images/gallery/img-gallery-11.png",
  "/images/gallery/img-gallery-12.png",
  "/images/gallery/img-gallery-13.png",
  "/images/gallery/img-gallery-14.png",
  "/images/gallery/img-gallery-15.png",
  "/images/gallery/img-gallery-16.png",
  "/images/gallery/img-gallery-17.png",
  "/images/gallery/img-gallery-18.png",
  "/images/gallery/img-gallery-19.png",
  "/images/gallery/img-gallery-20.png",
  "/images/gallery/img-gallery-21.png",
  "/images/gallery/img-gallery-22.png",
];

export default function MoreGalleryPage() {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-gradient-to-b from-white container to-gray-50 dark:from-gray-950 dark:to-gray-900 pt-32 pb-20 px-6 md:px-12 "
    >
      <div
        className="custom-gallery"
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
            className="relative overflow-hidden shadow-lg group cursor-pointer bg-gray-100 dark:bg-gray-800"
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
                {/* Project {index + 7} */}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
