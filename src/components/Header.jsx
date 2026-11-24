import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from '../theme/ThemeToggle';

/**
 * Top utility nav bar — small uppercase links, used for quick access to
 * internal tools (shown above the main header). Wraps and centers on small
 * screens, right-aligned from md up.
 */
export function HeaderTopNav({ links = ["APTTUS", "CONCUR", "MOZDE ENGAGE", "REAL TIME SALES", "SERVICENOW"] }) {
  return (
    <div className="bg-white flex items-center justify-center w-full px-4 py-1 md:px-8">
      <div className="flex flex-wrap gap-x-[5px] gap-y-1 items-center justify-center md:justify-end w-[1110px] max-w-full">
        {links.map((label, i) => (
          <div className="flex gap-[5px] items-center" key={label}>
            <p className="text-[9px] font-bold text-[var(--black-101010)] tracking-[1.72px] uppercase whitespace-nowrap">
              {label}
            </p>
            {i < links.length - 1 && (
              <p className="text-[9px] font-bold text-[var(--black-101010)] tracking-[1.72px] uppercase">|</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Main site header — dark bar with logo, primary nav, notification,
 * search and account icons. Primary top-level navigation items live here.
 * Below xl the primary nav collapses into a toggleable menu.
 */
export default function Header({
  brandName = "Mozde",
  navItems = ["Company Portal", "Brand & Product", "Mozde & Dealer Resources"],
  isLoggedIn = true,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--darkgray-2b2b2b)] w-full">
      <div className="flex items-center justify-between gap-4 xl:gap-8 px-4 md:px-8 2xl:px-32 py-2 md:py-4 w-full">
        <div className="flex items-center pr-[10px] py-[10px] shrink-0 2xl:w-[289px] 2xl:justify-center">
          <Link
            to="/"
            aria-label={`${brandName} home`}
            className="text-[28px] md:text-[45px] text-[var(--lightgray-f5f5f5)] tracking-[1.2px] uppercase"
          >
            {brandName}
          </Link>
        </div>

        <nav className="hidden xl:flex h-9 items-center justify-end" aria-label="Primary">
          {navItems.map((item) => (
            <div
              key={item}
              className="flex gap-2 h-[42px] items-center justify-end px-3"
            >
              <div className="flex h-full items-center justify-center pb-[14px] pt-[15px]">
                <span className="text-[13px] font-bold text-white tracking-[1.72px] uppercase whitespace-nowrap">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex gap-3 md:gap-[26px] items-center">
          {isLoggedIn ? (
            <>
              <button aria-label="Notifications" className="flex h-[50px] items-center justify-center">
                <span className="w-[18px] h-[18px] inline-block" />
              </button>
              <button aria-label="Search" className="h-[50px] w-[18px]" />
              <button aria-label="Account" className="w-10 h-10 md:w-[50px] md:h-[50px] rounded-full" />
            </>
          ) : (
            <button className="text-[12px] font-bold uppercase tracking-[1.72px] text-white border border-white rounded px-4 py-2 hover:bg-white hover:text-[var(--darkgray-2b2b2b)] transition-colors whitespace-nowrap">
              Sign In
            </button>
          )}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden flex h-10 w-10 items-center justify-center text-[24px] leading-none text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <ThemeToggle />
        </div>
      </div>

      {menuOpen && (
        <nav
          className="xl:hidden flex flex-col border-t border-white/15 px-4 md:px-8 pb-2"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <span
              key={item}
              className="py-3 border-b border-white/10 last:border-b-0 text-[13px] font-bold text-white tracking-[1.72px] uppercase"
            >
              {item}
            </span>
          ))}
        </nav>
      )}
      
    </header>
  );
}
