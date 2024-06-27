<script>
    import { onMount } from 'svelte';
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';
    // @ts-ignore
    import { getById } from "../../../api_calls/leaves_api";
    // @ts-ignore
    import { getAll } from "../../../api_calls/holidays_api";

    onMount(async () => {
        // @ts-ignore
        const userData = JSON.parse(localStorage.getItem("userData"));
        let leavesData = await getById(userData.employeeId);
        // @ts-ignore
        let holidaysData = await getAll();
        // @ts-ignore
        let leaveEvents = [];
        // @ts-ignore
        let filteredLeaves = leavesData.data.filter(leave => leave.status === 1);
        // @ts-ignore
        filteredLeaves.forEach(leave => {
            let currentDate = new Date(leave.startDate);
            let endDate = new Date(leave.endDate);
            while (currentDate <= endDate) {
                leaveEvents.push({
                    title: leave.title,
                    start: currentDate.toISOString().split('T')[0],
                    allDay: true,
                    color: 'blue' 
                });
                currentDate.setDate(currentDate.getDate() + 1);
            }
        });

        // @ts-ignore
        holidaysData.data.forEach(holiday => {
            holiday.color = 'green';
        });

        const calendarEl = document.getElementById('calendar');

        // @ts-ignore
        const calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin],
            initialView: 'dayGridMonth',
            // @ts-ignore
            events: leaveEvents.concat(holidaysData.data),
            eventDidMount: function(info) {
                if (info.event.extendedProps.color) {
                    info.el.style.backgroundColor = info.event.extendedProps.color;
                }
            },
            dayCellDidMount: function(arg) {
                const date = arg.date;
                const dayOfWeek = date.getDay(); 
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    arg.el.classList.add('holiday');
                }
            }
        });

        calendar.render();
    });
</script>

<svelte:head>
    <title>Calendar</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="calendar">
    <div class="holiday"></div>
</div>  

<style>
    #calendar {
        background-color: var(--side-nav-color);
        max-height: 70%;
        padding: 1rem 5rem;
        border-radius: 0.3rem;
    }
    
    .holiday {
        background-color: var(--color-special-text);
    }
</style>
