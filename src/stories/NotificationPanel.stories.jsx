import NotificationPanel from "../components/NotificationPanel";

const items = {
  News: [
    { date: "Nov 15, 2023", category: "HR, Facilities & Admin", title: "Enhanced Employee Giving Benefits", read: false },
    { date: "Nov 14, 2023", category: "HR, Facilities & Admin", title: "2024 Project Management Education", read: false },
    { date: "Nov 06, 2023", category: "Retail Operations", title: "Second Quarter Earnings Report", read: true },
  ],
  "Field & Dealer Comms.": [
    { date: "Nov 15, 2023", category: "Retail Operations", title: "Incentive & Production Enhancements", read: false },
  ],
  Newswire: [
    { date: "Nov 13, 2023", category: "Connected Car News", title: "Tips For Preventing Car Sickness", read: false },
  ],
};

export default {
  title: "Components/Notification Panel",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Notification center panel — category tabs, a dismissible list of items, and a mark-as-read footer.",
      },
    },
  },
};

export const Default = { render: () => <NotificationPanel items={items} /> };
