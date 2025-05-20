import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../app/components/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url", "file"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    value: "Input with value",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    value: "You can't edit this",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    placeholder: "Input with error",
    "aria-invalid": true,
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};

export const File: Story = {
  args: {
    type: "file",
  },
  render: (args) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
};