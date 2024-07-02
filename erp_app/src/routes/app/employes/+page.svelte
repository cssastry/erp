<script>
    // @ts-nocheck
    // @ts-ignore
    import Grid from "svelte-grid-responsive";
    // @ts-ignore
    import {getAll} from "../../../api_calls/employes_api"; 
    // @ts-ignore
    import { message } from "antd";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import employeProfilePhoto from "$lib/images/employeeProfilePhoto.png";
    import {getEmployeeTechStackById, addemployeeTechStack, deleteByIdemployeeTechStack} from "../../../api_calls/employeeTechStack_api";
    import {getAllTechStack} from "../../../api_calls/techStack_api";

    let employees = [];
    let searchQuery = writable("");
    let selectedEmployee = null;
    let popupVisible = false;
    let employeeTechstack = [];
    let techStack = [];
    let techstackClicked = false

    onMount(async () => {
        const data = await getAll();
        employees = data.data.filter(employee => employee.status === 1);
    });

    $: filteredEmployees = employees.filter(employee => {
        return (
            employee.employeeId.toLowerCase().includes($searchQuery.toLowerCase()) ||
            employee.email.toLowerCase().includes($searchQuery.toLowerCase()) ||
            employee.title.toLowerCase().includes($searchQuery.toLowerCase())
        );
    });

    function showProperty(property) {
        return property && property.trim() !== "";
    }

    const handleaddtechstackButton = () => {
        techstackClicked = !techstackClicked
    }

    const openPopup = async(employee) => {
        selectedEmployee = employee;
        let data = await getEmployeeTechStackById(selectedEmployee.employeeId);
        employeeTechstack = data.data;
        alert(employeeTechstack)
        let techData = await getAllTechStack();
        techStack = techData.data;
        techStack = techStack.filter(tech => !employeeTechstack.find(etech => etech.techStackId._id === tech._id));
        popupVisible = true;
    }

    function closePopup() {
        selectedEmployee = null;
        popupVisible = false;
        document.removeEventListener('click', handleClickOutside);
    }

    function handleClickOutside(event) {
        const popup = document.querySelector('.popup-content');
        if (popup && !popup.contains(event.target)) {
            closePopup();
        }
    }

    const addTechStack = async (techId) => {
        let data = {
            employeeId : selectedEmployee.employeeId,
            techStackId : techId
        };
        let response = await addemployeeTechStack(data);
        let techdata = await getEmployeeTechStackById(selectedEmployee.employeeId);
        employeeTechstack = techdata.data;
    }

    const deleteTechStack = async (techId) => {
        let response = await deleteByIdemployeeTechStack(techId);
        console.log(response.data);
    }
    
</script>

<svelte:head>
    <title>Employees</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="employees">
    {#if popupVisible}
        <div class="popup">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="popup-content">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="heading">
                    <span class="close" on:click={closePopup}>&times;</span>
                    <h2>Employee Details</h2>
                </div>
                <div class="details">
                    <Grid container gutter={15}>
                        <Grid xs={4} md={4} lg={4}>
                            <!-- svelte-ignore a11y-img-redundant-alt -->
                            <img src={employeProfilePhoto} alt="profile photo" width="100%">
                        </Grid>
                        <Grid xs={8} md={8} lg={8}>
                            <p>{selectedEmployee.employeeId}</p>
                            <p>{selectedEmployee.firstName}</p>
                            <p>{selectedEmployee.lastName}</p>
                            <p>{selectedEmployee.email}</p>
                            <p>{selectedEmployee.title}</p>
                            {#if employeeTechstack.length === 0}
                                {#if techstackClicked}
                                    <div class="techlist">
                                        <div class="showSelected">
                                            {#each employeeTechstack as tech}
                                                <span class="techName">{tech.techStackId.title}</span>
                                            {/each}
                                        </div>
                                        <div class="showAlltech">
                                            {#each techStack as tech}
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
                                        {#each employeeTechstack as name}
                                            <span class="technology">{name.techStackId.title} ,</span>
                                        {/each}
                                    </div>
                                {/if}
                                {#if techstackClicked}
                                    <div class="techlist">
                                        <div class="showSelected">
                                            {#each employeeTechstack as tech}
                                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                                <span class="techName" on:click={() => deleteTechStack(tech.techStackId._id)}>{tech.techStackId.title} &times; </span>
                                            {/each}
                                        </div>
                                        <div class="showAlltech">
                                            {#each techStack as tech}
                                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                                <span class="techName" on:click={() => addTechStack(tech._id)}>{tech.title}</span>
                                            {/each}
                                        </div>
                                    </div>
                                {/if}
                                <button class="add" on:click={() => handleaddtechstackButton()}>{techstackClicked ? "Save" : "Add Techstack"}</button>
                            {/if}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    {/if}
    <input type="text" placeholder="Search employees by id, email, role..." bind:value={$searchQuery} />
    <Grid container gutter={18}>
        {#each filteredEmployees as employee}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <Grid xs={12} md={4} lg={4}>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="employee-card" on:click={() => openPopup(employee)}>
                    <Grid xs={3} md={3} lg={3}>
                        <img src={employeProfilePhoto} alt="profilePhoto" width="50rem">
                    </Grid>
                    <Grid xs={8} md={8} lg={8}>
                        <p class="id">{employee.employeeId}</p>
                        <p class="role">{employee.title}</p>
                    </Grid>
                </div>
            </Grid>
        {/each}
    </Grid>

</div>

<style>
    .employees {
        background-color: var(--side-nav-color);
        min-height: 93%;
        padding: 1rem 3rem;
        border-radius: 0.3rem;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    input {
        margin-bottom: 1rem;
        width: 100%;
        padding: 0.5rem 0.8rem;
        border-radius: 0.5rem;
        background-color: var(--color-text);
        color: var(--color-bg-3);
        border: none;
    }

    .employee-card {
        display: flex;
        align-items: center;
        background: var(--color-bg-3);
        padding: 0 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .employee-card .id {
        font-size: 1.4rem;
        padding: 0;
        margin: 0;
        color: var(--color-bg-0);
    }

    .employee-card .role {
        font-size: 0.8rem;
        padding: 0;
        margin: 0;
        color: var(--color-text);
    }

    /* Popup Styles */
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup-content {
        background-color: var(--color-bg-4);
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
        text-align: left;
        position: relative; /* Ensure relative positioning for close button */
    }

    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
        color: var(--color-bg-0);
    }

    .heading{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .heading h2{
        font-size: 1.5rem;
        color: var(--color-bg-0);
        font-weight: 600;
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
</style>
