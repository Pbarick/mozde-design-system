import { Heading, BodyText, TextLink, ListItem, Alert } from "../components/Typography";

export default {
  title: "Foundations/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The full type scale — headings H1–H6, body text, link variants, list items and inline alert banners.",
      },
    },
  },
};

export const Headings = {
  render: () => (
    <div className="flex flex-col gap-4">
      {[1, 2, 3, 4, 5, 6].map((lvl) => (
        <Heading key={lvl} level={lvl}>
          Heading Text H{lvl}
        </Heading>
      ))}
    </div>
  ),
};

export const Body = {
  render: () => (
    <div className="flex max-w-[600px] flex-col gap-4">
      <BodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </BodyText>
      <BodyText muted>
        Muted body text, used for secondary or de-emphasized copy alongside primary content.
      </BodyText>
    </div>
  ),
};

export const Links = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <TextLink variant="default">Text Link — Default</TextLink>
      <TextLink variant="muted">Text Link — Muted</TextLink>
      <TextLink variant="small">Text Link — Small</TextLink>
      <TextLink variant="default" underline>
        Text Link — Underlined
      </TextLink>
      <div className="bg-[var(--darkgray-2b2b2b)] p-3">
        <TextLink variant="footer">Footer Link</TextLink>
      </div>
    </div>
  ),
};

export const List = {
  render: () => (
    <ul className="flex flex-col gap-2">
      <ListItem>Legal, Audit &amp; Govt Information</ListItem>
      <ListItem>Legal, Audit &amp; Govt Information</ListItem>
      <ListItem>Legal, Audit &amp; Govt Information</ListItem>
    </ul>
  ),
};

export const Alerts = {
  render: () => (
    <div className="flex max-w-[500px] flex-col gap-3">
      <Alert type="info" title="Success">
        Thanks for contacting us. We'll get back to you as soon as possible.
      </Alert>
      <Alert type="warning" title="Warning">
        Oops! You need to pay attention.
      </Alert>
      <Alert type="error" title="Submission Unsuccessful">
        We'll get back to you as soon as possible.
      </Alert>
    </div>
  ),
};
