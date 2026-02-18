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

  // lock body scroll when mobile menu is open to avoid interaction issues when 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // prevent background scrolling when menu open on mobile
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // cleanup in case component unmounts while menu is open
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Handle smooth scroll and menu close
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Debug function to check mobile menu state
  useEffect(() => {
    console.log('Mobile menu state:', mobileOpen);
  }, [mobileOpen]);

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
          style={{ zIndex: 10000 }}
          onClick={() => {
            console.log('Toggle clicked, current state:', mobileOpen);
            setMobileOpen(!mobileOpen);
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu - with blur and slide animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            style={{ zIndex: 999999 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-16 right-0 w-72 h-full bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gradient-green">Menu</h3>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileOpen(false)}
                    className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left py-3 px-4 text-base hover:bg-muted/50 rounded-lg transition-all hover:translate-x-1"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  href="/CV_Mohamed_Hady_Diallo.pdf"
                  download
                  onClick={() => setMobileOpen(false)}
                  className="block w-full btn-neon-green text-center mt-6"
                >
                  📄 Télécharger CV
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
