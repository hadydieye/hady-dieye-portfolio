# Portfolio – Hady Dieye

Ce dépôt contient le code source de mon portfolio, ingénieur en sécurité et développeur full-stack. Le site présente mon profil, mes compétences, mes projets (sécurité, développement et hybrides), mes résultats et permet de le contacter.
---

## 🛠️ Technologies utilisées

- **Vite** (bundler ultra rapide)
- **React 18** et **TypeScript**
- **Tailwind CSS** avec **shadcn-ui** (composants UI)
- **Framer Motion** pour les animations
- **@react-three/fiber** + Three.js pour l'effet particules 3D
- **React Router** pour le routage simple
- **TanStack Query** pour la gestion des requêtes (pré‑configuré)
- **Vitest** pour les tests (exemple inclus)

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

## 📦 Déploiement

Le site peut être déployé sur n'importe quel service statique (Netlify, Vercel, GitHub Pages, etc.).

> Remarque : la génération de build produit quelques gros chunks (~800 Ko pour les particules). Pour optimiser, envisagez du code‑splitting ou un service de CDN.

---

## ✅ Fonctionnalités présentes

- Navigation ancrée vers toutes les sections
- Effets visuels : particules 3D, suivi du curseur, animations Framer
- Sections détaillées : À propos, Compétences, Cybersécurité, Développement, Projets hybrides, Résultats, Témoignages, Contact
- Formulaire de contact avec état local (placeholder pour EmailJS)
- Téléchargement du CV et liens externes
- Composants réutilisables (`ProjectCard`, `MetricCard`, etc.)
- Configuration React Router + page 404
- Thème Tailwind (dark mode prêt) et base SEO (meta tags OG)

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
