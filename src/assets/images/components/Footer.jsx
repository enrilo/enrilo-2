import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  const showLinks = [
    '/',
    '/pricing',
    '/features',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
    '/terms-of-service'
  ].includes(pathname);

  return (
    <footer className="bg-[#1E293B] text-yellow-400 border-t p-3 text-sm w-full">
      {showLinks ? (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          {/* Left: Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} Enrilo. All rights reserved
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-6 text-sm md:gap-8">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
            <a href="/features" className="hover:text-white">Features</a>
            <a href="/contact-us" className="hover:text-white">Contact Us</a>
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a>
            <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      ) : (
        // Only copyright → center
        // <div className="text-center text-sm">
        //   © {new Date().getFullYear()} Enrilo. All rights reserved
        // </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          {/* Left: Copyright */}
          <div className="text-sm">
            © {new Date().getFullYear()} Enrilo. All rights reserved
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-6 text-sm md:gap-8">
            <a href="/contact-us" className="hover:text-white">Contact Us</a>
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a>
            <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      )}
    </footer>
  );
}