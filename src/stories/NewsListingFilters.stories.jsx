import NewsListingFilters from "../components/NewsListingFilters";

export default {
  title: "Components/News Listing Filters",
  component: NewsListingFilters,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Filter sidebar for the News listing page — collapsible groups of checkboxes (one searchable), with a Clear All Filters action once anything is selected.",
      },
    },
  },
  argTypes: {
    groups: { description: "Array of { key, heading, searchable?, options: [{ label, value, count }] }." },
    onFilterChange: { description: "Called with the combined selection whenever a checkbox is toggled or filters are cleared." },
    initialSelected: { description: "Optional { groupKey: [values] } map to pre-check some options on mount." },
  },
};

const groups = [
  {
    key: "date",
    heading: "All Dates",
    options: [
      { label: "2025", value: "2025", count: 4 },
      { label: "2024", value: "2024", count: 4 },
      { label: "2023", value: "2023", count: 4 },
    ],
  },
  {
    key: "category",
    heading: "News Categories",
    searchable: true,
    options: [
      { label: "Awards & Recognition", value: "awards", count: 4 },
      { label: "Events", value: "events", count: 4 },
      { label: "Executive Messages", value: "executive-messages", count: 4 },
      { label: "Training", value: "training", count: 4 },
    ],
  },
  {
    key: "department",
    heading: "Departments",
    options: [
      { label: "Executive Team", value: "executive-team", count: 4 },
      { label: "Marketing, PR & CEC", value: "marketing", count: 4 },
    ],
  },
];

export const Default = {
  args: { groups, onFilterChange: (selection) => console.log("Filters changed", selection) },
};

export const SingleGroup = {
  args: { groups: [groups[0]], onFilterChange: () => {} },
};

export const WithSearchBox = {
  args: { groups: [groups[1]], onFilterChange: () => {} },
};

export const WithSelections = {
  name: "With selections applied",
  args: {
    groups,
    onFilterChange: () => {},
    initialSelected: { date: ["2025"], category: ["events"] },
  },
};
