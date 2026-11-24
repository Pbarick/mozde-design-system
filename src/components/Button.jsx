import React from "react";

/**
 * Primary call-to-action button — solid black fill, used for the main
 * action in a section. Use sparingly, typically one per section.
 */
export function PrimaryButton({
  children = "Label",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] px-6 py-4 text-[13px] font-bold uppercase tracking-[2.6px] text-white bg-[var(--black-101010)] hover:bg-[var(--text-muted)] disabled:opacity-40 disabled:pointer-events-none transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Secondary button — outlined, used for less prominent actions alongside
 * a primary button.
 */
export function SecondaryButton({
  children = "Label",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] px-6 py-4 text-[13px] font-bold uppercase tracking-[2.6px] border-2 border-[var(--black-101010)] text-[var(--black-101010)] hover:border-[var(--text-muted)] hover:text-[var(--text-muted)] disabled:opacity-40 disabled:pointer-events-none transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
