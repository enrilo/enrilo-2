"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const titleMap = {
    "/": "Enrilo",
    "/login": "Login",
    "/dashboard": "Dashboard",
    "/pricing": "Pricing Page",
    "/features": "Our Features",
    "/contact-us": "Contact Us",
    "/privacy-policy": "Privacy Policy",
    "/terms-and-conditions": "Terms & Conditions",
  };

  let currentTitle = "Enrilo Dashboard";

  return (
    <header className="bg-white shadow p-4 flex flex-row justify-center">
      <h1 className="text-xl font-semibold text-gray-800">{currentTitle}</h1>
    </header>
  );
}