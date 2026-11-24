import Footer from "../components/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Full site footer — dark background, columns of links (1 on mobile, 2 from md, 4 from lg), an IT support card, social icons and the legal bottom bar.",
      },
    },
  },
  argTypes: {
    brandName: { control: "text", description: "Used in link labels, the IT support card, and the copyright line." },
    year: { control: "number", description: "Copyright year shown in the bottom bar." },
  },
};

export const Default = { args: { brandName: "Mozde" } };
