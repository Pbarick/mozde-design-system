import React from "react";
import { Link } from "react-router-dom";

/**
 * Large news/article listing card — used on the News listing page (as
 * opposed to NewsCard in NewsSection.jsx, which is the smaller Home Page
 * preview card). Shows date, department tag, title, snippet, and an
 * optional corner label (e.g. "All Employees").
 *
 * Pass `to` (a router path, e.g. "/news/employee-news") to link through to
 * the full ArticlePage, or `onClick` for custom behavior.
 */
export default function NewsListingCard({
  date,
  department,
  title,
  snippet,
  cornerLabel,
  to,
  onClick,
}) {
  const isClickable = Boolean(to || onClick);
  const Wrapper = to ? Link : "div";

  return (
    <Wrapper
      to={to}
      onClick={onClick}
      className={`relative bg-white border border-[var(--bordergray-d5d5d5)] flex flex-col gap-3 justify-center px-6 py-8 w-full min-h-[225px] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] ${
        isClickable ? "cursor-pointer hover:border-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--darkgray-2b2b2b)] transition-colors" : ""
      }`}
    >
      <p className="text-[var(--text-muted)] text-[14px] tracking-[0.4px] pr-28">
        {date}
        {department ? ` | ${department}` : ""}
      </p>

      <h3 className="font-bold text-[18px] text-[var(--black-101010)] tracking-[2px] uppercase">
        {title}
      </h3>

      <p className="text-[var(--black-101010)] text-[15px] leading-[1.4]">{snippet}</p>

      {cornerLabel && (
        <span className="absolute right-0 top-0 border-b border-l border-[var(--bordergray-d5d5d5)] px-3 py-2 text-[13px] text-[var(--darkgray-2b2b2b)] tracking-[0.8px]">
          {cornerLabel}
        </span>
      )}
    </Wrapper>
  );
}
