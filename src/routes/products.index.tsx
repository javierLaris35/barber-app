// import { DataTable } from '@/components/DataTable/DataTable'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@radix-ui/react-checkbox'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import {
    // createLazyFileRoute,
    Outlet } from '@tanstack/react-router'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from '@/components/Header/Header';
import TasksTable from '@/tasks/page.tsx';
import { createFileRoute } from '@tanstack/react-router'
import {Product} from "@/types/Product.tsx";


export const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "image",
        header: "",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("image")}</div>
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "description",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Description
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("description")}</div>,
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("type")}</div>
        ),
    },
    {
        accessorKey: "time",
        header: "Time",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("time")}</div>
        ),
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

// const fetchProducts = async () => {
//     const response = await axios.get('http://localhost:3000/api/products');
//     return response.data;
// };

const Index = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        // fetchData();
    }, []);

    console.log({
        products
    })

    return (
        <div>
            <Header title='Products' subTitle={`Here's a list of your products.`}/>
            {/*<DataTable */}
            {/*  columns={columns} */}
            {/*  data={products} */}
            {/*  columnToFilter='name' */}
            {/*  addButtonLabel='Add Product' */}
            {/*  linkTo='/products/product' */}
            {/*  addButton*/}
            {/*/>*/}
            <TasksTable />
            <Outlet />
        </div>
    );
}

export const Route = createFileRoute('/products/')({
    component: Index
})
