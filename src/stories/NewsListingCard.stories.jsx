import NewsListingCard from "../components/NewsListingCard";

export default {
  title: "Components/News Listing Card",
  component: NewsListingCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Large news/article listing card used on the News listing page — date, department tag, title, snippet, and an optional corner label. Pass href to make the whole card a link.",
      },
    },
  },
  argTypes: {
    date: { control: "text" },
    department: { control: "text" },
    title: { control: "text" },
    snippet: { control: "text" },
    cornerLabel: { control: "text" },
    href: { control: "text" },
  },
};

const base = {
  date: "Jan 26, 2025",
  department: "Marketing, PR & CEC",
  title: "New model launch: design walkthrough",
  snippet:
    "As our newest model rollout continues, our interior design lead examines what gives the vehicle its distinct presence.",
  cornerLabel: "All Employees",
};

export const Default = { args: base };

export const AsLink = { args: { ...base, href: "#" } };

export const WithoutCornerLabel = { args: { ...base, cornerLabel: "" } };

export const LongContent = {
  args: {
    ...base,
    title: "A much longer headline that needs to wrap across more than one line to test the card layout",
    snippet:
      "A longer summary that runs across several lines, so you can check how the card handles extra text without breaking the layout or overlapping the corner label.",
  },
};
