import { PrimaryButton, SecondaryButton } from "../components/Button";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Primary and secondary call-to-action buttons. Primary is a solid fill for the main action in a section; secondary is outlined for less prominent actions alongside it.",
      },
    },
  },
};

export const Primary = {
  render: (args) => <PrimaryButton {...args} />,
  args: { children: "Label", disabled: false },
};

export const PrimaryDisabled = {
  render: (args) => <PrimaryButton {...args} />,
  args: { children: "Label", disabled: true },
};

export const Secondary = {
  render: (args) => <SecondaryButton {...args} />,
  args: { children: "Label", disabled: false },
};

export const SecondaryDisabled = {
  render: (args) => <SecondaryButton {...args} />,
  args: { children: "Label", disabled: true },
};

export const BothTogether = {
  render: () => (
    <div className="flex gap-4">
      <PrimaryButton>Primary Action</PrimaryButton>
      <SecondaryButton>Secondary Action</SecondaryButton>
    </div>
  ),
};
