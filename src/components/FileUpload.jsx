import React, { useId, useState } from "react";

function UploadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 11V2m0 0L4.5 5.5M8 2l3.5 3.5M2.5 13.5h11"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** File attachment picker — label with max-size hint, click-to-browse field. */
export default function FileUpload({
  label = "Upload attachment",
  maxSizeLabel = "5MB Max",
  required = false,
  id,
  onChange,
  className = "",
}) {
  const autoId = useId();
  const inputId = id || autoId;
  const [fileName, setFileName] = useState("");

  return (
    <div className={`flex flex-col items-start w-full max-w-[330px] ${className}`}>
      <label
        htmlFor={inputId}
        className="flex items-center gap-2 pb-[10px] text-[13px] font-bold uppercase tracking-[2.02px] text-[var(--black-101010)]"
      >
        <span className="flex items-center gap-0.5">
          {label}
          {required && <span className="text-[11px] text-[var(--errorred-910a2d)]">*</span>}
        </span>
        <span className="text-[11px] font-normal normal-case text-[var(--text-muted)]">
          ({maxSizeLabel})
        </span>
      </label>
      <label
        htmlFor={inputId}
        className="flex h-[45px] w-full cursor-pointer items-center justify-between rounded-[3px] border border-[var(--bordergray-d5d5d5)] bg-[var(--white-ffffff)] px-2.5 text-[16px] text-[var(--text-muted)]"
      >
        <span className="truncate">{fileName || "Upload your files here..."}</span>
        <UploadIcon />
        <input
          id={inputId}
          type="file"
          className="sr-only"
          onChange={(e) => {
            setFileName(e.target.files?.[0]?.name || "");
            onChange?.(e);
          }}
        />
      </label>
    </div>
  );
}
