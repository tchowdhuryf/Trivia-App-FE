import type { Meta, StoryObj } from "@storybook/react";
import NavMenuItem from "./NavMenuItem";

const meta: Meta<typeof NavMenuItem> = {
  title: "Components/NavMenuItem",
  component: NavMenuItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof NavMenuItem>;

export const Default: Story = {
  args: { href: "www.google.com", label: "Google" },
  render: (args) => <NavMenuItem {...args} />,
};
