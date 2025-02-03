import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import FormContainer from "./FormContainer";

const meta: Meta<typeof FormContainer> = {
  title: "Components/FormContainer",
  component: FormContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof FormContainer>;

export const Default: Story = {
  args: {
    title: "Sample Form",
    statusMessage: "Please fill out the form.",
    buttonText: "Submit",
  },
  render: (args) => {
    const [statusMessage, setStatusMessage] = useState(args.statusMessage);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatusMessage("Form submitted successfully!");
    };

    return (
      <FormContainer
        {...args}
        statusMessage={statusMessage}
        onSubmit={handleSubmit}
        content={
          <input
            type="text"
            placeholder="Enter text"
            style={{ padding: "8px", width: "100%" }}
          />
        }
      />
    );
  },
};
