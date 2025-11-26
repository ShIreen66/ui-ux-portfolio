"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FintechSpectrumCaseStudy: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="case-study-banner">
        <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <h1 className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
            Tracking System — Case Study
          </h1>

          <motion.h2 className="text-4xl md:text-5xl font-bold mt-2">
            EFSP RMU Tracking System
          </motion.h2>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Redesigning a modern and efficient reporting & monitoring platform for United Way’s Emergency Food & Shelter Program.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Role & Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Role</h3>
            <p>
              UI/UX Designer(Interaction Design • High-Fidelity UI • Design System • Information Architecture)
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>June to July 2024</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="contnt-study">
            {/* Problem Space */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-600 dark:text-gray-400">
                EFSP RMU (Emergency Food & Shelter Program — Reporting & Monitoring Unit) needed a modernized tracking system to help United Way teams efficiently manage agencies, allocations, and reporting. The legacy system suffered from cluttered workflows and inconsistent UI patterns, slowing down operations.

                I redesigned core modules—authentication, organization management, and financial allocation entry—with a strong focus on clarity, accessibility, and improved data accuracy.
              </p>
            </div>

            {/* Key Features & Flow */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Challenges Identified</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Forms were long, unstructured, and caused user fatigue.
                </li>
                <li>
                  Legacy table layout made it difficult to scan allocation data.
                </li>
                <li>
                  Navigation between Agency, Client, and Reports was confusing.
                </li>
                <li>
                  Login UI lacked clarity, hierarchy, and accessibility standards.
                </li>
              </ul>
            </div>

          </div>

          <div className="links-study">
            <a
              target="blank"
              href="https://www.figma.com/design/rMjH2SSeUxqcZRe6ol1ZdW/RMU?node-id=114-926&t=LoFcXrjVxIK81xx0-1"
            >
              Checkout figma URL
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <img src="/images/rmu-product-img.png" alt="RMU Tracking System" />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Design Principles */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Design Goals</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Modern & Simple Interface:</strong> Reduce cognitive load and align visuals with United Way’s branding.
            </li>
            <li>
              <strong>Operational Accuracy:</strong> Improve clarity of financial and allocation inputs.
            </li>
            <li>
              <strong>Faster Data Entry:</strong> Structure forms into meaningful, error-reducing sections.
            </li>
            <li>
              <strong>Improved Navigation:</strong> Streamline interaction with large data tables and multi-phase allocations.
            </li>
          </ul>
        </div>

        {/* User Testing / Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Impact</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>40% faster</strong> data entry thanks to structured, segmented forms.</li>
            <li>Improved <strong>financial accuracy</strong> from better-organized allocation fields.</li>
            <li><strong>Higher user adoption</strong> due to the modern, simplified interface.</li>
            <li><strong>More efficient</strong> organization management via improved table design and navigation.</li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Conclusion</h3>
          <p className="text-gray-600 dark:text-gray-400">
            This redesign modernized a critical internal tool for United Way teams. By simplifying interfaces, strengthening visual hierarchy, and improving data clarity, the RMU Tracking System is now more accessible, efficient, and aligned with real operational workflows.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FintechSpectrumCaseStudy;
