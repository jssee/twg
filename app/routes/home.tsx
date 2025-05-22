import ChatInput from "~/components/chat-input";
import SuggestionsAccordion from "~/components/suggestions-accordion";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { Edit } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TWG" },
    { name: "description", content: "Welcome to AgentSuite" },
  ];
}

export default function Home() {
  return (
    <div className="w-screen mx-auto flex items-center flex-col">
      <header className="flex gap-3 w-full p-3 md:p-6 justify-between items-center">
        <img src="logo.svg" />
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="icon">
            <Edit className="size-4" />
          </Button>
          <Button variant="outline">My Files</Button>
        </div>
      </header>
      <div className="flex flex-col gap-5 w-full max-w-4xl my-auto pr-3 md:pr-6">
        <h1 className="text-3xl font-medium">What will you tackle today?</h1>
        <ChatInput />
        <SuggestionsAccordion />
      </div>
    </div>
  );
}
