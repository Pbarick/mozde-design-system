import Sidebar, { SidebarNavItem, AccordionSidebarNav, FilterAccordion } from "../components/Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Full sidebar — heading, nav items, a filter toggle row and a stack of filter accordions, with a Clear All Filters action.",
      },
    },
  },
};

export const FullSidebar = { args: {} };

export const NavItemDefault = {
  render: (args) => <SidebarNavItem {...args} />,
  args: { label: "Nav item", active: false },
};

export const NavItemActive = {
  render: (args) => <SidebarNavItem {...args} />,
  args: { label: "Nav item", active: true },
};

export const Accordion = {
  name: "Nav Accordion — Closed",
  render: (args) => <AccordionSidebarNav {...args} />,
  args: { label: "Section", items: ["First link", "Second link", "Third link"], defaultOpen: false },
};

export const AccordionOpen = {
  name: "Nav Accordion — Open",
  render: (args) => <AccordionSidebarNav {...args} />,
  args: { label: "Section", items: ["First link", "Second link", "Third link"], defaultOpen: true },
};

export const FilterAccordionClosed = {
  name: "Filter Accordion — Closed",
  render: (args) => <FilterAccordion {...args} />,
  args: { heading: "Accordion Heading", defaultOpen: false },
};

export const FilterAccordionOpen = {
  name: "Filter Accordion — Open",
  render: (args) => <FilterAccordion {...args} />,
  args: { heading: "Accordion Heading", defaultOpen: true },
};
