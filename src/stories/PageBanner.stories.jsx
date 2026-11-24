import PageBanner from "../components/PageBanner";

export default {
  title: "Components/Page Banner",
  component: PageBanner,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full-width hero strip for interior pages. Falls back to a neutral gradient placeholder when no image is supplied.",
      },
    },
  },
};

export const Default = { args: { height: 213 } };

export const WithTitleOverlay = {
  args: { height: 280, title: "Newsroom", overlay: true },
};
