import React from "react";
import Header, { HeaderTopNav } from "./components/Header";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import FrequentlyUsedLinks from "./components/FrequentlyUsedLinks";
import NewsSection from "./components/NewsSection";
import SocialMediaGallery from "./components/SocialMediaGallery";

/**
 * Homepage — the intranet landing page. Welcome banner, hero carousel,
 * frequently-used links, company news/newswire grid, social gallery,
 * and a back-to-top button, wrapped by the shared Header and Footer.
 *
 * Pass `userName` to personalize the welcome message.
 */
export default function HomePage({ brandName = "Mozde", userName = "there" }) {
  return (
    <div className="bg-white min-h-screen w-full">
      <HeaderTopNav />
      <Header brandName={brandName} />

      {/* Welcome banner */}
      <div className="flex items-center justify-center gap-24 h-12 w-full bg-[var(--lightgray-f5f5f5)]">
        <div className="flex gap-[10px] items-center w-[1110px] max-w-full">
          <p className="text-xl text-black">
            Welcome back, <span className="font-bold">{userName}!</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 py-10">
        <HeroCarousel />

        <FrequentlyUsedLinks />

        <NewsSection brandName={brandName} />

        <SocialMediaGallery brandName={brandName} />
      </div>

      <Footer brandName={brandName} />

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 flex flex-col items-center justify-center gap-2 size-[60px] rounded-2xl border border-[var(--bordergray-d5d5d5)] bg-white/80 backdrop-blur text-[11px] font-bold text-[var(--black-101010)] uppercase shadow-md"
      >
        <span aria-hidden="true">↑</span>
        Top
      </button>
    </div>
  );
}
