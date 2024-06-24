<script>
    // @ts-nocheck
    import VerticalSpacer from "../../../components/generic/VerticalSpacer.svelte";
    import Grid from "svelte-grid-responsive";
    import projectImage1 from "$lib/images/clients/cms.png";
    import projectImage2 from "$lib/images/clients/erp.png";
    import projectImage3 from "$lib/images/clients/go scholarly.png";
    import projectImage4 from "$lib/images/clients/jagnabdhu.png";
    import projectImage5 from "$lib/images/clients/nehwe.png";
    import projectImage6 from "$lib/images/clients/srisriholistick.png";
    import projectImage7 from "$lib/images/clients/stupicks.png";
    
    function isOdd(id) {
        return id % 2 !== 0;
    }

    const projects = [
        {
            id: 1,
            image: projectImage1,
            title: "Cafetaria Managment System",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma",  "Express JS", "SQL"],
        },
        {
            id: 2,
            image: projectImage2,
            title: "Employe Managment System",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma", "React JS", "Express JS", "SQL"],
        },
        {
            id: 3,
            image: projectImage3,
            title: "Go Scholarly",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma", "React JS", "Express JS", "SQL"],
        },
        {
            id: 4,
            image: projectImage4,
            title: "Jagbandhu",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma", "React JS", "Express JS", "SQL"],
        },
        {
            id: 5,
            image: projectImage5,
            title: "Nehwe",
            client: "Client Name",
            duration: "Aug, 2022 - Nov, 2022",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma", "React JS", "Express JS", "SQL"],
        },
        {
            id: 6,
            image: projectImage6,
            title: "Sri Sri holistic",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma", "React JS", "Express JS", "SQL"],
        },
        {
            id: 7,
            image: projectImage7,
            title: "Stupicks",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            techStack: ["Figma", "React JS", "Express JS", "SQL"],
        },
    ];

    let expanded = {};

    function toggleExpand(id) {
        expanded = { ...expanded, [id]: !expanded[id] };
    }
</script>

<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Projects we done" />
</svelte:head>

<VerticalSpacer --height="3rem"/>
<div class="banner-text">
    <Grid container gutter={15}>
        <Grid xs={12} md={12} lg={12}>
            {#each projects as item}
                <div class="project {isOdd(item.id) ? 'odd' : ''} {expanded[item.id] ? 'expanded' : ''}">
                    <Grid xs={12} md={4} lg={4}>
                        <img src={item.image} alt="Client icon" width="50%">
                    </Grid>
                    <Grid xs={12} md={8} lg={8}>
                        <div class="info">
                            <Grid xs={9} md={9} lg={9}>
                                <h3>{item.title}</h3>
                                <h6>{item.client}</h6>
                            </Grid>
                            <Grid xs={3} md={3} lg={3}>
                                <h6>{item.duration}</h6>
                            </Grid>
                        </div>
                        <div class="desc">
                            {#if !expanded[item.id]}
                                <p>{item.desc.split(' ').slice(0, 10).join(' ')}...</p>
                            {/if}
                            {#if expanded[item.id]}
                                <p>{item.desc}</p>
                                <div class="tech">
                                    <p class="techHeading">TechStack :</p>
                                    {#each item.techStack as name}
                                        <span class="technology">{name} ,</span>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                        <button on:click={() => toggleExpand(item.id)}>
                            {#if expanded[item.id]}
                                Read Less
                            {/if}
                            {#if !expanded[item.id]}
                                Read More
                            {/if}
                        </button>
                    </Grid>
                </div>
            {/each}
        </Grid>
    </Grid>
</div>
<VerticalSpacer --height="3rem" />

<style>
	.banner-text h3{
		font-size: 30px;
		color: var(--color-banner-text-1);
		margin-top: -1.5rem;
        margin-bottom: 0;
	}
    .banner-text h6{
        margin-top: 0.5rem;
        margin-bottom: 0;
    }
    .project, .info{
        display: flex;
        align-items: center;
    }
    .project{
        padding: 2rem 10rem;
        margin: 1rem 0;
    }
    .project.expanded {
        align-items: flex-start;
    }
    p{
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0 0.5rem;
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
        font-weight: 500;
    }
    button{
        /* margin-top: 0.2rem; */
        padding: 0.2rem 0.5rem;
        background: var(--color-primary);
        border: none;
        color: var(--color-special-text);
        cursor: pointer;
        font-size: 0.8rem;
    }
    .odd {
        flex-direction: row-reverse;
        background: var(--color-bg-3);
    }
</style>
