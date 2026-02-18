export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mamadou Bah",
    role: "Responsable informatique",
    company: "Sarl MobileTrendy",
    rating: 5,
    text: "Avant de lancer notre boutique en ligne, on a contacté Hady pour un bilan de sécurité. Il a trouvé des injections SQL sur notre back‑end et des mots de passe par défaut. Son rapport ultra détaillé et ses patchs nous ont évité une catastrophe. Tout était réglé en deux semaines.",
  },
  {
    id: 2,
    name: "Aïssatou Diallo",
    role: "Gérante",
    company: "Boutique BioGuinée",
    rating: 5,
    text: "Notre site e‑commerce a subi un phishing ciblé sur nos clients. Hady a mené des attaques simulées et montré comment nos formulaires étaient vulnérables. Il nous a redessiné le flux de connexion et formé le personnel. Depuis, aucun incident et les ventes ont repris.",
  },
  {
    id: 3,
    name: "Oumar Camara",
    role: "PDG",
    company: "AgriNet Guinée",
    rating: 5,
    text: "Notre plateforme de mise en relation agriculteurs/importateurs avait déjà subi une attaque XSS. Hady a pris le temps d'expliquer chaque vulnérabilité à notre équipe et a codé lui-même des corrections. Aujourd'hui, nos clients n'ont plus aucune crainte et nos volumes d'échanges ont doublé.",
  },
];
