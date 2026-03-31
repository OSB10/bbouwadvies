"use server";

import { headers } from "next/headers";
import type { z } from "zod";
import {
  contactFormSchema,
  normalizeContactFormInput,
  type ContactFormValues,
} from "@/schema/schema";
import { checkContactRateLimit } from "@/lib/rate-limit";
import { sendBusinessContactEmail, sendContactAutoReply } from "@/lib/resend";
import {
  createSubmissionFingerprint,
  isSuspiciousSubmission,
} from "@/lib/spam";
import {
  initialContactActionState,
  type ContactActionState,
} from "@/types/types";

function getClientIdentifier(headerList: Headers) {
  const forwardedFor = headerList.get("x-forwarded-for");
  const realIp = headerList.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "anonymous";
}

function formatFieldErrors(error: z.ZodError<ContactFormValues>) {
  return error.flatten().fieldErrors;
}

export async function submitContactAction(
  rawValues: Partial<Record<keyof ContactFormValues, unknown>>,
): Promise<ContactActionState> {
  const normalizedValues = normalizeContactFormInput(rawValues);
  const parsed = contactFormSchema.safeParse(normalizedValues);

  if (!parsed.success) {
    return {
      ...initialContactActionState,
      success: false,
      status: "validation_error",
      message: "Controleer de ingevulde velden en probeer het opnieuw.",
      fieldErrors: formatFieldErrors(parsed.error),
    };
  }

  const values = parsed.data;

  if (values.website || isSuspiciousSubmission(values)) {
    return {
      success: false,
      status: "spam_blocked",
      message:
        "Uw aanvraag lijkt onvolledig of ongebruikelijk. Pas uw bericht aan en probeer het opnieuw.",
      formError:
        "Uw aanvraag lijkt onvolledig of ongebruikelijk. Pas uw bericht aan en probeer het opnieuw.",
    };
  }

  const headerList = await headers();
  const clientKey = `${getClientIdentifier(headerList)}:${values.email.toLowerCase()}`;
  const fingerprint = createSubmissionFingerprint(values);
  const rateLimit = checkContactRateLimit(clientKey, fingerprint);

  if (!rateLimit.ok) {
    const retryMessage =
      rateLimit.reason === "duplicate"
        ? "Dit bericht lijkt al recent verzonden. Wacht even voordat u opnieuw probeert."
        : `U verzendt momenteel te snel. Probeer het over ${rateLimit.retryAfterSeconds} seconden opnieuw.`;

    return {
      success: false,
      status:
        rateLimit.reason === "duplicate" ? "spam_blocked" : "rate_limited",
      message: retryMessage,
      formError: retryMessage,
    };
  }

  try {
    const submittedAt = new Intl.DateTimeFormat("nl-NL", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Amsterdam",
    }).format(new Date());

    await sendBusinessContactEmail({
      submittedAt,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
      companyProject: values.companyProject,
    });

    try {
      await sendContactAutoReply({
        fullName: values.fullName,
        email: values.email,
      });
    } catch {
      // confirmation email failure should not block the main submission
    }

    return {
      success: true,
      status: "success",
      message:
        "Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.",
    };
  } catch (error) {
    const isMissingApiKey =
      error instanceof Error &&
      error.message.includes("missing_resend_api_key");

    return {
      success: false,
      status: "server_error",
      message: isMissingApiKey
        ? "De contactservice is momenteel nog niet volledig ingesteld."
        : "Er ging iets mis bij het verzenden van uw bericht. Probeer het later opnieuw of neem telefonisch contact op.",
      formError: isMissingApiKey
        ? "RESEND_API_KEY ontbreekt op de server."
        : "Er ging iets mis bij het verzenden van uw bericht. Probeer het later opnieuw of neem telefonisch contact op.",
    };
  }
}
