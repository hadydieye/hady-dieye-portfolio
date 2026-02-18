import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 sm:py-10 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-center md:text-left">
        <img src="/favicon.png" alt="Hady Dieye Logo" className="w-7 h-7 rounded-md" />
        <div>
          <p className="text-sm text-muted-foreground">© 2025 Hady Dieye. Tous droits réservés.</p>
          <p className="text-xs text-muted-foreground/60 mt-0.5">Construit avec passion pour la tech et la sécu 🛡️💻</p>
        </div>
      </div>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/hadydieye" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/mohamed-hady-diallo-162711354/" },
          { icon: MessageCircle, href: "https://wa.me/224611353456" },
          { icon: Mail, href: "mailto:scriptseinseidieye@gmail.com" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-neon-green hover:bg-neon-green/10 transition-all"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
