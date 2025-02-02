import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import NavMenu from "../NavMenu/NavMenu";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    navMenu: (
      <>
        <NavMenu>
          <NavMenuItem href="https://www.google.com" label="Home" />
          <NavMenuItem href="https://www.google.com" label="Leaderboard" />
        </NavMenu>
      </>
    ),
  },
  render: (args) => <NavBar {...args} />,
};
