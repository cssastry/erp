<script>
// @ts-nocheck
    import {writable} from "svelte/store";
    import {onMount} from "svelte";
    import Grid from "svelte-grid-responsive";
    import channelIcon from "$lib/images/icons/channel.svg";
    import DmIcon from "$lib/images/icons/dm.svg";
    import videoIcon from "$lib/images/icons/video.svg";
    import callIcon from "$lib/images/icons/call.svg";
    import waveIcon from "$lib/images/icons/wave.svg";
    import sendIcon from "$lib/images/icons/send.svg";
    import addIcon from "$lib/images/icons/add.svg";
    import addFillIcon from "$lib/images/icons/addFill.svg";
    import profileIcon from "$lib/images/icons/profile.svg";

    const chats = [
        {
            id: 1,
            type: 1,
            title: "Channel Name 1",
        },
        {
            id: 2,
            type: 1,
            title: "Channel Name 2",
        },
        {
            id: 3,
            type: 1,
            title: "Channel Name 3",
        },
        {
            id: 4,
            type: 1,
            title: "Channel Name 4",
        },
        {
            id: 5,
            type: 1,
            title: "Channel Name 5",
        },
        {
            id: 6,
            type: 2,
            title: "Employ Name 1",
        },
        {
            id: 7,
            type: 2,
            title: "Employ Name 2",
        },
        {
            id: 8,
            type: 2,
            title: "Employ Name 3",
        },
    ]

    let selectedChat = chats.find(chat => chat.id === 1);

    function selecteChat(id){
        selectedChat = chats.find(chat => chat.id === id);
    }

    let searchText = '';

    let type1Chats = [];
    let type2Chats = [];

    function filterChats() {
        type1Chats = chats.filter(chat => chat.type === 1 && chat.title.toLowerCase().includes(searchText.toLowerCase()));
        type2Chats = chats.filter(chat => chat.type === 2 && chat.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    onMount(() => {
        filterChats()
    })

    let activeClass = "channel-tab active";
    let nonActive = "channel-tab";

    const showpopup = writable({visible: false});

    function togglePopup() {
        showpopup.update(popup => ({ ...popup, visible: !popup.visible}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const type = 1;
        const title = formData.get('title');

        chats.push({
            id: chats.length + 1,
            type: type,
            title: title,
        });
        showpopup.set({visible: false});
    }

    function openFileExplorer() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*'; // Optional: specify accepted file types
        fileInput.click();
    }

</script>

<svelte:head>
	<title>Chat</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="chat">
    <!-- Popup -->
    {#if $showpopup.visible}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="popup-overlay" on:click={() => showpopup.set(false)}>
            <div class="popup" on:click={(e) => e.stopPropagation()}>
                <h2>Create New Channel</h2>
                <form on:submit={handleSubmit}>
                    <input type="text" name="title" placeholder="Enter Title" required>
                    <div class="form-button">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    <div class="banner-text">
        <Grid xs={2} md={2} lg={2}>
            <div class="chat-list">
                <input type="text" placeholder="Search" class="search-bar" bind:value={searchText} on:input={filterChats}>
                <div class="channels">
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <div class="head">
                        <h6>Channels</h6>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <img src={addIcon} alt="icon" on:click={() => togglePopup()}>
                    </div>
                    <div class="channel-list">
                        {#each type1Chats as chat}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class={chat.id === selectedChat.id? activeClass : nonActive} key={chat.id} on:click={() => selecteChat(chat.id)}>
                                <img src={channelIcon} alt="icon">
                                <p>{chat.title}</p>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="channels" style="margin-top: 0.5rem;">
                    <div class="head">
                        <h6>DM's</h6>
                    </div>
                    <div class="channel-list">
                        {#each type2Chats as chat}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class={chat.id === selectedChat.id? activeClass : nonActive} key={chat.id} on:click={() => selecteChat(chat.id)}>
                                <img src={DmIcon} alt="icon">
                                <p>{chat.title}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </Grid>
        <Grid xs={10} md={10} lg={10}>
            <div class="chat-area">
                <div class="chat-head">
                    <div class="data">
                        <img class="icon" src={selectedChat.type === 1 ? channelIcon : DmIcon} alt="icon">
                        <h6>{selectedChat.title}</h6>
                    </div>
                    <div class="controls">
                        <img src={videoIcon} alt="icon" width="18%" style="cursor: pointer;">
                        <img src={callIcon} alt="icon" width="18%" style="cursor: pointer;">
                    </div>
                </div>
                <div class="chat-texts">
                    <div class="text-box">
                        <div class="chat-box">
                            <div class="profile">
                                <img src={profileIcon} alt="icon">
                            </div>
                            <p>chat here</p>
                        </div>
                    </div>
                </div>
                <div class="message-input">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <img src={addFillIcon} alt="icon" class="add" on:click={openFileExplorer} style="cursor: pointer;">
                    <input type="text" placeholder="Type your message here ...">
                    <img src={sendIcon} alt="icon" class="send">
                </div>
            </div>
        </Grid>
    </div>
</div>

<style>
    .chat{
        height: 100%;
        border-radius: 0.3rem;
    }
    .banner-text{
        /* min-height: 93%; */
        height: 100%;
        display: flex;
    }
    .banner-text h6{
        font-size: 24px;
        color: var(--color-banner-text-1);
        margin: 0;
    }
    .banner-text p{
        font-size: 15px;
        color: var(--color-bg-1);
        margin: 0;
    }
    .chat-area{
        height: 99%;
        width: 99.4%;
        background-color: var(--side-nav-color);
        border-radius: 0.5rem;
        padding: 0.2rem;
        display: flex;
        flex-direction: column;
    }
    .chat-list{
        width: 98%;
        border-radius: 0.5rem;
        background-color: var(--side-nav-color);
        max-height: 97.5%;
        min-height: 97.5%;
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .chat-list input{
        width: 90%;
        background-color: var(--color-bg-4);
        border: none;
        border-radius: 0.5rem;
        height: 1.8rem;
        color: var(--color-bg-2);
        padding-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .channels{
        width: 90%;
    }
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-text);
    }
    .head h6{
        font-size: 20px;
        font-weight: 600;
        color: var(--color-text);
    }
    .head img{
        width: 12%;
        cursor: pointer;
    }
    .channel-list{
        width: 95%;
        margin-top: 0.5rem;
    }
    .channel-tab{
        cursor: pointer;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.5rem;
        width: 95%;
        border-radius: 0.2rem;
    }
    .active {
        background-color: var(--color-bg-4);
        border-left: 3px solid var(--color-text);
    }
    .channel-tab img{
        width: 13%;
    }
    .channel-tab p{
        color: var(--color-text);
        font-size: 14px;
    }
    .chat-head{
        display: flex;
        justify-content: space-between;
        width: 98.5%;
        align-items: center;
        padding: 0.8rem 0.5rem;
        background-color: var(--color-bg-4);
        border-radius: 0.5rem;
    }
    .chat-head .icon{
        width: 12%;
    }
    .chat-head .data, .chat-head .controls{
        display: flex;
        gap: 0.8rem;
        align-items: center;
    }
    .controls{
        justify-content: space-evenly;
        padding-right: 1rem;
    }
    .data h6{
        font-size: 18px;
    }
    .message-input{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 97.5%;
        background-color: var(--color-bg-4);
        padding: 0.3rem 0.8rem;
        gap: 0.5rem;
        border-radius: 0.5rem;
    }
    .message-input .add{
        width: 2.5%;
    }
    .message-input .send{
        width: 1.5rem;
        height: 1.5rem;
        padding: 0.3rem;
        background-color: var(--color-bg-3);
        border-radius: 50%;
    }
    .message-input input{
        flex: 1;
        background-color: var(--color-bg-3);
        border: none;
        height: 1.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 10rem;
        color: var(--color-bg-1);
    }
    .chat-texts {
        flex: 1;
        overflow-y: auto;
        margin: 0.5rem 0;
    }
    .text-box{
        width: 100%;
    }
    .chat-box{
        display: flex;
        gap: 0.5rem;
        align-items: flex-start;
        max-width: 60%;
        justify-content: flex-start;
    }
    .chat-box p{
        background-color: var(--color-bg-3);
        padding: 0.1rem 0.5rem;
        border-radius: 0.5rem;
    }
    .profile{
        padding: 0.5rem;
        height: 10px;
        width: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-bg-3);
        border-radius: 50%;
    }
    .profile img{
        width: 95%;
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
        width: 30%;
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