import React, { useId } from "react";

/**
 * Binary on/off switch, used for settings like "Expand all sections".
 */
export default function Toggle({
  label = "Expand all sections",
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
      className={`inline-flex items-center gap-2 select-none ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        aria-checked={checked}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only peer"
      />
      <span
        aria-hidden="true"
        className={`relative inline-flex h-[18px] w-9 shrink-0 items-center rounded-full p-0.5 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--darkgray-2b2b2b)] peer-focus-visible:ring-offset-2 ${
          checked ? "bg-[var(--darkgray-2b2b2b)]" : "bg-[var(--bordergray-d5d5d5)]"
        }`}
      >
        <span
          className={`size-[14px] rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-[18px]" : "translate-x-0"
          }`}
        />
      </span>
      {label && <span className="text-[13px] text-[var(--s9-515151)]">{label}</span>}
    </label>
  );
}
