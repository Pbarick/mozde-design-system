import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Generic image card for gallery grids and compact content tiles — thumbnail, title, caption and an optional link.",
      },
    },
  },
};

export const Default = {
  args: {
    title: "Gallery Card Title",
    caption: "A short supporting line of copy describing this card's content.",
    href: "#",
  },
};

export const Grid = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card title="Gallery Card Title" caption="Short supporting copy goes here." href="#" />
      <Card title="Gallery Card Title" caption="Short supporting copy goes here." href="#" />
      <Card title="Gallery Card Title" caption="Short supporting copy goes here." href="#" />
    </div>
  ),
};
