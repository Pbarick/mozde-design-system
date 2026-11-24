import { useState } from "react";
import { Radio, RadioGroup } from "../components/Radio";

export default {
  title: "Components/Radio",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Single-select radio control with default, hover, selected and disabled states, plus a RadioGroup helper for a set of mutually-exclusive options.",
      },
    },
  },
};

export const Deselected = { render: (args) => <Radio {...args} />, args: { checked: false } };

export const Selected = { render: (args) => <Radio {...args} />, args: { checked: true } };

export const Disabled = {
  render: (args) => <Radio {...args} />,
  args: { checked: false, disabled: true },
};

export const Group = {
  render: () => {
    const [value, setValue] = useState("b");
    return (
      <RadioGroup
        name="demo-group"
        value={value}
        onChange={setValue}
        options={[
          { label: "Radio button label", value: "a" },
          { label: "Radio button label", value: "b" },
          { label: "Radio button label", value: "c", disabled: true },
        ]}
      />
    );
  },
};
