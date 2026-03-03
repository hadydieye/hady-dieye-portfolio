import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "command", text: "nmap -sV --top-ports 1000 target.com" },
  { type: "output", text: "Scanning 1000 ports on target.com..." },
  { type: "output", text: "PORT STATE SERVICE VERSION" },
  { type: "success", text: "22/tcp open ssh OpenSSH 8.9" },
  { type: "warning", text: "80/tcp open http nginx 1.18" },
  { type: "success", text: "443/tcp open https nginx 1.18" },
  { type: "output", text: "Service detection performed. 3 services found." },
];

const TerminalWidget = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-foreground";
      case "success":
        return "text-neon-green";
      case "warning":
        return "text-neon-cyan";
      case "error":
        return "text-neon-magenta";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="glass-card p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
        <span className="text-xs text-muted-foreground">// TERMINAL</span>
      </div>

      <div className="space-y-1 min-h-[200px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-neon-green">hady@kali</span>
          <span className="text-muted-foreground">:~$</span>
          <span className="text-foreground">whoami</span>
        </div>

        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${getLineColor(line.type)} ${line.type === "command" ? "flex items-center gap-2" : "pl-4"}`}
          >
            {line.type === "command" && (
              <>
                <span className="text-neon-green">hady@kali</span>
                <span className="text-muted-foreground">:~$</span>
              </>
            )}
            <span>{line.text}</span>
          </motion.div>
        ))}

        {visibleLines >= terminalLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mt-2"
          >
            <span className="text-neon-green">hady@kali</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="w-2 h-4 bg-neon-green animate-blink" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TerminalWidget;
