import type { Meta, StoryObj } from "@storybook/react";
import TriviaOptionButtonsList from "./TriviaOptionButtonsList";

const meta: Meta<typeof TriviaOptionButtonsList> = {
  title: "Components/TriviaOptionButtonsList",
  component: TriviaOptionButtonsList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TriviaOptionButtonsList>;

export const Default: Story = {
  args: {
    options: [
      { option: "H2O", correctAnswer: "H2O", selectedAnswer: "", checkAnswer: false, onClick: () => {} },
      { option: "O2", correctAnswer: "H2O", selectedAnswer: "", checkAnswer: false, onClick: () => {} },
      { option: "CO2", correctAnswer: "H2O", selectedAnswer: "", checkAnswer: false, onClick: () => {} },
    ],
    correctAnswer: "H2O",
    selectedAnswer: "",
    checkAnswer: false,
    onOptionClick: (option) => alert(`Option selected: ${option}`),
  },
  render: (args) => <TriviaOptionButtonsList {...args} />,
};
