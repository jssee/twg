import { Settings2, Paperclip, ArrowUp, Mic } from "lucide-react";
import { ShineBorder } from "~/components/ui/shine-border";
import { Button } from "~/components/ui/button";
import { useRef, useEffect } from "react";

export default function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Function to auto-resize the textarea
  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = "auto";

    // Calculate new height (capped at max-height via CSS)
    const newHeight = Math.min(textarea.scrollHeight, 200);
    textarea.style.height = `${newHeight}px`;
  };

  // Set up event listeners
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Initial height
    textarea.style.height = "40px";

    // Listen for input events
    const handleInput = () => autoResizeTextarea();
    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-5 rounded-3xl w-full flex-1 px-5 py-5 drop-shadow-xl bg-white">
      <textarea
        ref={textareaRef}
        className="w-full focus:outline-none p-2 max-h-[200px] overflow-hidden resize-none"
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
            <Mic className="size-4" />
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
