/*import {
  CalendarDays,
  Home,
  Package,
  ShoppingCart,
  Users2
} from "lucide-react"*/

import { UserNav } from "../UserNav/UserNav";

/*const headerLinks = [
  { name: 'Home', to: '/', icon: <Home className="h-5 w-5" /> },
  { name: 'Products', to: '/products', icon: <Package className="h-5 w-5" /> },
  { name: 'Orders', to: '/orders', icon: <ShoppingCart className="h-5 w-5" /> },
  { name: 'Customers', to: '/customers', icon: <Users2 className="h-5 w-5" /> },
  { name: 'Appointments', to: '/appointments', icon: <CalendarDays className="h-5 w-5" /> }
];*/

interface HeaderProps {
  title: string;
  subTitle?: string;
}

export default function Header({title, subTitle}: HeaderProps) {
    return (
      <div className="flex items-center justify-between space-y-2 mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">
            {subTitle}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
    )
}
