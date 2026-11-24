import React, { useState } from "react";

/**
 * Homepage hero carousel — full-width image slides with a dark gradient,
 * a date + headline overlay, pagination dots and prev/next arrows.
 *
 * Pass your own `slides` array to replace the placeholder content:
 *   { imageSrc, date, headline }
 * Images are not bundled — drop files into src/assets and pass their
 * imported path as imageSrc, or point at a public/ URL.
 */
export default function HeroCarousel({
  slides = [
    { imageSrc: null, date: "Jan 6, 2024", headline: "Brand Manifesto Dealer Marketing Video Update — Part 1" },
    { imageSrc: null, date: "Jan 6, 2024", headline: "Brand Manifesto Dealer Marketing Video Update — Part 2" },
    { imageSrc: null, date: "Jan 6, 2024", headline: "Brand Manifesto Dealer Marketing Video Update — Part 3" },
  ],
}) {
  const [active, setActive] = useState(0);

  function goTo(index) {
    setActive((index + slides.length) % slides.length);
  }

  const slide = slides[active];

  return (
    <div className="relative w-[1110px] max-w-full h-[444px] bg-[var(--bordergray-d5d5d5)] overflow-hidden mx-auto">
      {slide.imageSrc ? (
        <img
          src={slide.imageSrc}
          alt={slide.headline}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[var(--s6-c3c3c3)]" aria-hidden="true" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />

      <div className="absolute left-[52px] top-[317px] flex flex-col gap-5 text-white uppercase tracking-[3.2px]">
        <p className="text-sm leading-none">{slide.date}</p>
        <p className="text-xl font-bold leading-tight max-w-[700px]">{slide.headline}</p>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 p-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`rounded-full transition-all ${
              i === active ? "size-[14px] bg-white" : "size-[10px] bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center size-[60px] text-white/80 hover:text-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center size-[60px] text-white/80 hover:text-white"
      >
        ›
      </button>
    </div>
  );
}
