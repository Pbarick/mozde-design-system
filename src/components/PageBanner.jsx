import React from "react";

/**
 * Full-width inner-page banner — a hero strip for interior pages, with an
 * optional title/breadcrumb overlay. Pass `imageSrc` for a real photo;
 * without one it falls back to a neutral gradient placeholder.
 */
export default function PageBanner({
  imageSrc,
  title,
  height = 213,
  overlay = false,
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" className="absolute inset-0 size-full object-cover" />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--bordergray-d5d5d5) 0%, var(--mediumgray-e7e7e7) 50%, var(--lightgray-f5f5f5) 100%)",
          }}
          aria-hidden="true"
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/35" aria-hidden="true" />}
      {title && (
        <div className="absolute inset-0 flex items-end">
          <h1 className="px-8 py-6 text-[28px] font-bold uppercase tracking-[2px] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
