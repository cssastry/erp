<script>
// @ts-nocheck

    import Grid from "svelte-grid-responsive";
    import {writable} from "svelte/store";
    import { onMount } from "svelte";
    import { message } from "antd";
    import employ from "$lib/employes/1.jpg";
    import mailIcon from "$lib/images/icons/mail.svg";
    import phoneIcon from "$lib/images/icons/phone.svg";
    import personIcon from "$lib/images/icons/person.svg";
    import addIcon from "$lib/images/icons/add.svg";
    import Chart from "chart.js/auto"
    import AddDocument from "./addDocuments.svelte";

    const formData = {
        oldPassword: '',
        newPassword: ''
    }

    const handleSubmit = () => {
        message.success("password changed successfully");
        console.log(formData);
    }

    const employContactData = [
        {
            id: 1,
            name: "Employ Name",
            icon: personIcon,
        },
        {
            id: 2,
            name: "1234567890",
            icon: phoneIcon,
        },
        {
            id: 3,
            name: "employ@gmail.com",
            icon: mailIcon,
        },
    ];

    const teckStack = ["Node JS", "Express JS", "SQL", "GCP", "AWS"];

    const projects = [
        {
            id: 1,
            name: "JagBandhu",
            client: "Client Name",
            teckStack: ["Node JS", "Express JS", "SQL", "Mongo DB"],
        },
        {
            id: 2,
            name: "Nehwe",
            client: "Client Name",
            teckStack: ["Node JS", "Express JS", "SQL"],
        },
        {
            id: 3,
            name: "SRBS",
            client: "Client Name",
            teckStack: ["Node JS", "Express JS", "Mongo DB"],
        },
    ];

    const documents = ["Offer Letter", "Joining Letter", "Increament Offer", "Certification of CS50"];

    let chart;

    const totalTasks = 800;
    const completedTasks = 720;
    const remainingTasks = totalTasks - completedTasks;

    onMount(() => {
        const ctx = document.getElementById('chart');
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [{
                    label: 'Tasks',
                    data: [completedTasks, remainingTasks],
                    backgroundColor: [
                        '#ff4a6a', // Completed tasks color
                        '#011328'  // Incomplete tasks color
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
            }
        });
    });
    
    const showPopup = writable({ visible: false, formType: 0 });

    function togglePopup(formType) {
        showPopup.update(popup => ({ ...popup, visible: !popup.visible, formType: formType }));
    }

    function handleDocSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const formType = $showPopup.formType;
        const file = formData.get('file');

        documents.push({
            id: documents.length + 1,
            title: title,
            file: file,
        });
        showPopup.set({ visible: false, formType: formType });
    }

</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="profile">
    <!-- Popup -->
    {#if $showPopup.visible}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="popup-overlay" on:click={() => showPopup.set(false)}>
            <div class="popup" on:click={(e) => e.stopPropagation()}>
                <h2>{($showPopup.formType === 0) ? 'Add Task to TODO' : 'Add Task to PROGRESS'}</h2>
                <form on:submit={handleDocSubmit}>
                    <input type="text" name="title" placeholder="Enter Title" required>
                    <input type="file" name="file" accept=".pdf,.doc,.docx" required>
                    <div class="form-button">
                        <button type="submit">Add Task</button>
                    </div>
                </form>                
            </div>
        </div>
    {/if}
    <div class="details" style="width: 100%;">
        <Grid xs={12} md={6} lg={6}>
            <div class="banner-text">
                <div class="details-card">
                    <div class="details-card-head">
                        <Grid xs={3} md={3} lg={3}>
                            <img src={employ} alt="employ">
                        </Grid>
                        <Grid xs={8} md={8} lg={8}>
                            <h6>Employ ID</h6>
                            <p>Role</p>
                        </Grid>
                    </div>
                    <div class="employContact">
                        {#each employContactData as item}
                            <div class="data">
                                <img src={item.icon} alt="icon">
                                <p>{item.name}</p>
                            </div>
                        {/each}
                        <div class="techstack">
                            <p class="head">Tech Stack:</p>
                            <div class="technology">
                                {#each teckStack as item}
                                    <p>{item}, </p>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid xs={12} md={6} lg={6}>
            <div class="banner-text">
                <div class="details-card">
                    <h6>Change Password</h6>
                    <form on:submit|preventDefault = {handleSubmit}>
                        <div class="form-group">
                            <input type="email" placeholder="Old Password" bind:value={formData.oldPassword} class="input-field" />
                        </div>
                        <div class="form-group" style="margin-top: 0.5rem;">
                            <input type="text" placeholder="New Password" bind:value={formData.newPassword} class="input-field" />
                        </div>
                        <div class="button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Grid>
    </div>
    <div class="work">
        <Grid xs={12} md={4} lg={4}>
            <div class="banner-text card">
                <div class="projects">
                    <h6>Projects</h6>
                    <div class="projects-list">
                        {#each projects as item}
                        <div class="project-tab">
                            <p class="project-name">{item.name}</p>
                            <p class="client">{item.client}</p>
                            <div class="techstack">
                                <p class="head">Tech Stack:</p>
                                <div class="technology">
                                    {#each item.teckStack as tech}
                                        <p>{tech}, </p>
                                    {/each}
                                </div>
                            </div>
                        </div>
                        {/each}
                    </div>
                </div>
            </div>
        </Grid>
        <Grid xs={12} md={4} lg={4}>
            <div class="banner-text card">
                <div class="documents">
                    <div class="documents-head">
                        <h6>Documents</h6>
                        <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <img src={addIcon} alt="icon" on:click={togglePopup(0)} role="button" tabindex="0">
                    </div>
                    <div class="documents-list">
                        {#each documents as item}
                            <div class="document-name">{item}</div>
                        {/each}
                    </div>
                </div>
            </div>
        </Grid>
        <Grid xs={12} md={4} lg={4}>
            <div class="banner-text card">
                <div class="Tasks">
                    <h6>Tasks</h6>
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </Grid>
    </div>
</div>

<style>
    .profile{
        background-color: var(--side-nav-color);
        min-height: 83%;
        /* max-height: 83%; */
        padding: 2rem 2rem;
        border-radius: 0.3rem;
        min-width: 95%;
		margin: 0 auto;
        overflow-y: scroll;
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
    .details, .work{
        display: flex;
        justify-content: space-between;
    }
    .details-card{
        background-color: var(--color-bg-3);
        width: 90%;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
    }
    .details-card-head{
        width: 100%;
        display: flex;
    }
    .details-card-head img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .data{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .data img{
        width: 1.5rem;
        margin-top: 1.4rem;
        height: 1.5rem;
    }
    .data p{
        font-size: 15px;
        margin-top: 1.5rem;
        margin-left: 0.5rem;
        margin-bottom: 0;
    }
    form{
        margin: 2rem 0;
    }
    form input{
        width: 95%;
        margin: 0.2rem 0;
        padding: 0.8rem 0.5rem;
        background-color: transparent;
        border: 1px solid var(--color-bg-2);
        border-radius: 0.5rem;
        color: var(--color-bg-2);
    }
    .button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    form button{
        margin-top: 1.5rem;
        width: 30%;
        padding: 0.6rem;
        border-radius: 0.5rem;
        background-color: var(--color-banner-text-2);
        border: none;
        color: var(--color-bg-2);
        font-weight: 600;
    }
    .input-field::placeholder {
    color: #aaa;
    font-weight: 300;
    font-size: 0.8rem;
    }
    .input-field:focus {
        outline: none;
        border-color: var(--color-bg-2); /* Border color on focus */
    }
    .techstack{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .techstack .head{
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-bg-2);
        display: inline;
    }
    .techstack .technology{
        margin-top: 7px;
        margin-left: 0.5rem;
        display: flex;
    }
    .technology p{
        font-size: 0.8rem;
        margin-right: 2px;
        width: max-content;
    }
    .work{
        display: flex;
        margin-top: 2rem;
    }
    .work h6{
        font-size: 20px;
        margin-bottom: 0.5rem;
    }
    .projects, .documents, .Tasks{
        /* min-height: 20rem; */
        background-color: var(--color-bg-3);
        padding: 0.5rem 0.8rem;
        border-radius: 0.3rem;
    }
    .document-name{
        /* height: 50%; */
        background-color: var(--side-nav-color);
        padding: 0.5rem 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.3rem 0;
        border-radius: 0.3rem;
    }
    .project-tab{
        background-color: var(--side-nav-color);
        padding: 0.5rem 0.5rem;
        margin: 0.3rem 0;
        border-radius: 0.3rem;
    }
    .project-name{
        margin-top: 0;
        font-size: 1rem;
        font-weight: 600;
    }
    .project-tab .client{
        font-size: 0.6rem;
        margin-top: 0.1rem;
        color: #ccc;
    }
    .card{
        margin: 0 0.5rem;
    }
    .documents-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .documents-head img{
        width: 7%;
        cursor: pointer;
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
    form input{
        background-color: var(--color-text);
        padding: 0.8rem 0.8rem;
        border: none;
        margin-top: 0.2rem;
        border-radius: 0.5rem;
        color: var(--color-bg-4);
        font-size: 1rem;
    }
    form input::placeholder {
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