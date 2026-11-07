import { FormEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");
    const subject = company
      ? `New enquiry from ${name} at ${company}`
      : `New enquiry from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, company && `Company: ${company}`, "", message]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:aeiyankhan2@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    window.setTimeout(() => router.push("/contact-received"), 500);
  }

  return (
    <>
      <Head>
        <title>Contact Aeiyan Khan</title>
        <meta
          name="description"
          content="Tell Aeiyan Khan about your hiring need, project, or collaboration."
        />
      </Head>

      <main className="min-h-screen bg-canvas px-6 py-16 text-ink sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="font-mono text-sm text-accent transition-colors hover:text-coral-active"
          >
            ← Back to aeiyankhan.me
          </Link>

          <section className="mt-12">
            <p className="font-mono text-sm uppercase tracking-wider text-accent">
              Lead generation
            </p>
            <h1 className="mt-3 font-Header text-4xl font-normal tracking-tight sm:text-5xl">
              Let&apos;s build something useful.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Share a few details and I&apos;ll get back to you within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="font-mono text-xs text-muted">
                  Name *
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-hairline bg-surface-card px-4 py-3 font-body text-sm text-ink outline-none focus:border-accent"
                  />
                </label>
                <label className="font-mono text-xs text-muted">
                  Email *
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-hairline bg-surface-card px-4 py-3 font-body text-sm text-ink outline-none focus:border-accent"
                  />
                </label>
              </div>
              <label className="block font-mono text-xs text-muted">
                Company or organization
                <input
                  name="company"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-lg border border-hairline bg-surface-card px-4 py-3 font-body text-sm text-ink outline-none focus:border-accent"
                />
              </label>
              <label className="block font-mono text-xs text-muted">
                How can I help? *
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-lg border border-hairline bg-surface-card px-4 py-3 font-body text-sm text-ink outline-none focus:border-accent"
                />
              </label>
              <button
                type="submit"
                disabled={submitted}
                className="rounded-lg bg-accent px-7 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-coral-active disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitted ? "Opening your email…" : "Send enquiry →"}
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
