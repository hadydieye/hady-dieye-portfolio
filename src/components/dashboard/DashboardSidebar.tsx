import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  Code2,
  Shield,
  FolderGit2,
  BarChart3,
  Mail,
  ChevronLeft,
  ChevronRight,
  Terminal,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/about", label: "À propos", icon: User },
  { path: "/skills", label: "Compétences", icon: Code2 },
  { path: "/security", label: "Cybersécurité", icon: Shield },
  { path: "/projects", label: "Projets Dev", icon: FolderGit2 },
  { path: "/results", label: "Résultats", icon: BarChart3 },
  { path: "/contact", label: "Contact", icon: Mail },
];

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 240 }}
      className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col z-50"
    >
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center neon-border">
            <Terminal className="w-5 h-5 text-neon-green" />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span className="font-mono text-lg font-bold text-neon-green glow-green">
                HADY
              </span>
              <span className="text-muted-foreground text-xs ml-2 font-mono">
                v2.0
              </span>
            </motion.div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-3 overflow-y-auto">
        {!isCollapsed && (
          <span className="text-xs text-muted-foreground uppercase tracking-wider px-3 mb-2 block font-mono">
            Navigation
          </span>
        )}
        <ul className="space-y-1 mt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? "bg-neon-green/10 text-neon-green"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? "text-neon-green" : "group-hover:text-neon-green"
                    }`}
                  />
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 w-1 h-8 bg-neon-green rounded-r-full"
                    />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-neon-green font-mono"
            >
              Disponible pour projets
            </motion.span>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-sidebar border border-sidebar-border flex items-center justify-center hover:bg-muted transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </motion.aside>
  );
};

export default DashboardSidebar;
