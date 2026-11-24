import SearchBar from "../components/SearchBar";

export default {
  title: "Components/Search Bar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: { component: "Full-width site search bar with a filter dropdown and search button." },
    },
  },
};

export const Default = { args: { brandName: "Mozde" } };
