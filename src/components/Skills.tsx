import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Globe, Database, BrainCircuit, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'hands-on' | 'learning'>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    "Programming": Code2,
    "Web Development": Globe,
    "Database Systems": Database,
    "AI & Data Science": BrainCircuit,
    "Tools & Professional Skills": Terminal
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>TECHNICAL REPERTOIRE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Skills & Explorations
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Organized into clear domains, distinguishing hands-on project experience from active conceptual explorations.
            </p>
          </div>

          {/* Interactive filter tabs (Allowed as interactive functional buttons per Zero-Pill guide) */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-white/10 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-rose-500/20 text-rose-200 border border-rose-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('hands-on')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'hands-on'
                  ? 'bg-rose-500/20 text-rose-200 border border-rose-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hands-on Applied
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('learning')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'learning'
                  ? 'bg-rose-500/20 text-rose-200 border border-rose-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Active Learning
            </button>
          </div>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.name] || Code2;
            
            // Filter skills
            const filteredSkills = category.skills.filter((skill) => {
              if (selectedFilter === 'hands-on') return skill.level === 'Hands-on Experience';
              if (selectedFilter === 'learning') return skill.level === 'Currently Learning / Exploring';
              return true;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div
                key={category.name}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-rose-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-zinc-500">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List with Zero-Pill Typography */}
                  <div className="space-y-3 divide-y divide-white/[0.06]">
                    {filteredSkills.map((skill) => {
                      const isHandsOn = skill.level === 'Hands-on Experience';

                      return (
                        <div key={skill.name} className="pt-3 first:pt-0">
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-zinc-200 font-semibold">
                              {skill.name}
                            </span>
                            {/* Clean unboxed metadata label */}
                            <span className={`text-[11px] font-mono ${isHandsOn ? 'text-rose-300' : 'text-sky-300'}`}>
                              {isHandsOn ? 'Applied' : 'Exploring'}
                            </span>
                          </div>
                          {skill.highlight && (
                            <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                              {skill.highlight}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Status verified</span>
                  <span className="text-zinc-400">Engineering Curriculum & Projects</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="text-zinc-300 font-medium">Academic Honesty:</span>
            <span>Skills marked "Applied" have been used in academic or competition projects; "Exploring" denotes concepts currently under active study.</span>
          </div>
          <span className="font-mono text-zinc-500 text-[11px] shrink-0">Updated 2026</span>
        </div>

      </div>
    </section>
  );
};
