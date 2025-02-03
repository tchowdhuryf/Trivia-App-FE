import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import QuestionFields from "../QuestionFields/QuestionFields";

const meta: Meta<typeof QuestionFields> = {
  title: "Components/QuestionFields",
  component: QuestionFields,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof QuestionFields>;

export const Default: Story = {
  args: {
    formData: {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
    handleChange: () => {},
  },
  render: (args) => {
    const [formData, setFormData] = useState({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <QuestionFields
        {...args}
        formData={formData}
        handleChange={handleChange}
      />
    );
  },
};
