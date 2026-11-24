import { TertiaryLink } from "../components/Link";

export default {
  title: "Components/Tertiary Link",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Lower-emphasis text link/button for inline actions like \"Download\" or \"See all\". Supports an optional leading icon and underline.",
      },
    },
  },
};

export const Default = {
  render: (args) => <TertiaryLink {...args} />,
  args: { children: "Link text" },
};

export const Underlined = {
  render: (args) => <TertiaryLink {...args} />,
  args: { children: "Link text", underline: true },
};

export const WithIcon = {
  render: (args) => <TertiaryLink {...args} />,
  args: { children: "Link text", icon: true },
};

export const WithIconUnderlined = {
  render: (args) => <TertiaryLink {...args} />,
  args: { children: "Link text", icon: true, underline: true },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <TertiaryLink>Link text</TertiaryLink>
      <TertiaryLink underline>Link text</TertiaryLink>
      <TertiaryLink icon>Link text</TertiaryLink>
      <TertiaryLink icon underline>Link text</TertiaryLink>
    </div>
  ),
};
