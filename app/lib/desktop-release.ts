"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/** Where the desktop app's installers come from: its GitHub releases. */
export const DESKTOP_REPO = "StrafeChat/desktop";
export const RELEASES_URL = `https://github.com/${DESKTOP_REPO}/releases`;
export const WEB_APP_URL = "https://app.strafe.chat";

export type Platform = "windows" | "mac" | "linux";

export interface DownloadKind {
  /** "Installer", "Apple Silicon", "AppImage"... */
  label: string;
  /** What the file is, for the small print. */
  hint: string;
  /** Picks the asset out of a release by file name (the names tauri-action produces). */
  match: RegExp;
}

export interface PlatformInfo {
  name: string;
  /** The first one is what a plain "Download for X" button gives. */
  downloads: DownloadKind[];
}

export const PLATFORMS: Record<Platform, PlatformInfo> = {
  windows: {
    name: "Windows",
    downloads: [
      { label: "Installer", hint: "Windows 10 or newer, 64-bit (.exe)", match: /_x64-setup\.exe$/i },
      { label: "MSI package", hint: "for scripted and managed installs (.msi)", match: /_x64_en-US\.msi$/i },
    ],
  },
  mac: {
    name: "macOS",
    downloads: [
      { label: "Apple Silicon", hint: "M1 and newer (.dmg)", match: /_aarch64\.dmg$/i },
      { label: "Intel", hint: "Intel Macs (.dmg)", match: /_x64\.dmg$/i },
    ],
  },
  linux: {
    name: "Linux",
    downloads: [
      { label: "AppImage", hint: "any distribution, nothing to install (.AppImage)", match: /\.AppImage$/i },
      { label: "Debian / Ubuntu", hint: ".deb package", match: /\.deb$/i },
      { label: "Fedora / openSUSE", hint: ".rpm package", match: /\.rpm$/i },
    ],
  },
};

export const PLATFORM_ORDER: Platform[] = ["windows", "mac", "linux"];

export interface ReleaseAsset {
  name: string;
  url: string;
  size: number;
}

export interface DesktopRelease {
  version: string;
  url: string;
  publishedAt: string;
  prerelease: boolean;
  assets: ReleaseAsset[];
}

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string;
  assets: { name: string; browser_download_url: string; size: number }[];
};

/** The OS this browser runs on, or null on a phone or tablet (and anything else). */
export function detectPlatform(): Platform | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  if (/Android|iPhone|iPad|iPod/i.test(ua)) return null;
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS X/i.test(ua)) return "mac";
  if (/Linux|X11|CrOS/i.test(ua)) return "linux";
  return null;
}

const subscribeToNothing = () => () => {};

/** The detected platform: null in the prerendered HTML, settled on the client (no hydration mismatch, no effect). */
export function usePlatform(): Platform | null {
  return useSyncExternalStore(subscribeToNothing, detectPlatform, () => null);
}

export function assetFor(release: DesktopRelease | null, kind: DownloadKind): ReleaseAsset | undefined {
  return release?.assets.find((a) => kind.match.test(a.name));
}

/**
 * The link a download button carries: the file itself once the release is known, the
 * releases page until then (and if GitHub could not be reached), so a click always lands
 * somewhere useful.
 */
export function downloadUrl(release: DesktopRelease | null, kind: DownloadKind): string {
  return assetFor(release, kind)?.url ?? RELEASES_URL;
}

export function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(mb >= 100 ? 0 : 1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

const CACHE_KEY = "desktopRelease";

function readCache(): DesktopRelease | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    return cached ? (JSON.parse(cached) as DesktopRelease) : null;
  } catch {
    return null; // storage may be unavailable; just ask GitHub
  }
}

function writeCache(rel: DesktopRelease): void {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(rel));
  } catch {
    // Fine without the cache.
  }
}

async function fetchLatest(): Promise<DesktopRelease> {
  const res = await fetch(`https://api.github.com/repos/${DESKTOP_REPO}/releases?per_page=10`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(String(res.status));
  const list = (await res.json()) as GitHubRelease[];
  const candidates = list.filter((r) => !r.draft && r.assets.length > 0);
  const pick = candidates.find((r) => !r.prerelease) ?? candidates[0];
  if (!pick) throw new Error("no release");
  const rel: DesktopRelease = {
    version: pick.tag_name.replace(/^v/, ""),
    url: pick.html_url,
    publishedAt: pick.published_at,
    prerelease: pick.prerelease,
    assets: pick.assets
      .filter((a) => !a.name.endsWith(".sig") && !a.name.endsWith(".json"))
      .map((a) => ({ name: a.name, url: a.browser_download_url, size: a.size })),
  };
  writeCache(rel);
  return rel;
}

/**
 * The newest release of the desktop app, from GitHub, cached for the tab's lifetime like
 * the repository card. A proper release wins over a pre-release; otherwise the newest.
 * `failed` once GitHub could not be asked - links then fall back to the releases page.
 */
export function useDesktopRelease(): { release: DesktopRelease | null; failed: boolean } {
  const [release, setRelease] = useState<DesktopRelease | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const cached = readCache();
    (cached ? Promise.resolve(cached) : fetchLatest())
      .then((rel) => {
        if (!cancelled) setRelease(rel);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { release, failed };
}
