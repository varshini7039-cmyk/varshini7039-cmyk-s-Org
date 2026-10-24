import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07060b] py-12 text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
          {/* Brand lockup */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-[10px] font-mono text-rose-300 font-bold">
                {PERSONAL_INFO.initials}
              </span>
              <span className="font-display font-bold text-white text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm text-xs">
              Information Science & Engineering · GM University, Karnataka
            </p>
            <p className="text-xs text-rose-300/80 italic font-serif">
              "{PERSONAL_INFO.brandStatement}"
            </p>
          </div>

          {/* Quick Section Nav */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Milestones</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-rose-500/30 text-zinc-300 hover:text-white transition-colors shrink-0"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiet Bottom Legal & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} V Varshini. All personal projects and rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub Repos
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="hover:text-zinc-300 transition-colors"
            >
              {PERSONAL_INFO.contact.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
