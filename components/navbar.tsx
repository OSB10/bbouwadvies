"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-b-bouwadvies", label: "Over B Bouwadvies" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-surface atmospheric-shadow"
    >
      <nav className="site-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-[14px] font-black uppercase tracking-[-0.03em] text-primary md:text-[15px]"
        >
          B BOUWADVIES
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "type-nav pb-1 text-secondary transition-colors",
                  active && "border-b-2 border-primary text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="monolith-button monolith-button-primary px-6! hidden! lg:inline-flex!"
        >
          Neem contact op
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav-dropdown"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center border border-outline-variant/30 bg-white text-primary lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav-dropdown"
          className="site-container border-t border-outline-variant/20 bg-surface py-6 lg:hidden"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "type-nav text-secondary",
                  pathname === item.href && "text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="monolith-button monolith-button-primary mt-8 justify-center"
          >
            Neem contact op
          </Link>
        </div>
      ) : null}
    </header>
  );
}
