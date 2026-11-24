import React, { useEffect, useState } from "react";
import Icon from "./Icon";

/** Floating "back to top" button — fades in after scrolling, scrolls smoothly to the page top. */
export default function BackToTop({ threshold = 300, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 flex size-11 items-center justify-center rounded-[4px] border border-[var(--bordergray-d5d5d5)] bg-[var(--white-ffffff)] text-[var(--black-101010)] shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-opacity hover:bg-[var(--lightgray-f5f5f5)] ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      } ${className}`}
    >
      <Icon name="chevronUp" size={20} />
    </button>
  );
}
