import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUpLeftFromSquare, ArrowUpRightFromSquare } from "lucide-react"
import { SUPPORTED_TEST_RUNNERS_LIST } from "next/dist/cli/next-test"


const websites = [
    {
        student: "Justin Storm",
        name: "Portfolio",
        image: "/images/jsportfolio.png",
        link: "https://portfoliov3-alpha.vercel.app/",
    },
    {
        student: "Michael Volpe",
        name: "Portfolio",
        image: "/images/mvportfolio.png",
        link: "https://michael-volpe.github.io/Super-Updated-Portfolio/",
    },
    {
        student: "Justin Manley",
        name: "Crossy Road",
        image: "/images/jmcrossyroad.png",
        link: "https://jzapdos.github.io/Crossy-Road/"
    },
    {
        student: "Jayden Baird Azore",
        name: "SLE Project",
        image: "/images/jbasleproject.png",
        link: "https://jayyy-fths.github.io/SLE-Final/"
    },
    {
        student: "Zeidy Hernandez",
        name: "Slot Machine",
        image: "/images/zhslot.png",
        link: "https://tornado2007.github.io/slot-machine-game/"
    },
    {
        student: "Justin Storm",
        name: "LSC Project",
        image: "/images/jslsc.png",
        link: "https://libertysciencecenter.vercel.app/"
    },
];

export default function Page() {
    return (
        <div className="min-h-svh bg-gray-50 dark:bg-gray-950">

            <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent w-fit">
                        Websites
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {websites.length} {websites.length === 1 ? "Website" : "Websites"}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">
        
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {websites.map((website, index) =>(
                        <Card key={index} className="relative p-0 group">
                            <img 
                                src={website.image}
                                className="w-full h-full object-center object-fit"
                            />
                            <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100 absolute top-0 left-0 p-4 w-full h-full bg-gradient-to-b from-black/35 to-black/50 to-80% flex flex-col justify-end items-center text-center">
                                <p className="translate-y-4 group-hover:translate-y-0 transition-all duration-200 pointer-events-none text-xl font-bold text-white text-shadow-lg/30">{website.name}</p>
                                <p className="translate-y-4 group-hover:translate-y-0 transition-all duration-200 pointer-events-none text-md font-base text-white text-shadow-lg/20">{website.student}</p>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button asChild className="translate-y-4 group-hover:translate-y-0 transition-all duration-200 absolute top-4 right-4" size={'icon'} variant={'default'}>
                                            <a target="_blank" href={website.link}>
                                                <ArrowUpRightFromSquare />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{website.link}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </Card>
                    ))}
                </div>
            
            </div>

        </div>
    )
}