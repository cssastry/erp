<script>
    import Grid from "svelte-grid-responsive";
    import profileIcon from "$lib/images/icons/profile.svg";

    const leaves = [
        {
            id: 1,
            title: "Leave title",
            startDate: "21/04/2024",
            endDate: "22/04/2024",
            reason: "It is a long established fact that a reader will be distracted"
        },
        {
            id: 2,
            title: "Leave title 2",
            startDate: "21/04/2024",
            endDate: "22/04/2024",
            reason: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        },
        {
            id: 3,
            title: "Leave title 3",
            startDate: "21/04/2024",
            endDate: "22/04/2024",
            reason: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        },
        {
            id: 4,
            title: "Leave title 4",
            startDate: "21/04/2024",
            endDate: "22/04/2024",
            reason: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        },
    ]

    // @ts-ignore
    const formatDuration = (startDate, endDate) => {
        return `${startDate} - ${endDate}`
    }

</script>

<svelte:head>
	<title>Approvals</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="leaves">
    <div class="banner-text">
        <div class="head">
            <h6>Approvals</h6>
        </div>
        <div class="leaves-list">
            <Grid container gutter={15}>
                {#each leaves as item}
                    <Grid xs={12} md={4} lg={4}>
                        <div class="leaves-tab">
                            <div class="leaves-head">
                                <div class="data">
                                    <img src={profileIcon} alt="avatar">
                                    <div class="details">
                                        <p class="title">{item.title}</p>
                                        <p class="duration">{formatDuration(item.startDate, item.endDate)}</p>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button class="status approve buttons">
                                        <p>Approve</p>
                                    </button>
                                    <button class="status reject buttons">
                                        <p>Reject</p>
                                    </button>
                                </div>
                            </div>
                            <p class="reason">{item.reason}</p>
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
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-bg-2);
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        border: none;
    }
    .buttons .approve{
        background-color: #249929;
    }
    .buttons .reject{
        background-color: #D70C0C;
    }
    .leaves-list{
        margin-top: 1.5rem;
    }
    .leaves-tab{
        background-color: var(--color-bg-3);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        min-height: 10rem;
        max-height: 10rem;
        overflow-y: scroll;
    }
    .leaves-head{
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0.5rem 0;
        border-bottom: 1px solid var(--color-bg-0);
    }
    .data{
        display: flex;
        gap: 1rem;
    }
    .details .title{
        font-size: 1.2rem;
    }
    .details .duration{
        font-size: 0.8rem;
        color: var(--color-text);
    }
    .status p{
        font-size: 0.8rem;
    }
    .status{
        padding: 0.2rem 0.8rem;
        border-radius: 0.3rem;
    }
    .leaves-tab .reason{
        font-size: 0.7rem;
        color: var(--color-text);
    }
</style>