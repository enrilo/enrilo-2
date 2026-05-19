"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // const showLinks = [
  //   '/',
  //   '/pricing',
  //   '/features',
  //   '/contact-us',
  //   '/privacy-policy',
  //   '/terms-and-conditions',
  //   '/terms-of-service'
  // ].includes(pathname);

  // const fullLinks = (
  //   <div className="flex flex-wrap gap-6 text-sm md:gap-8">
  //     <Link href="/" className="hover:text-white">Home</Link>
  //     <Link href="/pricing" className="hover:text-white">Pricing</Link>
  //     <Link href="/features" className="hover:text-white">Features</Link>
  //     <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
  //     <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
  //     <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
  //     <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
  //   </div>
  // );

  // const minimalLinks = (
  //   <div className="flex flex-wrap gap-6 text-sm md:gap-8">
  //     <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
  //     <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
  //     <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
  //     <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
  //   </div>
  // );

  return (
    <footer className="bg-[#1E293B] text-yellow-400 border-t p-3 text-sm w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        <div className="text-sm">
          © {new Date().getFullYear()} Enrilo. All rights reserved
        </div>
        {/* {showLinks ? fullLinks : minimalLinks} */}
      </div>
    </footer>
  );
}