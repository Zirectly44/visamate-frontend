import type { Meta, StoryObj } from "@storybook/react";

import CountryCard from "../components/UI/CountryCard/CountryCard";

const meta = {
  title: "CountryCard",
  component: CountryCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    price: {
      control: {
        type: "range",
        min: 0,
        max: 1000,
        step: 1,
      },
    },
    countryName: {
      control: {
        type: "text",
      },
    },
    url: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof CountryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    countryName: "United States of America",
    price: 100,
    url: "https://strapi-aws-s3-visamate.s3.ap-southeast-2.amazonaws.com/tajmahal_b6d6de7844.jpeg",
  },
};
