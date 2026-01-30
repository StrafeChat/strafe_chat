"use client";

import { useState } from "react";
import Image from "next/image";
import {
  servers,
  channelsByServer,
  messagesByServer,
  membersByServer,
  statusColors,
} from "@/app/data";
import { Home } from "lucide-react";

export function AppPreview() {
  const [activeServer, setActiveServer] = useState("home");
  const [activeChannel, setActiveChannel] = useState("welcome");
  const [hoveredServer, setHoveredServer] = useState<string | null>(null);

  const currentChannels = channelsByServer[activeServer];
  const currentMessages = messagesByServer[activeServer];
  const currentMembers = membersByServer[activeServer];
  const currentServer = servers.find((s) => s.id === activeServer);

  const handleServerClick = (serverId: string) => {
    setActiveServer(serverId);
    setActiveChannel(channelsByServer[serverId].text[0]);
  };

  return (
    <div className="hidden sm:block">
      <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-border shadow-2xl shadow-black/50 cursor-default select-none bg-card">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-red-500/60" />
            <span className="size-3 rounded-full bg-yellow-500/60" />
            <span className="size-3 rounded-full bg-primary/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-muted text-xs text-muted-foreground">
              strafe.chat
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100%-48px)]">
          <div className="w-18 bg-background/50 border-r border-border p-3 flex flex-col gap-2 items-center">
            {servers.map((server, index) => (
              <div key={server.id}>
                {index === 1 && (
                  <div className="w-8 h-px bg-border mx-auto my-1" />
                )}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => handleServerClick(server.id)}
                    onMouseEnter={() => setHoveredServer(server.id)}
                    onMouseLeave={() => setHoveredServer(null)}
                    className={`size-12 flex items-center justify-center transition-all duration-200 ${
                      server.isHome
                        ? "bg-primary text-primary-foreground"
                        : server.color
                          ? `${server.color} text-white`
                          : "bg-muted text-muted-foreground"
                    } ${
                      activeServer === server.id
                        ? "rounded-xl ring-2 ring-primary/50"
                        : "rounded-3xl hover:rounded-xl"
                    }`}
                  >
                    {server.isHome ? (
                      <Home className="size-6 text-white" />
                    ) : (
                      <span className="font-semibold text-sm">
                        {server.letter}
                      </span>
                    )}
                  </button>
                  <div
                    className={`absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-1 bg-foreground rounded-r transition-all ${
                      activeServer === server.id
                        ? "h-10"
                        : hoveredServer === server.id
                          ? "h-5"
                          : "h-0"
                    }`}
                  />
                  {hoveredServer === server.id && (
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-popover border border-border rounded-lg shadow-xl z-50">
                      <span className="text-sm font-medium">{server.name}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button className="size-12 rounded-3xl border-2 border-dashed border-muted-foreground/30 text-xl text-muted-foreground hover:rounded-xl hover:border-primary hover:text-primary transition-all">
              +
            </button>
          </div>

          <div className="flex-1 flex">
            <div className="w-56 relative bg-background/30 border-r border-border">
              <div className="p-4">
                <div className="font-semibold mb-4">{currentServer?.name}</div>
                <div className="text-xs uppercase text-muted-foreground mb-2">
                  Text Channels
                </div>
                {currentChannels.text.map((channel) => (
                  <button
                    key={channel}
                    onClick={() => setActiveChannel(channel)}
                    className={`w-full px-2 py-1.5 rounded text-sm flex gap-2 ${
                      activeChannel === channel
                        ? "bg-primary/20 text-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span>#</span>
                    <span className="truncate">{channel}</span>
                  </button>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2 bg-background/80 border-t border-border">
                <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50">
                  <div className="relative">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-xs font-medium text-primary-foreground">
                      Y
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-primary border-2 border-background" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">You</div>
                    <div className="text-xs text-muted-foreground truncate">
                      Online
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="px-4 py-3 border-b border-border">
                #{activeChannel}
              </div>
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {currentMessages.map((m, i) => (
                  <div key={i} className="flex gap-3">
                    <div
                      className={`size-10 rounded-full ${m.color} flex items-center justify-center text-sm text-white`}
                    >
                      {m.user[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{m.user}</div>
                      <p className="text-sm text-neutral-300">{m.msg}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border bg-background/80">
                <input
                  type="text"
                  placeholder={`Message #${activeChannel}`}
                  className="w-full bg-muted/30 rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
            </div>

            <div className="w-60 bg-background/30 border-l border-border p-4">
              {currentMembers.map((m) => (
                <div key={m.name} className="flex gap-3 p-2">
                  <div className="relative">
                    <div
                      className={`size-8 rounded-full ${m.color} flex items-center justify-center text-xs text-white`}
                    >
                      {m.name[0]}
                    </div>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 size-3 rounded-full ${
                        statusColors[m.status]
                      } border-2 border-background`}
                    />
                  </div>
                  <span className="text-sm truncate">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
