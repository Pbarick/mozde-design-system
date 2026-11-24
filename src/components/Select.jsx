import React, { useId, useState, useRef, useEffect } from "react";

function ChevronDownIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Dropdown / form select — click to reveal a list of options. */
export default function Select({
  label = "Select dropdown label",
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
  required = false,
  id,
  className = "",
}) {
  const autoId = useId();
  const selectId = id || autoId;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={ref} className={`relative flex flex-col items-start gap-2 w-full max-w-[330px] ${className}`}>
      <label
        htmlFor={selectId}
        className="flex items-center gap-0.5 text-[13px] font-bold uppercase tracking-[2.02px] text-[var(--black-101010)]"
      >
        {label}
        {required && <span className="text-[11px] text-[var(--errorred-910a2d)]">*</span>}
      </label>
      <button
        id={selectId}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-[45px] w-full items-center justify-between gap-2 rounded-[4px] border border-[var(--bordergray-d5d5d5)] bg-[var(--white-ffffff)] px-2.5 text-left text-[16px] text-[var(--text-muted)]"
      >
        <span className={selected ? "text-[var(--black-101010)]" : ""}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDownIcon open={open} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-[3px] border border-[var(--bordergray-d5d5d5)] bg-[var(--white-ffffff)] shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
              className="cursor-pointer px-2.5 py-2 text-[14px] text-[var(--black-101010)] hover:bg-[var(--lightgray-f5f5f5)]"
            >
              <p className="font-bold text-[13px] uppercase tracking-[1px]">{opt.label}</p>
              {opt.description && (
                <p className="text-[12px] font-normal normal-case text-[var(--text-muted)]">{opt.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
