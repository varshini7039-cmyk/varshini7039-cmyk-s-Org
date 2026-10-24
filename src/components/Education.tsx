import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Progressive academic path in Information Science & Engineering and foundational science.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION_HISTORY.map((edu, idx) => {
            const isCurrent = idx === 0;

            return (
              <div
                key={edu.id}
                className={`p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border transition-all ${
                  isCurrent
                    ? 'border-rose-500/30 bg-gradient-to-r from-rose-950/15 via-zinc-900/50 to-zinc-950/40'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Left: Degree & Institution */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="text-rose-300 font-semibold">{edu.periodOrYear}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-sm text-zinc-300 font-medium">
                      {edu.field} — <span className="text-white">{edu.institution}</span>
                    </p>
                  </div>

                  {/* Right: Grade Badge / Score */}
                  <div className="md:text-right shrink-0">
                    <span className="text-xs font-mono text-zinc-400 block">Performance</span>
                    <span className="text-xl sm:text-2xl font-extrabold font-display text-rose-300 tabular-nums">
                      {edu.grade}
                    </span>
                  </div>

                </div>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5 text-xs text-zinc-400">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">·</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
