import * as React from "react";
import { History, Eye, Shapes } from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
} from "~/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Use case",
      url: "#",
      icon: Shapes,
      isActive: true,
      items: [
        {
          title: "Thought leadership",
          url: "#",
        },
        {
          title: "Document Analyzer",
          url: "#",
        },
        {
          title: "Municipal Bonds",
          url: "#",
        },
        {
          title: "Expore use cases",
          url: "#",
        },
      ],
    },
    {
      title: "Watchlist",
      url: "#",
      icon: Eye,
      items: [
        {
          title: "Add new",
          url: "#",
        },
      ],
    },
    {
      title: "History",
      url: "#",
      icon: History,
      items: [
        {
          title: "View all",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="" collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
