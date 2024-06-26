<script>
// @ts-nocheck

    import Grid from "svelte-grid-responsive";
    import calenderIcon from "$lib/images/icons/calender.svg";
    import {writable} from "svelte/store";
    import { onMount } from "svelte";
    import {getById} from "../../../api_calls/leaves_api";

    let leaves = [];
    
    onMount(async() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        let data = await getById(userData.employeeId);
        leaves = data.data;
    })

    // @ts-ignore
    const formatDuration = (startDate, endDate) => {
        return `${startDate} - ${endDate}`
    }

    // @ts-ignore
    const getStatusText = (status) => {
        if (status === 0) return "Pending";
        else if (status === 1) return "Approved";
        else if (status === 2) return "Rejected";
        else return "Unknown";
    }

    const getStatusColor = (/** @type {number} */ status) => {
        if (status === 0) return "#AFA806";
        else if (status === 1) return "#249929";
        else if (status === 2) return "#D70C0C";
        else return "transparent";
    }

    const showpopup = writable({visible: false});

    function togglepopup() {
        showpopup.update(popup => ({ ...popup, visible: !popup.visible}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const startDate = formData.get('startDate');
        const endDate = formData.get('endDate');
        const reason = formData.get('reason');

        leaves.push({
            id: leaves.length + 1,
            title: title,
            startDate: startDate,
            endDate: endDate,
            status: status,
            reason: reason,
        });
        showpopup.set({visible: false});
    }

</script>

<svelte:head>
	<title>Leaves</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="leaves">
    <!-- popup -->
    {#if $showpopup.visible}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="popup-overlay" on:click={() => showpopup.set(false)}>
            <div class="popup" on:click={(e) => e.stopPropagation()}>
                <h2>Raise a Ticket</h2>
                <form on:submit={handleSubmit}>
                    <input type="text" name="title" placeholder="Enter Title" required>
                    <input type="date" name="startDate" placeholder="Start Date" required>
                    <input type="date" name="endDate" placeholder="End Date" required>
                    <textarea name="reason" placeholder="Enter Reason" rows="4" required></textarea>
                    <div class="form-button">
                        <button type="submit">Apply Leave</button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    <div class="banner-text">
        <div class="head">
            <h6>Leave Managment</h6>
            <div class="buttons">
                <button class="calender" on:click={() => window.location.href = '/app/calender'}>
                    <img src={calenderIcon} alt="">
                    Calender
                </button>
                <button class="leave" on:click={() => togglepopup()}>
                    Apply Leave
                </button>
            </div>
        </div>
        <div class="leaves-list">
            <Grid container gutter={15}>
                {#if leaves.length > 0}
                    {#each leaves as item}
                        <Grid xs={12} md={3} lg={3}>
                            <div class="leaves-tab">
                                <div class="leaves-head">
                                    <div class="details">
                                        <p class="title">{item.title}</p>
                                        <p class="duration">{formatDuration(item.startDate, item.endDate)}</p>
                                    </div>
                                    <div class="status" style="background-color: {getStatusColor(item.status)};">
                                        <p>{getStatusText(item.status)}</p>
                                    </div>
                                </div>
                                <p class="reason">{item.reason}</p>
                            </div>
                        </Grid>
                    {/each}
                {:else}
                    <p>No leaves applied</p>
                {/if}
            </Grid>
        </div>
    </div>
</div>

<style>
    p{
        margin: 0;
        padding: 0;
    }
    .leaves{
        background-color: var(--side-nav-color);
        min-height: 93%;
        padding: 1rem 2rem;
        border-radius: 0.3rem;
    }
    .banner-text h6{
        font-size: 24px;
        color: var(--color-banner-text-1);
        margin: 0;
    }
    .banner-text p{
        font-size: 15px;
        color: var(--color-bg-1);
        margin-bottom: 0;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }
    .buttons button{
        font-size: 16px;
        font-weight: 500;
        padding: 0.5rem 1.2rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
    .calender{
        background-color: transparent;
        border: 1px solid var(--color-special-text);
        color: var(--color-special-text);
    }
    .calender img{
        width: 13%;
    }
    .leave{
        background-color: var(--color-special-text);
        color: var(--color-bg-2);
        border: none;
    }
    .leaves-list{
        margin-top: 1.5rem;
    }
    .leaves-tab{
        background-color: var(--color-bg-3);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        min-height: 10rem;
        max-height: 10rem;
        overflow-y: scroll;
    }
    .leaves-head{
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0.5rem 0;
        border-bottom: 1px solid var(--color-bg-0);
    }
    .details .title{
        font-size: 1.2rem;
    }
    .details .duration{
        font-size: 0.8rem;
        color: var(--color-text);
    }
    .status p{
        font-size: 0.8rem;
    }
    .status{
        padding: 0.2rem 0.8rem;
        background-color: #249929;
        border-radius: 0.3rem;
    }
    .leaves-tab .reason{
        font-size: 0.7rem;
        color: var(--color-text);
    }
    .popup-overlay {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.632);
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .popup {
            background-color: var(--color-bg-3);
            width: 50%;
            height: auto;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .popup form {
            display: grid;
            grid-template-columns: auto;
            grid-row-gap: 10px;
        }
        form input, form textarea{
            background-color: var(--color-text);
            padding: 0.8rem 0.8rem;
            border: none;
            margin-top: 0.2rem;
            border-radius: 0.5rem;
            color: var(--color-bg-4);
            font-size: 1rem;
        }
        form input::placeholder, form textarea::placeholder {
            color: var(--color-bg-4);
        }
        .popup h2 {
            margin-top: 0;
            color: var(--color-bg-0);
            font-size: 25px;
        }
        .form-button{
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
        form button{
            background-color: var(--color-banner-text-2);
            border: none;
            padding: 0.8rem 2.5rem;
            margin-top: 0.8rem;
            border-radius: 0.3rem;
            color: var(--color-bg-1);
            font-weight: 600;
            cursor: pointer;
        }
</style>