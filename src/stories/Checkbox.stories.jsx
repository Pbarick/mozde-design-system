import { useState } from "react";
import Checkbox from "../components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Standard checkbox — multi-select control with default, hover, checked and disabled states.",
      },
    },
  },
};

export const Unchecked = { args: { checked: false } };

export const Checked = { args: { checked: true } };

export const Disabled = { args: { checked: false, disabled: true } };

export const Interactive = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={() => setChecked((c) => !c)} />;
  },
  args: { label: "Check box label" },
};
