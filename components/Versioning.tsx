'use client';

export default function Versioning() {
  const versionInfo = {
    version: '1.2.4-stable',
    build: '2024.05.14.001',
    environment: 'Production (AWS Amplify)',
    commit: 'cf310db',
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0b] text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-[#161618] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
        {/* Subtle gradient glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-700"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">System Version</h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Version</p>
                <p className="text-lg font-mono font-medium text-blue-400">{versionInfo.version}</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Environment</p>
                <p className="text-lg font-medium text-green-400">Production</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl p-4">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Build ID</p>
              <p className="text-sm font-mono text-white/80">{versionInfo.build}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-white/20 italic">
              AWS Amplify Redirection Handler Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
