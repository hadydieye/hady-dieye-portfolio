import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/hadydieye",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/hady-dieye/",
    color: "hover:text-neon-cyan",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@hadydieye.dev",
    color: "hover:text-neon-green",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@hadydieye.dev?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <h1 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">
          // Contact
        </h1>
        <p className="text-muted-foreground text-sm">
          Disponible pour des missions freelance en développement et cybersécurité.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 space-y-6"
        >
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Informations</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Localisation</div>
                  <div className="text-xs text-muted-foreground">Conakry, Guinée</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Disponibilité</div>
                  <div className="text-xs text-muted-foreground">Lun - Ven, 9h - 18h GMT</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Réseaux sociaux</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground transition-colors ${link.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-neon-green/5 border border-neon-green/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
              <span className="text-sm font-medium text-neon-green">Disponible</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Actuellement disponible pour de nouveaux projets freelance.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 glass-card p-6"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Envoyer un message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50 transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50 transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50 transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="Objet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/50 transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            <button
              type="submit"
              className="btn-neon-green w-full flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Envoyer le message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
