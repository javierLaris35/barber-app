import { createRootRoute, /*Link,*/ Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
//import { NavigationMenuDemo } from "@/components/Navbar/Navbar.tsx";
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';

export const Route = createRootRoute({
    component: () => (
        <div className='flex min-h-screen w-full flex-col bg-muted/40 sm:px-4'>
            {/* <NavigationMenuDemo /> */}
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header />
                <Outlet />
            </div>
            
            <TanStackRouterDevtools />
        </div>
    ),
})
