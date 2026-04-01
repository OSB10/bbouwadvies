import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "architecture",
    title: "Bouwkundige Keuringen",
    body: "Grondige inspectie van bestaande constructies met gedetailleerde rapportage over staat en onderhoud.",
    href: "/diensten",
  },
  {
    icon: "rule",
    title: "Projectbegeleiding",
    body: "Kwaliteitsbewaking en technisch toezicht tijdens de realisatiefase om afwijkingen te voorkomen.",
    href: "/diensten",
  },
  {
    icon: "edit_note",
    title: "Technisch Advies",
    body: "Strategisch advies bij complexe bouwvraagstukken, renovaties en verduurzamings-trajecten.",
    href: "/diensten",
  },
];

const principles = [
  {
    icon: "verified_user",
    title: "Geen belangenverstrengeling",
    body: "Wij werken uitsluitend in opdracht van de eindgebruiker of eigenaar. Onze adviezen en rapportages zijn onafhankelijk, objectief en vrij van invloed van aannemers, ontwikkelaars of andere partijen.",
  },
  {
    icon: "engineering",
    title: "Technische Diepgang",
    body: "Wij kijken verder dan de oppervlakte. Door inzicht in de constructieve en technische kern signaleren wij risico's vroegtijdig en onderbouwd.",
  },
  {
    icon: "description",
    title: "Helderheid in Complexiteit",
    body: "Wij vertalen complexe technische vraagstukken naar duidelijke en bruikbare inzichten. Begrijpelijk voor elke stakeholder van directie tot gebruiker.",
  },
];

export default function HomePage() {
  return (
    <div className="page-frame">
      <section className="hero-section relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-surface lg:min-h-217.5">
        <div className="blueprint-grid pointer-events-none absolute inset-0" />
        <div className="site-container grid-gap relative z-10 grid w-full grid-cols-1 items-center lg:grid-cols-12">
          <div className="content-stack min-w-0 pt-12 lg:col-span-7">
            <div className="hero-accent" />
            <h1 className="type-display measure-lg text-on-surface">
              Onafhankelijk bouwkundig advies met focus op{" "}
              <span className="text-primary">inzicht</span> en kwaliteit.
            </h1>
            <p className="type-body-lg measure-md text-on-surface-variant">
              Van technische beoordeling tot strategisch meedenken. Altijd
              helder, zorgvuldig en onderbouwd. Wij vertalen complexe
              constructies naar concrete zekerheid.
            </p>
            <div className="button-row items-start">
              <Link
                href="/contact"
                className="monolith-button monolith-button-primary w-full sm:w-auto"
              >
                Neem contact op
              </Link>
              <Link
                href="/diensten"
                className="group relative monolith-button monolith-button-ghost w-full sm:w-auto"
              >
                Diensten bekijken
                <span className="absolute bottom-4 left-8 right-8 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="relative mt-12 min-w-0 lg:col-span-5 lg:mt-0">
            <div className="relative aspect-4/5 overflow-hidden bg-surface-container shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbCtb2wnwDYjh5hlsAIlv-BFxdqH2Mje6PCB5wWww-Sc2grmLHD46swMlPGBOVQ3cQaWWXD7CIk1Ac9y9v9GX06ZZbioRJRvOKLwg9OpgNa1-EG8XkvdB8c8-0CjWkwck1cxZ-ek6YWEneYRvRRbJCo9tDoXJkJSLhLVdHgQd5FKW0VmWumHwa-xDV9gJllMa7xkL6vklqI7lSxTBclIu5yFvKuM-E9_-8l-Z42r6c_tGItIQ3C0NquemEzUFvugKHTRI8Ly3oTMOB"
                alt="Modern architecture detail"
                fill
                priority
                className="object-cover grayscale opacity-80 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
            <div className="card-pad-sm absolute -bottom-6 -left-6 hidden max-w-70 border-l-4 border-primary bg-white shadow-xl md:block">
              <p className="mb-1 font-sans text-4xl font-black leading-none text-primary">
                10+
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                Jaar expertise in de bouw
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface-container-low">
        <div className="site-container">
          <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="measure-md">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Expertise gebieden
              </span>
              <h2 className="type-section-title text-on-surface">
                Gespecialiseerd in analyse, inzicht en technische onderbouwing.
              </h2>
            </div>
            <div className="mb-4 hidden h-0.5 w-16 bg-on-surface md:block" />
          </div>

          <div className="grid grid-cols-1 gap-px bg-outline-variant/20 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="card-pad group bg-white transition-all duration-500 hover:bg-primary flex flex-col"
              >
                <div className="mb-10 text-primary transition-colors group-hover:text-on-primary">
                  <span
                    className="material-symbols-outlined w-12 h-12"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {service.icon}
                  </span>
                </div>
                <h3 className="type-card-title mb-4 transition-colors group-hover:text-on-primary">
                  {service.title}
                </h3>
                <p className="type-body mb-8 text-on-surface-variant transition-colors group-hover:text-on-primary/80 leading-relaxed">
                  {service.body}
                </p>
                <Link
                  href={service.href}
                  className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-on-primary"
                >
                  Lees meer
                  <span className="material-symbols-outlined text-xs">
                    north_east
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface">
        <div className="site-container">
          <div className="grid-gap-lg grid grid-cols-1 items-center lg:grid-cols-2">
            <div className="order-2 relative lg:order-1">
              <div className="relative z-10 h-80 bg-surface-container sm:h-96 md:h-125">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwpf24TazZ_KpfHNJcwcbggpg9K31L2GRRlxbOvVxw7m7SB_oCcjnlAne_v6lvbzsfFlDyN7-2FzO17MLlt0MAfkGxpYivTIlDDjZjXLPKj5BcqBerIYVfM8MQ-gckx48QGxh_aUglBTHDJtvtIm4OXcQvLxAv5eO0r9n9JAVFMUnrmo8czNdjoFnnQLaG6jjYkAfBE7a6oBcjyDGisT_lRaQw6tUjoc-l4f_pugatbLxQq08DvEbw7Yv1NRMLZDTn4y_tMt4_PUb"
                  alt="Technical blueprints and tools"
                  fill
                  className="object-cover grayscale opacity-90"
                />
              </div>
              <div className="hidden md:block absolute -right-12 -top-12 -z-10 h-64 w-64 bg-surface-container-highest" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="section-accent mb-10" />
              <h2 className="type-section-title mb-8 text-on-surface">
                Onafhankelijkheid is ons fundament.
              </h2>
              <div className="section-stack">
                {principles.map((item) => (
                  <div key={item.title} className="flex items-start gap-6">
                    <span className="material-symbols-outlined text-2xl text-primary">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="type-card-title mb-2 uppercase">
                        {item.title}
                      </h3>
                      <p className="type-body text-on-surface-variant">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-on-primary">
        <div className="site-container text-center">
          <h2 className="type-cta-title mx-auto mb-8 max-w-4xl">
            Klaar voor helder inzicht in uw bouwkundige vraagstuk?
          </h2>
          <p className="type-cta-description mx-auto mb-12 max-w-2xl">
            Neem contact op en ontvang een eerste inhoudelijke beoordeling van
            uw vraagstuk.
          </p>
          <div className="button-row-lg justify-center sm:flex-wrap">
            <Link
              href="mailto:info@bbouwadvies.nl"
              className="monolith-button monolith-button-lg monolith-button-light w-full sm:w-auto"
            >
              Stuur een Email
            </Link>
            <Link
              href="tel:+31612345678"
              className="monolith-button monolith-button-lg monolith-button-outline-light w-full sm:w-auto"
            >
              Bel ons direct
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
