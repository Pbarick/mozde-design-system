import React, { useId } from "react";

/**
 * Standard radio button — accessible input with a styled ring/dot,
 * matching the design system's deselected / selected / disabled states.
 */
export function Radio({
  label = "Radio button label",
  name,
  value,
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
      className={`flex items-center gap-4 select-none ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer group"
      } ${className}`}
    >
      <input
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only peer"
      />
      <span
        aria-hidden="true"
        className={`flex items-center justify-center size-5 shrink-0 rounded-full border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--darkgray-2b2b2b)] peer-focus-visible:ring-offset-2 ${
          checked
            ? "border-[var(--black-101010)]"
            : "border-[var(--bordergray-d5d5d5)] group-hover:border-[var(--text-muted)]"
        }`}
      >
        {checked && <span className="size-2.5 rounded-full bg-[var(--black-101010)]" />}
      </span>
      <span
        className={`text-[13px] uppercase tracking-[1.72px] ${
          checked ? "font-bold text-[var(--black-101010)]" : "font-medium text-[var(--text-muted)]"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

/** A group of mutually-exclusive Radio options. */
export function RadioGroup({ name, options = [], value, onChange, className = "" }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`} role="radiogroup">
      {options.map((opt) => (
        <Radio
          key={opt.value}
          name={name}
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          disabled={opt.disabled}
          onChange={() => onChange?.(opt.value)}
        />
      ))}
    </div>
  );
}
