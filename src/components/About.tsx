import React from 'react';
import { Sparkles, Compass, Lightbulb, Target, Rocket, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Curious by Nature, Driven by Problem-Solving
          </h2>
        </div>

        {/* Story & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Natural Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            {PERSONAL_INFO.aboutStory.map((paragraph, idx) => (
              <p key={idx} className="text-pretty">
                {paragraph}
              </p>
            ))}

            {/* Editorial Quote Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-rose-950/25 via-zinc-900/60 to-zinc-950/40 border border-rose-500/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-20 h-20 text-rose-300" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-rose-300 block mb-2">
                Personal Philosophy
              </span>
              <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
                "{PERSONAL_INFO.brandStatement}"
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span>V Varshini</span>
                <span aria-hidden="true">·</span>
                <span>GM University, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Core Identity & Academic Focus
            </h3>

            {PERSONAL_INFO.highlights.map((item, index) => {
              const icons = [Compass, Sparkles, Lightbulb, Award, Rocket];
              const IconComponent = icons[index % icons.length];

              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-rose-500/30 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5 text-rose-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Context Strip */}
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/[0.06] text-xs text-zinc-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Academic Standing</span>
                <span className="text-zinc-200 font-mono font-medium">B.E. 5th Semester</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Cumulative CGPA</span>
                <span className="text-rose-300 font-mono font-medium">7.54 / 10.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Primary Objective</span>
                <span className="text-zinc-200 text-right">Applied AI & Software Internships</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
