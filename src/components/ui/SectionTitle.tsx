import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  label: string;
  title: string;
  children?: ReactNode;
}

const SectionTitle = ({ label, title }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="mb-12 md:mb-16"
  >
    <span className="font-mono text-xs sm:text-sm text-neon-green tracking-widest">{label}</span>
    <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold mt-2 text-gradient-green">{title}</h2>
  </motion.div>
);

export default SectionTitle;
