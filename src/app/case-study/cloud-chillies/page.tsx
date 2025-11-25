"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CloudChilliesCaseStudy: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="case-study-banner">
        <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <h1 className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
            CloudChillies Case Study
          </h1>

          <motion.h2 className="text-4xl md:text-5xl font-bold mt-2">
            Enterprise Salesforce + AI: Transforming Operations & Speed-to-Value
          </motion.h2>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            CloudChillies is a Salesforce-first consultancy delivering multi-cloud implementations,
            integrations, custom development and managed services — helping organizations in finance,
            nonprofits and enterprise sectors accelerate digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Main Case Study Content */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Role & Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Role</h3>
            <p>
              Lead Solution Designer – Platform Strategy, Cross-Cloud Architecture, Integration
              Design, Lightning UI, and Automation Roadmap
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>August to September 2024</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="contnt-study">
            {/* Problem Space */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Problem Space</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clients faced fragmented systems, slow product launches, and manual processes across
                sales, service and fundraising. The goal was a resilient, auditable Salesforce
                platform that integrates core services, reduces manual overhead, and enables AI-driven automation.
              </p>
            </div>

            {/* Design Principles */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Design Principles</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Salesforce-First:</strong> Build solutions native to Salesforce clouds.</li>
                <li><strong>Outcome-Driven:</strong> Focus on measurable efficiency and speed-to-market gains.</li>
                <li><strong>Integration-Ready:</strong> Seamless connectors to accounting, payment gateways, and data providers.</li>
                <li><strong>Secure & Compliant:</strong> Maintain auditability and enterprise security standards.</li>
              </ul>
            </div>
          </div>

          <div className="links-study">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/design/itbkJ2rUqdEIY4nBbx5DkV/CC-Landing-page?node-id=715-1323&t=cb5vdgcTMrs8oRNW-1"
            >
              Checkout figma URL
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            <img src="/images/cloudchillies-product-img.png" alt="Fintech Spectrum" />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Capabilities & Flow</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Multi-Cloud Implementation:</strong> Sales, Service, Financial Services & Nonprofit Cloud rollouts.</li>
            <li><strong>Custom Development & AppExchange:</strong> Lightning apps, portals, APIs and product packaging.</li>
            <li><strong>Integrations:</strong> Connectors for ERP, payment gateways, identity & credit providers.</li>
            <li><strong>Managed Services & AI:</strong> Ongoing support, automation, and AI augmentations to speed decisioning.</li>
          </ul>
        </div>

        {/* Implementation Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Implementation Insights</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Cross-cloud data models reduce duplicate records and simplify reporting.</li>
            <li>Prebuilt integration patterns accelerated time-to-market for lending & donor journeys.</li>
            <li>Automated workflows cut manual touchpoints and improved SLA adherence for service teams.</li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
          <p className="text-gray-600 dark:text-gray-400">
            After the rollout, clients reported significant reductions in manual workload, faster launch
            cycles, and improved process efficiency — enabling teams to focus on strategy and growth rather than operational patching.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CloudChilliesCaseStudy;
