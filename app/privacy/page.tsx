import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Scroll Driven Motion",
  description: "Privacy policy explaining data practices for this technical animation project.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-16 sm:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:underline"
          >
            Back to Animation
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-wide text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs uppercase tracking-wider text-muted">
            Last updated: October 5, 2026
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-muted sm:text-base">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Project Overview
            </h2>
            <p className="mt-2">
              This website is a technical demonstration of scroll-driven web animations created
              for portfolio and technical assignment evaluation. The site operates as a static client application.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Zero Data Collection
            </h2>
            <p className="mt-2">
              We do not collect, process, sell or store any personal data. In particular:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>No HTTP cookies or local storage trackers are set.</li>
              <li>No analytics software or external measurement scripts are loaded.</li>
              <li>No marketing pixels, beacons or advertising beacons are integrated.</li>
              <li>No contact forms, newsletter inputs or comment submissions exist.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Hosting Infrastructure
            </h2>
            <p className="mt-2">
              This static website is delivered through GitHub Pages. When you visit this site, GitHub
              servers may automatically receive and log standard technical connection information, including
              your Internet Protocol (IP) address, browser user-agent header, and request timestamp. These logs
              are collected directly by GitHub for security monitoring, abuse mitigation, and legal compliance.
              Refer to the GitHub Privacy Statement for details on GitHub infrastructure data practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              External Hyperlinks
            </h2>
            <p className="mt-2">
              This site includes informational links to third-party domains, including official Porsche
              technical specification data sheets. Visiting external links directs your browser to independent
              services with separate privacy practices beyond our jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Contact Information
            </h2>
            <p className="mt-2">
              Questions regarding this technical demonstration or its privacy practices may be sent directly
              by email to: shreyash.londhe@gmail.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
