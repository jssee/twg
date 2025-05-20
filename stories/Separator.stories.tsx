import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../app/components/ui/separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  render: (args) => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Header</h4>
        <p className="text-sm text-muted-foreground">Description text</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Item 1</div>
        <Separator orientation="vertical" />
        <div>Item 2</div>
        <Separator orientation="vertical" />
        <div>Item 3</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    decorative: true,
  },
  render: (args) => (
    <div className="flex h-24 items-center space-x-4">
      <div>Side A</div>
      <Separator {...args} className="h-full" />
      <div>Side B</div>
    </div>
  ),
};