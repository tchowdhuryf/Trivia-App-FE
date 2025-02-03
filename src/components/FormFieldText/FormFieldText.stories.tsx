import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FormFieldText from "./FormFieldText";

const meta: Meta<typeof FormFieldText> = {
  title: "Components/FormFieldText",
  component: FormFieldText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof FormFieldText>;

export const Default: Story = {
  args: {
    label: "Sample Label",
    name: "sample",
    value: "",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <FormFieldText
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
