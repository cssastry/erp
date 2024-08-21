<script>
    // @ts-nocheck

    import Grid from "svelte-grid-responsive";
    import profileIcon from "$lib/images/icons/profile.svg";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { message } from "antd";
    import { getAll, update, add, getById } from "../../../api_calls/employes_api";
    import { getAll as departmentGetAll } from "../../../api_calls/department_api";
    import { rolegetAll } from "../../../api_calls/roles_api";

    let employes = [];
    let departments = [];
    let roles = [];

    let selectedDepartment = writable(null);
    let filteredRoles = writable([]);
    const selectedEmployeeId = writable(null);

    onMount(async () => {
        let data = await getAll();
        employes = data.data;
        let departmentData = await departmentGetAll();
        departments = departmentData.data;
        let roleData = await rolegetAll();
        roles = roleData.data;
    });

    const showpopup = writable({ visible: false });

    function togglepopup(employeeId) {
        selectedEmployeeId.set(employeeId);
        showpopup.update(popup => ({ ...popup, visible: !popup.visible }));
    }

    $: if ($selectedDepartment) {
        filteredRoles.set(roles.filter(role => role.departmentId._id === $selectedDepartment));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const role = formData.get('role');
        const status = 1;
        let id = $selectedEmployeeId;
        let data = {
            title,
            role,
            status
        }
        let response = await update(id, data);
        console.log(response);
        if (response.success) {
            message.success(response.message);
            let data = await getAll();
            employes = data.data;
        }
        showpopup.set({ visible: false });
    }

    const changeStatus = async (id, status) => {
        let payload = {
            status: status,
        }
        let response = await update(id, payload);
        console.log(response);
        if (response.success) {
            message.success(response.message);
            let data = await getAll();
            employes = data.data;
        } else {
            message.error(response.message);
        }
    }
</script>

<svelte:head>
    <title>Employ Registrations</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="leaves">
    <!-- popup -->
    {#if $showpopup.visible}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="popup-overlay" on:click={() => showpopup.set(false)}>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="popup" on:click={(e) => e.stopPropagation()}>
                <h2>Update Employ Details</h2>
                <form on:submit={handleSubmit}>
                    <select name="department" bind:value={$selectedDepartment} required>
                        <option value="" disabled selected>Select Department</option>
                        {#each departments as department}
                            <option value={department._id}>{department.title}</option>
                        {/each}
                    </select>
                    {#if $selectedDepartment}
                        <select name="role" required>
                            <option value="" disabled selected>Select Role</option>
                            {#each $filteredRoles as role}
                                <option value={role._id}>{role.title}</option>
                            {/each}
                        </select>
                    {/if}
                    <input type="text" name="title" placeholder="Enter Title" required>
                    <div class="form-button">
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    <div class="banner-text">
        <div class="head">
            <h6>Employ Registrations</h6>
        </div>
        <div class="leaves-list">
            <Grid container gutter={15}>
                {#each employes as item}
                    {#if item.status === 0}
                        <Grid xs={12} md={6} lg={6}>
                            <div class="leaves-tab">
                                <div class="leaves-head">
                                    <div class="data">
                                        <img src={profileIcon} alt="avatar">
                                        <div class="details">
                                            <p class="title">{item.email}</p>
                                            <p class="duration">{item.employeeId}</p>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="status approve buttons" on:click={() => togglepopup(item.employeeId)}>
                                            <p>Approve</p>
                                        </button>
                                        <button class="status reject buttons" on:click={changeStatus(item.employeeId, 9)}>
                                            <p>Reject</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    {/if}
                {/each}
            </Grid>
        </div>
    </div>
</div>

<style>
    p {
        margin: 0;
        padding: 0;
    }
    .leaves {
        background-color: var(--side-nav-color);
        min-height: 93%;
        padding: 1rem 2rem;
        border-radius: 0.3rem;
    }
    .banner-text h6 {
        font-size: 24px;
        color: var(--color-banner-text-1);
        margin: 0;
    }
    .banner-text p {
        font-size: 15px;
        color: var(--color-bg-1);
        margin-bottom: 0;
    }
    .head {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-bg-2);
    }
    .buttons button {
        cursor: pointer;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        border: none;
    }
    .buttons .approve {
        background-color: #249929;
    }
    .buttons .reject {
        background-color: #D70C0C;
    }
    .leaves-list {
        margin-top: 1.5rem;
    }
    .leaves-tab {
        background-color: var(--color-bg-3);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        overflow-y: scroll;
    }
    .leaves-head {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .data {
        display: flex;
        gap: 1rem;
    }
    .details .title {
        font-size: 1.2rem;
    }
    .details .duration {
        font-size: 0.8rem;
        color: var(--color-text);
    }
    .status p {
        font-size: 0.8rem;
    }
    .status {
        padding: 0.2rem 0.8rem;
        border-radius: 0.3rem;
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
    form input, form select {
        background-color: var(--color-text);
        padding: 0.8rem 0.8rem;
        border: none;
        margin-top: 0.2rem;
        border-radius: 0.5rem;
        color: var(--color-bg-4);
        font-size: 1rem;
    }
    form input::placeholder, form select::placeholder {
        color: var(--color-bg-4);
    }
    .popup h2 {
        margin-top: 0;
        color: var(--color-bg-0);
        font-size: 25px;
    }
    .form-button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    form select option {
        background-color: var(--color-bg-4);
        color: var(--color-bg-0);
    }
    form button {
    background-color: var(--color-banner-text-2);
    border: none;
    padding: 0.8rem 2.5rem;
    margin-top: 0.8rem;
    border-radius: 0.3rem;
    color: var (--color-bg-1);
    font-weight: 600;
    cursor: pointer;
    }
</style>