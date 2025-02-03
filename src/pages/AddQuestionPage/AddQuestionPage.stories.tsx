import type { Meta, StoryObj } from "@storybook/react";
import AddQuestionPage from "../AddQuestionPage/AddQuestionPage";

const meta: Meta<typeof AddQuestionPage> = {
  title: "Pages/AddQuestionPage",
  component: AddQuestionPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AddQuestionPage>;

export const Default: Story = {
  render: () => <AddQuestionPage />,
};
