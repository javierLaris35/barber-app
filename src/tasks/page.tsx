// import { promises as fs } from "fs"
// import path from "path"
// import { Metadata } from "next"
// import Image from "next/image"
// import { z } from "zod"

import {columns} from "./components/columns";
import {DataTable} from "./components/data-table";
import data from './data/tasks.json';

export default function TaskPage() {

    const tasks = data;

    return (
        <>
            <DataTable data={tasks} columns={columns}/>
        </>
    )
}
