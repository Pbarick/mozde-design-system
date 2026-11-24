import React from "react";

/** A single underlined sitemap link row — default / hover styling. */
export function SitemapLink({ children = "Sitemap page link", href = "#" }) {
  return (
    <a
      href={href}
      className="block w-full max-w-[236px] text-[13px] font-bold uppercase leading-[2] text-[var(--black-101010)] underline hover:text-[var(--text-muted)]"
    >
      {children}
    </a>
  );
}

/** Sitemap page — link columns grouped by section. Pass `sections` as
 * [{ heading, links: [{label, href}] }]. */
export default function Sitemap({ sections = [], className = "" }) {
  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {sections.map((section) => (
        <div key={section.heading} className="flex flex-col gap-3">
          <p className="text-[17px] font-bold uppercase tracking-[2px] text-[var(--black-101010)]">
            {section.heading}
          </p>
          <div className="flex flex-col gap-2">
            {section.links.map((link) => (
              <SitemapLink key={link.label} href={link.href}>
                {link.label}
              </SitemapLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
