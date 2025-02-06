import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TriviaNextButton from "../TriviaNextButton/TriviaNextButton";
import "../TriviaNextButton/TriviaNextButton.css"; // Import styles for proper display

const meta: Meta<typeof TriviaNextButton> = {
  title: "Components/TriviaNextButton",
  component: TriviaNextButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof TriviaNextButton>;

/**
 * Default story for `TriviaNextButton`.
 * Renders a button with `Next` text.
 */
export const Default: Story = {

  render: (args) => (
    <TriviaNextButton {...args} onClick={action("Next button clicked")} />
  ),
};

