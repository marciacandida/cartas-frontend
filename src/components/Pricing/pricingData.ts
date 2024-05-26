import { PricingTier } from "../../../types/pricingTierType";

export const tiers: PricingTier[] = [
  {
    name: "",
    id: "0",
    href: "#",
    price: { "1": "R$19.99" },
    discountPrice: { "1": "" },
    description: `crédidtos de conversa super basica`,
    features: [`R$1.99 por minuto`, `Equivalente a 10 minutos`],
    quantity: 10,
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Pagar`,
  },
  {
    name: "",
    id: "1",
    href: "#",
    price: { "1": "R$59,70" },
    discountPrice: { "1": "" },
    quantity: 30,
    description: `crédidtos de conversa intermédia`,
    features: [
      "Equivalente a 30 minutos"
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Pagar`,
  },
  {
    name: "",
    id: "2",
    href: "#",
    price: { "1": "R$119.40" },
    discountPrice: { "1": "" },
    description: `crédidtos de conversa avançada`,
    quantity: 60,
    features: [
        'Equivalente a 1 hora'
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: `Pagar`,
  },
];
