import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from "../app/components/ui/collapsible";
import { Button } from "../app/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Basic: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Collapsible Section
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This content is always visible
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            <p>This content is collapsible and animates when toggled.</p>
            <p className="mt-2">You can add any content here that you want to hide or show.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const WithCard: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] border rounded-md p-4 shadow-sm space-y-2"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium">Frequently Asked Questions</h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOpen ? "Hide" : "Show"} details
              <ChevronDownIcon className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="text-sm text-muted-foreground">
          Click the button to view commonly asked questions.
        </div>
        <CollapsibleContent className="space-y-2 pt-2">
          <div className="rounded-md bg-muted p-4">
            <h5 className="font-medium mb-1">What is a collapsible component?</h5>
            <p className="text-sm">
              A collapsible component allows you to hide and show content with a
              simple interaction, saving space when content isn't needed.
            </p>
          </div>
          <div className="rounded-md bg-muted p-4">
            <h5 className="font-medium mb-1">How do I customize this component?</h5>
            <p className="text-sm">
              The collapsible component can be styled with custom classes, and
              behavior can be controlled through the open/onOpenChange props.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const MultipleCollapsibles: Story = {
  render: () => {
    return (
      <div className="w-[350px] space-y-4">
        {[1, 2, 3].map((item) => (
          <Collapsible key={item} className="border rounded-md">
            <div className="flex items-center justify-between p-4">
              <h4 className="text-sm font-semibold">Section {item}</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                  <span className="sr-only">Toggle section {item}</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="border-t px-4 py-3">
                <p className="text-sm">
                  This is the content for section {item}. Each section can be opened
                  and closed independently.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};