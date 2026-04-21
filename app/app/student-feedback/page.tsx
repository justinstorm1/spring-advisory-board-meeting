import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemMedia } from "@/components/ui/item"

const feedbacks = [
  {
    name: "Michael Volpe",
    initials: "MV",
    message: "This class helped me prepare for my future in a career in technology as well as helped me learn from those around me.",
  },
  {
    name: "Justin Manley",
    initials: "JM",
    message: "The class was very enjoyable and made learning coding fun. You were able to rely on the teacher as well as you peers, and overall I feel that I learned a lot in this class.",
  },
  {
    name: "Jayden Baird Azore",
    initials: "JBA",
    message: "This class I would say is one of the greatest classes one can take because it gives you the knowledge of advanced web development that can be applied to multiple career paths.",
  },
  {
    name: "Zeidy Hernandez",
    initials: "ZH",
    message: "This class was life changing with how much people were involved with eachother and how much you learn in this class.",
  },
  {
    name: "Justin Storm",
    initials: "JS",
    message: "This class truly changed my perspective on technology. From not knowing how to code, I learned HTML, CSS, and JS, as well with the advanced framework Next.js utilizing React. With those frameworks, I began developing skills building mobile applications using React Native and Swift.",
    buttons: (
      <ItemActions>
        <Button className="text-foreground" variant={'link'} asChild>
          <a href="https://ui.shadcn.com/" target="_blank">
            <span>Shadcn</span>
          </a>
        </Button>
        <Button className="text-foreground" variant={'link'} asChild>
          <a href="https://react.dev/" target="_blank">
            <span>React</span>
          </a>
        </Button>
        <Button className="text-foreground" variant={'link'} asChild>
          <a href="https://nextjs.org/" target="_blank">
            <span>Next.js</span>
          </a>
        </Button>
      </ItemActions>
    )
  },
]

export default function Page() {
  return (
    <div className="min-h-svh bg-gray-50 dark:bg-gray-950">

      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-8">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-black tracking-tight w-fit">
              Student{" "}
              <span className="bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent">
                Feedback
              </span>
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {feedbacks.length} {feedbacks.length === 1 ? "Feedback" : "Feedbacks"}
            </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">

        <div className="grid grid-cols-1 gap-4">
          {feedbacks.map((item) => (
            <Item key={item.name} variant={'outline'}>
              <ItemMedia>
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarFallback>{item.initials}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="flex items-start gap-4">
                <div>
                  <p className="font-semibold text-sm mb-1">{item.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.message}</p>
                </div>
                {item.buttons}
              </ItemContent>
            </Item>
          ))}
        </div>

      </div>

    </div>
  )
}