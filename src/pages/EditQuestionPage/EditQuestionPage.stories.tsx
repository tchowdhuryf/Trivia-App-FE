import type { Meta, StoryObj } from "@storybook/react";
import EditQuestionPage from "../EditQuestionPage/EditQuestionPage";

const meta: Meta<typeof EditQuestionPage> = {
  title: "Pages/EditQuestionPage",
  component: EditQuestionPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof EditQuestionPage>;

export const Default: Story = {
  render: () => <EditQuestionPage />,
};
