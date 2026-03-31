import { createHash } from "node:crypto";
import type { ContactFormValues } from "@/schema/schema";

const suspiciousPatterns = [
  /https?:\/\//gi,
  /www\./gi,
  /\b(?:viagra|casino|crypto|loan|seo service|backlinks)\b/gi,
];

export function createSubmissionFingerprint(values: ContactFormValues) {
  return createHash("sha256")
    .update(
      JSON.stringify({
        email: values.email.toLowerCase(),
        subject: values.subject.toLowerCase(),
        message: values.message.toLowerCase(),
      }),
    )
    .digest("hex");
}

export function isSuspiciousSubmission(values: ContactFormValues) {
  if (values.website) {
    return true;
  }

  const combined = `${values.subject}\n${values.message}`;
  const urlMatches = combined.match(/https?:\/\//gi) ?? [];

  if (urlMatches.length > 2) {
    return true;
  }

  if (suspiciousPatterns.some((pattern) => pattern.test(combined))) {
    return true;
  }

  if (/(.)\1{7,}/.test(combined)) {
    return true;
  }

  return values.message.split(/\s+/).filter(Boolean).length < 4;
}
