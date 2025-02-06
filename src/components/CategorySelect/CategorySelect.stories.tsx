import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import CategorySelect from "../CategorySelect/CategorySelect";

const meta: Meta<typeof CategorySelect> = {
  title: "Components/CategorySelect",
  component: CategorySelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CategorySelect>;

export const Default: Story = {
  args: {
    value: "",
    name: "category",
  },
  render: function RenderCategorySelect(args) {
    const [selectedCategory, setSelectedCategory] = useState(args.value);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(e.target.value);
      action("Category changed")(e.target.value);
    };

    return (
      <CategorySelect
        {...args}
        value={selectedCategory}
        onChange={handleChange}
      />
    );
  },
};
