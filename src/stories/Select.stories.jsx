import { useState } from "react";
import Select from "../components/Select";

const options = [
  { label: "Request Type One", value: "one", description: "Suspendisse eget tristique felis, a rutrum quam." },
  { label: "Request Type Two", value: "two", description: "Etiam dictum laoreet quam id aliquam." },
  { label: "Request Type Three", value: "three", description: "Nam egestas vel augue vitae porttitor." },
];

export default {
  title: "Components/Select",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Dropdown / form select — click to reveal a list of selectable options, each with an optional description.",
      },
    },
  },
};

export const Default = {
  render: (args) => {
    const [value, setValue] = useState(undefined);
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: { label: "Select dropdown label", placeholder: "Select an option", required: true, options },
};
