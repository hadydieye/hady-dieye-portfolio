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
    name: "Marc Dubois",
    role: "CTO",
    company: "TechCorp",
    rating: 5,
    text: "Hady a identifié des failles critiques que notre équipe n'avait pas détectées. Son rapport était clair et actionnable. Je recommande sans hésitation.",
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Security Lead",
    company: "FinanceApp",
    rating: 5,
    text: "Un professionnel passionné qui maîtrise autant le code que la sécurité. Rare de trouver quelqu'un avec cette double compétence.",
  },
  {
    id: 3,
    name: "Ahmed Khalil",
    role: "Founder",
    company: "StartupTech",
    rating: 5,
    text: "Intervention rapide, résultats concrets. Hady a sécurisé notre application en un temps record. Excellent communicant.",
  },
];
