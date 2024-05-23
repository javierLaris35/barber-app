import { useMemo } from 'react'
import {Calendar, Views, DateLocalizer } from 'react-big-calendar'


const events = [
    {
        id: 0,
        title: 'Rebeca Molinedo',
        start: new Date(2024, 4, 14, 9, 0, 0),
        end: new Date(2024, 4, 14, 13, 0, 0),
        resourceId: 1,
    },
    {
        id: 1,
        title: 'Juan Omar Rubio',
        allDay: false,
        start: new Date(2024, 4, 14, 14, 0, 0),
        end: new Date(2024, 4, 14, 16, 30, 0),
        resourceId: 2,
    },
    {
        id: 2,
        title: 'Team lead meeting',
        start: new Date(2024, 4, 14, 8, 30, 0),
        end: new Date(2024, 4, 14, 12, 15, 0),
        resourceId: [2, 3],
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2024, 4, 14, 7, 0, 0),
        end: new Date(2024, 4, 14, 10, 45, 0),
        resourceId: 4,
    },
]

const resourceMap = [
    { barberId: 1, barberName: 'Pablo' },
    { barberId: 2, barberName: 'Sergio' },
    { barberId: 3, barberName: 'Carlos' },
]

export function ResourceTimeline({ localizer }: { localizer: DateLocalizer }) {
    const { defaultDate, views }: { defaultDate: Date; views: string[] } = useMemo(
        () => ({
            defaultDate: new Date(2024, 4, 14),
            views: ['day', 'week'],
        }),
        []
    )

    return (
        <>

            <Calendar
                defaultDate={defaultDate}
                defaultView={Views.DAY}
                className="max-w-[100%]"
                events={events}
                localizer={localizer}
                resourceIdAccessor="barberId"
                resources={resourceMap}
                resourceTitleAccessor="barberName"
                step={40}

                views={views}
            />
        </>
    )
}

