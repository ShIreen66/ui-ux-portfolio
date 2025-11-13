'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Moneyspot: React.FC = () => {
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
      <section className="bg-white py-16 px-6 md:px-12 text-center shadow-sm">
        <motion.div
          initial="hidden"
          animate="visible"
        //   variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
            Moneyspot Loan Platform
          </h1>
          <motion.h2
            // variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Designing a Trusted Online Loan Experience
          </motion.h2>
          <motion.p
            // variants={fadeUp}
            className="text-gray-600 mt-4 text-lg leading-relaxed"
          >
            MoneyPot is a fast, fully online loan provider that offers users
            quick access to cash while ensuring responsible lending.
            Applications take less than five minutes, and approved loans are
            usually deposited within an hour.
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
            <p className="text-gray-600">3 Design Sprints – August to November 2024</p>
          </div>
        </section>

        {/* Problem Space */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Problem Space</h3>
          <p className="text-gray-600 leading-relaxed">
            Users needed a <strong>fast, reliable, and fully online loan experience</strong>.
            The challenge was to simplify the process, communicate eligibility clearly,
            ensure secure data handling, and maintain trust.
          </p>
        </section>

        {/* Design Principles */}
        <section>
          <h3 className="text-2xl font-semibold mb-3">Design Principles</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Speed:</strong> Complete application under 5 minutes.</li>
            <li><strong>Clarity:</strong> Transparent terms and eligibility.</li>
            <li><strong>Trust:</strong> Secure and responsible experience.</li>
            <li><strong>Accessibility:</strong> Easy to use for all users.</li>
          </ul>
        </section>

        {/* Sneak Peek */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Sneak Peek Shots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['application.jpg', 'application1.jpg', 'application2.jpg'].map(
              (img, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={`/images/${img}`}
                    alt="Application"
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

export default Moneyspot;
