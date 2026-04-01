import * as React from "react";
import {
  BaseEmail,
  DataBlock,
  EMAIL_ROUTES,
  MutedNote,
  appUrl,
} from "./_components/base-email";

interface ContactConfirmationEmailProps {
  fullName: string;
}

export const subject = "Wij hebben uw bericht ontvangen";

export function ContactConfirmationEmail({
  fullName,
}: ContactConfirmationEmailProps) {
  return (
    <BaseEmail
      previewText="Bedankt voor uw bericht aan B Bouwadvies"
      title="Bedankt voor uw bericht"
      intro={`Beste ${fullName}, wij hebben uw aanvraag goed ontvangen.`}
      actionLabel="Aanvullende informatie delen"
      actionUrl={appUrl(EMAIL_ROUTES.contact)}
      actionNote="Heeft u aanvullingen? Beantwoord deze e-mail of stuur een update via het contactformulier."
      footerNote="Bevestiging · Contactaanvraag"
    >
      <DataBlock
        label="Vervolgstap"
        value="Wij beoordelen uw bericht en nemen zo spoedig mogelijk contact met u op met een inhoudelijke reactie."
      />
      <DataBlock
        label="Wat u kunt verwachten"
        value="Een helder eerste advies over uw vraagstuk en praktische vervolgstappen."
      />
      <MutedNote>
        Bij urgente aanvullingen kunt u direct op deze e-mail reageren.
      </MutedNote>
    </BaseEmail>
  );
}

export default ContactConfirmationEmail;
