import BackToTop from "../components/BackToTop";

export default {
  title: "Components/Back To Top",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Floating button that appears after scrolling and smoothly scrolls the page back to the top. (Forced visible here for the story — normally hidden until you scroll.)",
      },
    },
  },
};

export const Default = {
  render: () => (
    <div className="relative h-[200px] w-full border border-dashed border-[var(--bordergray-d5d5d5)]">
      <p className="p-4 text-[13px] text-[var(--text-muted)]">Scroll area placeholder</p>
      <BackToTop threshold={-1} className="!absolute" />
    </div>
  ),
};
