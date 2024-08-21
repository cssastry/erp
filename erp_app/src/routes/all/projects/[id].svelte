<script context="module">
    // @ts-ignore
    export async function load({ params }) {
        const { id } = params;
        // Import the projects array (consider moving this to a shared module if used in multiple places)
        const projects = [
            {
            id: 1,
            image: '/images/clients/cms.png',
            title: "Cafetaria Management System",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
            {
            id: 2,
            image: '/images/clients/erp.png',
            title: "Employee Management System",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
            {
            id: 3,
            image: '/images/clients/go scholarly.png',
            title: "Go Scholarly",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
            {
            id: 4,
            image: '/images/clients/jagnabdhu.png',
            title: "Jagbandhu",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
            {
            id: 5,
            image: '/images/clients/nehwe.png',
            title: "Nehwe",
            client: "Client Name",
            duration: "Aug, 2022 - Nov, 2022",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
            {
            id: 6,
            image: '/images/clients/srisriholistick.png',
            title: "Sri Sri holistic",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
            {
            id: 7,
            image: '/images/clients/stupicks.png',
            title: "Stupicks",
            client: "Client Name",
            duration: "Nov, 2022 - Present",
            desc: "Vitae pellentesque aliquam cras quisque id ultrices congue posuere dictum. Viverra vitae quis proin maecenas pretium nulla tortor varius. Nibh mollis tincidunt ipsum amet suscipit. Proin gravida tortor nullam auctor. Iaculis iaculis aliquam fringilla quis elementum.",
            },
        ];
        const project = projects.find(p => p.id === parseInt(id));
        if (!project) {
            return {
            status: 404,
            error: new Error('Project not found'),
            };
        }
        return {
            props: {
            project,
            },
        };
    }
</script>

<script>
export let project;
</script>

<svelte:head>
<title>{project.title}</title>
<meta name="description" content={project.desc} />
</svelte:head>

<div class="project-details">
    <img src={project.image} alt="{project.title} image" />
    <h1>{project.title}</h1>
    <h2>{project.client}</h2>
    <h3>{project.duration}</h3>
    <p>{project.desc}</p>
</div>

<style>
    .project-details {
        padding: 2rem;
    }

    .project-details img {
        max-width: 100%;
        height: auto;
    }

    .project-details h1, .project-details h2, .project-details h3 {
        margin: 0.5rem 0;
    }

    .project-details p {
        font-size: 1rem;
        line-height: 1.5;
    }
</style>
