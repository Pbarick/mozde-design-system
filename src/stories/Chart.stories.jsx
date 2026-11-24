import { LineChart, AreaChart, DonutChart } from "../components/Chart";

const labels = Array.from({ length: 12 }, (_, i) => String(i));
const seriesA = [550, 650, 90, 560, 230, 350, 130, 690, 430, 260, 60, 660];
const seriesB = [600, 580, 280, 220, 400, 380, 150, 170, 410, 280, 380, 90];

export default {
  title: "Components/Chart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Lightweight, dependency-free chart primitives — line, area and donut — in the design system's grayscale palette.",
      },
    },
  },
};

export const Line = {
  render: () => (
    <LineChart labels={labels} series={[{ name: "A", data: seriesA }, { name: "B", data: seriesB }]} />
  ),
};

export const Area = {
  render: () => (
    <AreaChart labels={labels} series={[{ name: "A", data: seriesA }, { name: "B", data: seriesB }]} />
  ),
};

export const Donut = {
  render: () => (
    <DonutChart
      data={[
        { label: "Segment A", value: 644 },
        { label: "Segment B", value: 355 },
        { label: "Segment C", value: 96 },
        { label: "Segment D", value: 637 },
        { label: "Segment E", value: 917 },
      ]}
    />
  ),
};
