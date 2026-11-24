import React from "react";

/**
 * Data table — zebra-striped rows, bold header row. Pass `columns`
 * (array of { key, label }) and `rows` (array of objects keyed by column).
 */
export default function Table({ columns = [], rows = [], className = "" }) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full min-w-[600px] border-collapse text-left">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="bg-[var(--white-ffffff)] p-3 text-[15px] font-bold text-[var(--black-101010)]"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-[var(--lightgray-f5f5f5)]" : "bg-[var(--white-ffffff)]"}>
              {columns.map((col) => (
                <td key={col.key} className="p-3 text-center text-[15px] text-[var(--black-101010)]">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
