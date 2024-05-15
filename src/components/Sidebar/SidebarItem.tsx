import React from 'react';
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Link} from "@tanstack/react-router";

interface SidebarItemProps {
    name: string;
    to: string;
    icon: React.ReactNode;
}

function SidebarItem({name, to, icon}: SidebarItemProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    to={to}
                    activeProps={{className: 'bg-accent text-accent-foreground'}}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    {icon}
                    <span className="sr-only">{name}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{name}</TooltipContent>
        </Tooltip>
    );
}

export default SidebarItem;
