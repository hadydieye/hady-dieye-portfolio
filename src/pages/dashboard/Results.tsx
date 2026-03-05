import { motion } from "framer-motion";
import { TrendingUp, Shield, Code2, Users, Clock, Bug, Quote, Star } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";

const impactMetrics = [
  { icon: Bug, value: "30+", label: "Vulnérabilités Détectées", color: "magenta" as const },
  { icon: Users, value: "100%", label: "Taux de Satisfaction Client", color: "green" as const },
  { icon: Clock, value: "48h", label: "Temps de Réponse Moyen", color: "cyan" as const },
  { icon: Shield, value: "0", label: "Incidents Post-Audit", color: "green" as const },
];

const beforeAfter = [
  {
    metric: "Vulnérabilités critiques",
    before: "12",
    after: "0",
    improvement: "-100%",
  },
  {
    metric: "Vulnérabilités haute priorité",
    before: "23",
    after: "2",
    improvement: "-91%",
  },
  {
    metric: "Temps de réponse",
    before: "3.5s",
    after: "0.8s",
    improvement: "-77%",
  },
  {
    metric: "Score sécurité",
    before: "42/100",
    after: "94/100",
    improvement: "+124%",
  },
];

const testimonials = [
  {
    quote: "Avant de lancer notre boutique en ligne, on a contacté Hady pour un bilan de sécurité. Il a trouvé des injections SQL sur notre back‑end et des mots de passe par défaut. Son rapport ultra détaillé et ses patchs nous ont évité une catastrophe. Tout était réglé en deux semaines.",
    author: "Mamadou Bah",
    role: "Responsable informatique",
    company: "Sarl MobileTrendy",
    rating: 5,
  },
  {
    quote: "Notre site e‑commerce a subi un phishing ciblé sur nos clients. Hady a mené des attaques simulées et montré comment nos formulaires étaient vulnérables. Il nous a redessiné le flux de connexion et formé le personnel. Depuis, aucun incident et les ventes ont repris.",
    author: "Aïssatou Diallo",
    role: "Gérante",
    company: "Boutique BioGuinée",
    rating: 5,
  },
  {
    quote: "Notre plateforme de mise en relation agriculteurs/importateurs avait déjà subi une attaque XSS. Hady a pris le temps d'expliquer chaque vulnérabilité à notre équipe et a codé lui-même des corrections. Aujourd'hui, nos clients n'ont plus aucune crainte et nos volumes d'échanges ont doublé.",
    author: "Oumar Camara",
    role: "PDG",
    company: "AgriNet Guinée",
    rating: 5,
  },
];

const Results = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <h1 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          // Résultats & Impact
        </h1>
        <p className="text-muted-foreground text-sm">
          Métriques d'impact et retours clients sur mes interventions en sécurité et développement.
        </p>
      </motion.div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {impactMetrics.map((metric, index) => (
          <StatCard
            key={metric.label}
            icon={metric.icon}
            value={metric.value}
            label={metric.label}
            color={metric.color}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Before/After Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
          // Avant / Après Audit
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {beforeAfter.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="p-4 rounded-lg bg-muted/30 border border-border/50"
            >
              <div className="text-sm text-muted-foreground mb-3">{item.metric}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Avant</div>
                    <div className="text-lg font-mono text-neon-magenta">{item.before}</div>
                  </div>
                  <div className="text-muted-foreground">→</div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Après</div>
                    <div className="text-lg font-mono text-neon-green">{item.after}</div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-mono ${
                  item.improvement.startsWith('+') || item.improvement === '-100%'
                    ? 'bg-neon-green/10 text-neon-green'
                    : 'bg-neon-cyan/10 text-neon-cyan'
                }`}>
                  {item.improvement}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
          // Témoignages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-lg bg-muted/20 border border-border/30 relative"
            >
              <Quote className="w-8 h-8 text-neon-green/20 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-sm font-medium text-foreground">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role} — {testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Results;
