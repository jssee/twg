import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

const items = [
  {
    title: "Use Cases",
    url: "#",
    icon: Home,
  },
  {
    title: "Watchlist",
    url: "#",
    icon: Inbox,
  },
  {
    title: "History",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const useCaseMenuItems = [
  {
    title: "Thought Leadership",
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
    title: "Explore Use Cases",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible-usecase">
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              <div className="text-lg flex ">
                <div className=""></div>
                Use Case
              </div>
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarMenu>
              {useCaseMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="group/collapsible-watchlist">
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>Watchlist</CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>Add New</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="group/collapsible-history">
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>History</CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <span>View all</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </CollapsibleContent>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
