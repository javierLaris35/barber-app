import {Link} from "@tanstack/react-router";
import {CalendarDays, Home, Package, Package2, Settings, ShoppingCart, Users2} from "lucide-react";
import {TooltipProvider} from "@/components/ui/tooltip"
import SidebarItem from "@/components/Sidebar/SidebarItem.tsx";

const sidebarItems = [
    { name: 'Home', to: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Products', to: '/products', icon: <Package className="h-5 w-5" /> },
    { name: 'Orders', to: '/orders', icon: <ShoppingCart className="h-5 w-5" /> },
    { name: 'Customers', to: '/customers', icon: <Users2 className="h-5 w-5" /> },
    { name: 'Appointments', to: '/appointments', icon: <CalendarDays className="h-5 w-5" /> }
];

export default function Sidebar() {
    return (
        <TooltipProvider>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110"/>
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    {sidebarItems.map((item) => (
                        <SidebarItem key={item.name} name={item.name} to={item.to} icon={item.icon}/>
                    ))}
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <SidebarItem name="Settings" to="/settings" icon={<Settings className="h-5 w-5"/>}/>
                </nav>
            </aside>
        </TooltipProvider>
    )
}
