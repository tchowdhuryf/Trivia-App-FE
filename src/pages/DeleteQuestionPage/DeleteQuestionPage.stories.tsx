import type { Meta, StoryObj } from "@storybook/react";
import DeleteQuestionPage from "../DeleteQuestionPage/DeleteQuestionPage";

const meta: Meta<typeof DeleteQuestionPage> = {
  title: "Pages/DeleteQuestionPage",
  component: DeleteQuestionPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof DeleteQuestionPage>;

export const Default: Story = {
  render: () => <DeleteQuestionPage />,
};
