import { GetStarted, Analytics, Chat, Moderation, API, Announcement, Settings, Collapse, Give } from "@/assets/svgs"
import { sidebarTypes } from "./Types"

export const SiderBarData: sidebarTypes[] = [
    {
        icon: GetStarted(),
        name: "Get Started",
        id: 1,
    },
    {
        icon: Analytics(),
        name: "Analytics",
        id: 2,
    },
    {
        icon: Chat(),
        name: "Chat",
        id: 3,
    },
    {
        icon: Moderation(),
        name: "Moderation",
        id: 4,
    },
    {
        icon: API(),
        name: "API & Auth Keys",
        id: 5,
    },
    {
        icon: Announcement(),
        name: "Announcement",
        id: 6,
    },
    {
        icon: Settings(),
        name: "Settings",
        id: 7,
    },
   
]

export const SiderBarData2: sidebarTypes[] = [
    {
        icon: Collapse(),
        name: "Collapse",
        id: 1,
    },
    {
        icon: Give(),
        name: "Give Feedback",
        id: 2,
    },

]