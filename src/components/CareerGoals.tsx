import React from 'react';
import { ArrowUpRight, Compass, Sparkles, Send } from 'lucide-react';
import { CAREER_GOALS } from '../data/portfolioData';

export const CareerGoals: React.FC = () => {
  return (
    <section className="py-20 md:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>FORWARD TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            What I'm Exploring Next
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Target areas where I am actively seeking mentorship, internship roles, and hackathon teammates.
          </p>
        </div>

        {/* 6 Exploration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CAREER_GOALS.map((goal, index) => (
            <div
              key={goal.title}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-rose-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-rose-400/80 mb-2 block tabular-nums">
                  Focus 0{index + 1}
                </span>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {goal.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono text-[11px]">Active Focus</span>
                <span className="text-rose-300/80">Growth Goal</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-zinc-900/80 to-zinc-950 border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-rose-950/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Open to Summer Internships & Collaborative Hackathons
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              I am actively looking for engineering internship roles, project collaborations, and hackathon teams where I can contribute enthusiasm, problem-solving, and clean execution.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-lg shadow-rose-950/50 whitespace-nowrap shrink-0"
          >
            <span>Let's Connect</span>
            <Send className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
