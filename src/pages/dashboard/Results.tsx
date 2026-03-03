import { motion } from "framer-motion";
import { TrendingUp, Shield, Code2, Users, Quote } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";

const impactMetrics = [
  { icon: Shield, value: "30+", label: "Vulnérabilités détectées", color: "magenta" as const },
  { icon: Code2, value: "10+", label: "Applications livrées", color: "cyan" as const },
  { icon: TrendingUp, value: "95%", label: "Taux de satisfaction", color: "green" as const },
  { icon: Users, value: "5+", label: "Clients accompagnés", color: "purple" as const },
];

const beforeAfter = [
  {
    metric: "Temps de réponse API",
    before: "2.5s",
    after: "0.3s",
    improvement: "-88%",
  },
  {
    metric: "Score sécurité OWASP",
    before: "45/100",
    after: "92/100",
    improvement: "+104%",
  },
  {
    metric: "Vulnérabilités critiques",
    before: "12",
    after: "0",
    improvement: "-100%",
  },
  {
    metric: "Couverture de tests",
    before: "20%",
    after: "85%",
    improvement: "+325%",
  },
];

const testimonials = [
  {
    quote: "Hady a su identifier des failles critiques que nos audits précédents avaient manquées. Son approche méthodique et sa communication claire ont été très appréciées.",
    author: "Client - Startup Tech",
    role: "CTO",
  },
  {
    quote: "L'application développée par Hady a dépassé nos attentes en termes de qualité et de sécurité. Un vrai professionnel qui comprend les enjeux business.",
    author: "Client - E-commerce",
    role: "Founder",
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

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-lg bg-muted/20 border border-border/30 relative"
            >
              <Quote className="w-8 h-8 text-neon-green/20 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-sm font-medium text-foreground">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Results;
