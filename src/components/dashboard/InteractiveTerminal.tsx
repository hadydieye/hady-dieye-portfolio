import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface TerminalLine {
  type: "command" | "output" | "success" | "error" | "warning" | "info";
  text: string;
  isHtml?: boolean;
}

const COMMANDS: Record<string, { description: string; usage?: string }> = {
  help: { description: "Affiche la liste des commandes disponibles" },
  whoami: { description: "Affiche les informations de l'utilisateur" },
  about: { description: "Affiche les informations personnelles" },
  skills: { description: "Liste les compétences techniques", usage: "skills [category]" },
  projects: { description: "Liste les projets réalisés", usage: "projects [type]" },
  contact: { description: "Affiche les informations de contact" },
  clear: { description: "Efface le terminal" },
  date: { description: "Affiche la date et l'heure actuelles" },
  pwd: { description: "Affiche le répertoire courant" },
  ls: { description: "Liste les fichiers du répertoire", usage: "ls [directory]" },
  cat: { description: "Affiche le contenu d'un fichier", usage: "cat <filename>" },
  echo: { description: "Affiche un message", usage: "echo <message>" },
  history: { description: "Affiche l'historique des commandes" },
  neofetch: { description: "Affiche les informations système stylisées" },
  nmap: { description: "Simule un scan de ports", usage: "nmap <target>" },
  ping: { description: "Simule un ping vers une cible", usage: "ping <target>" },
  curl: { description: "Simule une requête HTTP", usage: "curl <url>" },
  git: { description: "Affiche les informations git" },
  npm: { description: "Affiche les informations npm" },
  theme: { description: "Bascule entre le mode clair et sombre" },
  social: { description: "Affiche les liens des réseaux sociaux" },
  uname: { description: "Affiche les informations système" },
  uptime: { description: "Affiche le temps depuis le démarrage" },
  hostname: { description: "Affiche le nom de l'hôte" },
  ifconfig: { description: "Affiche la configuration réseau" },
  sudo: { description: "Exécute une commande avec les privilèges root", usage: "sudo <command>" },
  exit: { description: "Ferme le terminal (simule)" },
  matrix: { description: "Active l'effet Matrix" },
  hack: { description: "Lance une simulation de hack" },
  banner: { description: "Affiche la bannière ASCII" },
};

const InteractiveTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "info", text: "Terminal Hady v2.0 - Tapez 'help' pour voir les commandes disponibles" },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const addLine = (line: TerminalLine) => {
    setLines((prev) => [...prev, line]);
  };

  const addLines = (newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    addLine({ type: "command", text: trimmedCmd });
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const [command, ...args] = trimmedCmd.split(" ");
    const lowerCommand = command.toLowerCase();

    switch (lowerCommand) {
      case "help":
        addLines([
          { type: "info", text: "Commandes disponibles:" },
          { type: "output", text: "" },
          ...Object.entries(COMMANDS).map(([name, info]) => ({
            type: "output" as const,
            text: `  ${name.padEnd(12)} - ${info.description}${info.usage ? ` (${info.usage})` : ""}`,
          })),
        ]);
        break;

      case "whoami":
        addLines([
          { type: "success", text: "hady" },
          { type: "output", text: "Security Engineer & Full-Stack Developer" },
          { type: "output", text: "UID: 1337 | GID: hackers" },
        ]);
        break;

      case "about":
        addLines([
          { type: "info", text: "=== À propos de Hady Dieye ===" },
          { type: "output", text: "" },
          { type: "output", text: "Nom: Hady Dieye" },
          { type: "output", text: "Rôle: Security Engineer & Full-Stack Developer" },
          { type: "output", text: "Localisation: Conakry, Guinée" },
          { type: "output", text: "Âge: 23 ans" },
          { type: "output", text: "" },
          { type: "success", text: "Du code au pentest, je maîtrise les deux faces." },
        ]);
        break;

      case "skills":
        const category = args[0]?.toLowerCase();
        if (category === "security" || category === "secu") {
          addLines([
            { type: "info", text: "=== Compétences Cybersécurité ===" },
            { type: "success", text: "Pentesting ................ 90%" },
            { type: "success", text: "Red Team Operations ....... 85%" },
            { type: "success", text: "OWASP Top 10 .............. 95%" },
            { type: "success", text: "Burp Suite ................ 85%" },
            { type: "success", text: "Nmap / Recon .............. 90%" },
          ]);
        } else if (category === "frontend" || category === "front") {
          addLines([
            { type: "info", text: "=== Compétences Frontend ===" },
            { type: "warning", text: "React / React Native ...... 90%" },
            { type: "warning", text: "TypeScript ................ 85%" },
            { type: "warning", text: "Next.js ................... 80%" },
            { type: "warning", text: "Tailwind CSS .............. 95%" },
          ]);
        } else if (category === "backend" || category === "back") {
          addLines([
            { type: "info", text: "=== Compétences Backend ===" },
            { type: "success", text: "Python .................... 85%" },
            { type: "success", text: "Node.js ................... 80%" },
            { type: "success", text: "Supabase .................. 85%" },
            { type: "success", text: "PostgreSQL ................ 75%" },
          ]);
        } else {
          addLines([
            { type: "info", text: "=== Catégories de compétences ===" },
            { type: "output", text: "  security  - Compétences en cybersécurité" },
            { type: "output", text: "  frontend  - Compétences frontend" },
            { type: "output", text: "  backend   - Compétences backend" },
            { type: "output", text: "" },
            { type: "output", text: "Usage: skills <category>" },
          ]);
        }
        break;

      case "projects":
        const projectType = args[0]?.toLowerCase();
        if (projectType === "security" || projectType === "secu") {
          addLines([
            { type: "info", text: "=== Projets Cybersécurité ===" },
            { type: "success", text: "[RED_TEAM] CrimsonOps - Plateforme de gestion Red Team" },
            { type: "success", text: "[SECURITY] Terminal Hacker - Simulateur de terminal" },
            { type: "success", text: "[SECURITY] Passvibe - Gestionnaire de mots de passe" },
          ]);
        } else if (projectType === "dev") {
          addLines([
            { type: "info", text: "=== Projets Développement ===" },
            { type: "warning", text: "[MOBILE_APP] Louma App - Application immobilière" },
            { type: "warning", text: "[WEB_APP] Dépense Tracker - Gestion de dépenses" },
            { type: "warning", text: "[WEB_APP] NoteEA - Application de prise de notes" },
            { type: "warning", text: "[WEB_APP] CSI Manager - Gestion de centre" },
          ]);
        } else {
          addLines([
            { type: "info", text: "=== Types de projets ===" },
            { type: "output", text: "  security  - Projets cybersécurité" },
            { type: "output", text: "  dev       - Projets développement" },
            { type: "output", text: "" },
            { type: "output", text: "Usage: projects <type>" },
          ]);
        }
        break;

      case "contact":
        addLines([
          { type: "info", text: "=== Contact ===" },
          { type: "output", text: "" },
          { type: "success", text: "Email: contact@hadydieye.dev" },
          { type: "warning", text: "GitHub: github.com/hadydieye" },
          { type: "warning", text: "LinkedIn: linkedin.com/in/hady-dieye" },
          { type: "output", text: "" },
          { type: "success", text: "Status: Disponible pour projets" },
        ]);
        break;

      case "clear":
        setLines([]);
        break;

      case "date":
        addLine({ type: "success", text: new Date().toLocaleString("fr-FR", { dateStyle: "full", timeStyle: "long" }) });
        break;

      case "pwd":
        addLine({ type: "success", text: "/home/hady/portfolio" });
        break;

      case "ls":
        const dir = args[0];
        if (dir === "-la" || dir === "-l" || dir === "-a" || !dir) {
          addLines([
            { type: "output", text: "total 42" },
            { type: "output", text: "drwxr-xr-x  2 hady hackers 4096 Mar  3 15:00 ." },
            { type: "output", text: "drwxr-xr-x  3 hady hackers 4096 Mar  3 14:00 .." },
            { type: "success", text: "-rw-r--r--  1 hady hackers 1337 Mar  3 15:00 about.md" },
            { type: "success", text: "-rw-r--r--  1 hady hackers 2048 Mar  3 15:00 skills.json" },
            { type: "success", text: "-rw-r--r--  1 hady hackers 4096 Mar  3 15:00 projects.ts" },
            { type: "warning", text: "drwxr-xr-x  2 hady hackers 4096 Mar  3 15:00 security/" },
            { type: "warning", text: "drwxr-xr-x  2 hady hackers 4096 Mar  3 15:00 dev/" },
            { type: "output", text: "-rw-r--r--  1 hady hackers  512 Mar  3 15:00 contact.txt" },
          ]);
        } else {
          addLine({ type: "error", text: `ls: cannot access '${dir}': No such file or directory` });
        }
        break;

      case "cat":
        const filename = args[0];
        if (!filename) {
          addLine({ type: "error", text: "cat: missing operand" });
        } else if (filename === "about.md") {
          addLines([
            { type: "output", text: "# Hady Dieye" },
            { type: "output", text: "" },
            { type: "output", text: "Security Engineer & Full-Stack Developer" },
            { type: "output", text: "Passionné par la cybersécurité et le développement." },
          ]);
        } else if (filename === "contact.txt") {
          addLines([
            { type: "success", text: "Email: contact@hadydieye.dev" },
            { type: "success", text: "GitHub: hadydieye" },
            { type: "success", text: "LinkedIn: hady-dieye" },
          ]);
        } else {
          addLine({ type: "error", text: `cat: ${filename}: No such file or directory` });
        }
        break;

      case "echo":
        if (args.length === 0) {
          addLine({ type: "output", text: "" });
        } else {
          addLine({ type: "output", text: args.join(" ") });
        }
        break;

      case "history":
        if (commandHistory.length === 0) {
          addLine({ type: "output", text: "No commands in history" });
        } else {
          addLines(
            commandHistory.map((cmd, i) => ({
              type: "output" as const,
              text: `  ${(i + 1).toString().padStart(4)}  ${cmd}`,
            }))
          );
        }
        break;

      case "neofetch":
        addLines([
          { type: "success", text: "        .--.         hady@kali" },
          { type: "success", text: "       |o_o |        ---------" },
          { type: "success", text: "       |:_/ |        OS: Kali Linux" },
          { type: "success", text: "      //   \\ \\       Host: Portfolio v2.0" },
          { type: "success", text: "     (|     | )      Kernel: React 18" },
          { type: "success", text: "    /'\\_   _/`\\      Uptime: Always on" },
          { type: "success", text: "    \\___)=(___/      Shell: bash" },
          { type: "output", text: "" },
          { type: "warning", text: "                     Terminal: Interactive" },
          { type: "warning", text: "                     Theme: Neon Cyber" },
          { type: "warning", text: "                     Icons: Lucide React" },
        ]);
        break;

      case "nmap":
        const target = args[0];
        if (!target) {
          addLine({ type: "error", text: "Usage: nmap <target>" });
        } else {
          addLines([
            { type: "output", text: `Starting Nmap scan on ${target}...` },
            { type: "output", text: "" },
            { type: "info", text: "PORT     STATE   SERVICE      VERSION" },
            { type: "success", text: "22/tcp   open    ssh          OpenSSH 8.9" },
            { type: "warning", text: "80/tcp   open    http         nginx 1.18" },
            { type: "success", text: "443/tcp  open    https        nginx 1.18" },
            { type: "output", text: "3000/tcp closed  ppp" },
            { type: "output", text: "" },
            { type: "success", text: "Nmap done: 1 IP address scanned in 2.34 seconds" },
          ]);
        }
        break;

      case "ping":
        const pingTarget = args[0];
        if (!pingTarget) {
          addLine({ type: "error", text: "Usage: ping <target>" });
        } else {
          addLines([
            { type: "output", text: `PING ${pingTarget} (192.168.1.1) 56(84) bytes of data.` },
            { type: "success", text: `64 bytes from ${pingTarget}: icmp_seq=1 ttl=64 time=0.042 ms` },
            { type: "success", text: `64 bytes from ${pingTarget}: icmp_seq=2 ttl=64 time=0.039 ms` },
            { type: "success", text: `64 bytes from ${pingTarget}: icmp_seq=3 ttl=64 time=0.041 ms` },
            { type: "output", text: "" },
            { type: "info", text: `--- ${pingTarget} ping statistics ---` },
            { type: "output", text: "3 packets transmitted, 3 received, 0% packet loss" },
          ]);
        }
        break;

      case "curl":
        const url = args[0];
        if (!url) {
          addLine({ type: "error", text: "Usage: curl <url>" });
        } else {
          addLines([
            { type: "output", text: `Connecting to ${url}...` },
            { type: "success", text: "HTTP/1.1 200 OK" },
            { type: "output", text: "Content-Type: application/json" },
            { type: "output", text: "" },
            { type: "info", text: '{"status": "success", "message": "Hello from Hady!"}' },
          ]);
        }
        break;

      case "git":
        addLines([
          { type: "info", text: "=== Git Info ===" },
          { type: "output", text: "Branch: main" },
          { type: "success", text: "Status: Clean" },
          { type: "output", text: "Last commit: Transformation Dashboard" },
          { type: "warning", text: "Remote: github.com/hadydieye/hady-dieye-portfolio" },
        ]);
        break;

      case "npm":
        addLines([
          { type: "info", text: "=== NPM Info ===" },
          { type: "output", text: "npm: 10.x" },
          { type: "output", text: "node: 20.x" },
          { type: "output", text: "" },
          { type: "success", text: "Dependencies:" },
          { type: "output", text: "  react: ^18.3.1" },
          { type: "output", text: "  typescript: ^5.6.2" },
          { type: "output", text: "  tailwindcss: ^3.4.11" },
          { type: "output", text: "  framer-motion: ^11.11.11" },
        ]);
        break;

      case "theme":
        toggleTheme();
        addLine({ type: "success", text: `Theme switched to ${theme === "dark" ? "light" : "dark"} mode` });
        break;

      case "social":
        addLines([
          { type: "info", text: "=== Social Links ===" },
          { type: "output", text: "" },
          { type: "warning", text: "GitHub:   https://github.com/hadydieye" },
          { type: "warning", text: "LinkedIn: https://linkedin.com/in/hady-dieye" },
          { type: "warning", text: "Email:    contact@hadydieye.dev" },
        ]);
        break;

      case "uname":
        if (args[0] === "-a") {
          addLine({ type: "success", text: "Linux kali 6.1.0-kali9-amd64 #1 SMP x86_64 GNU/Linux" });
        } else {
          addLine({ type: "success", text: "Linux" });
        }
        break;

      case "uptime":
        const uptimeMs = Date.now() - startTime.current;
        const uptimeMin = Math.floor(uptimeMs / 60000);
        const uptimeSec = Math.floor((uptimeMs % 60000) / 1000);
        addLine({ type: "success", text: `up ${uptimeMin} min ${uptimeSec} sec, 1 user, load average: 0.42, 0.37, 0.33` });
        break;

      case "hostname":
        addLine({ type: "success", text: "kali" });
        break;

      case "ifconfig":
        addLines([
          { type: "info", text: "eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500" },
          { type: "output", text: "        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255" },
          { type: "output", text: "        inet6 fe80::1  prefixlen 64  scopeid 0x20<link>" },
          { type: "output", text: "        ether 00:0c:29:xx:xx:xx  txqueuelen 1000  (Ethernet)" },
          { type: "output", text: "" },
          { type: "info", text: "lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536" },
          { type: "output", text: "        inet 127.0.0.1  netmask 255.0.0.0" },
        ]);
        break;

      case "sudo":
        if (args.length === 0) {
          addLine({ type: "error", text: "Usage: sudo <command>" });
        } else {
          addLines([
            { type: "output", text: "[sudo] password for hady: ********" },
            { type: "success", text: "Access granted. You are now root." },
            { type: "warning", text: "With great power comes great responsibility!" },
          ]);
        }
        break;

      case "exit":
        addLines([
          { type: "warning", text: "Logout..." },
          { type: "info", text: "Connection to portfolio closed." },
          { type: "success", text: "Thank you for visiting! Come back soon." },
        ]);
        break;

      case "matrix":
        addLines([
          { type: "success", text: "Wake up, Neo..." },
          { type: "success", text: "The Matrix has you..." },
          { type: "success", text: "Follow the white rabbit." },
          { type: "warning", text: "Knock, knock, Neo." },
        ]);
        break;

      case "hack":
        addLines([
          { type: "warning", text: "[*] Initializing hack sequence..." },
          { type: "success", text: "[+] Target acquired" },
          { type: "success", text: "[+] Bypassing firewall..." },
          { type: "success", text: "[+] Gaining access..." },
          { type: "success", text: "[+] Extracting data..." },
          { type: "info", text: "[!] Just kidding! This is a portfolio, not a hacking tool." },
          { type: "output", text: "" },
          { type: "warning", text: "Remember: Hack ethically. Always get permission!" },
        ]);
        break;

      case "banner":
        addLines([
          { type: "success", text: "██╗  ██╗ █████╗ ██████╗ ██╗   ██╗" },
          { type: "success", text: "██║  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝" },
          { type: "success", text: "███████║███████║██║  ██║ ╚████╔╝ " },
          { type: "success", text: "██╔══██║██╔══██║██║  ██║  ╚██╔╝  " },
          { type: "success", text: "██║  ██║██║  ██║██████╔╝   ██║   " },
          { type: "success", text: "╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝    ╚═╝   " },
          { type: "output", text: "" },
          { type: "warning", text: "Security Engineer & Full-Stack Developer" },
        ]);
        break;

      default:
        addLine({ type: "error", text: `Command not found: ${command}. Type 'help' for available commands.` });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matchingCommands = Object.keys(COMMANDS).filter((cmd) => cmd.startsWith(input.toLowerCase()));
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      } else if (matchingCommands.length > 1) {
        addLine({ type: "command", text: input });
        addLine({ type: "output", text: matchingCommands.join("  ") });
      }
    }
  };

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
      case "info":
        return "text-neon-purple";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-neon-magenta/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-neon-green/80" />
        </div>
        <span className="text-xs text-muted-foreground font-mono ml-2">hady@kali:~/portfolio</span>
      </div>

      <div
        ref={terminalRef}
        className="p-4 font-mono text-sm h-[300px] overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${getLineColor(line.type)} ${line.type === "command" ? "flex items-center gap-2" : ""} whitespace-pre-wrap`}
          >
            {line.type === "command" && (
              <>
                <span className="text-neon-green">hady@kali</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-neon-cyan">~</span>
                <span className="text-muted-foreground">$</span>
              </>
            )}
            <span className={line.type === "command" ? "ml-2" : ""}>{line.text}</span>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-neon-green">hady@kali</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-neon-cyan">~</span>
          <span className="text-muted-foreground">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground ml-2 caret-neon-green"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTerminal;
