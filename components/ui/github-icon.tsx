"use client"

import * as React from "react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button-newyork"

export function GithubIconLink() {
  const repoUrl = "https://github.com/caoboyeehaw/sample-labs";

  return (
    <Button asChild variant="ghost" size="icon">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <GitHubLogoIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Open GitHub Repo</span>
      </a>
    </Button>
  )
}
