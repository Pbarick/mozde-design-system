import { OneColumnLayout, TwoColumnLayout, FourColumnLayout } from "../components/Layout";

function Block({ label }) {
  return (
    <div className="flex h-24 items-center justify-center border border-dashed border-[var(--bordergray-d5d5d5)] text-[13px] text-[var(--text-muted)]">
      {label}
    </div>
  );
}

export default {
  title: "Foundations/Layout",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Generic page-layout wrappers — one, two and four column content grids.",
      },
    },
  },
};

export const OneColumn = {
  render: () => (
    <OneColumnLayout>
      <Block label="Content" />
    </OneColumnLayout>
  ),
};

export const TwoColumn = {
  render: () => <TwoColumnLayout main={<Block label="Main column" />} side={<Block label="Side column" />} />,
};

export const FourColumn = {
  render: () => (
    <FourColumnLayout
      columns={[<Block label="Col 1" />, <Block label="Col 2" />, <Block label="Col 3" />, <Block label="Col 4" />]}
    />
  ),
};
