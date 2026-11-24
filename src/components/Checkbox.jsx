import React, { useId } from "react";

function CheckIcon() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
      <path
        d="M1 4.5L4 7.5L10 1"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Standard checkbox — accessible input with a styled box, matching the
 * design system's default / hover / checked / disabled states.
 */
export default function Checkbox({
  label = "Check box label",
  checked = false,
  disabled = false,
  onChange,
  id,
  className = "",
}) {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <label
      htmlFor={inputId}
      className={`flex items-center gap-2 select-none ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer group"
      } ${className}`}
    >
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only peer"
      />
      <span
        aria-hidden="true"
        className={`flex items-center justify-center size-5 shrink-0 rounded-[3px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--darkgray-2b2b2b)] peer-focus-visible:ring-offset-2 ${
          checked
            ? "bg-[var(--black-101010)] border-[var(--black-101010)]"
            : "bg-[var(--white-ffffff)] border-[var(--bordergray-d5d5d5)] group-hover:border-[var(--text-muted)]"
        }`}
      >
        {checked && <CheckIcon />}
      </span>
      <span className="text-[13px] font-bold uppercase tracking-[1.1px] text-[var(--black-101010)]">
        {label}
      </span>
    </label>
  );
}
