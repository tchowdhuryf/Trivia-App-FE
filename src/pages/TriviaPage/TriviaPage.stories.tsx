import type { Meta, StoryObj } from "@storybook/react";
import TriviaPage from "../TriviaPage/TriviaPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "../TriviaPage/TriviaPage.css";

const meta: Meta<typeof TriviaPage> = {
  title: "Pages/TriviaPage",
  component: TriviaPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof TriviaPage>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/trivia"]}>
      <Routes>
        <Route path="/trivia" element={<TriviaPage />} />
      </Routes>
    </MemoryRouter>
  ),
};
