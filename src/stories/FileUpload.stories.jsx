import FileUpload from "../components/FileUpload";

export default {
  title: "Components/File Upload",
  component: FileUpload,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "File attachment picker — label with a max-size hint and a click-to-browse field.",
      },
    },
  },
};

export const Default = {
  args: { label: "Upload attachment", maxSizeLabel: "5MB Max", required: true },
};
