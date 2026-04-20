import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BookOpen, Mail, Users, UserStar } from "lucide-react"

const teacher = {
  name: "Megan Herbert",
  initials: "MH",
}

const students = [
  {
    name: "Justin Storm",
    initials: "JS",
    college: "New Jersey Institute of Technology",
    major: "Computer Science - Cybersecurity",
    github: "https://github.com/Justin-Storm"
  },
  {
    name: "Michael Volpe",
    initials: "MV",
    college: "Monmouth University",
    major: "Software Engineering",
    github: "https://github.com/Michael-Volpe"
  },
  {
    name: "Justin Manley",
    initials: "JM",
    college: "Brookdale Community College",
    major: "Criminal Justice",
    github: "https://github.com/jzapdos"
  },
  {
    name: "Jayden Baird Azore",
    initials: "JBA",
    college: "US Army & Kean University",
    major: "Fire Support Specialist & Cybersecurity",
    github: "https://github.com/jayyy-FTHS"
  },
  {
    name: "Zeidy Hernandez",
    initials: "ZH",
    college: "Cosmetology School",
    major: "Nail Tech",
    github: "https://github.com/tornado2007"
  }
];

const courses = [
  {
    name: "Honors Web Design",
  },
  {
    name: "Honors Advanced Web Design"
  },
  {
    name: "Honors NJIT IS219 Advanced Website Development"
  }
]

export default function Page() {
  return (
    <div className="min-h-svh bg-gray-50 dark:bg-gray-950">

      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-8">
          <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent w-fit">
                  Home
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {students.length} {students.length === 1 ? "Council Member" : "Council Members"} &middot; {courses.length} Courses
              </p>
          </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">
        

        <div>
          <div className="flex items-center gap-2 mb-4">
            <UserStar className="w-4 h-4 text-gray-400" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Teacher</h2>
          </div>

          <Item variant={'outline'}>
            <ItemMedia>
              <Avatar className="h-12 w-12">
                <AvatarFallback>{teacher.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Teacher</p>
                <p className="font-semibold text-base">{teacher.name}</p>
              </div>
            </ItemContent>
            <ItemActions>
              <Button asChild variant={'ghost'} size={'icon'}>
                <a href="mailto:mherbert@frhsd.com" target="_blank">
                  <Mail />
                </a>
              </Button>
            </ItemActions>
          </Item>

        </div>


        <div>
           <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-gray-400" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Council Members</h2>
              <span className="ml-auto text-xs text-gray-400 tabular-nums">{students.length}</span>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {students.map((student, index) => (
              <Item asChild variant={'outline'} key={index}>
                <a target="_blank" href={student.github}>
                  <ItemMedia>
                    <Avatar className="size-10">
                      <AvatarFallback>{student.initials}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{student.name}</ItemTitle>
                    <ItemDescription>{student.major}</ItemDescription>
                    <ItemDescription className="text-xs">{student.college}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <div className="p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </div>
                  </ItemActions>
                </a>
              </Item>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}