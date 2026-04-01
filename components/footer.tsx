import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-b-bouwadvies", label: "Over B Bouwadvies" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-highest text-[#595f66]">
      <div className="site-container grid grid-cols-1 gap-16 py-20 md:grid-cols-3">
        <div className="section-stack-sm">
          <Link
            href="/"
            className="block text-lg font-bold uppercase tracking-tight text-[#595f66]"
          >
            B BOUWADVIES
          </Link>
          <p className="type-body-sm max-w-xs text-[#595f66]/80">
            Uw partner voor onafhankelijk bouwkundig advies, inspecties en
            projectmanagement. Gebaseerd op technische integriteit.
          </p>
        </div>

        <div className="section-stack-sm">
          <h4 className="type-meta text-[#595f66]">Navigatie</h4>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-footer-link text-[#556162] transition-all hover:underline decoration-[#556162] underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="section-stack-sm">
          <h4 className="type-meta text-[#595f66]">Contactgegevens</h4>
          <div className="flex flex-col gap-4">
            <Link
              href="mailto:info@bbouwadvies.nl"
              className="type-footer-link text-[#556162] transition-all hover:underline decoration-[#556162] underline-offset-4"
            >
              info@bbouwadvies.nl
            </Link>
            <Link
              href="tel:+31612345678"
              className="type-footer-link text-[#556162] transition-all hover:underline decoration-[#556162] underline-offset-4"
            >
              +31 (0) 6 1234 5678
            </Link>
            <p className="type-footer-link pt-4 text-[#556162]">Nederland</p>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col items-center justify-between gap-4 border-t border-outline-variant/20 py-8 md:flex-row">
        <p className="type-body-sm text-[#556162]">
          &copy; 2024 B Bouwadvies. Onafhankelijk bouwkundig advies.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:justify-end">
          <Link
            href="/privacy"
            className="type-body-sm text-[#556162] hover:text-[#595f66]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/voorwaarden"
            className="type-body-sm text-[#556162] hover:text-[#595f66]"
          >
            Algemene Voorwaarden
          </Link>
        </div>
      </div>
    </footer>
  );
}
