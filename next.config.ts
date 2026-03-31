import type { NextConfig } from "next";

const repoName = "IM-website-V2";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
