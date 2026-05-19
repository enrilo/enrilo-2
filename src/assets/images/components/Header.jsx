import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  // Dynamic title map
  const titleMap = {
    "/": "Enrilo",
    "/pricing": "Pricing Page",
    "/features": "Our Features",
    "/contact-us": "Contact Us",
    "/privacy-policy": "Privacy Policy",
    "/terms-and-conditions": "Terms & Conditions",
  };

  return (
    <header className="bg-white shadow p-4 flex flex-row justify-center">
      <h1 className="text-xl font-semibold text-gray-800">{currentTitle}</h1>
    </header>
  );
}