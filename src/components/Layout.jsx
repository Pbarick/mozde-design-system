import React from "react";

/** Generic single-column content layout, centered with a max width. */
export function OneColumnLayout({ children, className = "" }) {
  return <div className={`mx-auto flex w-full max-w-[800px] flex-col gap-6 ${className}`}>{children}</div>;
}

/** Two-column content layout — a main column plus a narrower side column. */
export function TwoColumnLayout({ main, side, className = "" }) {
  return (
    <div className={`mx-auto flex w-full max-w-[1100px] flex-col gap-8 md:flex-row ${className}`}>
      <div className="flex-[2] min-w-0">{main}</div>
      <div className="flex-1 min-w-0">{side}</div>
    </div>
  );
}

/** Four-column equal-width grid layout, stacking on small screens. */
export function FourColumnLayout({ columns = [], className = "" }) {
  return (
    <div className={`mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {columns.map((col, i) => (
        <div key={i} className="min-w-0">
          {col}
        </div>
      ))}
    </div>
  );
}
