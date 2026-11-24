import {
  BreadcrumbHomeIcon,
  BreadcrumbSingleItem,
  BreadcrumbDivider,
  BreadcrumbLastLevelNoLink,
} from "../components/Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Breadcrumb navigation trail — Home » Level 1 » Level 2 » Current Page, using the » divider glyph. This story composes the individual pieces (BreadcrumbHomeIcon, BreadcrumbSingleItem, BreadcrumbDivider, BreadcrumbLastLevelNoLink) directly.",
      },
    },
  },
};

export const Trail = () => (
  <div className="flex items-center">
    <BreadcrumbHomeIcon />
    <BreadcrumbDivider />
    <BreadcrumbSingleItem text="Newsroom" />
    <BreadcrumbDivider />
    <BreadcrumbLastLevelNoLink text="Article title" />
  </div>
);
