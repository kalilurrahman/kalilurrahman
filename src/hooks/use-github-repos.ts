import { useEffect, useState } from "react";

export type GithubRepo = {
  name: string;
  url: string;
  lang: string;
  summary: string;
  stars?: number;
  updatedAt?: string;
};

type ApiRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const CACHE_KEY = "kr-github-repos-v1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours

const fromApi = (r: ApiRepo): GithubRepo => ({
  name: r.name,
  url: r.html_url,
  lang: r.language || "Various",
  summary: r.description || "Repository by Kalilur Rahman.",
  stars: r.stargazers_count,
  updatedAt: r.updated_at,
});

export function useGithubRepos(fallback: GithubRepo[], username = "kalilurrahman") {
  const [repos, setRepos] = useState<GithubRepo[]>(fallback);
  const [total, setTotal] = useState<number>(fallback.length);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    // hydrate from cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as {
          ts: number;
          repos: GithubRepo[];
          total: number;
          updatedAt: string | null;
        };
        if (Date.now() - parsed.ts < CACHE_TTL_MS && parsed.repos?.length) {
          setRepos(parsed.repos);
          setTotal(parsed.total);
          setUpdatedAt(parsed.updatedAt);
          return; // skip fetch
        }
      }
    } catch {
      /* ignore */
    }

    (async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        if (!userRes.ok || !repoRes.ok) return;
        const user = await userRes.json();
        const data: ApiRepo[] = await repoRes.json();
        if (cancelled) return;
        const mapped = data
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at))
          .map(fromApi);
        const totalCount = user?.public_repos ?? mapped.length;
        const latest = mapped[0]?.updatedAt ?? null;
        setRepos(mapped);
        setTotal(totalCount);
        setUpdatedAt(latest);
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ ts: Date.now(), repos: mapped, total: totalCount, updatedAt: latest }),
          );
        } catch {
          /* ignore quota */
        }
      } catch {
        /* network failure → keep fallback */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { repos, total, updatedAt };
}
