import React, { useId } from "react";

/** Labeled multi-line text field, e.g. for a comment or message. */
export default function Textarea({
  label = "Comment",
  placeholder = "Type here...",
  required = false,
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
        className="flex items-center gap-0.5 pb-[10px] text-[13px] font-bold uppercase tracking-[2.02px] text-[var(--black-101010)]"
      >
        {label}
        {required && <span className="text-[11px] text-[var(--errorred-910a2d)]">*</span>}
      </label>
      <textarea
        id={inputId}
        placeholder={placeholder}
        rows={5}
        className="h-[160px] w-full resize-none rounded-[3px] border border-[var(--bordergray-d5d5d5)] bg-[var(--white-ffffff)] px-2.5 pt-2.5 text-[16px] text-[var(--black-101010)] placeholder:text-[var(--text-muted)] outline-none focus:border-2 focus:border-[var(--darkgray-2b2b2b)]"
        {...props}
      />
    </div>
  );
}
