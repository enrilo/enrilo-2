import PricingClient from "./PricingClient";

export const metadata = {
  title: "Pricing - Simple Plans for Educational Consultancies",
  description:
    "Transparent pricing for Enrilo's consultancy management software. Choose the Regular plan for growing teams or a custom Enterprise plan for larger institutions.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Enrilo Pricing - Simple Plans for Educational Consultancies",
    description:
      "Transparent pricing for Enrilo's consultancy management software. Choose the Regular plan or a custom Enterprise plan.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
