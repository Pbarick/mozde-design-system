import { useState } from "react";
import Toggle from "../components/Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Binary on/off switch, used for settings like \"Expand all sections\".",
      },
    },
  },
};

export const Off = { args: { checked: false } };

export const On = { args: { checked: true } };

export const Interactive = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={() => setChecked((c) => !c)} />;
  },
  args: { label: "Expand all sections" },
};
