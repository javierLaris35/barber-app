import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute('/about')({
    component: About,
})

export function About() {
    return (
        <div> Hellow from about!</div>
    )
  }
