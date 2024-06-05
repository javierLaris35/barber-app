// import { promises as fs } from "fs"
// import path from "path"
// import { Metadata } from "next"
// import Image from "next/image"
// import { z } from "zod"

import {columns} from "./components/columns";
import {DataTable} from "./components/data-table";
import data from './data/tasks.json';
import {Product} from "@/types/Product.tsx";

const products: Product[] = [
    {
        id: '1',
        name: 'Product 1',
        price: 10,
        image: 'https://placehold.co/400',
        description: 'Description 1',
        type: 'Type 1',
        time: '10:00',
        status: 'active',
    },
    {
        id: '2',
        name: 'Product 2',
        price: 20,
        image: 'https://placehold.co/400',
        description: 'Description 2',
        type: 'Type 2',
        time: '10:00',
        status: 'active',
    },
]


export default function TaskPage() {

    const tasks = data;

    return (
        <>
            <DataTable data={products} columns={columns}/>
        </>
    )
}
