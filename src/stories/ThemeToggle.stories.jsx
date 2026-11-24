import ThemeToggle from "../theme/ThemeToggle";

export default {
  title: "Components/Theme Toggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Light / Dark switch. Sets data-theme on <html>, remembers the choice in localStorage, and starts from the visitor's system preference the first time.",
      },
    },
  },
};

export const Default = { render: () => <ThemeToggle /> };
