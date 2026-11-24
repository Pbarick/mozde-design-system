import Header, { HeaderTopNav } from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Main site header — dark bar with logo, primary navigation and account controls. Switches between a signed-in state (notifications, search, account) and a signed-out state (Sign In button). Collapses into a hamburger menu below the xl breakpoint.",
      },
    },
  },
  argTypes: {
    brandName: { control: "text", description: "Brand wordmark shown on the left." },
    navItems: { control: "object", description: "Primary nav labels, left to right." },
    isLoggedIn: {
      control: "boolean",
      description: "Shows the notification/search/account icons when true, a Sign In button when false.",
    },
  },
};

export const Default = {
  args: { brandName: "Mozde", isLoggedIn: true },
};

export const LoggedOut = {
  args: { brandName: "Mozde", isLoggedIn: false },
};

export const WithTopNav = {
  render: (args) => (
    <>
      <HeaderTopNav />
      <Header {...args} />
    </>
  ),
  args: { brandName: "Mozde", isLoggedIn: true },
};
