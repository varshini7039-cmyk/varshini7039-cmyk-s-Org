import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers, BookOpen, FileSpreadsheet } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & E-Commerce', 'Accessibility & EdTech', 'Career AI & Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>FEATURED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Projects & Engineering Prototypes
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Practical applications engineered with Python, React, and applied machine learning concepts solving concrete needs.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900/80 border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-rose-500/20 text-rose-200 border border-rose-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-950/20 hover:-translate-y-1"
              >
                {/* Visual Header / Mockup Banner (Resilient Zero-Broken-Image Graphic) */}
                <div className="h-44 w-full relative bg-[#130f20] border-b border-white/[0.06] overflow-hidden p-5 flex flex-col justify-between">
                  {/* Subtle Grid Backdrop */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(to right, #f43f5e 1px, transparent 1px), linear-gradient(to bottom, #f43f5e 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Clean unboxed category & status */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <span className="text-rose-300 font-medium">
                      {project.category}
                    </span>
                    <span className="text-zinc-400">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Custom Vector Identity */}
                  <div className="relative z-10 my-auto flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-300 group-hover:scale-105 transition-transform">
                      {project.demoType === 'shopsmart' && <Sparkles className="w-6 h-6" />}
                      {project.demoType === 'adaptive' && <BookOpen className="w-6 h-6" />}
                      {project.demoType === 'resume' && <FileSpreadsheet className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block">System Architecture</span>
                      <span className="text-sm font-bold text-white font-display">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Bottom hairline glow */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Interactive Prototype</span>
                    <span className="text-rose-300/80 group-hover:text-rose-200 flex items-center gap-1">
                      Explore Demo <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-rose-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2 space-y-1.5 text-xs text-zinc-400">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-1.5">
                          <span className="text-rose-400 font-bold shrink-0">·</span>
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Area */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    {/* Technologies unboxed list */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-400">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-zinc-300">{tech}</span>
                          {i < Math.min(3, project.technologies.length - 1) && (
                            <span aria-hidden="true" className="text-zinc-600">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Interactive Action Triggers */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 hover:text-white transition-colors"
                      >
                        <span>Case Study & Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Organization Profile Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/70 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              Want to inspect more code repositories or commits?
            </h4>
            <p className="text-xs text-zinc-400">
              Browse public repositories, course algorithms, and collaborative hackathon branches on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/varshini7039-cmyk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>varshini7039-cmyk</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>

      </div>

      {/* Detail & Simulator Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
