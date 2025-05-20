import type { Meta, StoryObj } from "@storybook/react";
import { 
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
  SidebarInset,
  SidebarTrigger,
} from "../app/components/ui/sidebar";
import { Button } from "../app/components/ui/button";
import { HomeIcon, SearchIcon, SettingsIcon, UserIcon } from "lucide-react";

// Create a mock for the useIsMobile hook
import * as useMobileModule from "../app/hooks/use-mobile";

// Override the useIsMobile implementation for Storybook
const originalUseIsMobile = useMobileModule.useIsMobile;
useMobileModule.useIsMobile = () => false;

const meta: Meta<typeof SidebarProvider> = {
  title: "Components/Sidebar",
  component: SidebarProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex h-[400px] border rounded-lg overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SidebarProvider>;

const SidebarTemplate = (args: React.ComponentProps<typeof SidebarProvider>) => (
  <SidebarProvider {...args}>
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center p-2">
          <h2 className="text-lg font-semibold">My App</h2>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Home">
                  <HomeIcon />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Search">
                  <SearchIcon />
                  <span>Search</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Profile">
                  <UserIcon />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <SettingsIcon />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" className="w-full">
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
    
    <SidebarInset>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>This is the main content area that appears next to the sidebar.</p>
      </div>
    </SidebarInset>
  </SidebarProvider>
);

export const Default: Story = {
  render: (args) => <SidebarTemplate {...args} />,
};

export const Collapsed: Story = {
  render: (args) => <SidebarTemplate {...args} defaultOpen={false} />,
};

export const FloatingVariant: Story = {
  render: (args) => (
    <SidebarTemplate {...args}>
      <Sidebar variant="floating">
        {/* Sidebar content */}
      </Sidebar>
    </SidebarTemplate>
  ),
  args: {
    className: "bg-gray-100 dark:bg-gray-900",
  },
};

export const InsetVariant: Story = {
  render: (args) => (
    <SidebarTemplate {...args}>
      <Sidebar variant="inset">
        {/* Sidebar content */}
      </Sidebar>
    </SidebarTemplate>
  ),
  args: {
    className: "bg-gray-100 dark:bg-gray-900",
  },
};

export const RightSide: Story = {
  render: (args) => (
    <SidebarTemplate {...args}>
      <Sidebar side="right">
        {/* Sidebar content */}
      </Sidebar>
    </SidebarTemplate>
  ),
};