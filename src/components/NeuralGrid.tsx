"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NeuralGrid() {
  const [dots, setDots] = useState<{ id: number; x: number; y: number }[]>([]);
  
  useEffect(() => {
    const newDots = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="relative w-full h-64 bg-slate-950 overflow-hidden rounded-xl border border-cyan-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        />
      ))}
      <div className="absolute bottom-4 left-4 text-cyan-500 font-mono text-xs uppercase tracking-widest animate-pulse">
        System Status: Pulsing
      </div>
    </div>
  );
}
