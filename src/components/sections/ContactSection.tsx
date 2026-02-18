import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Mail, MessageCircle, Globe, Github } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: "hady@dieye.dev", href: "mailto:hady@dieye.dev" },
  { icon: MessageCircle, label: "Discord", value: "scriptseinsei", href: "#" },
  { icon: Globe, label: "LinkedIn", value: "Mohamed Hady Diallo", href: "https://www.linkedin.com/in/mohamed-hady-diallo-162711354/" },
  { icon: Github, label: "GitHub", value: "github.com/hadydieye", href: "https://github.com/hadydieye" },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Audit de sécurité",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration placeholder
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="// CONTACT" title="Travaillons Ensemble" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Besoin d'un pentest ? D'une application sécurisée ? Ou des deux ? Discutons de votre projet.
            </p>

            <div className="space-y-4 mb-8">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon-green transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-neon-green/10 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60">{label}</p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 text-sm text-neon-green">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Disponible pour nouveaux projets
            </div>
          </motion.div>

          {/* Right col - form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1 block font-mono">Nom *</label>
              <input
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-neon-green/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block font-mono">Email *</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-neon-green/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block font-mono">Type de projet</label>
              <select
                value={formState.projectType}
                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-neon-green/50 transition-colors"
              >
                <option>Audit de sécurité</option>
                <option>Développement web</option>
                <option>Projet hybride</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block font-mono">Description *</label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-neon-green w-full">
              {sent ? "✅ Message envoyé !" : "Envoyer le message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
