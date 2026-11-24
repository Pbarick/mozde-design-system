import React from "react";
import Header, { HeaderTopNav } from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Sidebar from "./components/Sidebar";
import bannerImage from "./assets/banner-placeholder.png";

/**
 * Two-column page layout template.
 * Defines the main content area and sidebar structure used across inner
 * pages: banner image, breadcrumb trail, left sidebar (nav + filters) and
 * a right content panel. Sidebar stacks above the content below lg.
 */
export default function TwoColumnPage({
  brandName = "Mozde",
  bannerImageSrc = bannerImage,
  pageHeading = "Page Heading",
}) {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <HeaderTopNav />
      <Header brandName={brandName} />

      <div className="flex flex-col items-center justify-center w-full px-4 md:px-8 py-4">
        <div className="w-[1170px] max-w-full">
          <Breadcrumb />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={bannerImageSrc}
          alt=""
          className="w-full max-w-[1440px] h-[120px] md:h-[213px] object-cover"
        />
      </div>

      <main className="flex flex-col lg:flex-row items-start justify-center w-full gap-8 lg:gap-16 px-4 md:px-8 py-8 lg:py-12">
        <div className="w-full lg:w-auto shrink-0 lg:pt-12">
          <Sidebar />
        </div>
        <div className="flex flex-col items-start lg:pt-12 w-full max-w-[820px] min-w-0">
          <div className="flex gap-2 items-center w-full">
            <h1 className="font-bold text-[22px] md:text-[30px] text-black tracking-[2px] md:tracking-[4px] uppercase break-words">
              {pageHeading}
            </h1>
          </div>
          {/* Page body content goes here */}
        </div>
      </main>

      <Footer brandName={brandName} />
    </div>
  );
}
