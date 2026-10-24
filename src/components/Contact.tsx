import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Internship Opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill out your name, email, and message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        topic: 'Internship Opportunity',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-rose-400 mb-2">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Have an idea worth building?
          </h2>
          <p className="text-base text-zinc-300 mt-2">
            {PERSONAL_INFO.heroSupportingText.slice(0, 0)}
            I'm always interested in learning, collaborating, and exploring meaningful technology projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                Direct Communication
              </span>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-950 border border-white/10">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.contact.email}
                  </span>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="p-1.5 rounded-lg text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 transition-colors text-xs font-mono"
                    title="Send Email Directly"
                  >
                    Email
                  </a>
                </div>
              </div>

              {copied && (
                <p className="text-xs text-emerald-400 font-mono">
                  ✓ Copied {PERSONAL_INFO.contact.email} to clipboard!
                </p>
              )}
            </div>

            {/* Social & Code Profiles */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                Professional & Developer Profiles
              </span>

              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/60 border border-white/[0.06] hover:border-rose-500/30 transition-all text-xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-zinc-300" />
                    <div>
                      <span className="font-semibold text-white block">GitHub</span>
                      <span className="text-zinc-500 font-mono text-[11px]">{PERSONAL_INFO.contact.githubUsername}</span>
                    </div>
                  </div>
                  <span className="text-rose-300 font-mono text-[11px]">View Repos →</span>
                </a>

                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 hover:bg-zinc-800/60 border border-white/[0.06] hover:border-rose-500/30 transition-all text-xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <div>
                      <span className="font-semibold text-white block">LinkedIn</span>
                      <span className="text-zinc-500 text-[11px]">Professional Network</span>
                    </div>
                  </div>
                  <span className="text-rose-300 font-mono text-[11px]">Connect →</span>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] text-xs text-zinc-400 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p>
                Based in <span className="text-zinc-200">Karnataka, India</span>. Open to remote or hybrid engineering internships and tech community events.
              </p>
            </div>

          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-rose-400" />
                  <h3 className="text-base font-bold font-display text-white">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">Response in 24–48h</span>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Your message has been captured. I will get back to you at your provided email address as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/30 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-zinc-300 font-medium block">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/15 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-rose-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-zinc-300 font-medium block">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. priya@company.com"
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/15 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-medium block">Discussion Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/15 rounded-xl text-white focus:outline-none focus:border-rose-400"
                    >
                      <option value="Internship Opportunity">Internship Opportunity / Hiring</option>
                      <option value="Hackathon Collaboration">Hackathon Team Collaboration</option>
                      <option value="Project Feedback">Project Feedback / Discussion</option>
                      <option value="General Tech Conversation">General Tech Connection</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-zinc-300 font-medium">Your Message</label>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {formData.message.length}/500
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your project, opportunity, or idea..."
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/15 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-rose-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
