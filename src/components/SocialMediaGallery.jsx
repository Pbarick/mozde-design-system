import React, { useState } from "react";

/** Single thumbnail card inside the social media gallery. */
function GalleryCard({ handle, date, caption, imageSrc }) {
  return (
    <div className="border border-[var(--bordergray-d5d5d5)] flex flex-col gap-3 items-start w-[348px] max-w-full">
      <div className="w-full h-[340px] bg-[var(--mediumgray-e7e7e7)] overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={caption} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-col gap-2 px-[15px] w-full">
        <p className="text-[15px] font-bold text-[var(--black-101010)] uppercase tracking-[1.4px]">{handle}</p>
        <p className="text-[15px] text-[var(--text-muted)]">{date}</p>
      </div>

      <div className="flex flex-col gap-4 px-[15px] py-[10px] w-full">
        <p className="text-[13px] text-black">{caption}</p>
        <button className="text-[13px] font-bold text-[var(--text-muted)] tracking-[1.2px] self-start">
          Read More
        </button>
      </div>
    </div>
  );
}

/**
 * Homepage social media gallery — tab filter by model/category, a row of
 * thumbnail cards, and prev/next navigation. Pass `tabs` and `items`
 * (an object keyed by tab name) to supply real content.
 */
export default function SocialMediaGallery({
  brandName = "Mozde",
  tabs = ["All", "Model A", "Model B", "Model C", "Videos"],
  items = [
    { handle: `${brandName.toLowerCase()}official`, date: "Oct 18, 2023", caption: "Find a new model crafted to move every part of you. Check the link in bio for pricing and trim options..." },
    { handle: `${brandName.toLowerCase()}official`, date: "Oct 18, 2023", caption: "A signature color isn't like any other on the road. Just like our drivers aren't like any other drivers..." },
    { handle: `${brandName.toLowerCase()}official`, date: "Oct 18, 2023", caption: "Really enjoying the freedom this thing is giving us to explore. This is exactly what we had in mind..." },
  ],
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="flex flex-col gap-5 items-center w-[1110px] max-w-full mx-auto">
      <h2 className="text-[27px] font-bold text-black uppercase tracking-[3.2px] text-center">
        {brandName} Social Media Gallery
      </h2>

      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="flex items-end justify-center w-full"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={tab === activeTab}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col gap-3 items-center pt-1 px-10 pb-0 border-b-2 ${
              tab === activeTab ? "border-[var(--darkgray-2b2b2b)] text-[var(--black-101010)]" : "border-[var(--bordergray-d5d5d5)] text-[var(--text-muted)]"
            }`}
          >
            <span className="text-base font-bold tracking-[1.72px] uppercase">{tab}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 w-full">
        <button aria-label="Previous" className="size-14 flex items-center justify-center text-2xl text-[var(--text-muted)]">
          ‹
        </button>

        <div className="flex gap-[30px] items-center justify-center overflow-x-auto">
          {items.map((item, i) => (
            <GalleryCard key={i} {...item} />
          ))}
        </div>

        <button aria-label="Next" className="size-14 flex items-center justify-center text-2xl text-[var(--text-muted)]">
          ›
        </button>
      </div>

      <button className="flex flex-col gap-2 items-center py-1 border-b-2 border-[var(--text-muted)] text-[13px] font-bold text-[var(--text-muted)] tracking-[1.72px] uppercase">
        View More
      </button>
    </section>
  );
}
