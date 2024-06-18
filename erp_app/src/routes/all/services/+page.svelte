<script>
    import VerticalSpacer from "../../../components/generic/VerticalSpacer.svelte";
    import Grid from "svelte-grid-responsive"; 
    import webDevImg from "$lib/images/services/webDevelopment.png";
    import mobileDevImg from "$lib/images/services/mobileappdevelopment.png";
    import webHostImg from "$lib/images/services/webHosting.png";
    import supportImg from "$lib/images/services/supportandMaintanance.png";
    import IoTImg from "$lib/images/services/IoTSolutions.png";

const servicesData = [
    {
        id: 1,
        image : webDevImg,
        title: "Web Development",
        desc: "We offer Web development and cloud management, optimizing performance, affordability, and data security with tailored server, storage, and backup solutions.",
    },
    {
        id: 2,
        image: mobileDevImg,
        title: "Mobile App Development",
        desc: "We specialize in mobile app development, delivering high-performance, data security, data storage, user-friendly applications tailored to your needs."
    },
    {
        id: 3,
        image: webHostImg,
        title: "Web Hosting",
        desc: "We offer cloud management services, optimizing server, storage, and database configurations for performance, affordability, and data security, with expert guidance and data analytics support."
    },
    {
        id: 4,
        image: supportImg,
        title: "Support & Maintanance",
        desc: "We provide cloud management services, ensuring optimal server, storage, and database configurations for secure, efficient, and cost-effective application performance."
    },
    {
        id: 5,
        image: IoTImg,
        title: "IoT Solutions & Services",
        desc: "Embrace the future with our IoT solutions, where innovation meets connectivity to unlock new possibilities and efficiencies for your business in the digital ecosystem."
    },
    {
        id: 6,
        title: "Looking for solutions that fit your needs?",
        desc: "Ready to elevate your business with our comprehensive suite of tailored digital solutions? Contact us today to embark on a journey of innovation and success."
    }
]

</script>

<svelte:head>
    <title>Services</title>
    <meta name="description" content="Services we offer" />
</svelte:head>

<VerticalSpacer --height="3rem"/>
<div class="web-container">
    <div class="banner-text">
        <h6>SERVICES</h6>
        <h3>Services We Provide</h3>
        <Grid container gutter={15}>
            {#each servicesData as item}
            {#if item.id != 6}
                <Grid xs={12} md={4} lg={4}>
                    <div class="service-tab" style="background-image: url({item.image});">
                        <div class="content">
                            <p class="title">{item.title}</p>
                            <hr>
                            <p class="desc">{item.desc}</p>
                        </div>
                    </div>
                </Grid>
            {/if}
            {#if item.id === 6}
                <Grid xs = {12} md={4} lg={4}>
                    <div class="service-tab btn-tab">
                        <div class="last-content">
                            <p class="title" style="margin-top: 2rem;">{item.title}</p>
                            <hr>
                            <p class="desc">{item.desc}</p>
                            <a href="/all/contact">
                                <button>Contact Us</button>
                            </a>
                        </div>
                    </div>
                </Grid>
            {/if}
            {/each}
        </Grid>
    </div>
</div>
<VerticalSpacer --height="3rem"/>
<div class="web-container">
    <div class="banner-text">
        <h6>WHY CHOOSE US?</h6>
        <h3>Delivering Optimal Solutions</h3>
        <Grid container gutter={15}>
            <Grid xs={12} md={6} lg={6}> 
                <div class="service-desc">
                    <div class="service-header">
                        <h4>Expertise that Drives Success</h4>
                    </div>
                    <p>
                        Our seasoned team ensures precision, innovation, and deep technological insight, guaranteeing the success of your projects.
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={6} lg={6}> 
                <div class="service-desc">
                    <div class="service-header">
                        <h4>Client-Centric Approach</h4>
                    </div>
                    <p>
                        Prioritizing your unique needs, we collaborate closely to exceed your expectations, making your success our primary focus.
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={6} lg={6}> 
                <div class="service-desc">
                    <div class="service-header">
                        <h4>Innovation at the Core</h4>
                    </div>
                    <p>
                        Embedded in our DNA, innovation is the driving force that keeps you ahead in an ever-evolving digital landscape.
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={6} lg={6}> 
                <div class="service-desc">
                    <div class="service-header">
                        <h4>Reliability and Security</h4>
                    </div>
                    <p>
                        Trust our robust security measures and reliable infrastructure, providing a secure environment for uninterrupted operations and peace of mind.
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={6} lg={6}> 
                <div class="service-desc">
                    <div class="service-header">
                        <h4>Dedicated Support and Maintenance</h4>
                    </div>
                    <p>
                        Beyond project completion, our support and maintenance services ensure your digital assets are always optimized, secure, and future-ready.
                    </p>
                </div>
            </Grid>
            <Grid xs={12} md={6} lg={6}> 
                <div class="service-desc">
                    <div class="service-header">
                        <h4>Tailored Solutions for Every Business</h4>
                    </div>
                    <p>
                        Offering customized solutions, our flexible approach ensures services that align seamlessly with your unique vision and business goals.
                    </p>
                </div>
            </Grid>
        </Grid>
    </div>
</div>
<VerticalSpacer --height="3rem" />

<style>
    hr{
		border: none;
        border-top: 0.5px solid var(--color-bg-0); 
		margin: 0;
	}
	.banner-text h3 {
		font-size: 40px;
		color: var(--color-banner-text-1);
		margin-top: -1.5rem;
	}
	.content{
		margin-top: -2.2rem;
	}
	.web-container {
		max-width: 70rem;
		margin: 0 auto;
	}
    .service-tab{
        background-size: cover;
        background-position: center;
        height: 20rem;
        overflow: hidden;
    }
    .service-tab .content{
        background-color: rgba(0, 0, 0, 0.651);
        padding: 18.5rem 0.5rem 0.8rem 0.5rem;
        transition: 1s;
    }
    .service-tab:hover .content{
        background-color: rgba(0, 0, 0, 0.822);
        padding: 10rem 0.5rem 5rem 0.5rem;
    }
    .title{
        font-size: 1.2rem;
        color: var(--color-banner-text-1);
        font-weight: 600;
    }
    .desc{
        font-size: 0.8rem;
    }
    .btn-tab{
        border: 1px solid var(--color-bg-3);
    }
    .btn-tab p{
        padding: 0.8rem 0.8rem;
    }
    .btn-tab hr{
        margin: 0 0.5rem;
    }
    .btn-tab button{
        margin: 0 1rem;
        padding: 0.5rem 2.5rem;
        border: none;
        background-color: var(--color-banner-text-2);
        color: var(--color-bg-2);
        font-weight: 600;
        cursor: pointer;
    }
    .service-desc{
        border: 1px solid var(--color-bg-3);
        border-radius: 0.5rem;
        padding: 0 1rem;
        height: 9rem;
    }
    .service-desc h4{
        color: var(--color-banner-text-1);
    }
</style>