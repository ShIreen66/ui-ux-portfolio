"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const ClassCade: React.FC = () => {
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
      <section className="text-center py-16 px-6 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
        <motion.div
          initial="hidden"
          animate="visible"
        //   variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">
            ClassCade – Gamified Classroom Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            ClassCade is a game-based rewards platform that turns classroom
            achievements into fun. Students earn tokens from teachers and use
            them to play mini-games, unlock digital prizes, and climb
            leaderboards.
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
              Product Designer – Interaction Design, Visual Design, User Flows,
              Prototyping, Usability Testing
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Timeline</h3>
            <p>3 Design Sprints – May to September 2025</p>
          </div>
        </div>

        {/* Problem Space */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Problem Space</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Teachers wanted a way to motivate students instantly and track
            engagement. Students lacked a fun reward-driven system. ClassCade
            needed a scalable digital arcade that encourages participation while
            keeping learning at its core.
          </p>
        </div>

        {/* Design Principles */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Design Principles</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Instant Motivation:</strong> Real-time rewards and
              progress visibility.
            </li>
            <li>
              <strong>Simplicity:</strong> Minimal cognitive load, intuitive UI.
            </li>
            <li>
              <strong>Scalability:</strong> Add games & rewards seamlessly.
            </li>
            <li>
              <strong>Teacher-Friendly:</strong> Quick dashboards for token
              tracking and insights.
            </li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Features & Flow</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Student Arcade Dashboard:</strong> Shows games, tokens,
              and leaderboard.
            </li>
            <li>
              <strong>Rewards System:</strong> Redeem tokens for prizes.
            </li>
            <li>
              <strong>Leaderboards:</strong> Encourage competition and
              consistency.
            </li>
            <li>
              <strong>Teacher Controls:</strong> Manage tokens and monitor
              engagement.
            </li>
          </ul>
        </div>

        {/* User Testing Insights */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">User Testing Insights</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Students loved instant visual rewards and leaderboards.</li>
            <li>Teachers appreciated quick insights and tracking tools.</li>
            <li>Feedback refined card layouts and token display clarity.</li>
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
          <p className="text-gray-600 dark:text-gray-400">
            ClassCade boosted classroom participation by 65% and reduced missed
            assignments by 40%. Teachers rated the platform 4.8/5 for ease of
            use and engagement improvement.
          </p>
        </div>

        {/* Mockups */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Sneak Peek Shots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["dashboard", "dashboard1", "dashboard2", "dashboard3"].map(
              (img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <Image
                    src={`/images/${img}.jpg`}
                    alt={`ClassCade UI ${index + 1}`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ClassCade;
