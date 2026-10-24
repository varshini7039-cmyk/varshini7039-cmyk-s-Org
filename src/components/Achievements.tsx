import React from 'react';
import { Trophy, Award, Briefcase, Flag, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'Award':
        return Trophy;
      case 'National Selection':
        return Flag;
      case 'Internship':
        return Briefcase;
      default:
        return Award;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>MILESTONES & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Recognitions & Competitions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Verifiable hackathon selections, university technical honors, and collaborative workplace experience.
          </p>
        </div>

        {/* Clean Timeline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => {
            const Icon = getAchievementIcon(item.type);
            const isWinner = item.type === 'Award';

            return (
              <div
                key={item.id}
                className={`p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border transition-all duration-300 flex flex-col justify-between ${
                  isWinner 
                    ? 'border-rose-500/40 bg-gradient-to-br from-rose-950/20 via-zinc-900/50 to-zinc-950/40 shadow-lg shadow-rose-950/20' 
                    : 'border-white/[0.08] hover:border-rose-500/30'
                }`}
              >
                <div>
                  {/* Top Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                    <span className="text-rose-300">{item.organization}</span>
                    <span className="tabular-nums">{item.year}</span>
                  </div>

                  {/* Title & Icon Lockup */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isWinner 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                        : 'bg-zinc-800 text-zinc-300 border border-white/10'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs text-zinc-400 font-mono">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Significance Footer */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="italic">{item.significance}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
