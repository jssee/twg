import ChatInput from "~/components/chat-input";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TWG" },
    { name: "description", content: "Welcome to AgentSuite" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col gap-5 w-full max-w-4xl">
        <h1 className="text-3xl font-medium">What will you tackle today?</h1>
        <ChatInput />
      </div>
    </div>
  );
}
