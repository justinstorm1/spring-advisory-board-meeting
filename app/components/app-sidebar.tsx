"use client";

import { AppWindow, GraduationCap, Home, LucideIcon, MessageSquare, Tv, Tv2 } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from "./ui/sidebar";
import { useParams, usePathname } from "next/navigation";

interface Page {
    icon: LucideIcon;
    title: string;
    href: string;
}

export default function AppSidebar() {
    const pathname = usePathname();

    const pages: Page[] = [
        {
            icon: Home,
            title: "Home",
            href: "/"
        },
        {
            icon: AppWindow,
            title: "Websites",
            href: "/websites"
        },
        {
            icon: GraduationCap,
            title: "Alumni",
            href: "/alumni"
        },
        {
            icon: MessageSquare,
            title: "Student Feedback",
            href: "/student-feedback"
        },
    ] 

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b">
                <SidebarMenu>
                    <SidebarMenuButton asChild className="flex gap-2" size={'lg'}>
                        <a href="https://ms-mcdonald.github.io/frhsdwebdesign/" target="_blank">
                            <img 
                                src={"/images/wdpplogo.png"}
                                className="h-full rounded-full bg-sidebar-foreground"
                            />
                            <div className="grid grid-cols-1">
                                <span className="font-bold truncate">Spring Advisory Board Meeting</span>
                                <span className="text-xs text-muted-foreground">FTHS Web Design</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarGroupLabel>Pages</SidebarGroupLabel>
                        <SidebarMenu>
                            {pages.map((page, index) => (
                                <SidebarMenuButton asChild key={index} tooltip={page.title}>
                                    <a href={page.href}>
                                        <page.icon />
                                        <span>{page.title}</span>
                                        {pathname === page.href && (
                                            <div className="ms-auto size-2 rounded-full bg-sidebar-primary"/>
                                        )}
                                    </a>
                                </SidebarMenuButton>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}