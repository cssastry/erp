<script>
    // @ts-nocheck
    
        import {writable} from "svelte/store";
        import { onMount } from 'svelte';
        import {message} from "antd";
        import Grid from "svelte-grid-responsive";
        import personIcon from "$lib/images/icons/profile.svg";
        import addIcon from "$lib/images/icons/add.svg";
        import {add, getAll} from "../../../api_calls/department_api";
        import {roleadd, rolegetAll} from "../../../api_calls/roles_api";
        
        let departments = [];
        let roles = [];

        onMount(async() => {
            const data = await getAll();
            departments = data.data;
            const roleData = await rolegetAll();
            roles = roleData.data
            console.log(roles);
        });
    
        /**
       * @param {{ target: { value: string; }; }} event
       */
        function handleProjectChange(event) {
            selectedProject.set(event.target.value);
        };
    
        const showPopup = writable({ visible: false, formType: 0 });
    
        function togglePopup(formType) {
            showPopup.update(popup => ({ ...popup, visible: !popup.visible, formType: formType }));
        }
    
        const handleDepartmentSubmit = async (event) => {
            event.preventDefault();
            const fromData = new FormData(event.target);
            const title = fromData.get("title");
            const formType = $showPopup.formType;
            let data = {
                title,
            };
            let response = await add(data);
            if(response.success){
                message.success(response.message);
                const data = await getAll();
                departments = data.data;
                showPopup.set({visible: false, formType: formType});
            } else {
                message.error(response.message);
            };
        };

        const handleRoleSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const title = formData.get("title");
            const department = formData.get("department");
            const formType = $showPopup.formType;
            let data = {
                title,
                departmentId: department,
            };
            let response = await roleadd(data);
            if(response.success){
                message.success(response.message);
                const roleData = await rolegetAll();
                roles = roleData.data;
                showPopup.set({visible: false, formType: formType});
            } else {
                message.error(response.message);
            };
        };
    
    </script>
    
    <svelte:head>
        <title>Tasks</title>
        <meta name="description" content="Svelte demo app" />
    </svelte:head>
    
    <div class="task">
        <!-- Popup -->
        {#if $showPopup.visible}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="popup-overlay" on:click={() => showPopup.set(false)}>
                <div class="popup" on:click={(e) => e.stopPropagation()}>
                    <h2>{($showPopup.formType === 0) ? 'Add Department' : 'Add Role'}</h2>
                    <form on:submit={($showPopup.formType === 0) ? handleDepartmentSubmit : handleRoleSubmit}>
                        {#if $showPopup.formType === 0}
                            <input type="text" name="title" placeholder="Enter Department Name" required>
                        {:else}
                            <select name="department" required>
                                <option value="" disabled selected>Select Department</option>
                                {#each departments as department}
                                    <option value={department._id}>{department.title}</option>
                                {/each}
                            </select>
                            <input type="text" name="title" placeholder="Enter Role" required>
                        {/if}
                        <div class="form-button">
                            <button type="submit">{($showPopup.formType === 0) ? "Add Department" : "Add Role"}</button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}
        <div class="banner-text">
            <div class="work">
                <Grid xs={12} md={6} lg={6}>
                    <div class="todo">
                        <div class="heading">
                            <p>Departments</p>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <img src={addIcon} alt="icon" on:click={() => togglePopup(0)}>
                        </div>
                        {#each departments as item}
                            <div class="data">
                                <div class="details">
                                    <p class="title">{item.title}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                    <div class="progress">
                        <div class="heading">
                            <p>Roles</p>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <img src={addIcon} alt="icon" on:click={() => togglePopup(1)}>
                        </div>
                        {#each roles as item}
                            <div class="data">
                                <div class="details">
                                    <p class="title">{item.title}</p>
                                    <p class="roleDepartment">{item.departmentId.title}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </Grid>
            </div>
        </div>
    </div>
    
    <style>
        .task{
            background-color: var(--side-nav-color);
            min-height: 89%;
            padding: 1rem 2rem;
            border-radius: 0.3rem;
        }
        .banner-text p{
            font-size: 15px;
            color: var(--color-bg-1);
            margin-bottom: 0;
        }
        .work{
            display: flex;
            margin-top: 1rem;
        }
        .todo, .progress{
            background-color: var(--color-bg-4);
            width: 90%;
            padding: 0.5rem 0.5rem;
            border-radius: 0.5rem;
        }
        .heading{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 0.2rem;
            border-bottom: 1px solid var(--color-bg-1);
        }
        .heading p{
            font-size: 20px;
            padding: 0;
            margin: 0;
            font-weight: 600;
        }
        .heading img{
            width: 7%;
            cursor: pointer;
        }
        .data{
            display: flex;
            justify-content: space-between;
            align-items: end;
            background-color: var(--color-bg-3);
            padding: 0.2rem 0.4rem;
            margin-top: 0.8rem;
        }
        .details p{
            padding: 0;
            margin: 0;
        }
        .details .title{
            font-size: 14px;
            font-weight: 500;
        }
        .roleDepartment{
            font-size: 10px !important;
            color: var(--color-text) !important;
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
        form input, form select{
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
        form select option {
            background-color: var(--color-bg-4);
            color: var(--color-bg-0);
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