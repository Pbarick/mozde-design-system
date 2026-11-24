import React, { useId } from "react";

/**
 * Labeled text input field — default / active / disabled / invalid states,
 * with optional required marker and helper/error text.
 */
export default function TextInput({
  label = "Input label",
  placeholder = "Input text",
  helperText,
  required = false,
  disabled = false,
  invalid = false,
  id,
  className = "",
  ...props
}) {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <div className={`flex flex-col items-start w-full max-w-[330px] ${className}`}>
      <label
        htmlFor={inputId}
        className="flex items-start gap-0.5 pb-[10px] text-[13px] font-bold uppercase tracking-[2.02px] text-[var(--black-101010)]"
      >
        {label}
        {required && <span className="text-[11px] text-[var(--errorred-910a2d)]">*</span>}
      </label>
      <div
        className={`flex w-full items-center gap-2.5 rounded-[3px] bg-[var(--white-ffffff)] px-2.5 ${
          invalid
            ? "border-2 border-[var(--errorred-910a2d)] justify-between"
            : "border border-[var(--bordergray-d5d5d5)] focus-within:border-2 focus-within:border-[var(--darkgray-2b2b2b)]"
        }`}
      >
        <input
          id={inputId}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className="h-[45px] w-full bg-transparent text-[16px] text-[var(--black-101010)] placeholder:text-[var(--text-muted)] outline-none disabled:cursor-not-allowed"
          {...props}
        />
        {invalid && (
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
            <path d="M8 1.5l7 12h-14l7-12z" fill="var(--errorred-910a2d)" />
            <rect x="7.3" y="6" width="1.4" height="4" fill="white" />
            <rect x="7.3" y="10.5" width="1.4" height="1.4" fill="white" />
          </svg>
        )}
      </div>
      {helperText && (
        <p
          className={`pt-[5px] text-[13px] ${
            invalid ? "text-[var(--errorred-910a2d)]" : "text-[var(--text-muted)]"
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
