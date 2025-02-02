import type { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./NavMenu";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

const meta: Meta<typeof NavMenu> = {
  title: "Components/NavMenu",
  component: NavMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  args: {
    children: (
      <>
        <NavMenuItem href="https://www.google.com" label="Home" />
        <NavMenuItem href="https://www.google.com" label="Leaderboard" />
      </>
    ),
  },
  render: (args) => <NavMenu {...args} />,
};
