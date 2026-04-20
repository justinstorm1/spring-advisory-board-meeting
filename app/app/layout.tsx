import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

export const metadata: Metadata = {
  title: "Spring Advisory Board Meeting",
  description: "FTHS Website Showcase"
}

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="dark">
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
