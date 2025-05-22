import { Eye, EyeClosed } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";

const suggestedPrompts = [
  "Write me a meeting agenda for an upcoming meeting...",
  "Revise this email to give clarity and concise direction...",
  "Help me review this document and find a specfic section...",
];

export default function SuggestionsAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className="border-b rounded-none py-5"
          icon={
            <div>
              <EyeClosed className="size-4 [[data-state=open]_&]:hidden" />
              <Eye className="size-4 [[data-state=closed]_&]:hidden" />
            </div>
          }
        >
          Suggestions
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            {suggestedPrompts.map((suggestion) => {
              return (
                <li>
                  <Button
                    variant="ghost"
                    className="rounded-none border-b w-full py-6 px-2 text-neutral-500 justify-start"
                  >
                    {suggestion}
                  </Button>
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
