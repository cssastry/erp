<!-- <script>
    import Calendar from "svelte-calendar";

    let selectedDate = new Date();
    let events = [
        { date: new Date('2024-05-05'), title: 'Event 1' },
        { date: new Date('2024-05-10'), title: 'Event 2' }
    ];

    // @ts-ignore
    function handleDateClick(date) {
        console.log('Clicked on date:', date);
    }
</script>

<div class="calendar">
    <Calendar {selectedDate} {events} on:dateClick={handleDateClick}/>
</div>

<style>
    .calendar {
        background-color: var(--side-nav-color);
        min-height: 93%;
        padding: 0 5rem;
        border-radius: 0.3rem;
    }
</style> -->


<script>
    import { onMount } from 'svelte';
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';

    onMount(() => {
        const calendarEl = document.getElementById('calendar');

        // @ts-ignore
        const calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin],
            initialView: 'dayGridMonth',
            events: [
                { title: 'Event 1', date: '2024-05-01' },
                { title: 'Event 2', date: '2024-05-02' }
            ],
            eventTextColor: 'blue', // Change event text color
            titleFormat: { // Change header text color
                color: 'green'
            },
            dayRender: function(/** @type {{ date: any; el: { classList: { add: (arg0: string) => void; }; }; }} */ arg) {
                const date = arg.date;
                const dayOfWeek = date.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    arg.el.classList.add('holiday'); // Apply holiday class to weekends
                }
            }
        });

        calendar.render();
    });
</script>

<svelte:head>
	<title>Calender</title>
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
        background-color: var(--color-special-text); /* Change background color for weekends */
    }
</style>
