import type { Meta, StoryObj } from "@storybook/react";
import EditQuestionForm from "../EditQuestionForm/EditQuestionForm";

const meta: Meta<typeof EditQuestionForm> = {
  title: "Components/EditQuestionForm",
  component: EditQuestionForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof EditQuestionForm>;

export const Default: Story = {
  render: () => {
    return <EditQuestionForm />;
  },
};
