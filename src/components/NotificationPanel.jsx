import React, { useState } from "react";
import Toggle from "./Toggle";
import Icon from "./Icon";

/**
 * Notification center panel — "get all" toggle, category tabs, a scrollable
 * list of dismissible items, and a "mark as read" footer. Pass `tabs`
 * (array of tab names) and `items` keyed by tab name:
 * { date, category, title, read }.
 */
export default function NotificationPanel({
  tabs = ["News", "Field & Dealer Comms.", "Newswire"],
  items = {},
  onClearAll,
  onMarkAllRead,
  className = "",
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [allOn, setAllOn] = useState(true);
  const list = items[activeTab] || [];

  return (
    <div className={`flex w-[320px] max-w-full flex-col border border-[var(--bordergray-d5d5d5)] bg-[var(--white-ffffff)] ${className}`}>
      <div className="flex items-center justify-between gap-2 bg-[var(--lightgray-f5f5f5)] px-3 py-2.5">
        <p className="text-[13px] text-[var(--s9-515151)]">Get all notifications</p>
        <Toggle label="" checked={allOn} onChange={() => setAllOn((v) => !v)} />
      </div>

      <div role="tablist" className="flex items-start justify-between border-b border-[var(--bordergray-d5d5d5)] px-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={tab === activeTab}
            onClick={() => setActiveTab(tab)}
            className={`px-2.5 py-2.5 text-[13px] font-bold uppercase tracking-[2px] ${
              tab === activeTab
                ? "border-b-2 border-[var(--black-101010)] text-[var(--black-101010)]"
                : "text-[var(--text-muted)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex max-h-[360px] flex-col overflow-y-auto">
        <div className="flex justify-end px-3 pt-3">
          <button
            type="button"
            onClick={onClearAll}
            className="text-[12px] font-bold uppercase text-[var(--black-101010)]"
          >
            Clear all
          </button>
        </div>
        {list.map((item, i) => (
          <div key={i} className="flex items-start gap-2 border-t border-[var(--lightgray-f5f5f5)] px-3 py-3 first:border-t-0">
            <span
              className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                item.read ? "bg-[var(--bordergray-d5d5d5)]" : "bg-[var(--errorred-910a2d)]"
              }`}
              aria-hidden="true"
            />
            <div className="flex-1">
              <p className="text-[12px] text-[var(--text-muted)]">
                {item.date} | {item.category}
              </p>
              <p className="text-[13px] font-bold uppercase text-[var(--black-101010)]">{item.title}</p>
            </div>
            <Icon name="close" size={14} className="mt-1 shrink-0 text-[var(--text-muted)]" />
          </div>
        ))}
        {list.length === 0 && (
          <p className="px-3 py-6 text-center text-[13px] text-[var(--text-muted)]">No notifications</p>
        )}
      </div>

      <div className="flex justify-center border-t border-[var(--bordergray-d5d5d5)] py-3">
        <button type="button" onClick={onMarkAllRead} className="text-[13px] font-bold uppercase tracking-[2px] text-[var(--black-101010)]">
          Mark as Read
        </button>
      </div>
    </div>
  );
}
