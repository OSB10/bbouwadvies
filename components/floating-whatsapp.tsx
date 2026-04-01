import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const DEFAULT_MESSAGE =
  "Hallo! Ik heb een vraag over een bouwkundige inspectie of advies.";

function normalizeWhatsappNumber(raw: string) {
  return raw.replace(/\D/g, "");
}

export function FloatingWhatsapp() {
  const enabled = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED !== "false";
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const number = normalizeWhatsappNumber(rawNumber);

  if (!enabled || !number) {
    return null;
  }

  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || DEFAULT_MESSAGE;
  const href = `https://wa.me/${number}?${new URLSearchParams({ text: message }).toString()}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neem contact op via WhatsApp"
      data-contact-channel="whatsapp"
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-6 z-70 inline-flex h-14 w-14 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-[#25D366] shadow-[0_24px_40px_-22px_rgba(45,52,50,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_26px_44px_-20px_rgba(45,52,50,0.75)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
      <span className="sr-only">Open WhatsApp chat</span>
    </Link>
  );
}
