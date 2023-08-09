import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
}

// NOTES
// line 26 is this: https://fonts.google.com/specimen/Open+Sans/tester



export const metadata: Metadata = {
  title: 'WavLabs',
  description: 'Where Unreleased Music is Shared and AI-Generated Samples are Made.',
  
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:image" content="public\wavlabs-logo.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" />
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>

  )
}

