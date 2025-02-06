import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TriviaOptionButton from "../TriviaOptionButton/TriviaOptionButton";
import "../TriviaOptionButton/TriviaOptionButton.css";
import { useState } from "react";

const meta: Meta<typeof TriviaOptionButton> = {
  title: "Components/TriviaOptionButton",
  component: TriviaOptionButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    option: { control: "text" },
    correctAnswer: { control: "text" },
    selectedAnswer: { control: "text" },
    checkAnswer: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof TriviaOptionButton>;

export const Default: Story = {
  args: {
    option: "A",
    correctAnswer: "B",
    selectedAnswer: "",
    checkAnswer: false,
  },
  render: (args) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleClick = () => {
      setSelectedAnswer(args.option);
      action("Answer Selected")(args.option);
    };

    return (
      <TriviaOptionButton
        {...args}
        selectedAnswer={selectedAnswer}
        onClick={handleClick}
      />
    );
  },
};
