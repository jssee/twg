import { Settings2, Paperclip, ArrowUp, Mic } from "lucide-react";
import { ShineBorder } from "~/components/ui/shine-border";
import { Button } from "~/components/ui/button";

export default function ChatInput() {
  return (
    <div className="relative flex flex-col gap-5 rounded-3xl w-full flex-1 px-5 py-5 drop-shadow-xl bg-white">
      <input
        type="text"
        className="w-full focus:outline-none p-2"
        placeholder="Ask us anything..."
      />
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Button variant="outline" size="icon">
            <Settings2 className="size-4" />
          </Button>
          <Button variant="outline">Prompts</Button>
          <Button variant="outline">Agent</Button>
          <Button variant="outline" size="icon">
            <Paperclip className="size-4" />
          </Button>
        </div>
        <div className="flex gap-1">
          <Button variant="outline" size="icon">
            <Mic className="size-4" />,
          </Button>
          <Button variant="outline" size="icon">
            <ArrowUp className="size-4" />
          </Button>
        </div>
      </div>
      <ShineBorder />
    </div>
  );
}
