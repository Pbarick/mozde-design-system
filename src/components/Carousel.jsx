import React, { useState, Children } from "react";

/**
 * Generic carousel shell — prev/next arrows and pagination dots around any
 * children, each child treated as one slide. Unlike HeroCarousel (which is
 * wired for the homepage's date/headline overlay), this is a bare
 * mechanism for wrapping arbitrary slide content (cards, images, etc).
 */
export default function Carousel({ children, className = "", slideClassName = "" }) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);

  function goTo(i) {
    setActive((i + slides.length) % slides.length);
  }

  if (slides.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`w-full ${slideClassName}`}>{slides[active]}</div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(active - 1)}
            className="absolute left-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--white-ffffff)] text-[var(--black-101010)] shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
            className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--white-ffffff)] text-[var(--black-101010)] shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
          >
            ›
          </button>
          <div className="mt-3 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
                className={`size-2 rounded-full transition-colors ${
                  i === active ? "bg-[var(--black-101010)]" : "bg-[var(--bordergray-d5d5d5)]"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
