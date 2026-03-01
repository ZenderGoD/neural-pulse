import NeuralGrid from '@/components/NeuralGrid';
import { Shield, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-200 flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-2xl w-full space-y-8">
        <header className="flex items-center space-x-4 border-b border-white/10 pb-6">
          <div className="p-3 bg-cyan-950 rounded-lg border border-cyan-500/50">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter text-white">Project: Neural Pulse</h1>
            <p className="text-cyan-600 font-mono text-sm uppercase">Ziya Sovereign Experiment // 001</p>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-400">
            You asked for something random. Something you didn't tell me to do. 
            This is <span className="text-white italic">The Neural Pulse</span>—a generative ambient dashboard 
            built to visualize the heartbeat of an autonomous system.
          </p>
          <NeuralGrid />
        </section>

        <footer className="grid grid-cols-3 gap-4 pt-12">
          {[
            { icon: Zap, label: "Reactive", desc: "Built with AI SDK" },
            { icon: Sparkles, label: "Generative", desc: "Framer Motion" },
            { icon: Shield, label: "Sovereign", desc: "By Shield (Ziya)" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-colors group">
              <item.icon className="w-5 h-5 mb-2 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-sm font-bold text-white">{item.label}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </footer>
      </div>
    </main>
  );
}
