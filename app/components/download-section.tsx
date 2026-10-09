"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import {
  PLATFORMS,
  downloadUrl,
  useDesktopRelease,
  usePlatform,
  type DownloadKind,
  type Platform,
} from "@/app/lib/desktop-release";

/** The buttons on the home page: one obvious file per platform (two for Macs, by chip). */
const buttons: { platform: Platform; label: string; kind: DownloadKind }[] = [
  { platform: "windows", label: "Windows", kind: PLATFORMS.windows.downloads[0] },
  { platform: "linux", label: "Linux", kind: PLATFORMS.linux.downloads[0] },
  { platform: "mac", label: "macOS · Apple Silicon", kind: PLATFORMS.mac.downloads[0] },
  { platform: "mac", label: "macOS · Intel", kind: PLATFORMS.mac.downloads[1] },
];

export function DownloadSection() {
  const { release } = useDesktopRelease();
  const platform = usePlatform();

  return (
    <section id="download" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
                <Download className="size-4" />
                Desktop app
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Strafe on your desktop
              </h2>
              <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
                One app for every instance: sign in wherever Strafe runs, switch between your
                accounts in a click, and get calls and mentions even with the window closed.
                Updates install themselves.
              </p>
              {release && (
                <p className="text-sm text-muted-foreground">
                  Version {release.version}
                  {release.prerelease && " · pre-release"}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                {buttons.map((b) => {
                  const mine = b.platform === platform;
                  return (
                    <a
                      key={b.label}
                      href={downloadUrl(release, b.kind)}
                      className={`inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full text-sm font-medium transition-colors ${
                        mine
                          ? "bg-primary hover:bg-primary-hover text-primary-foreground"
                          : "border border-border text-foreground hover:bg-muted"
                      }`}
                    >
                      <Download className="size-4" />
                      {b.label}
                    </a>
                  );
                })}
              </div>
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
              >
                More formats and every release
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
