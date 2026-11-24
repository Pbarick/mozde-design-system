import React, { useId, useState } from "react";

/**
 * A single checkbox row inside a filter group — label, item count, and
 * checked state driven by the parent.
 */
function FilterCheckbox({ label, count, checked, onChange }) {
  return (
    <label className="flex gap-2 items-start w-full cursor-pointer select-none group">
      {/* Real input kept for accessibility/keyboard support, visually hidden */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      {/* Custom checkbox box, matching the site's control/checkbox design */}
      <span
        aria-hidden="true"
        className={`flex items-center justify-center rounded-[3px] border shrink-0 size-5 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--darkgray-2b2b2b)] peer-focus-visible:ring-offset-2 ${
          checked ? "bg-black border-black" : "bg-white border-[var(--bordergray-d5d5d5)] group-hover:border-[var(--text-muted)]"
        }`}
      >
        {checked && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path
              d="M1 4.5L4 7.5L10 1"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="flex-1 font-bold text-[11px] text-[var(--black-101010)] tracking-[1.1px] uppercase">
        {label}
      </span>
      <span className="font-bold text-[11px] text-[var(--text-muted)] tracking-[1.1px] uppercase">
        [{count}]
      </span>
    </label>
  );
}

/**
 * One collapsible filter group ("All Dates", "News Categories", etc).
 * `options` is an array of { label, value, count }. Checked values are
 * controlled via `selected` (a Set) and reported back through `onToggle`.
 */
function FilterGroup({ heading, options, selected, onToggle, defaultOpen = true, searchable = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const panelId = useId();

  const visibleOptions = searchable
    ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex gap-2 items-center w-full text-left"
      >
        <span className="flex-1 font-bold text-[14px] text-[var(--black-101010)] tracking-[1.7px] uppercase">
          {heading}
        </span>
        <span className="text-[18px] text-[var(--black-101010)] leading-none" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>

      <div id={panelId} hidden={!open} className="flex flex-col gap-3 items-start w-full">
        {searchable && (
          <div className="flex gap-[10px] items-center border border-[var(--bordergray-d5d5d5)] rounded-[3px] px-[10px] w-full">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by categories"
              aria-label={`Search ${heading}`}
              className="flex-1 text-[var(--black-101010)] placeholder:text-[var(--text-muted)] text-[15px] py-[12px] outline-none"
            />
          </div>
        )}
        {visibleOptions.map((opt) => (
          <FilterCheckbox
            key={opt.value}
            label={opt.label}
            count={opt.count}
            checked={selected.has(opt.value)}
            onChange={() => onToggle(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Full filter sidebar for the News listing page. Holds its own selection
 * state per filter group and reports the combined selection up to the
 * parent via `onFilterChange`, so the parent can filter the article list.
 *
 * `groups` lets you override the default filter groups/options; each group
 * is { key, heading, searchable?, options: [{ label, value, count }] }.
 */
export default function NewsListingFilters({ groups, onFilterChange, initialSelected = {} }) {
  const [selections, setSelections] = useState(() =>
    Object.fromEntries(groups.map((g) => [g.key, new Set(initialSelected[g.key] || [])]))
  );

  // Report changes outside the state updater: updaters must stay pure
  // (StrictMode runs them twice) and must not set the parent's state.
  function update(next) {
    setSelections(next);
    onFilterChange?.(next);
  }

  function toggle(groupKey, value) {
    const group = new Set(selections[groupKey]);
    if (group.has(value)) group.delete(value);
    else group.add(value);
    update({ ...selections, [groupKey]: group });
  }

  function clearAll() {
    update(Object.fromEntries(groups.map((g) => [g.key, new Set()])));
  }

  const hasActiveFilters = Object.values(selections).some((s) => s.size > 0);

  return (
    <aside
      aria-label="Filter articles"
      className="flex flex-col gap-8 items-start w-full lg:w-[290px] shrink-0 pt-8 lg:pt-[45px]"
    >
      {groups.map((group, i) => (
        <React.Fragment key={group.key}>
          <FilterGroup
            heading={group.heading}
            options={group.options}
            searchable={group.searchable}
            selected={selections[group.key]}
            onToggle={(value) => toggle(group.key, value)}
          />
          {i < groups.length - 1 && <div className="bg-[var(--bordergray-d5d5d5)] h-px w-full" />}
        </React.Fragment>
      ))}

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="capitalize font-bold text-[21px] text-[#767676] tracking-[3px]"
        >
          Clear All Filters
        </button>
      )}
    </aside>
  );
}
