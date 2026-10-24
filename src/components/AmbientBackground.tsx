import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Base */}
      <div className="absolute inset-0 bg-[#09080e]" />

      {/* Subtle Cool Pink Ambient Glows */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[140px] opacity-[0.16]"
        style={{
          background: 'radial-gradient(circle, rgba(244,63,94,0.8) 0%, rgba(168,85,247,0.4) 50%, transparent 70%)'
        }}
      />
      
      {/* Subtle Violet / Blue Accent Glows */}
      <div 
        className="absolute top-[45%] -right-[15%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.7) 0%, rgba(139,92,246,0.5) 60%, transparent 80%)'
        }}
      />

      <div 
        className="absolute top-[80%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, rgba(244,63,94,0.6) 0%, rgba(99,102,241,0.4) 60%, transparent 80%)'
        }}
      />

      {/* Micro-dot grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* Subtle top hairline edge glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
    </div>
  );
};
