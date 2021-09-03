/*
 * @Author: your name
 * @Date: 2021-08-16 09:58:15
 * @LastEditTime: 2021-08-31 11:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\BarChart\event-utils.ts
 */
import { EventInput } from '@fullcalendar/vue3'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [

    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-08-31" + 'T12:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-01" + 'T12:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-01" + 'T13:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-01" + 'T14:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-01" + 'T15:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-01" + 'T16:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-01" + 'T17:00:00'
    },
    {
        id: createEventId(),
        title: '视频热线',
        start: "2021-09-02" + 'T09:00:00'
    },

]

export function createEventId() {
    return String(eventGuid++)
}
