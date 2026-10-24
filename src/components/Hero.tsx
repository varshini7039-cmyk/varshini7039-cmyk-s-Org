import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Camera, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomPhotoUrl(reader.result);
          setIsPhotoModalOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setCustomPhotoUrl(inputUrl.trim());
      setIsPhotoModalOpen(false);
      setInputUrl('');
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean unboxed kicker with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-rose-300">
              <span className="text-zinc-400">GM University, Karnataka</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>ISE 5th Semester</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">CGPA 7.54</span>
            </div>

            {/* Display Name */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-1">
                Personal Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
            </div>

            {/* Primary Headline */}
            <p className="text-xl sm:text-2xl font-medium text-rose-100/90 leading-snug">
              "{PERSONAL_INFO.headline}"
            </p>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl text-pretty">
              {PERSONAL_INFO.heroSupportingText}
            </p>

            {/* Brand Statement Banner - Clean styling */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-950/20 via-purple-950/20 to-transparent border border-rose-500/20 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
              <p className="text-xs sm:text-sm text-zinc-300 italic font-serif">
                "{PERSONAL_INFO.brandStatement}"
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-lg shadow-rose-950/50 hover:shadow-rose-900/60 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                View My Projects
              </a>

              <a
                href="#achievements"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                Explore My Journey
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-rose-200 bg-rose-950/30 hover:bg-rose-950/50 border border-rose-500/30 hover:border-rose-400 rounded-xl transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-5 text-sm text-zinc-400">
              <span className="text-xs font-mono text-zinc-500">Connect:</span>
              
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-mono">github/{PERSONAL_INFO.contact.githubUsername}</span>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-rose-300 transition-colors"
                aria-label="Email V Varshini"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-mono">{PERSONAL_INFO.contact.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Container (Photo/Monogram Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-square sm:aspect-[4/5] rounded-3xl p-1.5 bg-gradient-to-b from-rose-500/30 via-violet-500/15 to-transparent border border-white/10 shadow-2xl shadow-rose-950/20 group">
              
              {/* Internal Framing */}
              <div className="w-full h-full rounded-[22px] bg-[#110e1a] overflow-hidden relative flex flex-col justify-between p-6">
                
                {/* Visual Content: Photo or Artistic Tech Monogram */}
                {customPhotoUrl ? (
                  <img
                    src={customPhotoUrl}
                    alt="V Varshini Portrait"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#181326] via-[#110e1a] to-[#09080e]">
                    {/* Artistic Monogram Graphic */}
                    <div className="relative mb-5">
                      <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-rose-500/20 via-pink-500/20 to-violet-500/20 border border-rose-500/40 flex items-center justify-center shadow-lg shadow-rose-950/50">
                        <span className="font-display font-extrabold text-4xl tracking-tight text-white bg-gradient-to-br from-white via-rose-200 to-pink-400 bg-clip-text text-transparent">
                          {PERSONAL_INFO.initials}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-zinc-300">
                        {PERSONAL_INFO.monogramAlt}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white mb-1">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-rose-300/90 font-mono mb-3">
                      Information Science & Engineering
                    </p>
                    <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                      GM University · AI, Data Science & Full-Stack Prototyping
                    </p>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Details */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10">
                    Karnataka, India
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="p-1.5 rounded-md bg-black/60 hover:bg-rose-950/80 backdrop-blur-md border border-rose-500/30 text-rose-300 hover:text-white transition-all flex items-center gap-1 text-[11px]"
                    title="Customize / Replace Photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                  </button>
                </div>

                {/* Bottom Card Footer */}
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-rose-300">
                      Engineering CGPA: {PERSONAL_INFO.cgpa}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      Batch 2023–27
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 line-clamp-1">
                    Hackathons · Innovation · Applied AI
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI / Trust Strip below the Split (Per Domain Constitution) */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight tabular-nums">
              5th Sem
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Information Science & Engineering
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-rose-400 tracking-tight tabular-nums">
              7.54
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              Cumulative Grade Point Average (CGPA)
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight tabular-nums">
              1st Place
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              GMU Innovation Week 2026 Winner
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-sky-400 tracking-tight tabular-nums">
              National
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              IIITM Hacksagon 2026 Finalist
            </div>
          </div>
        </div>

      </div>

      {/* Photo Customizer Modal */}
      {isPhotoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-[#120f1c] border border-white/15 rounded-2xl p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-base font-semibold text-white">Customize Portrait Photograph</h3>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="text-zinc-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              You can personalize this portfolio by uploading your photograph from your computer or providing a public image link.
            </p>

            {/* File upload option */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300 block">Upload from Device</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="w-full text-xs text-zinc-400 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-rose-500/20 file:text-rose-200 hover:file:bg-rose-500/30 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-[11px] text-zinc-500 uppercase font-mono">or link url</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* URL input option */}
            <form onSubmit={handleApplyUrl} className="space-y-3">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://example.com/my-photo.jpg"
                className="w-full px-3 py-2 text-xs bg-zinc-900 border border-white/15 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-rose-400"
              />
              <div className="flex justify-end gap-2 pt-2">
                {customPhotoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setCustomPhotoUrl(null);
                      setIsPhotoModalOpen(false);
                    }}
                    className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white"
                  >
                    Reset to Monogram
                  </button>
                )}
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold bg-rose-600 text-white rounded-lg hover:bg-rose-500"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
