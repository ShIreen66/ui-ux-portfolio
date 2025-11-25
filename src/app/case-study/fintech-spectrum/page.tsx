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
            Fintech Spectrum Case Study
          </h1>

          <motion.h2 className="text-4xl md:text-5xl font-bold mt-2">
            Building a Scalable Digital Lending Ecosystem on Salesforce
          </motion.h2>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Fintech Spectrum specializes in Salesforce-powered lending solutions,
            helping alternative lenders digitize loan origination, underwriting,
            servicing, and customer engagement. This case study highlights the
            transformation of lending operations using automation, integrations,
            and Financial Services Cloud.
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
              Salesforce Product Designer – Flow Design, Process Mapping,
              Experience Cloud UI, Integration Strategy, Platform Optimization
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>October to December 2024</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="contnt-study">
            {/* Problem Space */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Problem Space</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lenders struggled with fragmented systems, manual underwriting,
                and slow loan processing. Fintech Spectrum needed to build a
                unified Salesforce-based platform integrating credit checks,
                document management, payments, and borrower communication—all
                automated end-to-end.
              </p>
            </div>

            {/* Design Principles */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Design Principles</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Automation First:</strong> Minimize manual intervention
                  across loan lifecycle.
                </li>
                <li>
                  <strong>Data Accuracy:</strong> Centralize borrower,
                  underwriting & servicing data.
                </li>
                <li>
                  <strong>Scalability:</strong> Build flows and integrations that
                  scale with loan volumes.
                </li>
                <li>
                  <strong>Compliance-Ready:</strong> Ensure auditability and
                  secure data management.
                </li>
              </ul>
            </div>
          </div>

          <div className="links-study">
            <a
              target="blank"
              href="https://www.figma.com/design/7P8Xyf2GjG8WBqhop3CIdf/Fintech-Spectrum-Home-Page?node-id=0-1&t=za7lHwN5eFGLXstj-1"
            >
              Checkout figma URL
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <img src="/images/fintech-product-img.png" alt="Fintech Spectrum" />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Key Features & Flow */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Features & Flow</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Automated Loan Origination:</strong> Digital applications,
              credit checks, and identity verification.
            </li>
            <li>
              <strong>Underwriting Workspace:</strong> All borrower documents,
              risk indicators & Salesforce AI scoring.
            </li>
            <li>
              <strong>Servicing Dashboards:</strong> Payment schedules,
              reminders, renewals & collection workflows.
            </li>
            <li>
              <strong>Integrated Ecosystem:</strong> Credit bureaus, accounting,
              payment gateways & document e-signing.
            </li>
          </ul>
        </div>

        {/* User Testing / Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Implementation Insights</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Lenders valued automated credit checks and faster decisions.</li>
            <li>Borrowers benefited from a smoother application experience.</li>
            <li>Teams found the unified dashboards reduced workflow confusion.</li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
          <p className="text-gray-600 dark:text-gray-400">
            The Salesforce-powered solution reduced processing time by 55%,
            improved underwriting accuracy, and allowed lenders to scale loan
            volumes without increasing operational overhead. Customer support
            interactions dropped significantly due to clearer borrower portals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FintechSpectrumCaseStudy;
