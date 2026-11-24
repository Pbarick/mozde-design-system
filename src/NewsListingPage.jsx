import React, { useMemo, useState } from "react";
import Header, { HeaderTopNav } from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import NewsListingFilters from "./components/NewsListingFilters";
import NewsListingCard from "./components/NewsListingCard";
import { articles as allArticles, articlePath } from "./data/articles";

// Filter groups, genericized from the real Figma filter sidebar (dates,
// communication type, news categories w/ search, departments, product
// line). Option counts are calculated from the articles — see withCounts.
const DEFAULT_FILTER_GROUPS = (brandName) => [
  {
    key: "date",
    heading: "All Dates",
    options: [
      { label: "2025", value: "2025" },
      { label: "2024", value: "2024" },
      { label: "2023", value: "2023" },
      { label: "2022", value: "2022" },
      { label: "2021", value: "2021" },
    ],
  },
  {
    key: "communicationType",
    heading: "Communication Type",
    options: [
      { label: "All (Staff & Partners)", value: "all" },
      { label: "Field & Partner Comms.", value: "field-partner" },
      { label: `${brandName} Broadcast`, value: "broadcast" },
    ],
  },
  {
    key: "category",
    heading: "News Categories",
    searchable: true,
    options: [
      { label: "Awards & Recognition", value: "awards" },
      { label: "Company Update", value: "company-update" },
      { label: "Diversity & Inclusion (D&I)", value: "dei" },
      { label: "Employee Announcements", value: "employee-announcements" },
      { label: "Employee Appreciation", value: "employee-appreciation" },
      { label: "Employee Reminders", value: "employee-reminders" },
      { label: "Events", value: "events" },
      { label: "Executive Messages", value: "executive-messages" },
      { label: "Holiday Schedule", value: "holiday-schedule" },
      { label: "Town Halls", value: "town-halls" },
      { label: "Policy Updates", value: "policy-updates" },
      { label: "Product Recalls", value: "product-recalls" },
      { label: "Product Updates & Launches", value: "product-updates" },
      { label: "Training", value: "training" },
    ],
  },
  {
    key: "department",
    heading: "Departments",
    options: [
      { label: "Executive Team", value: "executive-team" },
      { label: "Finance & Accounting", value: "finance" },
      { label: "HR, Facilities & Admin", value: "hr-facilities" },
      { label: "Information Technology (IT)", value: "it" },
      { label: "Legal, Audit & Gov't Affairs", value: "legal" },
      { label: "Marketing, PR & CEC", value: "marketing-pr-cec" },
      { label: "Retail Operations", value: "retail-operations" },
      { label: "Strategic Planning", value: "strategic-planning" },
      { label: "Training", value: "training-dept" },
    ],
  },
  {
    key: "productLine",
    heading: "Product Line",
    options: [
      { label: "Model A", value: "model-a" },
      { label: "Model B", value: "model-b" },
      { label: "Model C", value: "model-c" },
      { label: "Model D", value: "model-d" },
      { label: "Model E", value: "model-e" },
    ],
  },
];

/** An article's value for each filter group; "date" is the article's year. */
function getFilterValues(article) {
  return { ...article.filters, date: String(new Date(article.date).getFullYear()) };
}

/** Fills in each option's count with how many articles match it. */
function withCounts(groups, articles) {
  return groups.map((group) => ({
    ...group,
    options: group.options.map((option) => ({
      ...option,
      count: articles.filter((a) => getFilterValues(a)[group.key] === option.value).length,
    })),
  }));
}

const newestFirst = (a, b) => new Date(b.date) - new Date(a.date);

/**
 * News listing / "Mozde News Latest-expanded" page — a filterable list of
 * article cards with a sidebar of checkbox filter groups (dates,
 * communication type, categories, departments, product line).
 *
 * Within a group, checked options are OR-ed (2024 or 2025); across groups
 * they are AND-ed (2024 and Events). Articles come from src/data/articles.js
 * and each card links to its ArticlePage at /news/:slug.
 */
export default function NewsListingPage({
  brandName = "Mozde",
  pageTitle = `${brandName} Newsroom`,
  breadcrumbLevel = "Newsroom",
  articles = allArticles,
  filterGroups = null,
  getArticleHref = (article) => articlePath(article.slug),
}) {
  const [activeFilters, setActiveFilters] = useState({});

  const groups = useMemo(
    () => withCounts(filterGroups ?? DEFAULT_FILTER_GROUPS(brandName), articles),
    [filterGroups, brandName, articles]
  );

  const departmentLabels = useMemo(
    () =>
      Object.fromEntries(
        (groups.find((g) => g.key === "department")?.options ?? []).map((o) => [o.value, o.label])
      ),
    [groups]
  );

  const sortedArticles = useMemo(() => [...articles].sort(newestFirst), [articles]);

  const visibleArticles = useMemo(() => {
    const groupsWithSelections = Object.entries(activeFilters).filter(
      ([, values]) => values && values.size > 0
    );
    if (groupsWithSelections.length === 0) return sortedArticles;

    return sortedArticles.filter((article) => {
      const values = getFilterValues(article);
      return groupsWithSelections.every(([groupKey, selected]) => selected.has(values[groupKey]));
    });
  }, [sortedArticles, activeFilters]);

  return (
    <div className="bg-white min-h-screen w-full">
      <HeaderTopNav />
      <Header brandName={brandName} />

      {/* Breadcrumb */}
      <div className="flex flex-col items-center justify-center py-[10px] w-full">
        <div className="w-[1110px] max-w-full px-4 md:px-8 xl:px-0">
          <Breadcrumb levels={[]} currentLabel={breadcrumbLevel} />
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-[120px] md:h-[213px] bg-[var(--mediumgray-e7e7e7)]" />

      {/* Two-column: filters + article list (stacked below lg) */}
      <div className="flex justify-center w-full bg-white">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-[1110px] max-w-full px-4 md:px-8 xl:px-0">
          <NewsListingFilters groups={groups} onFilterChange={setActiveFilters} />

          <main className="flex flex-col gap-6 items-start flex-1 min-w-0 w-full pt-0 lg:pt-[45px] pb-[45px]">
            <h1 className="text-[22px] md:text-[28px] font-bold text-black uppercase tracking-[2px]">
              {pageTitle}
            </h1>

            <p aria-live="polite" className="text-[14px] text-[#767676]">
              Showing {visibleArticles.length} of {articles.length} articles
            </p>

            {visibleArticles.length === 0 ? (
              <p className="text-[#767676] text-[15px]">
                No articles match the selected filters.
              </p>
            ) : (
              <div className="flex flex-col gap-6 items-start w-full">
                {visibleArticles.map((article) => (
                  <NewsListingCard
                    key={article.slug}
                    date={article.date}
                    department={departmentLabels[article.filters?.department] ?? article.category}
                    title={article.headline}
                    snippet={article.snippet}
                    cornerLabel={article.postLabel}
                    to={getArticleHref(article)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer brandName={brandName} />
    </div>
  );
}
