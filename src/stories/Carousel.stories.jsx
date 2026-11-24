import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default {
  title: "Components/Carousel",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Generic carousel shell — prev/next arrows and pagination dots wrapping arbitrary slide content. For the homepage's date/headline hero, see HeroCarousel instead.",
      },
    },
  },
};

export const WithCards = {
  render: () => (
    <div className="max-w-[320px]">
      <Carousel>
        <Card title="Slide One" caption="First slide content." />
        <Card title="Slide Two" caption="Second slide content." />
        <Card title="Slide Three" caption="Third slide content." />
      </Carousel>
    </div>
  ),
};
