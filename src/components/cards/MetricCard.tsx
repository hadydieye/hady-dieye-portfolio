import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useAnimations";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  color: "green" | "cyan" | "pink" | "purple";
  trend?: string;
  index: number;
}

const colorMap = {
  green: "text-neon-green",
  cyan: "text-neon-cyan",
  pink: "text-neon-pink",
  purple: "text-neon-purple",
};

const MetricCard = ({ value, suffix, label, icon, color, trend, index }: MetricCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-3 sm:p-5 text-center"
    >
      <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{icon}</div>
      <div className={`font-display text-2xl sm:text-3xl md:text-4xl font-extrabold ${colorMap[color]}`}>
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-xs sm:text-sm mt-1">{label}</div>
      {trend && <div className="text-xs text-neon-green mt-1">{trend}</div>}
    </motion.div>
  );
};

export default MetricCard;
