import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import MetricCard from "@/components/cards/MetricCard";
import { impactMetrics, beforeAudit, afterAudit } from "@/data/metrics";

const ComparisonColumn = ({
  title,
  items,
  variant,
}: {
  title: string;
  items: { label: string; value: string; color: "green" | "pink" }[];
  variant: "before" | "after";
}) => (
  <motion.div
    initial={{ opacity: 0, x: variant === "before" ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="glass-card p-6"
  >
    <h4 className={`font-display text-lg font-bold mb-4 ${variant === "before" ? "text-neon-pink" : "text-neon-green"}`}>
      {title}
    </h4>
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{item.label}</span>
          <span className={`font-mono font-bold ${item.color === "green" ? "text-neon-green" : "text-neon-pink"}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const ImpactSection = () => (
  <section className="relative py-14 sm:py-20 md:py-32 px-4">
    <div className="max-w-7xl mx-auto">
      <SectionTitle label="// RÉSULTATS" title="L'Impact en Chiffres" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {impactMetrics.map((m, i) => (
          <MetricCard key={m.id} {...m} index={i} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ComparisonColumn title="AVANT L'AUDIT" items={beforeAudit} variant="before" />
        <ComparisonColumn title="APRÈS INTERVENTION" items={afterAudit} variant="after" />
      </div>
    </div>
  </section>
);

export default ImpactSection;
