import type { Meta, StoryObj } from "@storybook/react";
import PageTemplate from "../PageTemplate/PageTemplate";
import NavBar from "../NavBar/NavBar";
import NavMenuItem from "../NavMenuItem/NavMenuItem";
import NavMenu from "../NavMenu/NavMenu";

const meta: Meta<typeof PageTemplate> = {
  title: "Components/PageTemplate",
  component: PageTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof PageTemplate>;

export const Default: Story = {
  args: {
    navBar: (
      <NavBar
        navMenu={
          <NavMenu>
            <NavMenuItem href="https://www.google.com" label="Home" />
            <NavMenuItem href="https://www.google.com" label="Leaderboard" />
          </NavMenu>
        }></NavBar>
    ),
  },
  render: (args) => <PageTemplate {...args} />,
};
