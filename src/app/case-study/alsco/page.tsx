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
      <section className="case-study-banner">
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

      {/* Main Case Study Content */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Role & Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Role</h3>
            <p>
              Product Designer – Interaction Design, Visual Design, User Flows, Prototyping, Usability Testing.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>January to March 2025</p>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
          <div className="contnt-study">
             {/* Problem Space */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Problem Space</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Alsco offers a wide range of services including uniforms, linens, floor care, washroom supplies, and first aid programs. The challenge was to organize this vast catalogue into a clear, user-friendly interface that allows businesses to quickly locate and understand services.
          </p>
        </div>

        {/* Design Principles */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Design Principles</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Clarity:</strong> Organize services into intuitive categories.
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
        </div>
          </div>
          <div className="links-study">
            <a target='blank' className='mobile-btn' href="https://www.figma.com/proto/Z6QbhnfLUytDS7K6MjpwEd/Alsco-Web-App?node-id=1058-1748&p=f&t=Ku19gfoMn9UkVVux-1&scaling=scale-down&content-scaling=fixed&page-id=119%3A1762&starting-point-node-id=1058%3A1748">Checkout Mobile figma URL
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a target='blank' href="https://www.figma.com/proto/Z6QbhnfLUytDS7K6MjpwEd/Alsco-Web-App?node-id=1350-6142&p=f&t=kiBIzYtrjrhuq1wt-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1350%3A6142&show-proto-sidebar=1">Checkout Desktop figma URL
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <img src="/images/alsco-product-img.png" alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-12">

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Features & Flow</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Service Catalogue:</strong> Uniforms, linens, floor care, washroom supplies, and first aid programs organized for easy discovery.
            </li>
            <li>
              <strong>Service Details:</strong> Clear descriptions, features, and customer benefits for each offering.
            </li>
            <li>
              <strong>Scalable Design:</strong> Businesses can manage subscriptions, requests, and orders digitally.

            </li>
            <li>
              <strong>Professional Look:</strong> Clean and trustworthy visuals.
            </li>
          </ul>
        </div>

        {/* User Testing Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">User Testing Insights</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Users appreciated the <b>clear categorization</b> of services and ability to navigate quickly.</li>
            <li>Highlighting <b>key service features</b> helped users understand benefits at a glance.</li>
            <li>Online account management simplified interaction with Alsco services.</li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
          <p className="text-gray-600 dark:text-gray-400">
           The platform provides a **scalable, organized, and visually clear interface** for Alsco’s diverse service offerings. Businesses can efficiently browse and manage uniforms, linens, and facility services, while Alsco strengthens its reputation for reliability and customer satisfaction. The design is future-ready, supporting the addition of new services and features without disrupting usability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Alsco;
