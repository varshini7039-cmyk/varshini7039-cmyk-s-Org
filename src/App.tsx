/**
 * V Varshini — Premium Personal Portfolio Website
 * Information Science & Engineering Student | GM University, Karnataka
 */

import React, { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { BeyondCoding } from './components/BeyondCoding';
import { CareerGoals } from './components/CareerGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09080e] text-[#f4f4f6] selection:bg-rose-500/25 selection:text-rose-200 relative selection:outline-none">
      {/* Soft Ambient Visual Glows */}
      <AmbientBackground />

      {/* Top Bar (3-Zone Contract) */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* 01. Hero Section */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 02. About Me */}
        <About />

        {/* 03. Technical Skills */}
        <Skills />

        {/* 04. Featured Projects */}
        <Projects />

        {/* 05. Milestones & Achievements */}
        <Achievements />

        {/* 06. Education Timeline */}
        <Education />

        {/* 07. Beyond Coding */}
        <BeyondCoding />

        {/* 08. What I'm Exploring Next */}
        <CareerGoals />

        {/* 09. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
