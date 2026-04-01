import * as React from "react";
import { BaseEmail, DataBlock, MutedNote } from "./_components/base-email";

interface ContactFormEmailProps {
  submittedAt: string;
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  companyProject?: string;
}

export const subject = "Nieuw contactverzoek";

export function ContactFormEmail({
  submittedAt,
  fullName,
  email,
  phone,
  subject: formSubject,
  message,
  companyProject,
}: ContactFormEmailProps) {
  return (
    <BaseEmail
      previewText={`Nieuw contactverzoek: ${fullName}`}
      title="Nieuw contactverzoek ontvangen"
      intro="Er is een nieuwe aanvraag binnengekomen via het contactformulier op bbouwadvies.nl."
      actionLabel="Reageer per e-mail"
      actionUrl={`mailto:${email}`}
      actionNote="Antwoord bij voorkeur binnen 1 werkdag."
      footerNote="Interne melding · Contact intake"
    >
      <DataBlock label="Naam" value={fullName} />
      <DataBlock
        label="E-mail"
        value={<a href={`mailto:${email}`}>{email}</a>}
      />
      <DataBlock label="Telefoon" value={phone || "-"} />
      <DataBlock label="Bedrijf / project" value={companyProject || "-"} />
      <DataBlock label="Onderwerp" value={formSubject} />
      <DataBlock label="Tijdstip" value={submittedAt} />
      <DataBlock label="Bericht" value={message} />
      <MutedNote>
        Verwerk deze aanvraag in de intakeflow voordat u inhoudelijk reageert.
      </MutedNote>
    </BaseEmail>
  );
}

export default ContactFormEmail;
