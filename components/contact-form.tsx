"use client";

import { useState, type SubmitEvent } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Paste Formspree endpoint here
const FORM_ENDPOINT = "https://formspree.io/f/xnpnwgql";
const NAME_PATTERN = String.raw`\p{L}[\p{L}\p{M}]*(?: +\p{L}[\p{L}\p{M}]*)*`;

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    setStatus("");
    setHasError(false);

    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      setHasError(true);
      setStatus(
        "The contact form is not configured yet. Please email me below.",
      );
      return;
    }

    setSending(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("Thank you! Your message has been submitted successfully.");
    } catch {
      setHasError(true);
      setStatus(
        "We couldn't confirm submission. Please try again or email me below.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={sending}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>

          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            pattern={NAME_PATTERN}
            required
            maxLength={100}
            disabled={sending}
            onInvalid={(event) => {
              event.currentTarget.setCustomValidity(
                event.currentTarget.validity.valueMissing
                  ? "Please enter your name."
                  : "Invalid name. Please use letters and spaces only.",
              );
            }}
            onInput={(event) => {
              event.currentTarget.setCustomValidity("");
            }}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email</label>

          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="you@example.com"
            onInvalid={(event) => {
              event.currentTarget.setCustomValidity(
                event.currentTarget.validity.valueMissing
                  ? "Please enter your email address."
                  : "Invalid email address. Please enter a valid email.",
              );
            }}
            onInput={(event) => {
              event.currentTarget.setCustomValidity("");
            }}
            required
            maxLength={200}
            disabled={sending}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">Subject</label>
        <Input
          id="contact-subject"
          name="subject"
          placeholder="What would you like to discuss?"
          required
          maxLength={150}
          disabled={sending}
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project or inquiry…"
          rows={6}
          required
          maxLength={3000}
          disabled={sending}
        />
      </div>

      <button className="button solid" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
        <Mail size={18} aria-hidden="true" />
      </button>

      {status && (
        <p className="form-status" role={hasError ? "alert" : "status"}>
          {status}
        </p>
      )}

      <p className="form-note">
        Or email me at{" "}
        <a href="mailto:samisadman6@gmail.com">samisadman6@gmail.com</a>.
      </p>
    </form>
  );
}
