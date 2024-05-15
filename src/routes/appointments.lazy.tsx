import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/appointments')({
  component: () => <div>Hello /appointments!</div>
})