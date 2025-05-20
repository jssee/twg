import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../app/components/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "w-[200px] h-[20px]",
  },
};

export const Circle: Story = {
  args: {
    className: "w-12 h-12 rounded-full",
  },
};

export const Rectangle: Story = {
  args: {
    className: "w-[250px] h-[100px]",
  },
};

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3 w-[350px] p-4 border rounded-md">
      <Skeleton className="h-[125px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[75%]" />
      </div>
    </div>
  ),
};

export const TextBlock: Story = {
  render: () => (
    <div className="space-y-2 w-[350px]">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[75%]" />
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <div className="flex items-center space-x-4 w-[350px] p-4 border rounded-md">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
};