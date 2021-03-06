<script lang='ts'>
import { defineComponent } from "vue";
import "@fullcalendar/core/vdom"; // solve problem with Vite
import FullCalendar, {
  CalendarOptions,
  EventApi,
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

const Demo = defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        locale: "zh-cn",
        // 设置颜色
        eventBackgroundColor: "rgba(45, 140, 240, 0.149019607843137)",
        // eventBorderColor: "rgba(45, 140, 240, 1)",
        eventTextColor: "#1C2C51",
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false, // 设置时间为24小时
        },
        initialView: "dayGridMonth",
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        // eventColor: "#378006",
        weekends: true,
        // 在日历中选择某个时间之后触发该回调函数。
        select: this.handleDateSelect,
        // 当点击日历中某个事件的时候触发 eventClick 回调：
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:     */
        eventAdd: (event) => {
          console.log("添加数据", event);
        },
        eventChange: () => {
          console.log("更改数据");
        },
        eventRemove: () => {
          console.log("删除数据");
        },
      } as unknown as CalendarOptions,
      currentEvents: [] as EventApi[],
    };
  },
  methods: {
    // 是否显示周六周日
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    // 在日历中选择某个时间之后触发该回调函数。
    handleDateSelect(selectInfo: DateSelectArg) {
      console.log(selectInfo);
      let title = prompt("请输入您要添加的日程");
      let calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); // clear date selection
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      }
    },
    // 当点击日历中某个事件的时候触发 eventClick 回调：
    handleEventClick(clickInfo: EventClickArg) {
      if (
        confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        clickInfo.event.remove();
      }
    },
    handleEvents(events: EventApi[]) {
      this.currentEvents = events;
    },
  },
});
export default Demo;
</script>

<template>
  <div class="demo-app">
    <div class="demo-app-sidebar">
      <!-- <div class="demo-app-sidebar-section">
        <label>
          <input type="checkbox" :checked="calendarOptions.weekends" @change="handleWeekendsToggle" />显示周末
        </label>
      </div>-->
      <div class="demo-app-sidebar-section">
        <h2>All Events ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for="event in currentEvents" :key="event.id">
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="demo-app-main">
      <FullCalendar class="demo-app-calendar" locale="zh-cn" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='scss'>
.demo-app {
  touch-action: none;
  display: flex;
  height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;

  h2 {
    margin: 0;
    font-size: 16px;
  }

  ul {
    margin: 0;
    /* padding: 0 0 0 1.5em; */
  }

  li {
    margin: 1.5em 0;
    margin-left: -20px !important;
    list-style-type: none;
  }

  b {
    /* used for event dates/times */
    margin-right: 3px;
  }

  .demo-app-sidebar {
    /* overflow-x: auto; */
    overflow: hidden;
    position: relative;
    width: 300px;
    line-height: 1.5;
    background: #eaf9ff;
    border-right: 1px solid #d3e2e8;
  }

  .demo-app-sidebar-section {
    width: 310px;
    position: absolute;
    right: -17px;
    box-sizing: border-box;
    height: 900px;
    overflow: auto;
    padding-right: 2em;
    text-align: left;
    padding-bottom: 100px;
  }

  .demo-app-main {
    flex-grow: 1;
    padding: 3em;
  }

  .fc {
    /* the calendar root */
    max-width: 1100px;
    margin: 0 auto;
  }
}
</style>
