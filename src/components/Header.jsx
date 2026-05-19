// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const pathname = usePathname();

//   const titleMap = {
//     "/": "Enrilo",
//     "/login": "Login",
//     "/dashboard": "Dashboard",
//     "/pricing": "Pricing Page",
//     "/features": "Our Features",
//     "/contact-us": "Contact Us",
//     "/privacy-policy": "Privacy Policy",
//     "/terms-and-conditions": "Terms & Conditions",
//   };

//   const showLinks = [
//     '/',
//     '/pricing',
//     '/features',
//     '/contact-us',
//     '/privacy-policy',
//     '/terms-and-conditions',
//     '/terms-of-service'
//   ].includes(pathname);

//   const fullLinks = (
//     <div className="flex flex-wrap gap-6 text-sm md:gap-8">
//       <Link href="/" className="hover:text-white">Home</Link>
//       <Link href="/pricing" className="hover:text-white">Pricing</Link>
//       <Link href="/features" className="hover:text-white">Features</Link>
//       <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
//       <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
//       <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
//       <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
//     </div>
//   );

//   const minimalLinks = (
//     <div className="flex flex-wrap gap-6 text-sm md:gap-8">
//       <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
//       <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
//       <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
//       <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
//     </div>
//   );

//   let currentTitle = "Enrilo Dashboard";

//   return (
//     <header className="bg-white shadow p-4 flex flex-row justify-center">
//       <h1 className="text-xl font-semibold text-gray-800">{currentTitle}</h1>
//       {showLinks ? fullLinks : minimalLinks}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/transparent-background/enrilo-without-tagline-1920x1080.png";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/pricing", label: "PRICING" },
    { href: "/features", label: "FEATURES" },
    { href: "/contact-us", label: "CONTACT US" },
    { href: "/privacy-policy", label: "PRIVACY POLICY" },
    { href: "/terms-and-conditions", label: "TERMS & CONDITIONS" },
    { href: "/terms-of-service", label: "TERMS OF SERVICE" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image src={logo} alt="Enrilo" width={160} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 text-sm font-semibold text-[#1E293B]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className={`hover:text-black transition ${ isActive ? "underline decoration-[#FACC15] decoration-2 underline-offset-4" : "" }`} >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button className="lg:hidden flex flex-col gap-1 z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <span className={`h-0.5 w-6 bg-[#1E293B] transition ${ menuOpen ? "rotate-45 translate-y-1.5" : "" }`} />
          <span className={`h-0.5 w-6 bg-[#1E293B] transition ${ menuOpen ? "opacity-0" : "" }`} />
          <span className={`h-0.5 w-6 bg-[#1E293B] transition ${ menuOpen ? "-rotate-45 -translate-y-1.5" : "" }`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40">
          <div className="flex flex-col px-4 py-4 gap-4 text-sm font-semibold text-[#1E293B]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`hover:text-black ${ isActive ? "underline decoration-[#FACC15] decoration-2 underline-offset-4" : "" }`}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "@/assets/images/transparent-background/enrilo-without-tagline-1920x1080.png";

// export default function Header() {
//   const pathname = usePathname();

//   const showLinks = [
//     "/",
//     "/pricing",
//     "/features",
//     "/contact-us",
//     "/privacy-policy",
//     "/terms-and-conditions",
//     "/terms-of-service",
//   ].includes(pathname);

//   const navLinks = showLinks ? [
//     { href: "/", label: "HOME" },
//     { href: "/pricing", label: "PRICING" },
//     { href: "/features", label: "FEATURES" },
//     { href: "/contact-us", label: "CONTACT US" },
//     { href: "/privacy-policy", label: "PRIVACY POLICY" },
//     { href: "/terms-and-conditions", label: "TERMS & CONDITIONS" },
//     { href: "/terms-of-service", label: "TERMS OF SERVICE" },
//   ] : [
//     { href: "/contact-us", label: "CONTACT US" },
//     { href: "/privacy-policy", label: "PRIVACY POLICY" },
//     { href: "/terms-and-conditions", label: "TERMS & CONDITIONS" },
//     { href: "/terms-of-service", label: "TERMS OF SERVICE" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        
//         {/* Left Side Logo */}
//         <Link href="/" className="text-xl font-bold tracking-tight text-[#1E293B]">
//           {/* <img src="/src/assets/images/transparent-background/enrilo-without-tagline-150x150.png" alt="Enrilo" /> */}
//           <Image src={logo} alt="Enrilo" width={175} />
//         </Link>

//         {/* Right Side Navigation */}
//         <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-semibold text-[#1E293B] md:gap-6">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <Link key={link.href} href={link.href} className={`transition-colors duration-200 hover:text-black ${
//                   isActive ? "text-[#1E293B] font-semibold underline decoration-[#FACC15]" : ""
//                 }`}>
//                 {link.label}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>
//     </header>
//   );
// }