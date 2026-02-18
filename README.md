# Portfolio – Hady Dieye

**Site en ligne :** https://hadydieyeportfolio.netlify.app

![Aperçu du portfolio](/screenshots/preview.png)

Ce dépôt héberge le code de mon site personnel : un portfolio construit pour démontrer mes compétences en cybersécurité et développement full‑stack. Parcourez les sections pour découvrir mon parcours, mes réalisations en pentest et en développement, ainsi que des exemples de projets, métriques et témoignages. Un formulaire de contact intégré facilite les prises de rendez‑vous.
---

## 🛠️ Technologies utilisées

- **Vite** (bundler ultra rapide)
- **React 18** et **TypeScript**
- **Tailwind CSS** avec **shadcn-ui** (composants UI) et **Radix UI** pour certains éléments
- **Framer Motion** pour les animations
- **@react-three/fiber** + Three.js pour l'effet particules 3D
- **React Router** pour le routage simple
- **TanStack Query** pour la gestion des requêtes (pré‑configuré)
- **Lucide React** pour les icônes (avec un composant Discord personnalisé)
- **Vitest** pour les tests (exemple inclus)
- Divers utilitaires : `zod`, `react-hook-form`, `zustand` (dans projets externes)

Le projet est structuré en composants réutilisables (`src/components`), données statiques (`src/data`) et hooks utilitaires.

---

## 📁 Structure du projet

```
src/
  components/
    layout/         # Navbar, Footer
    hero/           # HeroSection
    sections/       # Sections de la page (À propos, compétences, etc.)
    cards/          # ProjectCard, MetricCard
    effects/        # CursorFollow, ParticleField
    ui/             # Composants générés par shadcn-ui (non tous utilisés)
  data/             # Contenus statiques (projets, métriques, témoignages)
  hooks/            # useAnimations, use-mobile, etc.
  pages/            # Index (page principale), NotFound
  App.tsx, main.tsx
public/              # CV, favicon, robots.txt...
```

---

## 🚀 Démarrage local

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/hadydieye/hady-dieye-portfolio.git
   cd hady-dieye-portfolio
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   # ou `pnpm install` / `yarn` selon votre gestionnaire
   ```
3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le site sera accessible par défaut sur http://localhost:5173.
4. **Build de production**
   ```bash
   npm run build
   ```
   Le dossier `dist/` contiendra le site statique prêt à être déployé.

---

## �️ Projets et données

Le portfolio est entièrement *piloté par des données* :
- `src/data/projects.ts` contient trois listes : `securityProjects`, `devProjects` et `hybridProjects`.
- Chaque projet possède titre, description, type, badge visuel, technologies utilisées, et liens GitHub/Live.

Quelques exemples contenus dans ces listes :

- **CrimsonOps** – plateforme Red Team (React/TS/Tailwind).
- **Port Scanner** – outil Python multithread.
- **Louma App** – application immobilière mobile (React Native + Supabase).
- **Dépense Tracker** – Web app gestion financière (Next.js 16, Recharts).
- **MatrixSec** – plateforme de cybersécurité look Matrix.

Les métriques affichées dans la page d’accueil proviennent de `src/data/metrics.ts` (projets réalisés, vulnérabilités, taux de succès, etc.) et varient suivant les sections (`heroMetrics`, `impactMetrics`, `beforeAudit`/`afterAudit`).

La liste des témoignages est définie dans `src/data/testimonials.ts` et peut être modifiée sans toucher aux composants.

## �📦 Déploiement

Le site peut être déployé sur n'importe quel service statique (Netlify, Vercel, GitHub Pages, etc.).
Le projet contient un fichier `netlify.toml` généré automatiquement lors de la configuration avec la CLI, ce qui permet le déploiement continu à partir de GitHub (webhooks, clé de déploiement, preview de PRs).
> Remarque : la génération de build produit quelques gros chunks (~800 Ko pour les particules). Pour optimiser, envisagez du code‑splitting ou un service de CDN.

---

## ✅ Fonctionnalités présentes

- Navigation ancrée vers toutes les sections
- Effets visuels : particules 3D, suivi du curseur, animations Framer Motion
- Sections détaillées : À propos, Compétences, Cybersécurité, Développement, Projets hybrides, Résultats, Témoignages, Contact
- Contenu entièrement *data-driven* via `src/data` (projets, métriques, témoignages) pour faciliter la mise à jour
- Trois catégories de projets (cybersécurité, développement, hybrides) avec exemples réels et liens GitHub/Live
- Formulaire de contact avec état local (placeholder pour EmailJS) et affichage de toasts d’état d’envoi
- Téléchargement du CV et liens externes (LinkedIn, GitHub, Discord custom)
- Composants réutilisables (`ProjectCard`, `MetricCard`, `Accordion`, `Button`, etc.) générés par **shadcn-ui**
- Hook utilisateurs : `use-mobile` (détecte mobile), `use-toast`+`Toaster` (notifications), `useAnimations` (animations personnalisées)
- Configuration React Router + page 404
- Thème Tailwind (dark mode prêt) et base SEO (meta tags OG)
- Netlify CI/CD configuré (via `netlify.toml`, déploiements automatiques sur push)
- Test de base avec **Vitest** (fichier `test/example.test.ts` et setup dans `test/setup.ts`)

---

## ⚠️ Points à améliorer / développer

- **Formulaire contact** : nécessite intégration backend ou service tierce pour envoyer les messages.
- **Contenu dynamique** (CMS) plutôt que données codées en dur.
- **Tests** : seule un test trivial est présent.
- **Accessibilité** : ajouter `aria-*`, améliorer labels, etc.
- **Performance** : optimiser le bundle (particules / libraries inutilisées).
- **Composants UI** : supprimer ou exploiter ceux générés par shadcn-ui que le site n’utilise pas.
- **Documentation** : mettre à jour ce README avec des instructions spécifiques au projet.

---

## 🧩 Utilisation des composants shadcn-ui

Des composants UI (accrodion, alert, etc.) sont générés sous `src/components/ui`. Certains sont utilisés (toaster, tooltip), d'autres restent inactifs mais peuvent servir pour étendre l’interface.

---

## 🧪 Tests

La configuration `vitest` est prête, exécuter :

```bash
npm run test
```

Ajouter des tests unitaires et d’intégration pour renforcer la qualité.

---

## ✨ Personnalisation du contenu

La plupart des textes, projets et chiffres se trouvent dans `src/data`. Modifiez ces fichiers pour mettre à jour votre portfolio sans toucher aux composants.

---

## 📝 Licence

Déposer ici les informations de licence appropriées si nécessaire.

---

Pour toute question ou modification, ouvrez une issue ou contactez hady@dieye.dev.

Bon développement !
