import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Code2, Shield, Terminal } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.png";

const techStack = [
  { category: "Frontend", items: ["React", "React Native", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Python", "Supabase", "PostgreSQL", "Express"] },
  { category: "Security", items: ["Pentesting", "Red Team", "OWASP", "Burp Suite", "Nmap"] },
  { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Linux"] },
];

const About = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <h1 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
          // À Propos
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Photo */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-4">
              <img
                src={aboutPhoto}
                alt="Hady Dieye"
                className="w-48 h-48 rounded-2xl object-cover border-2 border-neon-green/30"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-neon-green rounded-full border-4 border-background flex items-center justify-center">
                <Terminal className="w-3 h-3 text-background" />
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span className="text-muted-foreground">Conakry, Guinée</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-neon-magenta" />
                <span className="text-muted-foreground">23 ans</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-4 h-4 text-neon-green" />
                <span className="text-muted-foreground">Autodidacte passionné</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Hady Dieye</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Security Engineer & Full-Stack Developer passionné par la cybersécurité et le développement d'applications modernes. 
                Je combine mes compétences en pentesting et Red Team avec une expertise solide en développement web et mobile.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon approche unique me permet de créer des applications sécurisées dès la conception, 
                en anticipant les vulnérabilités potentielles grâce à ma vision d'attaquant. 
                Du code au pentest, je maîtrise les deux faces de la médaille.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-green/10 border border-neon-green/30">
                <Shield className="w-4 h-4 text-neon-green" />
                <span className="text-sm text-neon-green font-medium">Security Engineer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
                <Code2 className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-neon-cyan font-medium">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6"
      >
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
          // Stack Technique
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded bg-muted/50 text-muted-foreground font-mono hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
