import React from "react";

/**
 * Generic image card — thumbnail, title, caption and an optional link.
 * Used for gallery grids, resource cards and similar compact content tiles.
 */
export default function Card({
  imageSrc,
  title = "Card title",
  caption,
  href,
  linkLabel = "Read More",
  className = "",
}) {
  return (
    <div className={`flex w-[280px] max-w-full flex-col gap-3 border border-[var(--bordergray-d5d5d5)] ${className}`}>
      <div className="h-[180px] w-full overflow-hidden bg-[var(--mediumgray-e7e7e7)]">
        {imageSrc ? (
          <img src={imageSrc} alt="" className="size-full object-cover" />
        ) : (
          <div className="size-full" aria-hidden="true" />
        )}
      </div>
      <div className="flex flex-col gap-2 px-4 pb-4">
        <p className="text-[18px] font-bold uppercase tracking-[2px] text-[var(--black-101010)]">{title}</p>
        {caption && <p className="text-[13px] text-[var(--text-muted)]">{caption}</p>}
        {href && (
          <a
            href={href}
            className="self-start text-[13px] font-bold uppercase tracking-[1.2px] text-[var(--text-muted)] hover:text-[var(--black-101010)]"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
