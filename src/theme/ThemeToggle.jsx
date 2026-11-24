import React, { useEffect, useState } from "react";

const STORAGE_KEY = "mozde-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Light / Dark switch. Sets data-theme on <html>, remembers the choice,
 * and starts from the visitor's system preference the first time.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 border border-[var(--border-control)] rounded-[3px] px-3 py-2 text-[11px] font-bold uppercase tracking-[1.1px] text-[var(--black-101010)] bg-[var(--white-ffffff)] hover:border-[var(--black-101010)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black-101010)]"
    >
      <span
        aria-hidden="true"
        className="inline-block size-3 rounded-full border border-[var(--black-101010)]"
        style={{ background: isDark ? "var(--black-101010)" : "transparent" }}
      />
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
