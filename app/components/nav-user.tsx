"use client";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

export function NavUser({
  user,
}: {
  user?: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Avatar className="h-8 w-8 rounded-full text-white">
          <AvatarFallback className="rounded-full bg-blue-500">
            L
          </AvatarFallback>
        </Avatar>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
