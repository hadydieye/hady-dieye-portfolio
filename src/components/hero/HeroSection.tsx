import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import MetricCard from "@/components/cards/MetricCard";
import { heroMetrics } from "@/data/metrics";

const ParticleField = lazy(() => import("@/components/effects/ParticleField"));

const TypingTerminal = () => {
  const [text, setText] = useState("");
  const fullText = "hady@kali:~$ whoami";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm text-neon-green mb-6 flex items-center gap-1">
      <span>{text}</span>
      <span className="w-2 h-5 bg-neon-green animate-pulse" />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background" />

      {/* Three.js particles */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-20 text-center">
        <TypingTerminal />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-extrabold text-gradient-green leading-tight"
          style={{ fontSize: "clamp(2.2rem, 7vw, 7rem)" }}
        >
          HADY DIEYE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-base sm:text-lg md:text-xl text-foreground mt-3 sm:mt-4"
        >
          Security Engineer & Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-muted-foreground max-w-2xl mx-auto mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed px-2"
        >
          Je construis des applications robustes et je les sécurise. Du code au pentest, je maîtrise les deux faces de la tech moderne.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-2"
        >
          <a href="#security" className="btn-neon-pink text-center">
            🔒 Mes Pentests
          </a>
          <a href="#development" className="btn-neon-cyan text-center">
            💻 Mes Projets Dev
          </a>
          <a href="/CV_Mohamed_Hady_Diallo.pdf" download className="btn-neon-green text-center">
            📄 Télécharger mon CV
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-16"
        >
          {heroMetrics.map((metric, i) => (
            <MetricCard key={metric.id} {...metric} index={i} />
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
