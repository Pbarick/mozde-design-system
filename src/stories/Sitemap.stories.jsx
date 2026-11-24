import Sitemap from "../components/Sitemap";

const sections = [
  { heading: "Company", links: [{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }, { label: "Newsroom", href: "#" }] },
  { heading: "Brand & Products", links: [{ label: "Model A", href: "#" }, { label: "Model B", href: "#" }, { label: "Model C", href: "#" }] },
  { heading: "Dealer Resources", links: [{ label: "Dealer Portal", href: "#" }, { label: "Training", href: "#" }] },
  { heading: "Legal", links: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] },
];

export default {
  title: "Components/Sitemap",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: { component: "Sitemap page — link columns grouped by section." },
    },
  },
};

export const Default = { render: () => <Sitemap sections={sections} /> };
