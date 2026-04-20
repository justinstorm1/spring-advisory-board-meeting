"use client";

import React from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import AppSidebar from "./app-sidebar";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { TooltipProvider } from "./ui/tooltip";

export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    function getPath() {
        switch (pathname) {
            case "/":
                return "home"
            case "/student-feedback":
                return "Student Feedback"
            default:
                return pathname.slice(1)
        }
    }

    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="p-5 border-b flex gap-4">
                        <SidebarTrigger />
                        <Separator 
                            orientation="vertical" 
                            className="h-4 my-auto" 
                        />
                        <p className="capitalize">{getPath()}</p>
                    </header>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    )
} 