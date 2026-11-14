import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#172b2b' },
      { name: 'description', content: 'MindFlo offers a thoughtful, supportive space to pause, gain perspective and move forward with greater clarity. Led by Florence Kaunda.' },
      { property: 'og:title', content: 'MindFlo — Make space for a clearer mind' },
      { property: 'og:description', content: 'A thoughtful space to pause, understand and move forward.' },
      { title: 'MindFlo — Make space for a clearer mind' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return <RootDocument><Outlet /><Scripts /></RootDocument>
}

function RootDocument({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}</body></html>
}
