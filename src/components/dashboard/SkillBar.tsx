import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: "green" | "cyan" | "magenta";
  delay?: number;
}

const colorClasses = {
  green: "bg-neon-green",
  cyan: "bg-neon-cyan",
  magenta: "bg-neon-magenta",
};

const SkillBar = ({ name, percentage, color = "green", delay = 0 }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClasses[color]}`}
          style={{
            boxShadow: `0 0 10px hsl(var(--neon-${color}) / 0.5)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
