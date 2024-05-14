import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavigationMenuDemo } from "@/components/Navbar/Navbar.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <NavigationMenuDemo />
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
