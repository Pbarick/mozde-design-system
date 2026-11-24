import React from "react";

const DEFAULT_COLUMNS = [
  [
    "Accessory eCatalog",
    "Apttus",
    "Benefits Connect",
    "Business Process Reengineering",
    "Concur",
    "CPO Administration Website",
    "Customer Reimbursements",
    "CX360",
  ],
  [
    "Dealer & Field Contact Directory",
    "Dealer Contact Report",
    "Dealer Parts Available Locator",
    "E-Business Suite",
    "E-Vehicles Portal",
    "EMDCS",
    "Emergency Messaging System Portal",
    "ePort",
  ],
  [
    "FinancialView",
    "Full Circle Activity Report",
    "Genuine Accessories",
    "Global Electronic Parts Catalog",
    "ICL Systems",
    "Job Opportunities",
    "Marketing Knowledge Center",
    "Infomanager",
  ],
];

/**
 * "Your most frequently-used links" section — up to three columns of
 * quick-access link labels plus a "Modify" control. Pass `columns`
 * (array of string arrays) to supply your own link set.
 */
export default function FrequentlyUsedLinks({ columns = DEFAULT_COLUMNS }) {
  return (
    <section className="flex flex-col gap-4 items-center justify-center py-8 w-full bg-[var(--lightgray-f5f5f5)]">
      <div className="flex items-center justify-between w-[1110px] max-w-full">
        <h2 className="text-[30px] font-bold text-black uppercase tracking-[4px]">
          Your Most Frequently-Used Links
        </h2>
        <button className="flex gap-2 items-center p-2 text-sm font-bold text-black uppercase">
          Modify
        </button>
      </div>

      <div className="flex gap-3 items-start w-[1110px] max-w-full">
        {columns.map((column, i) => (
          <ul key={i} className="flex flex-col gap-4 items-start min-w-[310px] pl-2 pr-12 py-2">
            {column.map((label) => (
              <li
                key={label}
                className="text-[13px] font-bold text-[var(--black-101010)] uppercase pr-2"
              >
                {label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
