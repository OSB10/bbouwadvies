import "server-only";

import { render } from "@react-email/render";
import type { ReactElement } from "react";
import { Resend } from "resend";

interface SendEmailInput {
  to: string | string[];
  subject: string;
  react: ReactElement;
  from?: string;
  replyTo?: string;
}

interface SendEmailResult {
  status: "sent" | "skipped";
  attempts: number;
}

const DEFAULT_RETRY_COUNT = 3;
const RETRY_DELAY_MS = 400;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getEmailConfig() {
  return {
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail:
      process.env.CONTACT_FROM_EMAIL ||
      process.env.RESEND_FROM_EMAIL ||
      "B Bouwadvies <onboarding@resend.dev>",
  };
}

export async function sendEmail({
  to,
  subject,
  react,
  from,
  replyTo,
}: SendEmailInput): Promise<SendEmailResult> {
  const config = getEmailConfig();

  if (!config.resendApiKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[email] RESEND_API_KEY missing. Email send skipped.",
        JSON.stringify({ to, subject }),
      );
      return { status: "skipped", attempts: 0 };
    }

    throw new Error("email_service_not_configured");
  }

  const resend = new Resend(config.resendApiKey);
  const html = await render(react);
  const text = await render(react, { plainText: true });

  let lastError: unknown;

  for (let attempt = 1; attempt <= DEFAULT_RETRY_COUNT; attempt += 1) {
    try {
      const result = await resend.emails.send({
        from: from || config.fromEmail,
        to,
        subject,
        html,
        text,
        ...(replyTo ? { replyTo } : {}),
      });

      if (result.error) {
        throw new Error(
          `resend_api_error:${result.error.name}:${result.error.message}`,
        );
      }

      return { status: "sent", attempts: attempt };
    } catch (error) {
      lastError = error;

      if (attempt < DEFAULT_RETRY_COUNT) {
        await sleep(RETRY_DELAY_MS * attempt);
      }
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Email delivery failed after retries.");
}
