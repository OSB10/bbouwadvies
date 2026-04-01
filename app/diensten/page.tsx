import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten | B Bouwadvies",
  description:
    "Onze bouwkundige diensten: inspecties, technische beoordelingen, aankoopkeuringen, advies bij verbouwing en strategisch bouwkundig meedenken.",
};

const serviceCards = [
  {
    icon: "architecture",
    title: "1. Bouwkundige inspecties",
    body: "Een grondige inspectie van de bouwkundige staat van uw pand. Wij identificeren gebreken, analyseren risico’s en vertalen dit naar een helder en onderbouwd rapport.",
    tone: "white",
    className: "md:col-span-7",
    bullets: [
      "Volledige schil-analyse",
      "Identificatie van risico's",
      "Onafhankelijk onderbouwd rapport",
    ],
  },
  {
    icon: "analytics",
    title: "2. Technische beoordelingen",
    body: "Analyse van specifieke bouwkundige of constructieve vraagstukken, zoals vochtproblemen, scheurvorming of funderingen. Wij leveren een onafhankelijk en onderbouwd oordeel, zonder commerciële belangen.",
    tone: "soft",
    className: "md:col-span-5",
    footer: "Zekerheid door data\n& Analyse op locatie",
  },
  {
    icon: "foundation",
    title: "3. Aankoopkeuringen",
    body: "Voorkom verrassingen bij aankoop. Wij beoordelen de bouwkundige staat en geven inzicht in risico’s en te verwachten herstel op korte en lange termijn.",
    tone: "soft",
    className: "md:col-span-4",
  },
  {
    icon: "construction",
    title: "4. Advies bij verbouwing",
    body: "Begeleiding van concept tot oplevering. Wij toetsen plannen op technische haalbaarheid, controleren offertes van aannemers en bewaken de kwaliteit tijdens de uitvoering van uw renovatie of verbouwing.",
    tone: "white",
    className: "md:col-span-4",
  },
  {
    icon: "psychology",
    title: "5. Strategisch bouwkundig meedenken",
    body: "Voor vastgoedeigenaren en beheerders die verder kijken. Wij adviseren over verduurzaming, meerjarenonderhoudsplannen (MJOP) en de technische toekomstbestendigheid van uw portfolio.",
    tone: "dark",
    className: "md:col-span-4",
    footer: "Lange-termijn visie & Rendement",
  },
];

export default function DienstenPage() {
  return (
    <div className="page-frame">
      <section className="relative overflow-hidden bg-surface pt-32 pb-20">
        <div className="site-container grid-gap grid grid-cols-1 md:grid-cols-12">
          <div className="content-stack min-w-0 justify-center md:col-span-8">
            <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-secondary">
              Expertise &amp; Onafhankelijkheid
            </span>
            <h1 className="measure-lg text-5xl font-black leading-[1.05] tracking-tighter text-on-background md:text-7xl mb-8">
              Technisch inzicht als basis voor uw bouwkundige vraagstuk.
            </h1>
            <div className="hero-accent" />
            <p className="measure-md text-xl leading-relaxed text-on-surface-variant">
              Wij bieden onafhankelijk bouwkundig advies op basis van analyse en
              onderbouwing. Geen aannames, maar inzicht in wat er werkelijk
              speelt.
            </p>
          </div>

          <div className="relative h-80 sm:h-96 md:col-span-4 md:h-auto">
            <Image
              src="/architecture__concrete-facade-detail__geometric-shadows.png"
              alt="Architectural structure detail"
              fill
              priority
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface-container-low">
        <div className="site-container">
          <div className="mb-16">
            <h2 className="type-section-title mb-4 uppercase text-on-background">
              Onze Diensten
            </h2>
            <p className="text-sm uppercase tracking-widest text-secondary">
              Kernexpertises in bouwtechniek
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {serviceCards.map((card) => {
              const surfaceClass =
                card.tone === "dark"
                  ? "bg-primary text-on-primary"
                  : card.tone === "soft"
                    ? "bg-surface-container"
                    : "bg-surface-container-lowest";

              return (
                <article
                  key={card.title}
                  className={`${card.className} ${surfaceClass} card-pad flex flex-col justify-between group`}
                >
                  <div className="relative z-10">
                    <span
                      className={`material-symbols-outlined mb-8 w-12 h-12 ${
                        card.tone === "dark"
                          ? "text-on-primary"
                          : "text-primary"
                      }`}
                      style={{ fontSize: "2.5rem" }}
                    >
                      {card.icon}
                    </span>
                    <h3 className="mb-4 text-2xl font-black uppercase tracking-tight">
                      {card.title}
                    </h3>
                    <p
                      className={
                        card.tone === "dark"
                          ? "text-sm opacity-80 leading-relaxed"
                          : card.className === "md:col-span-7"
                            ? "leading-relaxed mb-6 max-w-lg text-on-surface-variant"
                            : "text-sm text-on-surface-variant leading-relaxed"
                      }
                    >
                      {card.body}
                    </p>

                    {card.bullets ? (
                      <ul className="space-y-3 text-xs uppercase tracking-wider text-secondary">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2">
                            <span className="h-1 w-1 bg-primary" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {card.bullets ? (
                    <Link
                      href="/contact"
                      className="mt-12 flex cursor-pointer items-center gap-4 text-sm font-bold uppercase tracking-tight text-primary transition-all group-hover:gap-6"
                    >
                      Lees meer
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </Link>
                  ) : null}

                  {!card.bullets && card.footer ? (
                    <div
                      className={`mt-8 ${
                        card.tone === "dark"
                          ? "border-t border-on-primary/20 pt-6 text-[10px] uppercase tracking-[0.2em]"
                          : "mt-12 text-xs uppercase leading-loose tracking-wider text-secondary"
                      }`}
                    >
                      {card.footer.split("\n").map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface">
        <div className="site-container grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhTvOh1NFtXdX124UAPvmva0pbb8n0hyRK5EKc3vAyYoXJKhsKv5QJPuRxTADaDqqhseq0peNt2L2UZRuK50OKYrpEgtnJKL5-KI9S2zVxeeV0sQgHHfvRtQTXxxcNXJGXUKsmlfS9k_8jdf6_JuAGkp_SrXxXcRiFVezPDJbD0o-mSt3OQFIP8ldGp_kTvke6lciJpT6JjqnES7uf4w4FfFD6tdyrccb28xxwbW9qJcGpPkgBCO7cj6al73rf8Pu_M12H_uGoGaJm"
                alt="Technical site inspection"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div className="order-1 min-w-0 md:order-2">
            <h2 className="mb-8 text-4xl font-black uppercase leading-none tracking-tighter text-on-background">
              Onafhankelijkheid als basis voor helder inzicht.
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-on-surface-variant">
              Bij B Bouwadvies staan we naast de opdrachtgever. Onze analyses
              zijn onafhankelijk en niet beïnvloed door uitvoerende of
              commerciële belangen. Wij leveren heldere, technisch onderbouwde
              inzichten die nodig zijn voor gefundeerde keuzes.
            </p>
            <div className="grid grid-cols-1 gap-8 border-t border-outline-variant/20 pt-8 sm:grid-cols-2">
              <div>
                <div className="mb-2 text-3xl font-black text-primary">
                  100%
                </div>
                <div className="text-[10px] uppercase tracking-widest text-secondary">
                  Onafhankelijk Advies
                </div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-black text-primary">
                  Evidence
                </div>
                <div className="text-[10px] uppercase tracking-widest text-secondary">
                  Based Rapporten
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-container-highest text-center">
        <div className="site-container text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter text-on-background">
              Klaar voor een heldere analyse?
            </h2>
            <p className="mb-12 text-lg text-on-surface-variant">
              Neem contact met ons op voor een vrijblijvend gesprek over uw
              bouwkundige uitdagingen.
            </p>
            <div className="button-row flex-col justify-center sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="monolith-button monolith-button-lg monolith-button-primary monolith-button-primary-cta w-full text-xs font-bold tracking-widest active:scale-[0.98] sm:w-auto"
              >
                Plan een inspectie
              </Link>
              <Link
                href="tel:+31634369753"
                className="monolith-button monolith-button-lg monolith-button-outline-cta w-full text-xs font-bold tracking-widest active:scale-[0.98] sm:w-auto"
              >
                Bel ons direct
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
