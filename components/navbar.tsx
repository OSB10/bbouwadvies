"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface atmospheric-shadow">
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
          className="monolith-button monolith-button-primary px-6! hidden lg:inline-flex"
        >
          Neem contact op
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center border border-outline-variant/30 bg-white text-primary"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-surface p-0">
            <SheetTitle className="sr-only">Navigatiemenu</SheetTitle>
            <div className="flex h-full flex-col px-6 pb-8 pt-24">
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
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
