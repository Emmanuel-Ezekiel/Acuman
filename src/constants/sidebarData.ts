import { GetStarted, Analytics, Chat, Moderation, API, Announcement, Settings, Collapse, Give } from "@/assets/svgs"
import { sidebarTypes } from "./types";

export const SiderBarData: sidebarTypes[] = [
    {
        icon: GetStarted(),
        name: "Get Started",
        link: "/",
        id: 1,
    },
    {
        icon: Analytics(),
        name: "Analytics",
        link: "/analytics",
        id: 2,
    },
    {
        icon: Chat(),
        name: "Chat",
        link: "/chat",
        id: 3,
    },
    {
        icon: Moderation(),
        name: "Moderation",
        link: "/moderation",
        id: 4,
    },
    {
        icon: API(),
        name: "API & Auth Keys",
        link: "/api",
        id: 5,
    },
    {
        icon: Announcement(),
        name: "Announcement",
        link: "/announcement",
        id: 6,
    },
    {
        icon: Settings(),
        name: "Settings",
        link: "/setting",
        id: 7,
    },
   
]

export const SiderBarData2: sidebarTypes[] = [
    {
        icon: Collapse(),
        name: "Collapse",
        link: "/collapse",
        id: 1,
    },
    {
        icon: Give(),
        name: "Give Feedback",
        link: "/give",
        id: 2,
    },

]