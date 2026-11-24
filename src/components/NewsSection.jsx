import React from "react";
import { Link } from "react-router-dom";
import { articlePath, companyNews as defaultCompanyNews, newswire as defaultNewswire } from "../data/articles";

/**
 * Single news/newswire preview card — date, category, headline, snippet,
 * and a small "post type" label in the top-right corner.
 *
 * Pass `to` (a router path, e.g. "/news/employee-news") to link the card to
 * its ArticlePage, or `onClick` for custom behavior. With neither, it renders
 * as a static, non-clickable card.
 */
export function NewsCard({ date, category, headline, snippet, postLabel, to, onClick }) {
  const isClickable = Boolean(to || onClick);
  const Wrapper = to ? Link : "div";

  return (
    <Wrapper
      to={to}
      onClick={onClick}
      className={`relative bg-white border border-[var(--bordergray-d5d5d5)] flex flex-col gap-2 items-start px-4 py-6 w-full text-left ${
        isClickable ? "cursor-pointer hover:border-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-[var(--darkgray-2b2b2b)] transition-colors" : ""
      }`}
    >
      <div className="flex gap-2 items-center text-[15px] text-[var(--text-muted)] font-bold">
        <span>{date}</span>
        <span aria-hidden="true">|</span>
        <span>{category}</span>
      </div>

      <h3 className="text-[15px] font-bold text-[var(--black-101010)] uppercase tracking-[1.6px] leading-snug">
        {headline}
      </h3>

      <p className="text-[15px] text-[var(--black-101010)] leading-snug line-clamp-3">
        {snippet}
      </p>

      {postLabel && (
        <span className="absolute -right-px -top-px border-b border-l border-[var(--bordergray-d5d5d5)] px-2 py-2 text-[14px] text-[var(--black-101010)]">
          {postLabel}
        </span>
      )}
    </Wrapper>
  );
}

/** One column of news cards with a heading and a "View More" link. */
function NewsColumn({ id, title, items }) {
  return (
    <div id={id} className="flex flex-col gap-[30px] items-start w-[540px] max-w-full scroll-mt-6">
      <h2 className="text-2xl font-bold text-black uppercase tracking-[3.2px]">{title}</h2>
      {items.map((item) => (
        <NewsCard key={item.slug ?? item.headline} to={item.slug && articlePath(item.slug)} {...item} />
      ))}
      <div className="flex flex-col items-center justify-center w-full">
        <Link
          to="/news"
          className="flex flex-col gap-2 items-center py-1 border-b-2 border-[var(--text-muted)] text-[13px] font-bold text-[var(--text-muted)] tracking-[1.72px] uppercase hover:text-[var(--black-101010)] hover:border-[var(--black-101010)]"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

/**
 * Two-column "company news" + "newswire" grid shown on the homepage.
 * Defaults to the articles in src/data/articles.js; each card links to its
 * article page. Pass `companyNews` / `newswire` arrays to override.
 */
export default function NewsSection({
  brandName = "Mozde",
  companyNews = defaultCompanyNews,
  newswire = defaultNewswire,
}) {
  return (
    <section className="flex items-start justify-between gap-10 w-[1110px] max-w-full mx-auto">
      <NewsColumn id="company-news" title={`${brandName} News`} items={companyNews} />
      <NewsColumn id="newswire" title="Newswire" items={newswire} />
    </section>
  );
}
