<script>
// @ts-nocheck
    import Grid from "svelte-grid-responsive";
    import {page} from '$app/stores'
    import {onMount} from 'svelte';
    import menuIcon from "$lib/images/icons/menu.svg";
    import notificationIcon from "$lib/images/icons/notification.svg";
    import profileIcon from "$lib/images/icons/profile.svg";
    import "../styles.css"
    import calendarIcon from "$lib/images/icons/sideNav/viewcalender.svg";
</script>

<div class="header">
    <Grid container gutter={15}>
        <Grid xs={1} md={1} lg={1}>
            <div class="">
                <img src={menuIcon} alt="icon" width="20%" style="margin-top: 0.8rem; cursor: pointer">
            </div>
        </Grid>
        <Grid xs={7} md={7} lg={7}>
            <p>S&M Scholarly Solutions Employe Portal</p>
        </Grid>
        <Grid xs={4} md={4} lg={4}>
            <!-- svelte-ignore missing-declaration -->
            <div class="icons">
                <a href="/app/calender">
                    <div class="icon-div"  aria-current={$page.url.pathname === "/app/calender"?"page":undefined}>
                        <img src={calendarIcon} alt="icon" width="50%">
                    </div>
                </a>
                <a href="/app/notifications">
                    <div class="icon-div" aria-current={$page.url.pathname === "/app/notifications"?"page":undefined}>
                        <img src={notificationIcon} alt="icon" width="50%">
                    </div>
                </a>
                <a href="/app/profile">
                    <div class="icon-div" aria-current={$page.url.pathname === "/app/profile"?"page":undefined}>
                        <img src={profileIcon} alt="icon" width="50%">
                    </div>
                </a>
            </div>
        </Grid>
    </Grid>
</div>

<style>
    .header{
        background-color: var(--side-nav-color);
        padding: 0 0.5rem;
        margin-bottom: 0.3rem;
        border-radius: 0.2rem;
        height: 3rem;
        display: flex;
        align-items: center;
    }
    p{
        margin: 0.25rem 0 0 0;
        padding: 0;
        font-size: 1.2rem;
        color: var(--color-bg-2);
    }
    .icons{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .icon-div{
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-bg-3);
        margin: 0 0.5rem;
        border-radius: 50%;
    }
    .icon-div[aria-current = "page"]{
        background-color: var(--color-banner-text-2);
    }
</style>