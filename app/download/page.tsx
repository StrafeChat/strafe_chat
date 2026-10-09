"use client";

import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Globe, Laptop, Monitor, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  PLATFORMS,
  PLATFORM_ORDER,
  RELEASES_URL,
  WEB_APP_URL,
  assetFor,
  downloadUrl,
  formatDate,
  formatSize,
  useDesktopRelease,
  usePlatform,
  type Platform,
} from "@/app/lib/desktop-release";

const icons: Record<Platform, LucideIcon> = { windows: Monitor, mac: Laptop, linux: Terminal };

const primaryButton =
  "inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full text-sm font-medium bg-primary hover:bg-primary-hover text-primary-foreground transition-colors";
const outlineButton =
  "inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors";

export default function DownloadPage() {
  const { release, failed } = useDesktopRelease();
  const platform = usePlatform();
  const mine = platform ? PLATFORMS[platform] : null;
  // Windows and Linux have one obvious file; a Mac's chip cannot be told from the browser,
  // so both builds are offered.
  const primary = mine ? (platform === "mac" ? mine.downloads : mine.downloads.slice(0, 1)) : [];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--color-primary), transparent 80%) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen px-6 pt-32 pb-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5 text-center text-balance">Download Strafe</h1>
        <p className="text-lg text-muted-foreground mb-4 text-center max-w-2xl text-pretty leading-relaxed">
          The desktop app for Windows, macOS and Linux. Sign in to any Strafe instance, keep
          accounts from several of them side by side, and stay reachable for calls and mentions
          with the window closed. Updates install themselves.
        </p>

        <p className="text-sm text-muted-foreground mb-10 flex items-center gap-2" aria-live="polite">
          {release ? (
            <>
              <span>
                Version {release.version} · {formatDate(release.publishedAt)}
              </span>
              {release.prerelease && (
                <span className="px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs">
                  Pre-release
                </span>
              )}
            </>
          ) : failed ? (
            <span>Latest release on GitHub</span>
          ) : (
            <span>Finding the latest version…</span>
          )}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {mine ? (
            <>
              {primary.map((kind) => (
                <a key={kind.label} href={downloadUrl(release, kind)} className={primaryButton}>
                  <Download className="size-4" />
                  Download for {mine.name}
                  {primary.length > 1 && <span className="opacity-80">· {kind.label}</span>}
                </a>
              ))}
              <a href={WEB_APP_URL} className={outlineButton}>
                <Globe className="size-4" />
                Open the web app
              </a>
            </>
          ) : (
            <a href={WEB_APP_URL} className={primaryButton}>
              <Globe className="size-4" />
              Open Strafe in your browser
            </a>
          )}
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORM_ORDER.map((key) => {
            const info = PLATFORMS[key];
            const Icon = icons[key];
            const current = key === platform;
            return (
              <section
                key={key}
                className={`p-6 rounded-xl border bg-card/50 backdrop-blur-sm transition-colors ${
                  current ? "border-primary/40" : "border-border"
                }`}
                aria-labelledby={`platform-${key}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h2 id={`platform-${key}`} className="font-semibold text-foreground">
                      {info.name}
                    </h2>
                    {current && <p className="text-xs text-primary">Your computer</p>}
                  </div>
                </div>
                <ul className="space-y-2">
                  {info.downloads.map((kind) => {
                    const asset = assetFor(release, kind);
                    return (
                      <li key={kind.label}>
                        <a
                          href={downloadUrl(release, kind)}
                          className="group flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-background/40 px-4 py-3 hover:border-primary/40 hover:bg-card transition-colors"
                        >
                          <span className="min-w-0">
                            <span className="block text-sm font-medium text-foreground">{kind.label}</span>
                            <span className="block text-xs text-muted-foreground">{kind.hint}</span>
                          </span>
                          <span className="shrink-0 flex items-center gap-2 text-xs text-muted-foreground">
                            {asset && <span>{formatSize(asset.size)}</span>}
                            <Download className="size-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="w-full max-w-5xl mt-10 grid gap-3 text-sm text-muted-foreground">
          <p>
            <a
              href={release?.url ?? RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
            >
              All releases, with signatures, on GitHub
              <ExternalLink className="size-3.5" />
            </a>
          </p>
          <p>On a phone or tablet, Strafe runs in your browser: open {WEB_APP_URL.replace("https://", "")} and sign in.</p>
          <p>
            Voice and video calls are not available in the Linux app yet (its web view ships without
            WebRTC); use the web app in a browser for calls on Linux.
          </p>
        </div>
      </div>
    </main>
  );
}
