import React from "react";

const headingSizes = {
  1: "text-[30px] tracking-[4px]",
  2: "text-[27px] tracking-[3.2px]",
  3: "text-[24px] tracking-[3.2px]",
  4: "text-[21px] tracking-[3.2px]",
  5: "text-[19px] tracking-[3.2px]",
  6: "text-[17px] tracking-[3.2px]",
};

/** Heading scale H1–H6 — bold, uppercase, tracked-out type used for section titles. */
export function Heading({ level = 2, children = "Heading text", className = "" }) {
  const Tag = `h${level}`;
  return (
    <Tag
      className={`font-bold uppercase leading-[1.2] text-[var(--black-101010)] ${
        headingSizes[level] || headingSizes[2]
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Standard body paragraph text. */
export function BodyText({ children, muted = false, className = "" }) {
  return (
    <p
      className={`text-[15px] leading-[1.4] ${
        muted ? "text-[var(--text-muted)]" : "text-[var(--black-101010)]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

const linkVariants = {
  default: "text-[13px] tracking-[1.72px] text-[var(--black-101010)]",
  muted: "text-[13px] tracking-[1.72px] text-[var(--text-muted)]",
  footer: "text-[11px] tracking-[1.72px] text-[var(--text-on-footer)]",
  small: "text-[9px] tracking-[1.72px] text-[var(--text-muted)]",
};

/** Text link — default / muted / footer / small variants, all bold + uppercase. */
export function TextLink({
  children = "Text link",
  variant = "default",
  underline = false,
  href = "#",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`inline-block font-bold uppercase leading-[1.2] hover:opacity-70 ${
        linkVariants[variant] || linkVariants.default
      } ${underline ? "underline underline-offset-4" : "no-underline"} ${className}`}
    >
      {children}
    </a>
  );
}

/** A single bulleted list row. */
export function ListItem({ children, className = "" }) {
  return (
    <li className={`flex gap-2 items-start text-[15px] text-[var(--black-101010)] ${className}`}>
      <span className="mt-[7px] size-[5px] shrink-0 rounded-full bg-[var(--black-101010)]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

const alertStyles = {
  info: { bg: "bg-[#eaf6ec]", border: "border-[#1b7a3d]", dot: "bg-[#1b7a3d]" },
  warning: { bg: "bg-[#fdf3e2]", border: "border-[#8a6100]", dot: "bg-[#8a6100]" },
  error: { bg: "bg-[#fbe9ec]", border: "border-[var(--errorred-910a2d)]", dot: "bg-[var(--errorred-910a2d)]" },
};

/** Inline alert banner — info (success), warning, or error. */
export function Alert({ type = "info", title, children, className = "" }) {
  const s = alertStyles[type] || alertStyles.info;
  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`flex items-start gap-2.5 border-l-4 ${s.border} ${s.bg} px-4 py-3 ${className}`}
    >
      <span className={`mt-[5px] size-2 shrink-0 rounded-full ${s.dot}`} aria-hidden="true" />
      <div className="flex flex-col gap-0.5">
        {title && <p className="text-[13px] font-bold text-[var(--black-101010)]">{title}</p>}
        <p className="text-[13px] text-[var(--black-101010)]">{children}</p>
      </div>
    </div>
  );
}
