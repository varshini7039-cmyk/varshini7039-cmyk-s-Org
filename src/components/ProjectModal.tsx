import React, { useState } from 'react';
import { X, Github, ExternalLink, Sparkles, Check, CheckCircle2, AlertCircle, Eye, Sliders, FileCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Simulator States
  // 1. ShopSmart AI State
  const [shopQuery, setShopQuery] = useState('Suggest a high-performance student laptop under ₹65,000 for programming and AI experiments');
  const [isSearchingShop, setIsSearchingShop] = useState(false);
  const [shopResults, setShopResults] = useState<{
    laptopName: string;
    price: string;
    pros: string[];
    cons: string[];
    matchScore: string;
  } | null>({
    laptopName: 'IdeaPro ThinkBook 14 (Ryzen 7 / 16GB / 512GB SSD)',
    price: '₹58,990',
    pros: ['Excellent multi-core CPU for compiling & ML scripts', 'Sub-1.4kg travel weight', 'Anti-glare IPS display'],
    cons: ['Integrated graphics (entry-level for heavy 3D rendering)'],
    matchScore: '94% Match'
  });

  // 2. Adaptive Learning State
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isRulerActive, setIsRulerActive] = useState(true);
  const [rulerY, setRulerY] = useState(120);

  // 3. Resume Enhancer State
  const [selectedRole, setSelectedRole] = useState<'ai-intern' | 'frontend-dev' | 'data-analyst'>('ai-intern');
  const [resumeAtsScore, setResumeAtsScore] = useState(82);

  const handleShopSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearchingShop(true);
    setTimeout(() => {
      setIsSearchingShop(false);
      if (shopQuery.toLowerCase().includes('phone') || shopQuery.toLowerCase().includes('mobile')) {
        setShopResults({
          laptopName: 'Pixel 8a Smart Edition (128GB)',
          price: '₹42,999',
          pros: ['Exceptional AI computational photography', 'Stock clean OS with 7 years updates', 'Compact 6.1" form factor'],
          cons: ['Charging speed limited to 18W'],
          matchScore: '92% Match'
        });
      } else {
        setShopResults({
          laptopName: 'IdeaPro ThinkBook 14 (Ryzen 7 / 16GB / 512GB SSD)',
          price: '₹58,990',
          pros: ['8-Core 16-Thread CPU for fast script execution', 'Solid tactile keyboard for coding', 'Under ₹60,000 budget cap'],
          cons: ['Integrated Radeon GPU'],
          matchScore: '96% Match'
        });
      }
    }, 450);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-[#110e1c] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto text-zinc-200 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-rose-300 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-400">{project.status}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative & Architectural Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs uppercase tracking-wider font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution Strategy */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs uppercase tracking-wider font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Unboxed Tags */}
        <div>
          <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block mb-2">
            Technologies & Concepts
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-300">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="font-mono text-rose-200">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* INTERACTIVE DEMO SIMULATOR SECTION */}
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-rose-500/25 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <h3 className="text-sm font-bold font-display text-white">
                Interactive Project Concept Simulator
              </h3>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">Live Client Prototype</span>
          </div>

          {/* 1. ShopSmart AI Simulator */}
          {project.demoType === 'shopsmart' && (
            <div className="space-y-4">
              <form onSubmit={handleShopSearch} className="space-y-2">
                <label className="text-xs text-zinc-400 block font-mono">
                  Simulate Buyer Query (Natural Language)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shopQuery}
                    onChange={(e) => setShopQuery(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-zinc-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                    placeholder="e.g. Find noise-cancelling headphones under ₹4,000"
                  />
                  <button
                    type="submit"
                    disabled={isSearchingShop}
                    className="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition-colors whitespace-nowrap disabled:opacity-50"
                  >
                    {isSearchingShop ? 'Analyzing...' : 'Query AI'}
                  </button>
                </div>
              </form>

              {shopResults && (
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                        {shopResults.laptopName}
                      </h4>
                      <span className="text-xs font-mono text-rose-300 font-semibold">
                        {shopResults.price}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      {shopResults.matchScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                        Pros & Key Highlights
                      </span>
                      <ul className="space-y-1 text-zinc-300">
                        {shopResults.pros.map((p) => (
                          <li key={p} className="flex items-start gap-1.5">
                            <span className="text-emerald-400">✓</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                        Trade-offs to Consider
                      </span>
                      <ul className="space-y-1 text-zinc-400">
                        {shopResults.cons.map((c) => (
                          <li key={c} className="flex items-start gap-1.5">
                            <span className="text-amber-400">!</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Adaptive Learning Simulator */}
          {project.demoType === 'adaptive' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 pb-2 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setIsDyslexiaFont(!isDyslexiaFont)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                    isDyslexiaFont
                      ? 'bg-rose-500/20 text-rose-200 border border-rose-500/40'
                      : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white'
                  }`}
                >
                  Dyslexia Weighting Mode: {isDyslexiaFont ? 'ON' : 'OFF'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsHighContrast(!isHighContrast)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                    isHighContrast
                      ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                      : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white'
                  }`}
                >
                  Calming Slate Contrast: {isHighContrast ? 'ACTIVE' : 'DEFAULT'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsRulerActive(!isRulerActive)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                    isRulerActive
                      ? 'bg-sky-500/20 text-sky-200 border border-sky-500/40'
                      : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white'
                  }`}
                >
                  Focus Reading Ruler: {isRulerActive ? 'SHOWN' : 'HIDDEN'}
                </button>
              </div>

              {/* Sample Reading Pane */}
              <div 
                className={`p-5 rounded-xl border relative transition-colors ${
                  isHighContrast ? 'bg-[#18202b] text-[#f1f5f9] border-sky-500/30' : 'bg-zinc-900/90 text-zinc-200 border-white/10'
                } ${isDyslexiaFont ? 'tracking-wider font-sans font-medium' : 'font-sans'}`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setRulerY(e.clientY - rect.top);
                }}
              >
                {/* Visual Reading Ruler */}
                {isRulerActive && (
                  <div 
                    className="absolute left-0 right-0 h-8 pointer-events-none border-y-2 border-rose-400/50 bg-rose-400/10 transition-all duration-75"
                    style={{ top: Math.max(0, rulerY - 16) }}
                  />
                )}

                <h4 className="text-sm font-bold mb-2">Lesson 3: Understanding Sorting Algorithms</h4>
                <p className="text-xs leading-relaxed mb-2">
                  When dealing with information retrieval, sorting organizes elements in a structured sequence. For neurodivergent learners, breaking down complex recursive steps into visual chunks reduces cognitive overload and boosts reading retention.
                </p>
                <p className="text-xs leading-relaxed text-zinc-400">
                  Try moving your cursor over this paragraph to test how the focus ruler isolates line items, helping readers maintain attention without losing their place on the page.
                </p>
              </div>
            </div>
          )}

          {/* 3. Resume Enhancer Simulator */}
          {project.demoType === 'resume' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/10">
                <span className="text-xs font-mono text-zinc-400">Select Target Job Role Profile:</span>
                <div className="flex gap-2">
                  {[
                    { id: 'ai-intern', label: 'AI & ML Intern', score: 86 },
                    { id: 'frontend-dev', label: 'Software Developer', score: 91 },
                    { id: 'data-analyst', label: 'Data Science Intern', score: 84 },
                  ].map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => {
                        setSelectedRole(role.id as any);
                        setResumeAtsScore(role.score);
                      }}
                      className={`px-2.5 py-1 text-xs rounded-lg font-mono transition-colors ${
                        selectedRole === role.id
                          ? 'bg-rose-500/20 text-rose-200 border border-rose-500/40'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ATS Results View */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-white/10 flex flex-col justify-center items-center text-center">
                  <span className="text-[11px] font-mono text-zinc-400">Estimated ATS Score</span>
                  <span className="text-3xl font-extrabold font-display text-rose-400 my-1 tabular-nums">
                    {resumeAtsScore}%
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">High Compatibility</span>
                </div>

                <div className="sm:col-span-2 p-3 rounded-xl bg-zinc-900/90 border border-white/10 space-y-2 text-xs">
                  <span className="text-[11px] font-mono text-zinc-400 block">Matched Technical Keywords</span>
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono text-zinc-300">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Python</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">React</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">MySQL</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Git & GitHub</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Data Structures</span>
                  </div>
                  <div className="pt-1 text-[11px] text-zinc-400">
                    <span className="text-rose-300 font-medium">Optimization Tip:</span> Replace passive phrases with quantifiable impact verbs (e.g. "Engineered query pipeline improving search response by 30%").
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <span>Repository:</span>
            <span className="text-zinc-200">{project.githubUrl}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/5 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
