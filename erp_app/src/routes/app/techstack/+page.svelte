<script>
    // @ts-nocheck
    
        import Grid from "svelte-grid-responsive";
        import calenderIcon from "$lib/images/icons/calender.svg";
        import {writable} from "svelte/store";
        import {message} from "antd";
        import { onMount } from "svelte";
        import {getAllTechStack, addTechStack} from "../../../api_calls/techStack_api";
    
        let leaves = [];

        onMount(async() => {
            const data = await getAllTechStack();
            leaves = data.data;
        })
    
        const showpopup = writable({visible: false});
    
        function togglepopup() {
            showpopup.update(popup => ({ ...popup, visible: !popup.visible}));
        }
    
        const handleSubmit = async(event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const title = formData.get('title');    
            let data = {
                title,
            };
            let response = await addTechStack(data);
            if(response.success){
                message.success(response.message);
                const HolidayData = await getAllTechStack();
                leaves = HolidayData.data;
                showpopup.set({visible: false});
            } else {
                message.error(response.message)
            }
        }
    
    </script>
    
    <svelte:head>
        <title>Tech Stack</title>
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
                    <h2>Add TechStack</h2>
                    <form on:submit={handleSubmit}>
                        <input type="text" name="title" placeholder="Enter Title" required>
                        <div class="form-button">
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}
        <div class="banner-text">
            <div class="head">
                <h6>Tech Stack</h6>
                <div class="buttons">
                    <button class="leave" on:click={() => togglepopup()}>
                        Add TechStack
                    </button>
                </div>
            </div>
            <div class="leaves-list">
                <Grid container gutter={15}>
                    {#each leaves as item}
                        <Grid xs={12} md={3} lg={3}>
                            <div class="leaves-tab">
                                <div class="leaves-head">
                                    <div class="details">
                                        <p class="title">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    {/each}
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
            overflow-y: scroll;
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