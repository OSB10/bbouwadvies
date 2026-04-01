import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over B Bouwadvies | Onafhankelijk Bouwkundig Advies",
  description:
    "Lees meer over de achtergrond, onafhankelijke werkwijze en technische zorgvuldigheid van B Bouwadvies.",
};

const values = [
  {
    icon: "verified_user",
    title: "Onafhankelijkheid",
    body: "Wij werken volledig onafhankelijk van aannemers en ontwikkelaars. Onze adviezen zijn gebaseerd op technische feiten en een objectieve analyse.",
  },
  {
    icon: "biotech",
    title: "Analytische Precisie",
    body: "Geen aannames, maar analyse. Wij brengen de technische werkelijkheid in kaart en maken inzichtelijk wat er daadwerkelijk speelt.",
  },
  {
    icon: "balance",
    title: "Objectief Advies",
    body: "Wij leveren heldere, onderbouwde rapportages die de basis vormen voor verantwoorde beslissingen.",
  },
];

const steps = [
  {
    number: "01",
    title: "Vooronderzoek",
    body: "Analyse van beschikbare informatie, als basis voor de inspectie.",
  },
  {
    number: "02",
    title: "In-situ Inspectie",
    body: "Inspectie op locatie met gerichte observatie en metingen van de bouwkundige staat.",
  },
  {
    number: "03",
    title: "Analyse en toetsing",
    body: "Beoordeling van bevindingen op basis van normen, regelgeving en technische kennis.",
  },
  {
    number: "04",
    title: "Rapportage",
    body: "Heldere rapportage met inzicht in bevindingen, risico's en concrete aandachtspunten.",
  },
];

export default function OverPage() {
  return (
    <div className="page-frame">
      <section className="relative overflow-hidden bg-surface pt-24 pb-32">
        <div className="site-container grid-gap grid grid-cols-1 items-start lg:grid-cols-12">
          <div className="content-stack lg:col-span-8">
            <span className="mb-6 block text-xs uppercase tracking-widest text-secondary">
              De Fundering van Vertrouwen
            </span>
            <h1 className="measure-lg mb-8 text-[3.5rem] font-black leading-[1.1] tracking-tighter text-on-surface">
              Onafhankelijk bouwkundig advies, gebaseerd op analyse en inzicht.
            </h1>
            <div className="hero-accent mb-12" />
            <div className="measure-md text-xl leading-relaxed text-on-surface-variant">
              B Bouwadvies is ontstaan vanuit een brede achtergrond in
              architectuur en bouwtechniek. Wij analyseren bouwkundige
              vraagstukken en vertalen deze naar helder inzicht en onderbouwde
              adviezen. Onafhankelijk, kritisch en gericht op wat er werkelijk
              speelt.
            </div>
          </div>

          <div className="relative lg:col-span-4">
            <div className="relative aspect-3/4 bg-surface-container">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMYIYqBDFNGpjxi3EoYPh8U0jNNkvDIlgu_ZF_TE6InccjOmXAIECBPUC1oknAssgYlobyNAt52bHa2DWJrPbAumLS55Ikb7SCnBGUn5YA1UhuwkO5pGPrdKBwlITGspLEzrpB9MZ6TOss2lMgCaEQ9_blhZCIxmBumF2CF40Adt-bnpy1crYCViFMFcfU2fbHqZ-hOoI_ZaGJubVUDirCFSjhLZ9RWz03SpXb5xVD8K9XDJwnxFrHaZnBrUCQqMrAslGjjLD1qoLw"
                alt="Architectural Intent"
                fill
                priority
                className="object-cover opacity-80 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-primary opacity-5 mix-blend-overlay" />
            </div>
            <div className="card-pad-sm absolute -bottom-8 -left-8 hidden bg-white shadow-sm md:block">
              <p className="text-3xl font-black text-primary">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-secondary">
                Jaar Expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface-container-low">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-0 border-l border-outline-variant/20 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`card-pad border-b border-r border-outline-variant/20 ${
                  index !== 1 ? "bg-white" : ""
                }`}
              >
                <span
                  className="material-symbols-outlined mb-6 w-12 h-12 text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  {value.icon}
                </span>
                <h2 className="mb-4 text-lg font-bold uppercase tracking-tight">
                  {value.title}
                </h2>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface">
        <div className="site-container grid-gap-lg grid grid-cols-1 items-center lg:grid-cols-12">
          <div className="order-2 lg:col-span-5 lg:order-1">
            <div className="relative">
              <div className="absolute -left-12 -top-12 -z-10 h-64 w-64 bg-surface-container-highest/30" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVAqD0W296frL4VPwh5XR-0A3-ETV-XEuYrtf0-CRsn5nEoayuZS_-JMqu4sPvZypZ30Wduz3tEfYKv4I9Pi4HK3gMmHE9fqmBpt-6UatJfP25URXlZ_QF8oZEhj35xFyaACvHn6rzOu1rzgzXdsgWlmjGtCWXSdWwfI8AIQ3ybUTJuoRm-OsDaOvgIuSsRKsiwEATw25aA7vPAwTmNp1ro2fZYOxiAQ6p2BS9eWYlnbpL_bVII4y9gI_aaeKpRVdBSTuTEmZd9xvP"
                alt="Professional Standards"
                width={620}
                height={460}
                className="w-full grayscale brightness-95"
              />
            </div>
          </div>

          <div className="order-1 lg:col-span-7 lg:order-2">
            <h2 className="mb-8 text-4xl font-black tracking-tighter">
              Onafhankelijk en onderbouwd advies.
            </h2>
            <div className="hero-accent mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
              <p>
                Bij B Bouwadvies staat onafhankelijkheid centraal. Onze analyses
                zijn niet beïnvloed door uitvoerende of commerciële belangen.
              </p>
              <p>
                Wij werken gestructureerd en kijken verder dan de oppervlakte.
                Elke beoordeling is gebaseerd op analyse en technische
                onderbouwing.
              </p>
              <p>
                Onze rapportages geven helder inzicht en vormen een betrouwbare
                basis voor besluitvorming.
              </p>
            </div>
            <div className="mt-12">
              <p className="text-xl font-bold text-primary">
                100% Onafhankelijk
              </p>
              <p className="text-[10px] uppercase tracking-widest text-secondary">
                Geen provisies of commissies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-lg bg-surface-container-highest">
        <div className="site-container">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter">
              Technische Zorgvuldigheid
            </h2>
            <p className="mx-auto max-w-xl text-secondary">
              Kwaliteit is bij ons geen toeval, maar het resultaat van een
              gestructureerd proces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="card-pad flex h-80 flex-col justify-between bg-surface"
              >
                <span className="text-5xl font-black text-outline-variant/30">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-on-primary">
        <div className="site-container flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
          <h2 className="measure-md text-[2.5rem] font-black leading-none tracking-tighter text-on-primary">
            Klaar voor een <br />
            heldere analyse?
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="monolith-button monolith-button-light px-10 py-4 text-sm tracking-tight"
            >
              Plan een adviesgesprek
            </Link>
            <Link
              href="/diensten"
              className="monolith-button monolith-button-outline-light px-10 py-4 text-sm tracking-tight"
            >
              Bekijk projecten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
