"use client";

import { useEffect, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { submitContactAction } from "@/app/actions/contact";
import { contactFormSchema, type ContactFormValues } from "@/schema/schema";
import {
  initialContactActionState,
  type ContactActionState,
} from "@/types/types";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const defaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  companyProject: "",
  website: "",
};

export function ContactForm() {
  const [result, setResult] = useState<ContactActionState>(
    initialContactActionState,
  );
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (result.success) {
      form.reset(defaultValues);
    }
  }, [form, result.success]);

  const handleSubmit = (values: ContactFormValues) => {
    setResult(initialContactActionState);

    startTransition(async () => {
      const response = await submitContactAction(values);
      setResult(response);

      if (response.fieldErrors) {
        for (const [fieldName, messages] of Object.entries(
          response.fieldErrors,
        )) {
          if (!messages?.length) {
            continue;
          }

          form.setError(fieldName as keyof ContactFormValues, {
            type: "server",
            message: messages[0],
          });
        }
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="section-stack"
        noValidate
      >
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Volledige naam</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="name"
                    placeholder="Uw volledige naam"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mailadres</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    placeholder="naam@voorbeeld.nl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefoonnummer</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+31 6 12 34 56 78"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyProject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrijf / project</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="organization"
                    placeholder="Bedrijfsnaam of projectnaam"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Onderwerp</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Bijv. aankoopkeuring of technisch advies"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Bericht</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={7}
                    placeholder="Omschrijf kort uw vraag, project of situatie."
                  />
                </FormControl>
                <FormDescription>
                  Geef zo veel mogelijk relevante context mee. Dat helpt ons
                  sneller en gerichter te reageren.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="sr-only">
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {result.status !== "idle" ? (
          <Alert
            className={
              result.success
                ? "border-primary/20 bg-primary-container/40"
                : "border-destructive/20 bg-destructive/5"
            }
          >
            <AlertDescription>
              {result.formError || result.message}
            </AlertDescription>
          </Alert>
        ) : null}

        <div className="grid gap-6 pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="type-body-sm max-w-sm text-outline">
            Door het formulier te versturen gaat u akkoord met onze
            privacyverklaring. Wij gebruiken uw gegevens uitsluitend om uw
            aanvraag te beantwoorden.
          </p>
          <Button
            type="submit"
            disabled={isPending}
            aria-disabled={isPending}
            className="monolith-button monolith-button-primary min-w-44 md:justify-self-end"
          >
            {isPending ? "Bericht verzenden..." : "Versturen"}
            {!isPending ? (
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            ) : null}
          </Button>
        </div>
      </form>
    </Form>
  );
}
