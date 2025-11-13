'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Alsco: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white shadow-sm py-16 px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
        //   variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-green-700 text-sm font-semibold uppercase tracking-wide">
            Alsco Uniforms – Digital Service Platform
          </h1>
          <motion.h2
            // variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Designing a Smarter B2B Portal for Alsco Uniforms
          </motion.h2>
          <motion.p
            // variants={fadeUp}
            className="text-gray-600 mt-4 text-lg leading-relaxed"
          >
            Alsco Uniforms has evolved from a towel delivery and uniform rental
            business in Lincoln, Nebraska, into a comprehensive provider of
            uniforms, linens, and facility services. The platform helps
            businesses manage these services efficiently while emphasizing
            Alsco’s commitment to customer satisfaction.
          </motion.p>
        </motion.div>
      </section>

      {/* Case Study Sections */}
      <main className="max-w-5xl mx-auto py-16 px-6 space-y-16">
        {/* Role & Timeline */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">My Role</h3>
            <p className="text-gray-600">
              Product Designer – Interaction Design, Visual Design, User Flows,
              Prototyping, Usability Testing
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-gray-600">3 Design Sprints – January to March 2025</p>
          </div>
        </section>

        {/* Problem Space */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Problem Space</h3>
          <p className="text-gray-600 leading-relaxed">
            Alsco offers a wide range of services including uniforms, linens,
            floor care, washroom supplies, and first aid programs. The challenge
            was to organize this vast catalogue into a{' '}
            <strong>clear, user-friendly interface</strong> that allows
            businesses to quickly locate and understand services.
          </p>
        </section>

        {/* Design Principles */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Design Principles</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Clarity:</strong> Organize services into intuitive
              categories.
            </li>
            <li>
              <strong>Scalability:</strong> Interface supports future expansion.
            </li>
            <li>
              <strong>User-Centric:</strong> Highlight value and benefits.
            </li>
            <li>
              <strong>Professional Look:</strong> Clean and trustworthy visuals.
            </li>
          </ul>
        </section>

        {/* Sneak Peek */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Sneak Peek Shots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['uniform.jpg', 'uniform1.jpg', 'uniform2.jpg', 'uniform3.jpg'].map(
              (img, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={`/images/${img}`}
                    alt="Uniform"
                    className="w-full h-56 object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Alsco;
