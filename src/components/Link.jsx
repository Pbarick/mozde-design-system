import React from "react";

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5v9m0 0L4.5 7m3.5 3.5L11.5 7M2 13.5h12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Tertiary link / text button — for lower-emphasis actions inline with
 * content (e.g. "Download", "See all"). Supports an optional leading icon
 * and underline.
 */
export function TertiaryLink({
  children = "Link text",
  href,
  onClick,
  icon = false,
  underline = false,
  className = "",
  ...props
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      type={href ? undefined : "button"}
      className={`inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[1.72px] text-[var(--text-muted)] hover:text-[var(--black-101010)] ${
        underline ? "underline underline-offset-4" : "no-underline"
      } ${className}`}
      {...props}
    >
      {icon && <DownloadIcon />}
      {children}
    </Tag>
  );
}
