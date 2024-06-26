import { PricingTier } from "../../../types/pricingTierType";

export const tiers: PricingTier[] = [
  {
    name: "Free",
    id: "0",
    href: "#",
    price: { "1": "R$19.99" },
    discountPrice: { "1": "" },
    description: `crédidtos de conversa super basica`,
    features: [`R$1.99 por minuto`, `Equivalente a 10 minutos`],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Pagar`,
  },
  {
    name: "Pro",
    id: "1",
    href: "#",
    price: { "1": "R$30" },
    discountPrice: { "1": "" },
    description: `crédidtos de conversa intermédia`,
    features: [
      `10`,
      `Customizable templates`,
      `Integration with third-party apps`,
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Pagar`,
  },
  {
    name: "Scaler",
    id: "2",
    href: "#",
    price: { "1": "R$50" },
    discountPrice: { "1": "" },
    description: `crédidtos de conversa avançada`,
    features: [
      `All in the pro plan plus`,
      `Priority support`,
      `Enterprise-grade security`,
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: `Pagar`,
  },
];
