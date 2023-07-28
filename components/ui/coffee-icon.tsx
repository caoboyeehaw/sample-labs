"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button-newyork"
import { Icons } from "@/components/icons"

export function CoffeeIconLink() {
  const repoUrl = "https://www.buymeacoffee.com/caoboyeehaw";

  return (
    <Button asChild variant="ghost" size="icon">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Icons.coffee className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Open GitHub Repo</span>
      </a>
    </Button>
  )
}
