<script>
    // @ts-nocheck
    
    import Grid from "svelte-grid-responsive";
    import { writable } from "svelte/store";
    import { message } from "antd";
    import { onMount } from "svelte";
    import { getAll, add } from "../../../api_calls/projects_api";
    import { getprojectTechStackById, addprojectTechStack, deleteByIdprojectTechStack } from "../../../api_calls/projectTechStack_api";
    import { getAllTechStack } from "../../../api_calls/techStack_api";
    import addIcon from "$lib/images/icons/add.svg";
    import { getprojectDetailsById, addprojectDetails, deleteByIdprojectDetails } from "../../../api_calls/projectDetails_api";
    
    let projects = [];
    const showpopup = writable({ visible: false });
    let selectedProject = writable(null);
    let projectTechStack = [];
    let allTechStack = [];
    let techstackClicked = false;
    let projectDocuments = [];
    let addDocumentPopup = false;
    
    onMount(async () => {
        let data = await getAll();
        projects = data.data;
    });
    
    function togglepopup() {
        showpopup.update(popup => ({ ...popup, visible: !popup.visible }));
    }

    const handleAddDocumentPopup = () => {
        addDocumentPopup = !addDocumentPopup;
    }
    
    const handleaddtechstackButton = () => {
        techstackClicked = !techstackClicked;
    }
    
    const showProjectDetails = async (project) => {
        selectedProject.set(project);
        let techStack = await getprojectTechStackById(project._id);
        projectTechStack = techStack.data;
        let techData = await getAllTechStack();
        allTechStack = techData.data;
        allTechStack = allTechStack.filter(tech => !projectTechStack.find(etech => etech.techStackId._id === tech._id));
        let documents = await getprojectDetailsById(project._id);
        projectDocuments = documents.data;
        console.log("projectDocuments: ", projectDocuments)
        showpopup.set({ visible: true });
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        let title = event.target.title.value;
        let startDate = event.target.startDate.value;
        let client = event.target.client.value;
        let summary = event.target.summary.value;
        let logo = event.target.logo.files[0];
    
        var formData = new FormData();
        formData.append("title", title);
        formData.append("startDate", startDate);
        formData.append("client", client);
        formData.append("summary", summary);
        formData.append("logo", logo);
        formData.append("logo", logo, logo.name);
    
        let response = await add(formData);
        if (response.success) {
            message.success(response.message);
            let data = await getAll();
            projects = data.data;
        }
        showpopup.set({ visible: false });
    }
    
    const addTechStack = async (techId) => {
        let data = {
            projectId: $selectedProject._id,
            techStackId: techId
        };
        let response = await addprojectTechStack(data);
        let techdata = await getprojectTechStackById($selectedProject._id);
        projectTechStack = techdata.data;
    }
    
    const deleteTechStack = async (techId) => {
        let response = await deleteByIdprojectTechStack(techId);
        console.log(response.data);
    }

    const handleDocumentSubmit = async (event) => {
        event.preventDefault();
        let title = event.target.title.value;
        let file = event.target.projectFile.files[0];

        var formData = new FormData();
        formData.append("title", title);
        formData.append("projectFile", file);
        formData.append("projectId", $selectedProject._id);
        console.log(formData);

        let response = await addprojectDetails(formData);
        if (response.success) {
            message.success(response.message);
            let documents = await getprojectDetailsById($selectedProject._id);
            projectDocuments = documents.data;
            addDocumentPopup = false;
        } else {
            message.error(response.message);
        }
    };

    const deleteProjectDocument = async (documentId) => {
        let response = await  deleteByIdprojectDetails(documentId);
        if (response.success){
            message.success(response.message);
            let documents = await getprojectDetailsById($selectedProject._id);
            projectDocuments = documents.data;
        } else {
            message.error(response.message);
        }
    }

    const openDocument = (base64String, mimeType) => {
        if (!base64String) {
            console.error("No base64 string provided");
            return;
        }

        if (!mimeType) {
            console.error("MIME type is required for plain base64 strings");
            return;
        }

        // Decode the Base64 string
        const byteCharacters = atob(base64String);

        // Create a byte array from the decoded string
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        // Create a blob from the byte array
        const blob = new Blob([byteArray], { type: mimeType });

        // Create a URL for the blob and open it in a new tab
        const blobUrl = URL.createObjectURL(blob);
        const newTab = window.open();
        newTab.document.write(`<iframe src="${blobUrl}" width="100%" height="100%"></iframe>`);
    };

    
    </script>
    
    <!-- svelte-ignore missing-declaration -->
    <svelte:head>
        <title>Projects</title>
        <meta name="description" content="Svelte demo app" />
    </svelte:head>
    
    <div class="leaves">
        <!-- Add Project Popup -->
        {#if $showpopup.visible && !$selectedProject}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="popup-overlay" on:click={() => {showpopup.set({ visible: false }); selectedProject.set(null)}}>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="popup" on:click={(e) => e.stopPropagation()}>
                    <h2>Add new project</h2>
                    <form on:submit={handleSubmit}>
                        <input type="text" name="title" placeholder="Enter Title" required>
                        <input type="text" name="client" placeholder="Enter client Name" required>
                        <input type="date" name="startDate" placeholder="Start Date" required>
                        <textarea name="summary" placeholder="summary" rows="4" required></textarea>
                        <input type="file" name="logo" accept="image/*" required>
                        <div class="form-button">
                            <button type="submit">Add Project</button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}
    
        <!-- Project Details Popup -->
        {#if $showpopup.visible && $selectedProject}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="popup-overlay" on:click={() => {showpopup.set({ visible: false }); selectedProject.set(null)}}>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="popup" on:click={(e) => e.stopPropagation()}>
                    <div class="form-button">
                        <button on:click={() => {showpopup.set({ visible: false }); selectedProject.set(null)}}>X</button>
                    </div>
                    <h2>Project Details</h2>
                    <div class="details">
                        <p><strong>Title:</strong> {$selectedProject.title}</p>
                        <p><strong>Client:</strong> {$selectedProject.client}</p>
                        <p><strong>Start Date:</strong> {$selectedProject.startDate}</p>
                        <p><strong>Summary:</strong> {$selectedProject.summary}</p>
                        <br/>
                        {#if projectTechStack.length === 0}
                            {#if techstackClicked}
                                <div class="techlist">
                                    <div class="showSelected">
                                        {#each projectTechStack as tech}
                                            <span class="techName">{tech.techStackId.title}</span>
                                        {/each}
                                    </div>
                                    <div class="showAlltech">
                                        {#each allTechStack as tech}
                                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                                            <span class="techName" on:click={() => addTechStack(tech._id)}>{tech.title}</span>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                            <button class="add" on:click={() => handleaddtechstackButton()}>{techstackClicked ? "Save" : "Add Techstack"}</button>
                        {:else}
                            {#if !techstackClicked}
                                <div class="tech">
                                    <p class="techHeading">TechStack :</p>
                                    {#each projectTechStack as name}
                                        <span class="technology">{name.techStackId.title} ,</span>
                                    {/each}
                                </div>
                            {/if}
                            {#if techstackClicked}
                                <div class="techlist">
                                    <div class="showSelected">
                                        {#each projectTechStack as tech}
                                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                                            <span class="techName" on:click={() => deleteTechStack(tech.techStackId._id)}>{tech.techStackId.title} &times; </span>
                                        {/each}
                                    </div>
                                    <div class="showAlltech">
                                        <!-- svelte-ignore missing-declaration -->
                                        {#each allTechStack as tech}
                                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                                            <span class="techName" on:click={() => addTechStack(tech._id)}>{tech.title}</span>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                            <button class="add" on:click={() => handleaddtechstackButton()}>{techstackClicked ? "Save" : "Add Techstack"}</button>
                        {/if}
                    </div>
                    <div class="documents">
                        <div class="head">
                            <h2>{addDocumentPopup ? "Add project document`s" :"Project Documents"}</h2>
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            {#if !addDocumentPopup}
                                <img src={addIcon} alt="icon" width="25rem" on:click={() => handleAddDocumentPopup()}>
                            {/if}
                        </div>
                        {#if addDocumentPopup}
                            <div class="addForm">
                                <form on:submit={handleDocumentSubmit}>
                                    <input type="text" name="title" placeholder="Document Title" required>
                                    <input type="file" name="projectFile" accept="*/*" required>
                                    <div class="form-button">
                                        <button type="submit">Upload Document</button>
                                    </div>
                                </form>
                            </div>
                        {/if}
                        {#if !addDocumentPopup}
                            {#if projectDocuments}
                                <Grid container gutter={15}>
                                    <!-- {#if projectDocuments.length > 0} -->
                                        {#each projectDocuments as document}
                                            <Grid xs={3} md={3} lg={3}>
                                                <div class="documentTab" on:click={() => openDocument(document.file, "application/pdf")}>
                                                    <p class="documentName">{document.title}</p>
                                                    <span on:click={() => deleteProjectDocument(document._id)}>X</span>
                                                </div>
                                            </Grid>
                                        {/each}
                                    <!-- {/if} -->
                                </Grid>
                            {:else}
                                <p>No documents uploaded</p>
                            {/if}
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    
        <div class="banner-text">
            <div class="head">
                <h6>Projects</h6>
                <div class="buttons">
                    <button class="leave" on:click={() => togglepopup()}>
                        Add Project
                    </button>
                </div>
            </div>
            <div class="leaves-list">
                <Grid container gutter={15}>
                    {#if projects.length > 0}
                        {#each projects as item, index}
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <Grid xs={12} md={4} lg={4}>
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <div class="leaves-tab" on:click={() => showProjectDetails(item)}>
                                    <div class="leaves-head">
                                        <div class="details">
                                            <p class="title">{item.title}</p>
                                            <p class="clientName">{item.client}</p>
                                        </div>
                                        <div class="status">
                                            <img src={`data:image/jpeg;base64,${item.logo}`} alt="client logo" width="100rem">
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        {/each}
                    {:else}
                        <p>No Projects to show</p>
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
            margin-bottom: 1.5rem;
        }
        .head h2{
            margin: 0;
            padding: 0;
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
            cursor: pointer;
            min-height: 8rem;
        }
        .leaves-head{
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .details .title{
            font-size: 1.2rem;
        }
        .status{
            padding: 0.2rem 0.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
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
        form input, form textarea {
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
        .form-button {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
        form button {
            background-color: var(--color-banner-text-2);
            border: none;
            padding: 0.8rem 2.5rem;
            margin-top: 0.8rem;
            border-radius: 0.3rem;
            color: var(--color-bg-1);
            font-weight: 600;
            cursor: pointer;
        }
        p strong, .techHeading{
            color: var(--color-bg-0);
        }
        .showAlltech{
            margin-bottom: 1rem;
        }
        .techName{
            background-color: var(--color-text);
            color: var(--color-bg-0);
            margin: 0 0.2rem;
            padding: 0.2rem 0.5rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            cursor: pointer;
        }
        .showSelected{
            width: 100%;
            background-color: transparent;
            height: auto;
            min-height: 2rem;
            border: 1px solid var(--color-bg-0);
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            padding: 0.6rem 0.5rem 0 0.8rem;
        }
        .tech{
            display: flex;
            align-items: center;
            padding: 0 0 0 0.5rem;
            margin-top: -1rem;
            color: #ddd
        }
        .techHeading{
            font-size: 1rem;
            font-weight: 600;
            padding: 0;
            margin-right: 0.5rem;
        }
        .technology{
            font-size: 0.8rem;
            margin: 0 0.2rem;
        }
        .add{
            background-color: var(--color-special-text);
            padding: 0.3rem 0.8rem;
            border: none;
            color: var(--color-bg-0);
            border-radius: 0.3rem;
            cursor: pointer;
            margin-top: 1rem;
        }
        .documents{
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .documentTab{
            font-size: 1.1rem;
            padding: 0.5rem 1rem;
            background-color: var(--side-nav-color);
            border-radius: 1rem;
            color: var(--color-bg-0);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .documentTab span{
            background-color: var(--color-special-text);
            font-size: 0.8rem;
            padding: 0.2rem 0.4rem;
            border-radius: 2rem;
            cursor: pointer;
        }
    </style>
    