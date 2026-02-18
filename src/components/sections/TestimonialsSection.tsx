import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="relative py-14 sm:py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="// TÉMOIGNAGES" title="Ce Que Disent Mes Clients" />

        <div className="relative glass-card p-5 sm:p-8 md:p-12 min-h-[220px] sm:min-h-[260px] flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-neon-green text-neon-green" />
                ))}
              </div>
              <p className="text-foreground text-base md:text-lg leading-relaxed italic max-w-2xl">
                "{t.text}"
              </p>
              <div className="mt-6">
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role} @ {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-neon-green hover:border-neon-green/50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-neon-green hover:border-neon-green/50 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
