import type { Meta, StoryObj } from "@storybook/react";
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent 
} from "../app/components/ui/tooltip";
import { Button } from "../app/components/ui/button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover Me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Basic tooltip message</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithSideOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover Me (Offset)</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        <p>Tooltip with increased offset</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Top: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>This tooltip appears on top</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Right: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>This tooltip appears on the right</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>This tooltip appears at the bottom</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Left: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>This tooltip appears on the left</p>
      </TooltipContent>
    </Tooltip>
  ),
};