import type { Meta, StoryObj } from "@storybook/react";
import TriviaQuestionCard from "./TriviaQuestionCard";
import TriviaOptionButtonsList from "../TriviaOptionButtonsList/TriviaOptionButtonsList";

const meta: Meta<typeof TriviaQuestionCard> = {
  title: "Components/TriviaQuestionCard",
  component: TriviaQuestionCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TriviaQuestionCard>;

export const Default: Story = {
  args: {
    category: "Science",
    question: "What is the chemical symbol for water?",
    options: (
      <TriviaOptionButtonsList
        options={[
          { option: "H2O", correctAnswer: "H2O", selectedAnswer: "", checkAnswer: false, onClick: () => {} },
          { option: "O2", correctAnswer: "H2O", selectedAnswer: "", checkAnswer: false, onClick: () => {} },
          { option: "CO2", correctAnswer: "H2O", selectedAnswer: "", checkAnswer: false, onClick: () => {} },
        ]}
        correctAnswer="H2O"
        selectedAnswer=""
        checkAnswer={false}
        onOptionClick={() => {}}
      />
    ),
  },
  render: (args) => <TriviaQuestionCard {...args} />,
};
