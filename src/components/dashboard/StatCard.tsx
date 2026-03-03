import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: "green" | "cyan" | "magenta" | "purple";
  delay?: number;
}

const colorClasses = {
  green: {
    bg: "bg-neon-green/10",
    border: "border-neon-green/30",
    icon: "text-neon-green",
    value: "text-neon-green glow-green",
  },
  cyan: {
    bg: "bg-neon-cyan/10",
    border: "border-neon-cyan/30",
    icon: "text-neon-cyan",
    value: "text-neon-cyan glow-cyan",
  },
  magenta: {
    bg: "bg-neon-magenta/10",
    border: "border-neon-magenta/30",
    icon: "text-neon-magenta",
    value: "text-neon-magenta glow-magenta",
  },
  purple: {
    bg: "bg-neon-purple/10",
    border: "border-neon-purple/30",
    icon: "text-neon-purple",
    value: "text-neon-purple",
  },
};

const StatCard = ({ icon: Icon, value, label, color = "green", delay = 0 }: StatCardProps) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
    >
      <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
        <Icon className={`w-5 h-5 ${colors.icon}`} />
      </div>
      <div className={`text-3xl font-bold font-mono ${colors.value} mb-1`}>
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
};

export default StatCard;
