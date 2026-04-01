import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | B Bouwadvies",
  description:
    "Neem contact op met B Bouwadvies voor onafhankelijk bouwkundig advies, aankoopkeuringen en technische beoordelingen.",
};

export default function ContactPage() {
  return (
    <div className="page-frame">
      <main className="site-container section-space-lg">
        <section className="mb-16 grid grid-cols-1 items-start gap-16 md:grid-cols-12">
          <div className="content-stack min-w-0 md:col-span-7 md:pr-12">
            <span className="mb-6 block text-xs uppercase tracking-widest text-secondary">
              Klaar voor de volgende stap
            </span>
            <h1 className="type-display measure-lg text-on-surface">
              Van complexiteit naar heldere keuzes.
            </h1>
            <div className="hero-accent mb-8" />
            <p className="type-body-lg measure-md text-on-surface-variant">
              Heeft u een vraagstuk of twijfelt u over een ontwerp of plan? Wij
              geven u een eerste inhoudelijke reactie en inzicht in de
              belangrijkste aandachtspunten.
            </p>
          </div>

          <div className="relative h-80 overflow-hidden bg-surface-container-high group sm:h-96 md:col-span-5 md:h-125">
            <Image
              src="/modern-city-map-with-minimal-geometric-shapes.png"
              alt="Architectural details"
              fill
              priority
              className="object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 border-20 border-surface pointer-events-none" />
          </div>
        </section>

        <div className="grid-gap-lg grid grid-cols-1 md:grid-cols-12">
          <aside className="section-stack md:col-span-4">
            <div className="section-stack-sm">
              <h2 className="type-card-title mb-6 uppercase text-primary">
                Details
              </h2>
              <div className="section-stack">
                <div className="flex flex-col gap-1">
                  <span className="type-form-label text-outline">E-mail</span>
                  <Link
                    href="mailto:info@bbouwadvies.nl"
                    className="break-all text-xl underline decoration-outline-variant decoration-1 underline-offset-8 transition-colors hover:text-primary"
                  >
                    info@bbouwadvies.nl
                  </Link>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="type-form-label text-outline">Telefoon</span>
                  <Link
                    href="tel:+31634369753"
                    className="wrap-break-words text-xl transition-colors hover:text-primary"
                  >
                    +31 (0) 6 34369753
                  </Link>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="type-form-label text-outline">Kantoor</span>
                  <p className="text-xl">Nederland</p>
                </div>
              </div>
            </div>

            <div className="card-pad-sm bg-surface-container">
              <h3 className="type-card-title mb-4 uppercase text-primary">
                Beschikbaarheid
              </h3>
              <p className="type-body-sm mb-6 text-on-surface-variant">
                Maandag t/m Vrijdag
                <br />
                09:00 - 18:00
              </p>
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span className="type-meta">Antwoord binnen 24 uur</span>
              </div>
            </div>
          </aside>

          <section className="inset-panel bg-white shadow-[0_40px_40px_-15px_rgba(45,52,50,0.04)] md:col-span-8">
            <h2 className="type-section-title mb-12 text-on-surface">
              Stuur ons een bericht
            </h2>
            <ContactForm />
          </section>
        </div>
      </main>
    </div>
  );
}
