import Table from "../components/Table";

const columns = Array.from({ length: 4 }, (_, i) => ({ key: `c${i}`, label: "Table Heading" }));
const rows = Array.from({ length: 6 }, () =>
  Object.fromEntries(columns.map((c) => [c.key, "Cell Content"]))
);

export default {
  title: "Components/Table",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Zebra-striped data table with a bold header row.",
      },
    },
  },
};

export const Default = {
  render: () => <Table columns={columns} rows={rows} />,
};
