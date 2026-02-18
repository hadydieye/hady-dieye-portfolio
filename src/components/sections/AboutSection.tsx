import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
// TODO: replace "about-photo.jpg" with the new image file placed in src/assets
import aboutPhoto from "@/assets/about-photo.png";
import { Shield, Code, Terminal, Award } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Pentester", desc: "Audits de sécurité & Red Team" },
  { icon: Code, label: "Full-Stack Dev", desc: "React, Node.js, Python" },
  { icon: Terminal, label: "Hacker Éthique", desc: "CTF & Bug Bounty" },
  { icon: Award, label: "Passionné", desc: "Tech & Cybersécurité" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-14 sm:py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="// À PROPOS" title="Qui suis-je ?" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neon-green/20">
              <img
                src={aboutPhoto}
                alt="Profil - Security Engineer & Full-Stack Developer"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-green/20 via-neon-cyan/10 to-neon-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Hady <span className="text-neon-green">Dieye</span>
            </h3>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Originaire de Guinée 🇬🇳, je suis passionné par la cybersécurité et le développement. Je combine ces deux mondes pour créer des solutions robustes et sécurisées. Mon parcours m'a permis de développer une expertise unique à l'intersection du code et de la sécurité offensive.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Du pentesting à la création d'applications full-stack, je m'assure que chaque ligne de code est pensée pour résister aux menaces modernes. J'aime relever des défis techniques et transformer des idées en produits concrets et sécurisés.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 flex items-start gap-3 group/card hover:border-neon-green/40 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-neon-green mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="font-body text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
