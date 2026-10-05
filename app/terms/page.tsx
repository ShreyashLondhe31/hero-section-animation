import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms and Conditions | Scroll Driven Motion",
  description: "Terms and conditions governing the use of this technical animation demonstration.",
};

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="mt-2 text-xs uppercase tracking-wider text-muted">
            Last updated: October 5, 2026
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-muted sm:text-base">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Scope of Service
            </h2>
            <p className="mt-2">
              By accessing and viewing this website, you agree to these Terms and Conditions. This website
              is an independent technical demonstration created for educational, research, and portfolio
              evaluation purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Intellectual Property and Trademarks
            </h2>
            <p className="mt-2">
              All website source code, layout structures, and vector graphics created for this project
              are licensed for open technical reference.
            </p>
            <p className="mt-2">
              Porsche, 911, and GT3 are registered trademarks of Dr. Ing. h.c. F. Porsche AG. All
              trademarks, vehicle names, and manufacturer specifications cited on this site are referenced
              strictly for descriptive, illustrative, and educational context under nominative fair use.
              This website is not endorsed, affiliated, or sponsored by Dr. Ing. h.c. F. Porsche AG.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Disclaimer of Warranty
            </h2>
            <p className="mt-2">
              This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
              warranties of any kind, whether express, implied, or statutory. We make no representations
              concerning uninterrupted access, defect-free operation, or exact precision of technical data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by applicable law, neither the author nor any contributors
              shall be liable for any direct, indirect, incidental, consequential, or punitive damages
              resulting from the use or inability to use this demonstration site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
              Contact
            </h2>
            <p className="mt-2">
              If you have any questions or legal inquiries regarding these Terms and Conditions, please
              contact: shreyash.londhe@gmail.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
