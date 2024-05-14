/*import { Badge } from '@/components/ui/badge'
import { MoreHorizontal, Package2 } from "lucide-react"
import { Button } from '../ui/button'*/

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

/*import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'*/


export interface TableHeader {
    name: string;
    style: string;
    child?: React.ReactNode;
}

interface TableProps<T extends object> {
    title: string;
    description: string;
    header: TableHeader[];
    elements: T[]
}

export default function TableComponent<T extends object>(props: TableProps<T>) {
    return (
        <Card>
        <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>
            {props.description}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        { props.header &&  props.header.map( item => {
                            return (
                            <TableHead className={item.style}>
                                {item.name}
                                {item.child}
                            </TableHead>
                            )
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        {props.elements && props.elements.map((element, index) => (
                            <TableRow key={index}>
                                { Object.values(element).map((property, index) => (
                                    <TableCell key={index}>{property}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                        {/*<TableCell className="hidden sm:table-cell">
                            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        </TableCell>
                        <TableCell className="font-medium">
                            Laser Lemonade Machine
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline">Draft</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">$499.99</TableCell>
                        <TableCell>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>*/}
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
        <CardFooter>
            <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
        </CardFooter>
        </Card>
    )
}