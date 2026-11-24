import HomePage from "../HomePage";
import ArticlePage from "../ArticlePage";
import NewsListingPage from "../NewsListingPage";
import TwoColumnPage from "../TwoColumnPage";

export default {
  title: "Pages/Templates",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full page templates, assembled from the component library — the real screens recruiters and stakeholders will recognize from the live app.",
      },
    },
  },
};

export const Home = { render: () => <HomePage brandName="Mozde" /> };

export const Article = { render: () => <ArticlePage brandName="Mozde" /> };

export const NewsListing = {
  render: (args) => <NewsListingPage {...args} />,
  args: { brandName: "Mozde", pageTitle: "Mozde Newsroom" },
};

export const TwoColumn = { render: () => <TwoColumnPage brandName="Mozde" /> };
