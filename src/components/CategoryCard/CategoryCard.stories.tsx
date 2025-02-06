import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import CategoryCard from "../CategoryCard/CategoryCard";

const meta: Meta<typeof CategoryCard> = {
  title: "Components/CategoryCard",
  component: CategoryCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CategoryCard>;

export const Default: Story = {
  args: {
    title: "Science",
    img: "https://placehold.co/100x100",
  },
  render: (args) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      action("Category clicked")(args.title, event);
    };

    return <CategoryCard {...args} onClick={handleClick} />;
  },
};
