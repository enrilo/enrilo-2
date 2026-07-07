import Link from "next/link";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [{ href: "/contact-us", label: "Contact us" }],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms-and-conditions", label: "Terms & conditions" },
      { href: "/terms-of-service", label: "Terms of service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-line bg-slate text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display text-xl font-semibold text-white">
              AcadTracker
            </span>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Consultancy management software for educational consultancies.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="stamp-gold mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AcadTracker. All rights reserved.</p>
          <p>Built for educational consultancies.</p>
        </div>
      </div>
    </footer>
  );
}
