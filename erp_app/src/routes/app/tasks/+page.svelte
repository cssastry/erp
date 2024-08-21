<script>
// @ts-nocheck

    import {writable} from "svelte/store";
    import Grid from "svelte-grid-responsive";
    import personIcon from "$lib/images/icons/profile.svg";
    import addIcon from "$lib/images/icons/add.svg";
    import {message} from "antd";
    import { onMount } from "svelte";
    import {getAll} from "../../../api_calls/projects_api";
    import {getAll as getAllEmployes} from "../../../api_calls/employes_api";
    import {getAllTasks, addTasks, updateTasks, getTaskById} from "../../../api_calls/tasks_api";

    let projects = [];
    let sprints = [];
    let employes = [];
    let type = ["Issue", "Bug"];
    let priorityLevels = [
        {
            id: 1,
            name: "Low",
        },
        {
            id: 2,
            name: "Medium",
        },
        {
            id: 3,
            name: "High",
        },
    ];
    let status = [
        {
            id: 0,
            name: "TODO",
        },
        {
            id: 1,
            name: "Progress",
        },
        {
            id: 2,
            name: "Done",
        },
    ];

    let taskList = []

    onMount(async() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        let projectsData = await getAll();
        projects = projectsData.data;
        let employesData = await getAllEmployes();
        employes = employesData.data;
        let taskData = await getTaskById(userData.employeeId);
        taskList = taskData.data;
    });

    const getBackgroundColor = (type) => {
        if(type === "Bug"){
            return "#D70C0C";
        }
        if(type === "Issue"){
            return "#007DE9"
        }
    }

    const selectedProject = writable(projects[0]);

    /**
   * @type {string}
   */
    let selectedProjectValue;
    selectedProject.subscribe(value => {
        selectedProjectValue = value;
    });

    $: todoTasks = taskList.filter(task => task.projectId._id === selectedProjectValue && task.status === 0);
    $: progressTasks = taskList.filter(task => task.projectId._id === selectedProjectValue && task.status === 1);
    $: doneTasks = taskList.filter(task => task.projectId._id === selectedProjectValue && task.status === 2);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = JSON.parse(localStorage.getItem("userData"));
        const formData = new FormData(event.target);
        const project = formData.get('project');
        const title = formData.get('title');
        const points = formData.get('points');
        const priority = formData.get('priority');
        const assignedTo = formData.get('assignedTo');
        const type = formData.get('type');
        const description = formData.get('description');
        const formType = $showPopup.formType;

        let data = {
            title: title,
            description: description,
            points: points,
            priority: priority,
            createdBy: userData.employeeId,
            assignedTo: assignedTo,
            projectId: project,
            type: type,
            sprintId: 1,
        };
        let response = await addTasks(data);
        if(response.success){
            message.success(response.message);
            showPopup.set({ visible: false, formType: formType });
            let taskData = await getAllTasks();
            taskList = taskData.data;
        } else {
            message.error(response.error);
        }
    }

    const taskDetailsPopup = writable({ visible: false, task: null });
    
    const handleTaskClick = (task) => {
        taskDetailsPopup.set({ visible: true, task: task });
    };

    const handleStatusChange = async (event, task) => {
        const newStatus = event.target.value;
        let data = {
            status: newStatus,
        };
        let response = await updateTasks(task._id, data)
        if(response.success) {
            let userData = JSON.parse(localStorage.getItem("userData"));
            message.success(response.message);
            let taskData = await getTaskById(userData.employeeId);
            taskList = taskData.data;
        } else {
            message.error(response.message);
        }
    }

    const getPriorityName = (priorityId) => {
        const priority = priorityLevels.find(p => p.id === priorityId);
        return priority ? priority.name : "Unknown";
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
                <h2>{($showPopup.formType === 0) ? 'Add Task to TODO' : 'Add Task to PROGRESS'}</h2>
                <form on:submit={handleSubmit}>
                    <select name="project" required>
                        <option value="" disabled selected hidden>Choose Project</option>
                        {#each projects as project}
                            <option value={project._id}>{project.title}</option>
                        {/each}
                    </select>
                    <input type="text" name="title" placeholder="Enter Title" required>
                    <input type="text" name="points" placeholder="Enter Points" required>
                    <select name="priority" required>
                        <option value="" disabled selected hidden>Choose Priority</option>
                        {#each priorityLevels as priority}
                            <option value={priority.id}>{priority.name}</option>
                        {/each}
                    </select>
                    <select name="assignedTo" required>
                        <option value="" disabled selected hidden>Assign To</option>
                        {#each employes as employe}
                            <option value={employe.employeeId}>{employe.email}</option>
                        {/each}
                    </select>
                    <select name="type" required>
                        <option value="" disabled selected hidden>Choose Type</option>
                        {#each type as t}
                            <option value={t}>{t}</option>
                        {/each}
                    </select>
                    <textarea name="description" placeholder="Enter Description"></textarea>
                    <div class="form-button">
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    {#if $taskDetailsPopup.visible}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="popup-overlay" on:click={() => taskDetailsPopup.set({ visible: false, task: null })}>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="popup" on:click={(e) => e.stopPropagation()}>
                {#if $taskDetailsPopup.task}
                    <div class="heading">
                        <div class="titleType" style="display: flex; gap: 0.4rem">
                            <h2>{$taskDetailsPopup.task.title}</h2>
                            <p class="type" style="background-color: {getBackgroundColor($taskDetailsPopup.task.type)};">{$taskDetailsPopup.task.type}</p>
                        </div>
                        <select name="status" value={$taskDetailsPopup.task.status} on:change={(event) => handleStatusChange(event, $taskDetailsPopup.task)} required>
                            {#each status as status}
                                <option value={status.id}>{status.name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="details">
                        <div class="level">
                            <p>Priority: <span>{getPriorityName($taskDetailsPopup.task.priority)}</span></p>
                            <p>Points: <span>{$taskDetailsPopup.task.points}</span></p>
                            <p>Created By: <span>{$taskDetailsPopup.task.createdBy}</span></p>
                        </div>
                        <p class="desc">
                            {$taskDetailsPopup.task.description}
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    {/if}

    <div class="banner-text">
        <div class="head">
            <h6>Projects /</h6>
            <select bind:value={$selectedProject} on:change={handleProjectChange}>
                <option value="" disabled selected>Select Project</option>
                {#each projects as project}
                    <option value={project._id}>{project.title}</option>
                {/each}
            </select>
        </div>
        <div class="work">
            {#if selectedProjectValue}
                <Grid xs={12} md={4} lg={4}>
                    <div class="todo">
                        <div class="heading">
                            <p>ToDo</p>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <img src={addIcon} alt="icon" on:click={() => togglePopup(0)}>
                        </div>
                        {#if todoTasks.length > 0}
                            {#each todoTasks as task}
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <!-- svelte-ignore a11y-no-static-element-interactions -->
                                <div class="data" on:click={() => {handleTaskClick(task)}}>
                                    <div class="details">
                                        <p class="title">{task.title}</p>
                                        <p class="duration" style="background-color: {getBackgroundColor(task.type)};">{task.type}</p>
                                    </div>
                                    <img src={task.assigned} alt="assigned">
                                </div>
                            {/each}
                        {:else}
                            <p>You have no tasks</p>
                        {/if}
                    </div>
                </Grid>
                <Grid xs={12} md={4} lg={4}>
                    <div class="progress">
                        <div class="heading">
                            <p>Progress</p>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <img src={addIcon} alt="icon" on:click={() => togglePopup(1)}>
                        </div>
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        {#if progressTasks.length > 0}
                            {#each progressTasks as task}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="data" on:click={() => {handleTaskClick(task)}}>
                                    <div class="details">
                                        <p class="title">{task.title}</p>
                                        <p class="duration" style="background-color: {getBackgroundColor(task.type)};">{task.type}</p>
                                    </div>
                                    <img src={task.assigned} alt="assigned">
                                </div>
                            {/each}
                        {:else}
                            <p>You have no tasks</p>
                        {/if}
                    </div>
                </Grid>
                <Grid xs={12} md={4} lg={4}>
                    <div class="done">
                        <div class="heading">
                            <p>Done</p>
                        </div>
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        {#if doneTasks.length > 0}
                            {#each doneTasks as task}
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <div class="data" on:click={() => {handleTaskClick(task)}}>
                                    <div class="details">
                                        <p class="title">{task.title}</p>
                                        <p class="duration" style="background-color: {getBackgroundColor(task.type)};">{task.type}</p>
                                    </div>
                                    <img src={task.assigned} alt="assigned">
                                </div>
                            {/each}
                        {:else}
                            <p>You have no tasks</p>
                        {/if}
                    </div>
                </Grid>
            {:else}
                <p>Please select the project</p>
            {/if}
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
        gap: 0.5rem;
    }
    .head select{
        border: none;
        background-color: var(--color-bg-4);
        color: var(--color-bg-1);
        padding: 0.2rem 0.5rem;
        border-radius: 0.2rem;
        cursor: pointer;
    }
    .work{
        display: flex;
        margin-top: 1rem;
    }
    .todo, .progress, .done{
        background-color: var(--color-bg-4);
        width: 90%;
        padding: 0.5rem 0.5rem;
        border-radius: 0.5rem;
    }
    .heading{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid var(--color-bg-1);
    }
    .heading h2{
        padding: 0;
        margin: 0;
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
    .details .duration{
        font-size: 12px;
        color: var(--color-bg-0);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        margin-top: 0.3rem;
        border-radius: 0.3rem;
        font-weight: 500;
    }
    .data img{
        width: 6%;
        padding: 0.5rem;
        height: 1.2rem;
        width: 1.2rem;
        background-color: var(--color-bg-4);
        border-radius: 50%;
    }
    .done .title{
        text-decoration: line-through;
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
    select{
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
    select::placeholder{
        color: var(--color-bg-4);
    }
    form select option {
        background-color: var(--color-bg-4);
        color: var(--color-bg-0);
    }
    select option {
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
    .details{
        margin-top: 1rem;
    }
    .level{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .level p span{
        font-weight: 500;
        color: var(--color-bg-1);
    }
    .heading .type{
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-bg-0);
        padding: 0.1rem 0.8rem;
        border-radius: 0.5rem;
    }
    .details .desc{
        margin-top: 1rem;
        color: var(--color-bg-2);
    }
</style>