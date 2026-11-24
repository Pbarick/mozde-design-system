import React from "react";
import Header, { HeaderTopNav } from "./components/Header";
import Footer from "./components/Footer";
import { SidebarNavItem } from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";

/** Date + category/author line shown above the headline. */
function DateAuthor({ date, author }) {
  return (
    <div className="flex gap-2 items-center text-[15px] text-[var(--text-muted)] font-bold w-full">
      <span>{date}</span>
      <span>|</span>
      <span>{author}</span>
    </div>
  );
}

/** Simple paragraph block, used for the intro and body copy. */
function Paragraph({ text }) {
  return (
    <div className="flex flex-wrap gap-2 items-start w-full">
      <p className="text-[var(--black-101010)] text-[15px] leading-[1.4] whitespace-pre-line">{text}</p>
    </div>
  );
}

/** Optional "BY / TO" memo block, bordered top and bottom. */
function MemoBlock({ byLine, toLine }) {
  if (!byLine && !toLine) return null;
  return (
    <div className="border-y border-[var(--bordergray-d5d5d5)] flex flex-col items-start p-4 w-full">
      {byLine && (
        <div className="flex gap-[10px] items-start p-[10px] w-full">
          <p className="font-bold text-[15px] text-black">BY:</p>
          <p className="text-[15px] text-[var(--black-101010)] flex-1">{byLine}</p>
        </div>
      )}
      {toLine && (
        <div className="flex gap-[10px] items-start p-[10px] w-full">
          <p className="font-bold text-[15px] text-black">TO:</p>
          <p className="text-[15px] text-[var(--black-101010)] flex-1">{toLine}</p>
        </div>
      )}
    </div>
  );
}

/** Tag chips row shown at the bottom of the article. */
function Tags({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div className="flex gap-2 items-center w-full">
      <p className="font-bold text-[15px] text-black">TAGS:</p>
      <div className="flex flex-wrap gap-2 items-center font-bold text-[13px] text-[var(--text-muted)] tracking-[1.72px] uppercase">
        {tags.map((tag, i) => (
          <React.Fragment key={tag}>
            {i > 0 && <span>|</span>}
            <span>{tag}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/**
 * Article / "News Details" page — the full single-article view linked to
 * from NewsCard and Newswire cards. Reuses Header, Footer, sidebar nav
 * items and breadcrumb for visual consistency with the rest of the app.
 *
 * Pass `bodyParagraphs` as an array of strings for the main article copy;
 * `contactEmail` and `contactLink` render as a mailto link inside whichever
 * paragraph string contains the `{contactLink}` placeholder.
 */
export default function ArticlePage({
  brandName = "Mozde",
  bannerImageSrc = null,
  breadcrumbLevels = ["Newsroom", `${brandName} News`],
  date = "Dec 18, 2023",
  author = `${brandName} Broadcast`,
  headline = "Vintage Car Enthusiast Meetup",
  intro = "The Vintage Car Enthusiast Meetup takes place this fall at a public waterfront park. We'll be participating again this year with a selection of heritage models on display, including a couple of retired motorsport cars.",
  byLine = "Jordan Lee, Program Manager, Brand Experience & Casey Morgan, Senior Manager, Motorsports",
  toLine = `All ${brandName} North America Employees`,
  bodyParagraphs = [
    "The Vintage Car Enthusiast Meetup takes place this fall at a public waterfront park. We'll be participating again this year with a selection of heritage models on display, including a couple of retired motorsport cars.",
    "We encourage all local employees to attend in support of the brand. If you are interested in attending, please contact Jordan Lee at jlee@mozdeinc.com by the sign-up deadline. Complimentary admissions will be limited to two per person and distributed on a first come, first served basis.",
    "If you are interested in volunteering, please contact Jordan Lee at jlee@mozdeinc.com by the sign-up deadline. Volunteers will talk to visitors at our booth and receive breakfast (morning shift) and lunch (both shifts). The following times are available:",
    "- Saturday morning shift, 8:30 AM – 12 PM\n- Saturday afternoon shift, 12 PM – 3 PM",
    "For more information about the event, please visit the event website.",
  ],
  note = "Note: as an employee, you are a representative of the brand.",
  tags = [`${brandName.toUpperCase()} BROADCAST`, "EVENTS", "MARKETING, PR & CEC"],
  sidebarItems = [
    "Contact Us",
    `${brandName} News`,
    `${brandName} News Update Podcast`,
    `${brandName} Social Media Gallery`,
    "Newswire",
  ],
}) {
  return (
    <div className="bg-white min-h-screen w-full">
      <HeaderTopNav />
      <Header brandName={brandName} />

      {/* Breadcrumb */}
      <div className="flex flex-col items-center justify-center py-[10px] w-full">
        <div className="w-[1110px] max-w-full px-4 md:px-8 xl:px-0">
          <Breadcrumb levels={breadcrumbLevels} currentLabel={headline} />
        </div>
      </div>

      {/* Banner image */}
      <div className="w-full h-[213px] bg-[var(--mediumgray-e7e7e7)] overflow-hidden">
        {bannerImageSrc && (
          <img src={bannerImageSrc} alt="" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Two-column body */}
      <div className="flex items-start justify-center gap-16 w-full bg-[var(--lightgray-f5f5f5)]">
        <div className="flex items-start w-[1110px] max-w-full">
          {/* Sidebar */}
          <aside className="flex flex-col flex-1 gap-[6px] items-start pt-[45px] pr-8 w-[290px] bg-white">
            {sidebarItems.map((item) => (
              <SidebarNavItem key={item} label={item} />
            ))}
          </aside>

          {/* Article content */}
          <article className="flex flex-col gap-[30px] items-start pl-[45px] pt-[45px] pb-[45px] w-[820px] max-w-full bg-[var(--lightgray-f5f5f5)]">
            <DateAuthor date={date} author={author} />

            <h1 className="text-[30px] font-bold text-black uppercase tracking-[4px]">
              {headline}
            </h1>

            <Paragraph text={intro} />

            <MemoBlock byLine={byLine} toLine={toLine} />

            {bodyParagraphs.map((text, i) => (
              <Paragraph key={i} text={text} />
            ))}

            {note && <Paragraph text={note} />}

            <Tags tags={tags} />
          </article>
        </div>
      </div>

      <Footer brandName={brandName} />
    </div>
  );
}
