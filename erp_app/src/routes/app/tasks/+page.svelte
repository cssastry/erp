<script>
// @ts-nocheck

    import {writable} from "svelte/store";
    import Grid from "svelte-grid-responsive";
    import personIcon from "$lib/images/icons/profile.svg";
    import addIcon from "$lib/images/icons/add.svg";

    const projects = ["SRBS", "JagBandhu", "Nehwe", "ERP Solutions"]

    const taskList = [
        {
            id: 1,
            project: projects[0],
            status: 0,
            title: "Task 1",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 2,
            project: projects[0],
            status: 0,
            title: "Task 2",
            duration: "5 hours",
            assigned: personIcon,
        },
        {
            id: 3,
            project: projects[0],
            status: 1,
            title: "Task 3",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 4,
            project: projects[0],
            status: 2,
            title: "Task 4",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 5,
            project: projects[0],
            status: 0,
            title: "Task 5",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 6,
            project: projects[0],
            status: 0,
            title: "Task 6",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 7,
            project: projects[0],
            status: 2,
            title: "Task 7",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 8,
            project: projects[1],
            status: 0,
            title: "Task 8",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 9,
            project: projects[1],
            status: 1,
            title: "Task 9",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 10,
            project: projects[1],
            status: 2,
            title: "Task 10",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 11,
            project: projects[1],
            status: 1,
            title: "Task 11",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 12,
            project: projects[1],
            status: 2,
            title: "Task 12",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 13,
            project: projects[2],
            status: 0,
            title: "Task 13",
            duration: "12 hours",
            assigned: personIcon,
        },
        {
            id: 14,
            project: projects[2],
            status: 0,
            title: "Task 14",
            duration: "12 hours",
            assigned: personIcon,
        },
    ]

    const selectedProject = writable(projects[0]);

    /**
   * @type {string}
   */
    let selectedProjectValue;
    selectedProject.subscribe(value => {
        selectedProjectValue = value;
    });

    $: todoTasks = taskList.filter(task => task.project === selectedProjectValue && task.status === 0);
    $: progressTasks = taskList.filter(task => task.project === selectedProjectValue && task.status === 1);
    $: doneTasks = taskList.filter(task => task.project === selectedProjectValue && task.status === 2);

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

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const project = formData.get('project');
        const title = formData.get('title');
        const duration = formData.get('duration');
        const formType = $showPopup.formType;
        const status = formType === 0 ? 0 : 1;

        taskList.push({
            id: taskList.length + 1,
            project: project,
            status: status,
            title: title,
            duration: duration,
            assigned: personIcon,
        });
        showPopup.set({ visible: false, formType: formType });
    }

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
                            <option value={project}>{project}</option>
                        {/each}
                    </select>
                    <input type="text" name="title" placeholder="Enter Title" required>
                    <input type="text" name="duration" placeholder="Enter Duration" required>
                    <div class="form-button">
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    <div class="banner-text">
        <div class="head">
            <h6>Projects /</h6>
            <select bind:value={$selectedProject} on:change={handleProjectChange}>
                {#each projects as project}
                    <option value={project}>{project}</option>
                {/each}
            </select>
        </div>
        <div class="work">
            <Grid xs={12} md={4} lg={4}>
                <div class="todo">
                    <div class="heading">
                        <p>ToDo</p>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <img src={addIcon} alt="icon" on:click={() => togglePopup(0)}>
                    </div>
                    {#each todoTasks as task}
                        <div class="data">
                            <div class="details">
                                <p class="title">{task.title}</p>
                                <p class="duration">{task.duration}</p>
                            </div>
                            <img src={task.assigned} alt="assigned">
                        </div>
                    {/each}
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
                    {#each progressTasks as task}
                        <div class="data">
                            <div class="details">
                                <p class="title">{task.title}</p>
                                <p class="duration">{task.duration}</p>
                            </div>
                            <img src={task.assigned} alt="assigned">
                        </div>
                    {/each}
                </div>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
                <div class="done">
                    <div class="heading">
                        <p>Done</p>
                    </div>
                    {#each doneTasks as task}
                        <div class="data">
                            <div class="details">
                                <p class="title">{task.title}</p>
                                <p class="duration">{task.duration}</p>
                            </div>
                            <img src={task.assigned} alt="assigned">
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
    .details .duration{
        font-size: 12px;
        color: var(--color-text);
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