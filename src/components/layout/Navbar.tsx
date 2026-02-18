import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Cybersécurité", href: "#security" },
  { label: "Développement", href: "#development" },
  { label: "Projets", href: "#hybrid" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/favicon.png" alt="Hady Dieye Logo" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg" />
          <span className="font-display text-lg sm:text-xl font-extrabold text-gradient-green hidden sm:inline">
            HADY
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-body text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-14 sm:top-16 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-14 sm:top-16 right-0 bottom-0 w-72 glass-navbar flex flex-col p-6 gap-3 lg:hidden overflow-y-auto"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-body text-muted-foreground hover:text-neon-green transition-colors py-2 border-b border-border/30"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/CV_Mohamed_Hady_Diallo.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="btn-neon-green text-center mt-4"
              >
                📄 Télécharger CV
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
