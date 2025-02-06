import type { Meta, StoryObj } from "@storybook/react";
import TriviaQuestion from "../TriviaQuestion/TriviaQuestion";

const meta: Meta<typeof TriviaQuestion> = {
  title: "Components/TriviaQuestion",
  component: TriviaQuestion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    question: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof TriviaQuestion>;

export const Default: Story = {
  args: {
    question: "What is the capital of France?",
  },
  render: (args) => <TriviaQuestion {...args} />,
};
