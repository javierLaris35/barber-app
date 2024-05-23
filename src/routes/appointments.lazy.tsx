import {createLazyFileRoute} from '@tanstack/react-router'
import {ResourceTimeline} from "@/components/ResouceTimeline.tsx";
import {dayjsLocalizer} from "react-big-calendar";
import dayjs from 'dayjs';

export const Route = createLazyFileRoute('/appointments')({
    component:  Appointments
})

function Appointments() {

    const localizer = dayjsLocalizer(dayjs);

    return (
        <>
            <ResourceTimeline localizer={localizer}/>
        </>
    )
}
