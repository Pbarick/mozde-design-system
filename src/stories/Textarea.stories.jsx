import Textarea from "../components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Labeled multi-line text field, e.g. for a comment or message.",
      },
    },
  },
};

export const Default = {
  args: { label: "Comment", placeholder: "Upload your files here...", required: true },
};
