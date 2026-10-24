import React from 'react';
import { Compass, Sparkles, Code, Cpu, Palette, Users } from 'lucide-react';
import { BEYOND_CODING } from '../data/portfolioData';

export const BeyondCoding: React.FC = () => {
  const icons = [Compass, Cpu, Users, Sparkles, Palette, Code];

  return (
    <section id="beyond" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>PERSPECTIVE & PASSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Beyond Coding
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Personal interests, creative pursuits, and curiosities that fuel how I think and learn outside the lecture hall.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEYOND_CODING.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-rose-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                  <span>Personal Curiosity</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
