import React from "react";

/**
 * Shared utility icon set — simple generic line icons used across buttons,
 * links and status rows. Pass a `name` from the registry below.
 */
const paths = {
  upload: "M8 11V2m0 0L4.5 5.5M8 2l3.5 3.5M2.5 13.5h11",
  download: "M8 1.5v9m0 0L4.5 7m3.5 3.5L11.5 7M2 13.5h12",
  search: "M7 12.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zM14 14l-3-3",
  print: "M4 6V2h8v4M3 6h10v5H3V6zm2 5v3h6v-3",
  email: "M2 3.5h12v9H2v-9zm0 0l6 5 6-5",
  phone: "M3.5 2.5c.5 2 1.3 3.8 2.5 5.3 1.2 1.5 2.7 2.7 4.5 3.5l1.5-1.5 2 2-1 2c-.3.3-.8.4-1.2.3-4-1-7.5-4.5-8.5-8.5-.1-.4 0-.9.3-1.2l2-1z",
  location: "M8 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5C12.5 3.5 10.5 1.5 8 1.5zM8 8.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4z",
  calculator: "M3 2h10v12H3V2zm0 3h10M5.5 7.5h0M8 7.5h0M10.5 7.5h0M5.5 10h0M8 10h0M10.5 10h0M5.5 12.5h0M8 12.5h0",
  video: "M2 4h8v8H2V4zm8 2.5l4-2v7l-4-2",
  doc: "M4 1.5h5l3 3v10H4v-13zM9 1.5V4.5h3",
  monitor: "M2 3h12v8H2V3zm3.5 11h5M8 11v3",
  sound: "M3 6h2.5L9 3.5v9L5.5 10H3V6zM11 6c1 1 1 3 0 4",
  play: "M4 2.5l9 5.5-9 5.5v-11z",
  pause: "M4 2.5h3v11H4v-11zM9 2.5h3v11H9v-11z",
  user: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2.5 14c.7-2.8 2.8-4.5 5.5-4.5s4.8 1.7 5.5 4.5",
  attach: "M11 4.5L6 9.5a2 2 0 0 0 2.8 2.8l5-5a3.5 3.5 0 1 0-5-5l-5.2 5.2",
  image: "M2 3h12v10H2V3zM5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM2 11l3.5-3.5L9 11l2-2 3 3",
  view: "M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  lock: "M4 7V5a4 4 0 1 1 8 0v2M3 7h10v7H3V7z",
  key: "M6 10a3.5 3.5 0 1 1 3.3-4.7L14 9.6V12h-2v-2H10v-1.7l-.9-.9A3.5 3.5 0 0 1 6 10z",
  edit: "M3 13l.7-3L11 2.7a1.5 1.5 0 0 1 2 2L6 12l-3 1z",
  trash: "M3 4.5h10M6.5 4.5v-2h3v2M4.5 4.5l.5 9h6l.5-9",
  check: "M2.5 8.5l3.5 3.5 7-7",
  close: "M3 3l10 10M13 3L3 13",
  chevronLeft: "M10 2.5L5 8l5 5.5",
  chevronRight: "M6 2.5L11 8l-5 5.5",
  chevronUp: "M2.5 10l5.5-5 5.5 5",
  chevronDown: "M2.5 6l5.5 5 5.5-5",
  plus: "M8 2.5v11M2.5 8h11",
  minus: "M2.5 8h11",
  info: "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM8 7v4.5M8 4.8h0",
  share: "M11.5 5a1.8 1.8 0 1 0 0-3.5A1.8 1.8 0 0 0 11.5 5zM4.5 9.8a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5zM11.5 14.5a1.8 1.8 0 1 0 0-3.5 1.8 1.8 0 0 0 0 3.5zM6 8.8l4-2.5M6 9l4 2.8",
  hamburger: "M2 4.5h12M2 8h12M2 11.5h12",
};

export default function Icon({ name = "info", size = 20, className = "", title }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {title && <title>{title}</title>}
      <path d={d} stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const iconNames = Object.keys(paths);
