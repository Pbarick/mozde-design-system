import React from "react";

/**
 * A single search-result row — heading, URL/snippet, a secondary link and
 * a muted supporting link.
 */
export default function SearchResultItem({
  heading = "Search results heading",
  snippet = "A short description of this result's content.",
  secondaryLabel,
  mutedLabel = "Text link muted",
  href = "#",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`flex flex-col gap-4 border border-[var(--bordergray-d5d5d5)] p-4 hover:bg-[var(--mediumgray-e7e7e7)] ${className}`}
    >
      <p className="text-[17px] font-bold uppercase tracking-[3.2px] text-[var(--black-101010)]">{heading}</p>
      <p className="text-[15px] text-[var(--black-101010)]">{snippet}</p>
      {secondaryLabel && (
        <p className="text-[13px] font-bold uppercase tracking-[1.72px] text-[var(--black-101010)]">
          {secondaryLabel}
        </p>
      )}
      <p className="text-[13px] font-bold uppercase tracking-[1.72px] text-[var(--text-muted)]">{mutedLabel}</p>
    </a>
  );
}
