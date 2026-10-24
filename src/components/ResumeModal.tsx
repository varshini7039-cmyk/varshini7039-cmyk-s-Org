import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_HISTORY, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `========================================================================
V VARSHINI
Information Science and Engineering Student
GM University, Karnataka, India
Email: ${PERSONAL_INFO.contact.email}
GitHub: ${PERSONAL_INFO.contact.github}
LinkedIn: ${PERSONAL_INFO.contact.linkedin}
========================================================================

PERSONAL STATEMENT:
"${PERSONAL_INFO.brandStatement}"
${PERSONAL_INFO.heroSupportingText}

EDUCATION:
- Bachelor of Engineering (Information Science & Engineering)
  GM University, Karnataka (2023 - Present) | 5th Semester | CGPA: 7.54/10
- Pre-University (Class 12 / Science)
  Vidya Chetana PU College (2024) | Score: 87%
- Secondary School (Class 10 / CBSE)
  Kendriya Vidyalaya Mankhurd Mumbai (2022) | Score: 72%

TECHNICAL SKILLS:
- Programming: Python, C Fundamentals
- Web Development: HTML, CSS, JavaScript, React Fundamentals
- Databases: MySQL, SQL, Database Management Fundamentals
- AI & Data Science: Machine Learning Fundamentals, Data Science, AI Recommendation Concepts
- Tools: Git, GitHub, Networking Fundamentals, Technical Documentation

FEATURED PROJECTS:
1. ShopSmart AI (AI / E-Commerce)
   - Concept focused on making product discovery & shopping decisions convenient.
   - Built with Python, React, AI Recommendation Concepts.
   - GitHub: ${PROJECTS[0].githubUrl}

2. Adaptive Learning for Neurodivergence (EdTech / Accessibility)
   - Web platform designed to support students with ADHD & dyslexia with personalized reading modes.
   - Built with React, JavaScript, Accessibility (WCAG).

3. AI-Powered Resume Enhancer (Career AI / ATS Optimizer)
   - Analyzes resumes, optimizes keywords, and enhances ATS compatibility.
   - Built with Python, NLP Fundamentals, React.

ACHIEVEMENTS & MILESTONES:
- First Place in Innovation Week 2026, GM University
- Selected at National Level in IIITM Hacksagon 2026
- Intern at Happy Folks Club (HFC)
- Smart India Hackathon (SIH) 2025 Internal Selection
========================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `V_Varshini_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const text = `V VARSHINI - Information Science & Engineering Student (CGPA: 7.54) | GM University | Email: ${PERSONAL_INFO.contact.email} | GitHub: ${PERSONAL_INFO.contact.github}`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-[#110e1a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto text-zinc-200 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-white">
                V Varshini — Curriculum Vitae
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                ATS-Optimized Engineering Resume · GM University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors shadow-sm"
              title="Download Plain Text Format"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto py-6 pr-2 space-y-6 text-xs sm:text-sm">
          
          {/* Document Header */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h1 className="text-2xl font-bold font-display text-white">
                  {PERSONAL_INFO.name.toUpperCase()}
                </h1>
                <p className="text-rose-300 font-mono text-xs mt-0.5">
                  Information Science & Engineering Student · 5th Semester (CGPA: 7.54)
                </p>
                <p className="text-zinc-400 text-xs">
                  GM University, Karnataka, India
                </p>
              </div>

              <div className="text-right text-xs font-mono space-y-1 text-zinc-400">
                <div>Email: <span className="text-white">{PERSONAL_INFO.contact.email}</span></div>
                <div>GitHub: <span className="text-white">github.com/{PERSONAL_INFO.contact.githubUsername}</span></div>
                <div>Statement: <span className="text-rose-200 italic">"{PERSONAL_INFO.brandStatement}"</span></div>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-xs">
              {PERSONAL_INFO.heroSupportingText}
            </p>
          </div>

          {/* Education Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-300 font-bold font-display uppercase tracking-wider text-xs">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="space-y-3">
              {EDUCATION_HISTORY.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm">
                      {edu.degree} — {edu.field}
                    </h3>
                    <p className="text-zinc-400 text-xs">
                      {edu.institution}, {edu.location} ({edu.periodOrYear})
                    </p>
                  </div>
                  <div className="font-mono text-rose-300 font-bold text-xs sm:text-right shrink-0">
                    {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-300 font-bold font-display uppercase tracking-wider text-xs">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <span className="font-semibold text-white sm:w-44 shrink-0">{cat.name}:</span>
                  <span className="text-zinc-300 font-mono text-[11px]">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-300 font-bold font-display uppercase tracking-wider text-xs">
              <Briefcase className="w-4 h-4" />
              <span>Technical Projects</span>
            </div>

            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">
                      {proj.title}
                    </h4>
                    <span className="text-rose-300 font-mono text-[11px]">{proj.category}</span>
                  </div>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {proj.shortDesc}
                  </p>
                  <div className="text-[11px] font-mono text-zinc-400 flex flex-wrap gap-2 pt-1">
                    <span className="text-zinc-500">Stack:</span>
                    <span>{proj.technologies.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-300 font-bold font-display uppercase tracking-wider text-xs">
              <Award className="w-4 h-4" />
              <span>Key Achievements & Experience</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-2 text-xs">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">·</span>
                  <div>
                    <span className="text-white font-medium">{ach.title}</span> —{' '}
                    <span className="text-zinc-400">{ach.organization} ({ach.year}): {ach.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 shrink-0">
          <div className="flex items-center gap-2">
            <span>Have an existing PDF link?</span>
            <span className="text-zinc-300">Easily linkable in portfolioData.ts</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied Summary' : 'Copy Summary'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
