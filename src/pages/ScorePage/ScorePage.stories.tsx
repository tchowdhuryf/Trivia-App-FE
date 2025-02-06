import type { Meta, StoryObj } from "@storybook/react";
import ScorePage from "../ScorePage/ScorePage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const meta: Meta<typeof ScorePage> = {
  title: "Pages/ScorePage",
  component: ScorePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ScorePage>;

export const Default: Story = {
  render: () => (
    <MemoryRouter
      initialEntries={[
        { pathname: "/score", state: { score: 8, totalQuestions: 10 } },
      ]}>
      <Routes>
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </MemoryRouter>
  ),
};
