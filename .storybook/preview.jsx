import React from "react";
import { MemoryRouter } from "react-router-dom";

// Load the same global stylesheet (Tailwind) and the theme variables the app uses,
// so components look identical inside Storybook, in Light and in Dark.
import "../src/index.css";
import "../src/theme/theme.css";

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
    a11y: { test: "todo" },
    backgrounds: { disable: true },
  },

  // Toolbar switch: choose Light or Dark for every story.
  globalTypes: {
    theme: {
      description: "Light or Dark theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      document.documentElement.setAttribute("data-theme", theme);
      // Wraps every story in a router context, so any component that uses
      // react-router (Link, useLocation, useNavigate, etc.) renders fine
      // even though Storybook itself has no real app router.
      return (
        <MemoryRouter initialEntries={["/"]}>
          <Story />
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
