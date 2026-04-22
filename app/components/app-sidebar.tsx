"use client";

import { AppWindow, Gamepad2, GraduationCap, Home, LucideIcon, MessageSquare, Play, Tv, Tv2 } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
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
    ];

    const games = [
        {
            name: "Would You Rather",
            student: "Justin Storm",
            link: "https://justinstorm1-react-test.vercel.app/"
        },
        {
            name: "Shape Escape",
            student: "Michael Volpe",
            link: "https://michael-volpe.github.io/Shape-Escape-V2/"
        }
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
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarGroupLabel>
                            Games 
                            <span className="ms-auto">{games.length}</span>
                        </SidebarGroupLabel>
                        <SidebarMenu>
                            {games.map((game, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton size={'lg'} tooltip={game.name} asChild>
                                        <a target="_blank" href={game.link}>
                                            <div className="h-full flex items-center justify-center aspect-square">
                                                <Gamepad2 />
                                            </div>
                                            <div className="shrink-1 flex flex-col">
                                                <span>{game.name}</span>
                                                <span className="text-xs text-muted-foreground">{game.student}</span>
                                            </div>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}