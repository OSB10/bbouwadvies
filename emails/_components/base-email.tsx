import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BaseEmailProps {
  previewText: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
  actionLabel?: string;
  actionUrl?: string;
  actionNote?: string;
  footerNote?: string;
  unsubscribeUrl?: string;
}

const supportEmail = "info@bbouwadvies.nl";
const appBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://bbouwadvies.nl";

export const EMAIL_ROUTES = {
  contact: "/contact",
} as const;

export function appUrl(path: string) {
  return `${appBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

const PREVIEW_PADDING = "\u200C\u00A0".repeat(90);

export function BaseEmail({
  previewText,
  title,
  intro,
  children,
  actionLabel,
  actionUrl,
  actionNote,
  footerNote,
  unsubscribeUrl,
}: BaseEmailProps) {
  return (
    <Html lang="nl">
      <Head />
      <Preview>
        {previewText}
        {PREVIEW_PADDING}
      </Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.brand}>B BOUWADVIES</Text>
          </Section>

          <Hr style={styles.divider} />

          <Section style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.intro}>{intro}</Text>

            {children}

            {actionLabel && actionUrl ? (
              <Section style={styles.actionSection}>
                <Button href={actionUrl} style={styles.actionButton}>
                  {actionLabel}
                </Button>
              </Section>
            ) : null}

            {actionNote ? (
              <Text style={styles.supporting}>{actionNote}</Text>
            ) : null}
          </Section>

          <Section style={styles.footer}>
            {footerNote ? (
              <Text style={styles.footerText}>{footerNote}</Text>
            ) : null}
            <Text style={styles.footerText}>
              Vragen? Neem contact op via{" "}
              <a href={`mailto:${supportEmail}`} style={styles.link}>
                {supportEmail}
              </a>
              .
            </Text>
            <Text style={styles.footerText}>
              B Bouwadvies · Onafhankelijk bouwkundig advies.
            </Text>
            {unsubscribeUrl ? (
              <Text style={styles.footerText}>
                <a href={unsubscribeUrl} style={styles.unsubscribeLink}>
                  Uitschrijven
                </a>
              </Text>
            ) : null}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

interface DataBlockProps {
  label: string;
  value: React.ReactNode;
}

export function DataBlock({ label, value }: DataBlockProps) {
  return (
    <Section style={styles.block}>
      <Text style={styles.blockLabel}>{label}</Text>
      <Text style={styles.blockValue}>{value}</Text>
    </Section>
  );
}

export function MutedNote({ children }: { children: React.ReactNode }) {
  return <Text style={styles.supporting}>{children}</Text>;
}

const styles = {
  main: {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,"Helvetica Neue",Arial,sans-serif',
    color: "#2d3432",
  },
  container: {
    margin: "0 auto",
    maxWidth: "680px",
    padding: "24px 24px 40px",
  },
  header: {
    padding: "8px 0 16px",
  },
  brand: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "900",
    letterSpacing: "-0.03em",
    textTransform: "uppercase" as const,
    color: "#595f66",
  },
  content: {
    padding: "24px 0",
  },
  title: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "700",
    color: "#2d3432",
    margin: "0 0 12px",
  },
  intro: {
    fontSize: "15px",
    lineHeight: "24px",
    color: "#5a605e",
    margin: "0 0 16px",
  },
  block: {
    margin: "0 0 14px",
    padding: "12px 14px",
    borderRadius: "10px",
    backgroundColor: "#f8faf6",
    border: "1px solid #e8ece3",
  },
  blockLabel: {
    margin: "0 0 4px",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "700",
    letterSpacing: "0.3px",
    textTransform: "uppercase" as const,
    color: "#607265",
  },
  blockValue: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#1d2e25",
    whiteSpace: "pre-wrap" as const,
  },
  actionSection: {
    margin: "22px 0 12px",
    textAlign: "center" as const,
  },
  actionButton: {
    backgroundColor: "#595f66",
    borderRadius: "999px",
    color: "#ffffff",
    display: "block",
    fontSize: "14px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "12px 24px",
    maxWidth: "320px",
    margin: "0 auto",
    textAlign: "center" as const,
  },
  supporting: {
    margin: "8px 0 0",
    fontSize: "13px",
    lineHeight: "20px",
    color: "#5f6f65",
  },
  footer: {
    borderTop: "1px solid #e4e7df",
    padding: "16px 0",
  },
  footerText: {
    margin: "0 0 6px",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#6c7a71",
  },
  link: {
    color: "#595f66",
    textDecoration: "underline",
  },
  divider: {
    borderColor: "#e4e7df",
    margin: "0",
  },
  unsubscribeLink: {
    color: "#6c7a71",
    textDecoration: "underline",
  },
};
