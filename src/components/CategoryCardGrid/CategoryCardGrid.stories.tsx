import type { Meta, StoryObj } from "@storybook/react";
import CategoryCardGrid from "./CategoryCardGrid";
import CategoryCard from "../CategoryCard/CategoryCard";
import categoryImageMap from "../../utils/categoryImageMap";

const meta: Meta<typeof CategoryCardGrid> = {
  title: "Components/CategoryCardGrid",
  component: CategoryCardGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },

};

export default meta;

type Story = StoryObj<typeof CategoryCardGrid>;

export const Default: Story = {
  render: () => (
      <div className="category-card-grid">
        {categoryImageMap.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            img={category.path}
            onClick={() => alert(`Clicked: ${category.title}`)}
          />
        ))}
      </div>
  ),
};
