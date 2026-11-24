import React, { useId } from "react";

const W = 640;
const H = 220;
const PAD = { top: 10, right: 10, bottom: 28, left: 40 };
const plotW = W - PAD.left - PAD.right;
const plotH = H - PAD.top - PAD.bottom;

function scales(values, labels) {
  const max = Math.max(1, ...values.flat());
  const niceMax = Math.ceil(max / 100) * 100 || max;
  const x = (i) => PAD.left + (i / Math.max(1, labels.length - 1)) * plotW;
  const y = (v) => PAD.top + plotH - (v / niceMax) * plotH;
  return { x, y, niceMax };
}

function Axes({ labels, niceMax, y, ticks = 4 }) {
  const step = niceMax / ticks;
  return (
    <>
      {Array.from({ length: ticks + 1 }, (_, i) => i * step).map((v) => (
        <g key={v}>
          <line
            x1={PAD.left}
            x2={W - PAD.right}
            y1={y(v)}
            y2={y(v)}
            stroke="var(--bordergray-d5d5d5)"
            strokeWidth="1"
          />
          <text x={PAD.left - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="var(--text-muted)">
            {Math.round(v)}
          </text>
        </g>
      ))}
      <line
        x1={PAD.left}
        x2={W - PAD.right}
        y1={H - PAD.bottom}
        y2={H - PAD.bottom}
        stroke="var(--bordergray-d5d5d5)"
      />
      {labels.map((l, i) => (
        <text
          key={i}
          x={PAD.left + (i / Math.max(1, labels.length - 1)) * plotW}
          y={H - PAD.bottom + 16}
          textAnchor="middle"
          fontSize="11"
          fill="var(--text-muted)"
        >
          {l}
        </text>
      ))}
    </>
  );
}

/** Multi-series line chart with point markers. */
export function LineChart({ labels = [], series = [], className = "" }) {
  const { x, y, niceMax } = scales(
    series.map((s) => s.data),
    labels
  );
  const colors = ["var(--black-101010)", "var(--text-muted)", "var(--s6-c3c3c3)"];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={`w-full max-w-[${W}px] ${className}`} role="img" aria-label="Line chart">
      <Axes labels={labels} niceMax={niceMax} y={y} />
      {series.map((s, si) => (
        <g key={s.name || si}>
          <polyline
            fill="none"
            stroke={colors[si % colors.length]}
            strokeWidth="1.5"
            points={s.data.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
          />
          {s.data.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="var(--white-ffffff)" stroke={colors[si % colors.length]} strokeWidth="1.5" />
          ))}
        </g>
      ))}
    </svg>
  );
}

/** Filled area chart (single or layered series). */
export function AreaChart({ labels = [], series = [], className = "" }) {
  const { x, y, niceMax } = scales(
    series.map((s) => s.data),
    labels
  );
  const fills = ["var(--black-101010)", "var(--bordergray-d5d5d5)"];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={`w-full max-w-[${W}px] ${className}`} role="img" aria-label="Area chart">
      <Axes labels={labels} niceMax={niceMax} y={y} />
      {series.map((s, si) => {
        const top = s.data.map((v, i) => `${x(i)},${y(v)}`).join(" L ");
        const d = `M ${x(0)},${y(0)} L ${top} L ${x(s.data.length - 1)},${y(0)} Z`;
        return <path key={s.name || si} d={d} fill={fills[si % fills.length]} opacity={si === 0 ? 0.9 : 0.5} />;
      })}
    </svg>
  );
}

const sliceColors = ["#101010", "#515151", "#8a8a8a", "#c3c3c3", "#e7e7e7"];

/** Donut / pie chart. Pass `data` as [{ label, value }]. */
export function DonutChart({ data = [], size = 240, className = "" }) {
  const id = useId();
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const r = size / 2 - 10;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} role="img" aria-label="Donut chart">
        <g transform={`rotate(-90 ${cx} ${cy})`}>
          {data.map((d, i) => {
            const frac = d.value / total;
            const dash = frac * circumference;
            const circle = (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={sliceColors[i % sliceColors.length]}
                strokeWidth={r * 0.4}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
              />
            );
            offset += dash;
            return circle;
          })}
        </g>
      </svg>
      <ul className="flex flex-wrap justify-center gap-3">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-1.5 text-[12px] text-[var(--black-101010)]">
            <span
              className="size-2.5 rounded-full"
              style={{ background: sliceColors[i % sliceColors.length] }}
              aria-hidden="true"
            />
            {d.label} ({d.value})
          </li>
        ))}
      </ul>
    </div>
  );
}
