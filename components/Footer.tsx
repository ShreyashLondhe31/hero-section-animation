import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/80 bg-background px-4 py-12 sm:px-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
          >
            Scroll Driven Motion
          </Link>
          <span className="mt-1 text-xs text-muted">
            Technical assignment demonstration.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
          <Link
            href="/"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Home
          </Link>
          <a
            href="https://www.porsche.com/usa/models/911/911-gt3-models/911-gt3/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Porsche Technical Data Source
          </a>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-foreground hover:underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
