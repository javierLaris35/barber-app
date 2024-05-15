import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute('/about')({
    component: About,
})

export function About() {
    return (
        <div> Hello from about!</div>
    )
  }
