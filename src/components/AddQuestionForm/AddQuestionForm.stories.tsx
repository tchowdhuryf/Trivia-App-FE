import type { Meta, StoryObj } from "@storybook/react";
import AddQuestionForm from "../AddQuestionForm/AddQuestionForm";

const meta: Meta<typeof AddQuestionForm> = {
  title: "Components/AddQuestionForm",
  component: AddQuestionForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof AddQuestionForm>;

export const Default: Story = {

  render: () => {
    return <AddQuestionForm />;
  },
};
