<script>
    import Grid from "svelte-grid-responsive";
    import {onMount} from 'svelte';
    import {page} from '$app/stores'
    // @ts-ignore
    // @ts-ignore
    import {navigate} from "svelte-routing";
    import logo from "$lib/images/logoS&M.svg";
    import "../styles.css";
    import dashboardIcon from "$lib/images/icons/sideNav/dashboard.svg";
    import employesIcon from"$lib/images/icons/sideNav/team.svg";
    import taskIcon from "$lib/images/icons/sideNav/tasks.svg";
    import chatIcon from "$lib/images/icons/sideNav/chat.svg";
    import ticketIcon from "$lib/images/icons/sideNav/tickets.svg";
    import payslipIcon from "$lib/images/icons/sideNav/payslip.svg";
    import leavesIcon from "$lib/images/icons/sideNav/leaves.svg";
    import approvalIcon from "$lib/images/icons/sideNav/approvals.svg";

    onMount(() => {
        const userData = localStorage.getItem("userData");
        if(!userData){
            window.location.href = '/login';
        }
    })

    const sideNavList = [
        {
            id: 1,
            name: "Dashboard",
            icon: dashboardIcon,
            path: "/app/dashboard",
        },
        {
            id: 2,
            name: "Employees",
            icon: employesIcon,
            path: "/app/employes",
        },
        {
            id: 3,
            name: "My Tasks",
            icon: taskIcon,
            path: "/app/tasks",
        },
        {
            id: 4,
            name: "Chat",
            icon: chatIcon,
            path: "/app/chat",
        },
        {
            id: 5,
            name: "Tickets",
            icon: ticketIcon,
            path: "/app/tickets",
        },
        {
            id: 6,
            name: "Payslips",
            icon: payslipIcon,
            path: "/app/payslips",
        },
        {
            id: 8,
            name: "Leaves",
            icon: leavesIcon,
            path: "/app/leaves",
        },
        {
            id: 9,
            name: "Approvals",
            icon: approvalIcon,
            path: "/app/approvals",
        },
        {
            id: 10,
            name: "Holidays",
            icon: approvalIcon,
            path: "/app/holidays",
        },
        {
            id: 11,
            name: "Employ Roles",
            icon: leavesIcon,
            path: "/app/employapprovals",
        },
        {
            id: 12,
            name: "Registrations",
            icon: approvalIcon,
            path: "/app/registrations",
        },
        {
            id: 13,
            name: "Projects",
            icon: payslipIcon,
            path: "/app/projects",
        },
    ];

    /**
   * @type {string | null}
   */

</script>

<div class="sideNav" style="width:15%;">
    <a href="/app/dashboard">
        <div class="brand" style="cursor: pointer;">
            <Grid container gutter={15}>
                <Grid xs={4} md={4} lg={4}>
                    <img src={logo} alt="logo" width="80%">
                </Grid>
                <Grid xs={7} md={7} lg={7}>
                    <h2>Employe Portal</h2>
                </Grid>
            </Grid>
        </div>
    </a>
    <hr>
    <div class="navigations">
        {#each sideNavList as item}
            <a href={item.path}>
                <div class="item" aria-current={$page.url.pathname === item.path?"page":undefined}>
                    <Grid xs={12} md={2} lg={2}>
                        <img src={item.icon} alt="icon" width="55%">
                    </Grid>
                    <Grid xs={0} md={7} lg={7}>
                        <p>{item.name}</p>
                    </Grid>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    .sideNav{
        min-height: 100%;
        /* width: 15%; */
        border-radius: 0.2rem;
        background-color: var(--side-nav-color);
        padding: 1rem 0.5rem;
    }
    .brand{
        display: flex;
        align-items: center;
    }
    h2{
        font-size: 17px;
        margin: 0;
        font-weight: 600;
        color: var(--color-bg-2);
    }
    hr{
        margin: 1rem 0;
        border-color: var(--color-bg-2);
        border-width: 0.2px;
    }
    .item{
        background-color: transparent;
        display: flex;
        align-items: center;
        padding: 0.8rem 0 0.8rem 0.8rem;
        border-radius: 0.5rem;
        font-size: 20px;
        margin: 0.1rem 0;
        cursor: pointer;
    }
    .item p{
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 0.9rem;
    }
    .item:hover{
        background-color: var(--color-bg-3);
    }
    .item[aria-current ="page"]{
        background-color: var(--color-bg-4);
        color: var(--color-banner-text-2);
    }
    a{
        color: var(--color-text);
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
</style>