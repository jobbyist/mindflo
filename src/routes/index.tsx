import { createFileRoute } from '@tanstack/react-router'
import { MindFloLanding } from '../components/mindflo-landing'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return <MindFloLanding />
}
