import React from "react";

export default {
  title: "Foundations/Design Tokens",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Core color and typography tokens. Swatches read CSS variables from src/theme/theme.css, so they update with the Theme switch in the toolbar.",
      },
    },
  },
};

const colors = [
  ["Text / Primary", "var(--black-101010)"],
  ["Text / Muted", "var(--text-muted)"],
  ["Border / Default", "var(--bordergray-d5d5d5)"],
  ["Surface / White", "var(--white-ffffff)"],
  ["Surface / Subtle", "var(--lightgray-f5f5f5)"],
  ["Footer surface", "var(--darkgray-2b2b2b)"],
];

// Theme-aware: swatches read the CSS variables, so they change with the Theme switch.
export const Colors = () => (
  <div className="grid grid-cols-3 gap-6 max-w-[900px]">
    {colors.map(([name, value]) => (
      <div key={name} className="flex flex-col gap-2">
        <div className="h-[80px] border border-[var(--bordergray-d5d5d5)]" style={{ background: value }} />
        <p className="text-[14px] font-bold text-[var(--black-101010)]">{name}</p>
        <p className="text-[13px] text-[var(--text-muted)]">{value}</p>
      </div>
    ))}
  </div>
);

const typeScale = [
  ["Page title", "text-[28px] font-bold tracking-[2px] uppercase", "News Headline"],
  ["Card title", "text-[18px] font-bold tracking-[2px] uppercase", "Article Card Title"],
  ["Filter heading", "text-[14px] font-bold tracking-[1.7px] uppercase", "News Categories"],
  ["Body", "text-[15px] tracking-[0.4px]", "Body text used for paragraphs and snippets."],
  ["Meta", "text-[14px] font-medium text-[var(--text-muted)]", "Jan 26, 2025 | Marketing"],
  ["Filter option", "text-[11px] font-bold tracking-[1.1px] uppercase", "Events [4]"],
];

export const Typography = () => (
  <div className="flex flex-col gap-6 max-w-[900px] text-[var(--black-101010)]">
    {typeScale.map(([name, cls, sample]) => (
      <div key={name} className="flex flex-col gap-1 border-b border-[var(--bordergray-d5d5d5)] pb-4">
        <p className="text-[12px] text-[var(--text-muted)]">{name}</p>
        <p className={cls}>{sample}</p>
      </div>
    ))}
  </div>
);
