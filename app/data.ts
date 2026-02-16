import {
  Shield,
  MessageSquare,
  Users,
  Video,
  Folder,
  Lock,
  Server,
  Zap,
  Globe,
} from "lucide-react";

export const servers = [
  {
    id: "home",
    name: "Home",
    isHome: true,
  },
  { id: "gaming", name: "Gaming Hub", color: "bg-indigo-500", letter: "G" },
  { id: "dev", name: "Dev Community", color: "bg-emerald-500", letter: "D" },
  { id: "music", name: "Music Lounge", color: "bg-rose-500", letter: "M" },
];

export const channelsByServer: Record<
  string,
  { text: string[]; voice: { name: string; users: number }[] }
> = {
  home: {
    text: ["welcome", "announcements", "general"],
    voice: [
      { name: "Hangout", users: 3 },
      { name: "Music Room", users: 1 },
    ],
  },
  gaming: {
    text: ["general", "looking-for-group", "clips"],
    voice: [
      { name: "Game Night", users: 5 },
      { name: "Chill Zone", users: 2 },
    ],
  },
  dev: {
    text: ["help", "showcase", "resources"],
    voice: [
      { name: "Pair Programming", users: 2 },
      { name: "Code Review", users: 0 },
    ],
  },
  music: {
    text: ["share-music", "recommendations", "events"],
    voice: [
      { name: "Listening Party", users: 8 },
      { name: "DJ Booth", users: 1 },
    ],
  },
};

export const messagesByServer: Record<
  string,
  { user: string; msg: string; color: string; time: string }[]
> = {
  home: [
    {
      user: "Sarah",
      msg: "Hey everyone! Welcome to Strafe",
      color: "bg-blue-500",
      time: "12:00",
    },
    {
      user: "Mike",
      msg: "Finally, a chat app that respects our privacy!",
      color: "bg-purple-500",
      time: "12:01",
    },
    {
      user: "Alex",
      msg: "The self-hosting feature is amazing.",
      color: "bg-orange-500",
      time: "12:02",
    },
  ],
  gaming: [
    {
      user: "ProGamer",
      msg: "Anyone up for some matches tonight?",
      color: "bg-indigo-500",
      time: "8:30",
    },
    {
      user: "NightOwl",
      msg: "Count me in! What are we playing?",
      color: "bg-pink-500",
      time: "8:31",
    },
    {
      user: "CasualFan",
      msg: "I'll spectate, still learning the game",
      color: "bg-cyan-500",
      time: "8:32",
    },
  ],
  dev: [
    {
      user: "DevLead",
      msg: "Just pushed the new update to main",
      color: "bg-emerald-500",
      time: "2:15",
    },
    {
      user: "Contributor",
      msg: "Nice! The PR review system is solid",
      color: "bg-amber-500",
      time: "2:16",
    },
    {
      user: "NewDev",
      msg: "Where can I find the contribution guide?",
      color: "bg-violet-500",
      time: "2:18",
    },
  ],
  music: [
    {
      user: "DJ_Fresh",
      msg: "Dropping some beats in the listening party!",
      color: "bg-rose-500",
      time: "10:00",
    },
    {
      user: "MelodyMaker",
      msg: "This playlist is fire",
      color: "bg-fuchsia-500",
      time: "10:02",
    },
    {
      user: "BassHead",
      msg: "Can you add some drum & bass?",
      color: "bg-teal-500",
      time: "10:03",
    },
  ],
};

export const membersByServer: Record<
  string,
  { name: string; color: string; status: "online" | "idle" | "dnd" }[]
> = {
  home: [
    { name: "Sarah", color: "bg-blue-500", status: "online" },
    { name: "Mike", color: "bg-purple-500", status: "online" },
    { name: "Alex", color: "bg-orange-500", status: "idle" },
  ],
  gaming: [
    { name: "ProGamer", color: "bg-indigo-500", status: "online" },
    { name: "NightOwl", color: "bg-pink-500", status: "online" },
    { name: "CasualFan", color: "bg-cyan-500", status: "dnd" },
  ],
  dev: [
    { name: "DevLead", color: "bg-emerald-500", status: "online" },
    { name: "Contributor", color: "bg-amber-500", status: "idle" },
    { name: "NewDev", color: "bg-violet-500", status: "online" },
  ],
  music: [
    { name: "DJ_Fresh", color: "bg-rose-500", status: "online" },
    { name: "MelodyMaker", color: "bg-fuchsia-500", status: "online" },
    { name: "BassHead", color: "bg-teal-500", status: "online" },
  ],
};

export const features = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description:
      "All messages are encrypted by default. Your conversations stay private, always.",
  },
  {
    icon: MessageSquare,
    title: "Rich Text & Markdown",
    description:
      "Express yourself with full markdown support, code blocks, and rich embeds.",
  },
  {
    icon: Users,
    title: "Communities & Spaces",
    description:
      "Create and join communities. Organize with rooms, roles, and permissions.",
  },
  {
    icon: Video,
    title: "Voice & Video",
    description:
      "Crystal-clear voice and video calls with screen sharing capabilities.",
  },
  {
    icon: Folder,
    title: "File Sharing",
    description:
      "Share files securely without restrictions. Send whatever you need with no arbitrary limits.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "No tracking, no ads, no data harvesting. Your data belongs to you.",
  },
  {
    icon: Server,
    title: "Self-Hostable",
    description:
      "Run your own instance with full control, isolated from our main instance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for performance. Low latency messaging that scales with your community.",
  },
  {
    icon: Globe,
    title: "Available Everywhere",
    description:
      "Use Strafe on desktop, web, or mobile. Your conversations sync seamlessly across all devices.",
  },
];

export const reasons = [
  {
    title: "Transparent Development",
    description:
      "Every line of code is open for inspection. No hidden trackers, no secret backdoors, no surprises.",
  },
  {
    title: "Community Driven",
    description:
      "Built by the community, for the community. Your contributions shape the future of Strafe.",
  },
  {
    title: "Self-Hostable",
    description:
      "Run Strafe on your own infrastructure. Full control, full privacy, your rules.",
  },
  {
    title: "No Vendor Lock-in",
    description:
      "Your data is yours. Export, migrate, or self-host anytime without restrictions.",
  },
];

export const statusColors = {
  online: "bg-primary",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
};
