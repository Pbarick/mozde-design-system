import TextInput from "../components/TextInput";

export default {
  title: "Components/Text Input",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Labeled text input field — default, active (focus), disabled and invalid states, with an optional required marker and helper/error text below.",
      },
    },
  },
};

export const Default = {
  args: { label: "Input label", placeholder: "Input text", required: true, helperText: "Informational text" },
};

export const Disabled = {
  args: { label: "Input label", placeholder: "Input text", required: true, disabled: true, helperText: "Informational text" },
};

export const Invalid = {
  args: {
    label: "Input label",
    placeholder: "Input text",
    required: true,
    invalid: true,
    helperText: "Informational text",
  },
};
