"use client";

import { useEffect, useState } from "react";
import { Code, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { reasons } from "@/app/data";
import Image from "next/image";
type RepoResponse = {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  license: {
    name: string;
  } | null;
  updated_at: string;
  html_url: string;
};

type CommitResponse = {
  commit: {
    author: {
      date: string;
    };
  };
};

export function OpenSourceSection() {
  const [repo, setRepo] = useState<RepoResponse | null>(null);
  const [commitGrid, setCommitGrid] = useState<number[][]>([]);

  useEffect(() => {
    const cachedRepo = sessionStorage.getItem("repo");
    const cachedGrid = sessionStorage.getItem("commitGrid");

    if (cachedRepo) setRepo(JSON.parse(cachedRepo) as RepoResponse);
    if (cachedGrid) setCommitGrid(JSON.parse(cachedGrid) as number[][]);

    if (cachedRepo && cachedGrid) return;

    Promise.all([
      fetch("https://api.github.com/repos/StrafeChat/web.strafe.chat").then(
        (r) => r.json() as Promise<RepoResponse>,
      ),
      fetch(
        "https://api.github.com/repos/StrafeChat/web.strafe.chat/commits?per_page=100",
      ).then((r) => r.json() as Promise<CommitResponse[]>),
    ]).then(([repoData, commits]) => {
      setRepo(repoData);
      sessionStorage.setItem("repo", JSON.stringify(repoData));

      const map = new Map<string, number>();

      commits.forEach((c) => {
        const day = c.commit.author.date.slice(0, 10);
        map.set(day, (map.get(day) ?? 0) + 1);
      });

      const today = new Date();
      const grid: number[][] = [];

      for (let i = 0; i < 52; i++) {
        const col: number[] = [];
        for (let j = 0; j < 7; j++) {
          const date = new Date(today);
          date.setDate(today.getDate() - (51 - i) * 7 - (6 - j));
          const key = date.toISOString().slice(0, 10);
          const count = map.get(key) ?? 0;
          col.push(Math.min(count / 4, 1));
        }
        grid.push(col);
      }

      setCommitGrid(grid);
      sessionStorage.setItem("commitGrid", JSON.stringify(grid));
    });
  }, []);

  return (
    <section id="open-source" className="relative py-24 px-6 hidden sm:block">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
              <Code className="size-4" />
              Open Source
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Free as in freedom,
              <br />
              not just free beer
            </h2>

            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
              Strafe is built on the principles of transparency, privacy, and
              community ownership. Our entire codebase is available under a
              permissive open source license.
            </p>

            <div className="space-y-4 mb-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {repo && (
              <Button className="rounded-full bg-primary hover:bg-primary-hover text-primary-foreground">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-full"
                >
                  <Github className="size-4" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>

          <div className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/10 via-transparent to-transparent" />

            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Image width={48} height={48} src="/favicon.ico" alt="Strafe" className="size-12" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {repo?.full_name ?? "loading..."}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Main repository
                    </p>
                  </div>
                </div>

                {repo && (
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Star className="size-4" />
                      <span className="text-sm">
                        {repo.stargazers_count.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitFork className="size-4" />
                      <span className="text-sm">
                        {repo.forks_count.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground mb-6 text-pretty">
                {repo?.description}
              </p>

              <div className="pt-6 border-t border-border">
                {repo && (
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-muted-foreground">
                      Last update:{" "}
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                    <span className="text-primary">
                      {repo.license?.name ?? "MIT license"}
                    </span>
                  </div>
                )}

                <div className="flex gap-[0.5%] overflow-hidden">
                  {commitGrid.map((col, i) => (
                    <div key={i} className="flex flex-col gap-1 flex-1">
                      {col.map((intensity, j) => {
                        let bg = "bg-muted";
                        if (intensity > 0.8) bg = "bg-primary";
                        else if (intensity > 0.6) bg = "bg-primary/70";
                        else if (intensity > 0.4) bg = "bg-primary/40";
                        else if (intensity > 0.2) bg = "bg-primary/20";
                        return (
                          <div
                            key={j}
                            className={`w-full aspect-square rounded-sm ${bg}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
