import type { Meta, StoryObj } from "@storybook/react";
import { ShineBorder } from "../app/components/ui/shine-border";

const meta: Meta<typeof ShineBorder> = {
  title: "Components/ShineBorder",
  component: ShineBorder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    borderWidth: {
      control: { type: "range", min: 0.5, max: 5, step: 0.5 },
    },
    duration: {
      control: { type: "range", min: 5, max: 40, step: 5 },
    },
    shineColor: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShineBorder>;

// We need to wrap the ShineBorder in a container since it's designed to be 
// absolutely positioned inside a parent element
const ShineBorderWrapper = (props: React.ComponentProps<typeof ShineBorder>) => (
  <div className="relative border border-transparent rounded-lg h-64 w-64 flex items-center justify-center">
    <ShineBorder {...props} />
    <div className="relative z-10 bg-background/50 p-6 rounded-md text-center">
      <h3 className="text-lg font-semibold">Shine Border Effect</h3>
      <p className="text-sm text-muted-foreground mt-2">
        An animated border that adds a colorful glow effect
      </p>
    </div>
  </div>
);

export const Default: Story = {
  render: (args) => <ShineBorderWrapper {...args} />,
};

export const ThickBorder: Story = {
  render: (args) => <ShineBorderWrapper {...args} />,
  args: {
    borderWidth: 3,
  },
};

export const SlowAnimation: Story = {
  render: (args) => <ShineBorderWrapper {...args} />,
  args: {
    duration: 40,
  },
};

export const FastAnimation: Story = {
  render: (args) => <ShineBorderWrapper {...args} />,
  args: {
    duration: 10,
  },
};

export const SingleColor: Story = {
  render: (args) => <ShineBorderWrapper {...args} />,
  args: {
    shineColor: "#4583FF",
  },
};

export const CustomColors: Story = {
  render: (args) => <ShineBorderWrapper {...args} />,
  args: {
    shineColor: ["#FF5733", "#33FF57", "#3357FF", "#F733FF"],
  },
};

export const Card: Story = {
  render: (args) => (
    <div className="relative rounded-xl border overflow-hidden bg-card p-8 w-80">
      <ShineBorder {...args} />
      <h3 className="text-xl font-bold mb-2">Premium Card</h3>
      <p className="text-muted-foreground">This card features a shining border that adds a premium feel to your UI.</p>
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Learn More
        </button>
      </div>
    </div>
  ),
  args: {
    borderWidth: 1.5,
    duration: 15,
    shineColor: ["#F214D0", "#4583FF", "#8E39E6", "#1764FF"],
  },
};