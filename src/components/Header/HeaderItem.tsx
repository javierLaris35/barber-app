import React from 'react';
import {Link} from "@tanstack/react-router";

interface HeaderItemProps {
    name: string;
    to: string;
    icon: React.ReactNode;
}
function HeaderItem({name, to, icon}: HeaderItemProps) {
    return (
        <Link
            to={to}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
            {icon}
            {name}
        </Link>
    );
}

export default HeaderItem;
