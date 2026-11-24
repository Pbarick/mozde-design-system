import SearchResultItem from "../components/SearchResult";

export default {
  title: "Components/Search Result",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: { component: "A single row on the search results page." },
    },
  },
};

export const Default = {
  render: () => (
    <div className="flex max-w-[420px] flex-col gap-3">
      <SearchResultItem
        heading="Search Results Heading"
        snippet="Mozde eMDCS Tutorial — Canada Shipment Tracking"
        secondaryLabel="Text Link — Secondary Nav"
      />
      <SearchResultItem
        heading="Search Results Heading"
        snippet="Mozde eMDCS Tutorial — Canada Shipment Tracking"
        secondaryLabel="Text Link — Secondary Nav"
      />
    </div>
  ),
};
