import Head from "next/head";
import Link from "next/link";

export default function ContactReceived() {
  return (
    <>
      <Head>
        <title>Contact received | Aeiyan Khan</title>
        <meta
          name="description"
          content="Thank you for contacting Aeiyan Khan. View or download the latest résumé."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main className="min-h-screen bg-canvas px-6 py-16 text-ink sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="font-mono text-sm text-accent transition-colors hover:text-coral-active"
          >
            ← Back to aeiyankhan.me
          </Link>

          <section className="mt-12">
            <p className="font-mono text-sm uppercase tracking-wider text-accent">
              Message received
            </p>
            <h1 className="mt-3 font-Header text-4xl font-normal tracking-tight sm:text-5xl">
              Thanks for getting in touch.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              I&apos;ll review your message and get back to you soon. In the
              meantime, you can view or download my latest résumé below.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-accent px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-coral-active"
              >
                Open résumé
              </a>
              <a
                href="/resume.pdf"
                download
                className="rounded-lg border border-hairline bg-surface-card px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Download PDF
              </a>
            </div>
          </section>

          <div className="mt-12 overflow-hidden rounded-xl border border-hairline bg-surface-card">
            <iframe
              src="/resume.pdf"
              title="Aeiyan Khan résumé"
              className="h-[75vh] min-h-[560px] w-full"
            />
          </div>
        </div>
      </main>
    </>
  );
}
