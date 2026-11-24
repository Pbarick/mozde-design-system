import React from "react";

/**
 * Breadcrumb navigation trail.
 * Shows Home > Level 1 > Level 2 > Current Page, using the >> divider glyph.
 */
export function BreadcrumbDivider() {
  return (
    <div className="flex flex-col items-start justify-center pr-1">
      <p className="text-[12px] text-[#101010] tracking-[0.6px]">»</p>
    </div>
  );
}

export function BreadcrumbHomeIcon() {
  return (
    <div className="flex flex-col items-start justify-center pr-1">
      <p className="text-[12px] text-black">Home</p>
    </div>
  );
}

export function BreadcrumbSingleItem({ text = "Breadcrumb Text" }) {
  return (
    <div className="flex items-center gap-1 pr-1 py-1">
      <p className="text-[12px] font-bold text-[#101010]">{text}</p>
    </div>
  );
}

export function BreadcrumbLastLevelNoLink({ text = "Breadcrumb No Link" }) {
  return (
    <div className="flex items-center pr-1 py-2">
      <p className="text-[12px] text-[#101010]">{text}</p>
    </div>
  );
}

export default function Breadcrumb({
  levels = ["Level 1", "Level 2"],
  currentLabel = "Current Page",
}) {
  return (
    <div className="flex items-center">
      <BreadcrumbHomeIcon />
      {levels.map((level, i) => (
        <React.Fragment key={i}>
          <BreadcrumbDivider />
          <BreadcrumbSingleItem text={level} />
        </React.Fragment>
      ))}
      <BreadcrumbDivider />
      <BreadcrumbLastLevelNoLink text={currentLabel} />
    </div>
  );
}
