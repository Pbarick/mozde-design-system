import React, { useId, useState } from "react";

/**
 * Sidebar navigation item — one row in a vertical sidebar menu.
 * Supports default, hover and active (selected) states.
 */
export function SidebarNavItem({ label = "Sidebar Nav Item", active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-1 items-start justify-center py-1 w-full text-left"
    >
      <p
        className={`capitalize text-[14px] tracking-[0.4px] w-full ${
          active ? "font-bold text-[var(--black-101010)]" : "text-[var(--black-101010)]"
        }`}
      >
        {label}
      </p>
      {active && <div className="bg-black h-[3px] w-full" />}
    </button>
  );
}

/**
 * Collapsible sidebar navigation accordion — groups related sidebar nav
 * items under an expandable heading.
 */
export function AccordionSidebarNav({ label = "Sidebar Nav Item", items = [], defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  return (
    <div className="flex flex-col gap-1 items-start justify-center py-1 w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex gap-[10px] items-center w-full justify-between"
      >
        <span className="capitalize text-[14px] tracking-[0.4px] text-[var(--black-101010)]">{label}</span>
        <span className="text-[20px] text-[var(--black-101010)]" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={panelId} hidden={!open} className="flex flex-col gap-[10px] items-start pl-5">
        {items.map((item) => (
          <SidebarNavItem key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

const PLACEHOLDER_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
  "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

/**
 * Sidebar filter accordion — collapsible group used for filter categories.
 * The heading is a toggle button; `children` (or `text`, which defaults to
 * placeholder copy) render in a panel shown only while the accordion is open.
 */
export function FilterAccordion({
  heading = "Accordion Heading",
  text = PLACEHOLDER_TEXT,
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-[var(--bordergray-d5d5d5)] w-full">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex items-center justify-between w-full py-8 text-left"
        >
          <span className="font-bold text-[14px] text-black tracking-[1.7px] uppercase">{heading}</span>
          <span className="text-[20px] text-[var(--black-101010)]" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <div id={panelId} hidden={!open} className="pb-8">
        {children ?? (
          <p className="text-[14px] leading-6 text-[var(--black-101010)]">{text}</p>
        )}
      </div>
    </div>
  );
}

/**
 * Full sidebar — heading, nav items (some collapsible), filter toggle and
 * a stack of filter accordions, with a "clear all filters" action.
 */
export default function Sidebar({
  heading = "Sidebar Heading",
  navItems = ["Nav Item 1", "Nav Item 2", "Nav Item 3"],
  filterGroups = ["Accordion Heading", "Accordion Heading", "Accordion Heading", "Accordion Heading"],
}) {
  return (
    <aside className="flex flex-col gap-8 items-start w-full lg:w-[290px] lg:pr-8">
      <div className="flex items-start">
        <p className="capitalize text-[21px] text-black tracking-[3px]">{heading}</p>
      </div>

      <nav className="flex flex-col gap-[6px] items-start pr-[10px] w-full">
        {navItems.map((item, i) => (
          <SidebarNavItem key={item} label={item} active={i === navItems.length - 1} />
        ))}
      </nav>

      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex gap-8 items-start pr-[30px] w-full justify-between">
          <p className="flex-1 font-bold text-[18px] text-[var(--black-101010)] tracking-[2px] uppercase">
            Filters
          </p>
          <p className="font-bold text-[14px] text-[var(--text-muted)] tracking-[1.72px] uppercase">
            Reset filters
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        {filterGroups.map((g, i) => (
          <FilterAccordion key={i} heading={`${g} ${i + 1}`} />
        ))}
      </div>

      <div className="flex items-start w-full">
        <p className="capitalize font-bold text-[21px] text-[var(--text-muted)] tracking-[3px]">
          Clear All Filters
        </p>
      </div>
    </aside>
  );
}
