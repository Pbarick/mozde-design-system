import React from "react";

/**
 * One column of footer links — heading + stacked link list. Fills its grid
 * cell, so it stacks on mobile and sits in a row on desktop.
 */
export function FooterColumn({ heading, links = [] }) {
  return (
    <div className="flex flex-col gap-2 items-start w-full min-w-0">
      <div className="flex gap-2 items-center pb-[10px] px-2 w-full">
        <p className="flex-1 text-[15px] font-bold text-white tracking-[3.2px]">{heading}</p>
      </div>
      <div className="flex flex-col gap-[10px] items-start">
        {links.map((label) => (
          <div className="flex gap-2 items-center px-2 py-1" key={label}>
            <p className="text-[11px] font-bold text-[var(--text-on-footer)] tracking-[1.72px] uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Row of social media icons shown in the footer, above the bottom bar. */
export function FooterIconBorder() {
  return (
    <div className="bg-[var(--darkgray-2b2b2b)] border-b border-[var(--bordergray-d5d5d5)] flex items-center gap-4 py-4 w-[1110px] max-w-full">
      <span className="h-7 w-7" aria-label="Facebook" />
      <span className="h-[23px] w-[37px]" aria-label="YouTube" />
      <span className="h-[25px] w-[33px]" aria-label="LinkedIn" />
      <span className="h-[25px] w-[33px]" aria-label="Instagram" />
    </div>
  );
}

/**
 * Full site footer — dark background, four columns of links, an IT support
 * card, social icons and the legal bottom bar.
 * Columns: 1 on mobile, 2 from md, 4 from lg.
 */
export default function Footer({ brandName = "Mozde", year = new Date().getFullYear() }) {
  return (
    <footer className="bg-[var(--darkgray-2b2b2b)] flex flex-col gap-1 items-center justify-center px-4 md:px-8 2xl:px-32 py-10 md:py-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[1110px] max-w-full">
        <FooterColumn
          heading={`${brandName.toUpperCase()} Popular Resources`}
          links={["APTTUS", "CONCUR", "COVID19 SHAREPOINT SITE", `${brandName.toUpperCase()} ENGAGE`, "BENEFITS CONNECT", "EMPLOYEE HANDBOOK", "JOB OPPORTUNITIES"]}
        />
        <FooterColumn
          heading="Popular Tools"
          links={["ABBREVIATIONS & ACRONYMS LIST", "CX360", `${brandName.toUpperCase()} BRAND ACADEMY (MBA)`, `${brandName.toUpperCase()} COLLECTION`, "WEB REPORTS"]}
        />
        <FooterColumn
          heading="Additional Support"
          links={["ETHICS HOTLINE", `${brandName.toUpperCase()} EMPLOYEE PRICING E-PLAN`, "THE WORK NUMBER", "SITEMAP"]}
        />
        <div className="flex flex-col gap-2 items-start w-full min-w-0">
          <div className="flex gap-2 items-center pb-[10px] px-2 w-full">
            <p className="flex-1 text-[15px] font-bold text-white tracking-[3.2px]">
              {brandName} IT Support
            </p>
          </div>
          <button className="bg-white flex gap-2 items-center justify-center px-6 py-4 rounded w-full md:max-w-[320px] lg:max-w-none">
            <span className="text-[13px] font-bold text-[var(--black-101010)] tracking-[2.6px] uppercase">
              {brandName} Service Desk
            </span>
          </button>
          <p className="text-[15px] text-[var(--text-on-footer)]">
            For all IT issues please call the {brandName} Service Desk:
          </p>
          <p className="text-[15px] text-white">
            800-555-0199
            <br />
            Mon – Fri, 5 AM – 5 PM, PST
          </p>
        </div>
      </div>

      <FooterIconBorder />

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center pt-8 w-[1110px] max-w-full">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <button className="text-[11px] font-bold text-[var(--text-on-footer)] tracking-[1.72px] uppercase">
            Terms & Conditions
          </button>
          <button className="text-[11px] font-bold text-[var(--text-on-footer)] tracking-[1.72px] uppercase">
            Privacy Policy
          </button>
        </div>
        <div className="flex-1 flex md:justify-end">
          <p className="text-[11px] font-bold text-[var(--text-on-footer)] uppercase md:text-right">
            {year} {brandName.toUpperCase()} NORTH AMERICAN OPERATIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
