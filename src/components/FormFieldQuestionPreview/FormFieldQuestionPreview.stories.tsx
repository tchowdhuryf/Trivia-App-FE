import type { Meta, StoryObj } from "@storybook/react";
import FormFieldQuestionPreview from "./FormFieldQuestionPreview";

const meta: Meta<typeof FormFieldQuestionPreview> = {
  title: "Components/FormFieldQuestionPreview",
  component: FormFieldQuestionPreview,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    category: {
      description: "The category from which questions are retrieved.",
      control: { type: "text" },
    },
    onSelectQuestion: {
      description: "Callback function triggered when a question is selected.",
      action: "questionSelected",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormFieldQuestionPreview>;

export const Default: Story = {
  args: {
    category: "sports",
  },
  render: (args) => <FormFieldQuestionPreview {...args} />,
};
