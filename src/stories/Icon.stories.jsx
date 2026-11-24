import Icon, { iconNames } from "../components/Icon";

export default {
  title: "Foundations/Iconography",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The shared utility icon set — simple generic line icons used across buttons, links, forms and status rows. (Social-network brand marks are intentionally left out of this generic set; see SocialMediaGallery for that section, which uses plain handle/caption cards instead of brand logos.)",
      },
    },
  },
};

export const AllIcons = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 text-[var(--black-101010)] sm:grid-cols-9">
      {iconNames.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon name={name} size={24} />
          <span className="text-[11px] text-[var(--text-muted)]">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const SingleIcon = {
  render: (args) => <Icon {...args} />,
  args: { name: "search", size: 28 },
};
