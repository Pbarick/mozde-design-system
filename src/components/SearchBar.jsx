import React, { useState } from "react";
import Icon from "./Icon";
import { PrimaryButton } from "./Button";

/** Full-width site search bar — query field, a filter dropdown and a search button. */
export default function SearchBar({ brandName = "Mozde", onSearch, onClose, className = "" }) {
  const [query, setQuery] = useState("");

  return (
    <div
      className={`flex w-full items-center justify-between gap-6 border-b border-[var(--bordergray-d5d5d5)] py-5 ${className}`}
    >
      <div className="flex flex-1 items-center justify-between gap-4 pr-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search in ${brandName.toUpperCase()}`}
          className="w-full bg-transparent text-[22px] text-[var(--text-muted)] outline-none placeholder:text-[var(--text-muted)]"
        />
        <button type="button" aria-label="Close search" onClick={onClose} className="text-[var(--text-muted)] hover:text-[var(--black-101010)]">
          <Icon name="close" size={22} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex w-[180px] items-center justify-between border-l border-[var(--bordergray-d5d5d5)] px-4 py-2 text-[13px] font-bold uppercase tracking-[1px] text-[var(--black-101010)]"
        >
          All Filter
          <Icon name="chevronDown" size={16} />
        </button>
        <PrimaryButton onClick={() => onSearch?.(query)}>Search</PrimaryButton>
      </div>
    </div>
  );
}
