import type { Meta, StoryObj } from "@storybook/react";
import DeleteQuestionForm from "../DeleteQuestionForm/DeleteQuestionForm";

const meta: Meta<typeof DeleteQuestionForm> = {
  title: "Components/DeleteQuestionForm",
  component: DeleteQuestionForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof DeleteQuestionForm>;

export const Default: Story = {

  render: () => {
    return <DeleteQuestionForm />;
  },
};
