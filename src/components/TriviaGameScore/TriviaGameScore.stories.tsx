import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TriviaGameScore from "../TriviaGameScore/TriviaGameScore";
import "../TriviaGameScore/TriviaGameScore.css";

const meta: Meta<typeof TriviaGameScore> = {
  title: "Components/TriviaGameScore",
  component: TriviaGameScore,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    score: { control: { type: "number", min: 0, step: 1 } },
  },
};

export default meta;

type Story = StoryObj<typeof TriviaGameScore>;

export const Default: Story = {
  args: {
    score: 5,
  },
  render: (args) => <TriviaGameScore {...args} />,
};
