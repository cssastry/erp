<script>
	import VerticalSpacer from "../../../components/generic/VerticalSpacer.svelte";
	import Grid from "svelte-grid-responsive";
	import AboutsecImage1 from "$lib/images/aboutSec1.png";
	import aboutImage from "$lib/images/about us image.jpg";
	import meetingImage from "$lib/images/workSection/meeting.png";
	import brainstromingImage from "$lib/images/workSection/brainstroming.png";
	import projectImage from "$lib/images/workSection/project.png";
	import solutionImage from "$lib/images/workSection/solution.png";
	import linkedInIcon from "$lib/images/icons/linkedin.svg";
	import githubIcon from "$lib/images/icons/github.svg";
	import behanceIcon from "$lib/images/icons/behance.svg";
	import e1 from "$lib/employes/1.jpg";
	import e2 from "$lib/employes/2.jpg";
	import e3 from "$lib/employes/3.jpg";
	import e4 from "$lib/employes/4.jpg";
	import e5 from "$lib/employes/5.jpg";

	const employData = [
		{
			id: 1,
			image: e1,
			name: "Employe1",
			role: "Role",
			linkedIn: "https://www.linkedin.com",
			github: 'https://www.github.com',
		},
		{
			id: 2,
			image: e2,
			name: "Employe2",
			role: "Role2",
			linkedIn: "https://www.linkedin.com",
			github: 'https://www.github.com',
		},
		{
			id: 3,
			image: e3,
			name: "Employe3",
			role: "Role3",
			linkedIn: "https://www.linkedin.com",
			github: 'https://www.github.com',
		},
		{
			id: 4,
			image: e4,
			name: "Employe4",
			role: "Role4",
			linkedIn: "https://www.linkedin.com",
			github: 'https://www.github.com',
		},
		{
			id: 5,
			image: e5,
			name: "Employe5",
			role: "Role5",
			linkedIn: "https://www.linkedin.com",
			github: 'https://www.github.com',
			behance: 'https://www.behance.com',
		},
	]

	const workData = [
		{
			id: '01',
			image: meetingImage,
			name: 'Meeting Client'
		},
		{
			id: '02',
			image: brainstromingImage,
			name: "BrainStroming",
		},
		{
			id: '03',
			image: solutionImage,
			name: "Solution",
		},
		{
			id: "04",
			image: projectImage,
			name: "Project Done",
		}
	]
</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<VerticalSpacer --height="5rem"/>
<div class="web-container">
	<Grid container gutter={15}>
		<Grid xs={12} md={4} lg={4}>
			<img src={AboutsecImage1} alt="S&M Scholarly Solutions" width="95%" height="100%">
		</Grid>
		<Grid xs={12} md={7} lg={7}>
			<div class="content">
				<div class="banner-text">
					<h6>ABOUT US</h6>
					<h3>Who we are ?</h3>
				</div>
				<p class="content">We are a group of passionate and committed professionals building software solutions that help our clients grow their businesses. Our technical expertise allows us to build applications on the web, android and ios platforms employing top of the line technologies for the best and quick solutions for our client. We know timing is everything when it comes to business and we specialize in providing timebound solutions. We also work collaboratively with our clients to understand their business and develop solutions covering all edge cases and scenarios so they receive a Bugfree product with high performance to take their business to next level.</p>
			</div>
		</Grid>
	</Grid>
</div>
<VerticalSpacer --height="3rem" />
<div class="discover">
	<div class="web-container">
		<Grid container gutter={15}>
			<Grid xs={12} md={7} lg={7}>
				<div class="banner-text">
					<h6 class="heading6">DISCOVER OUR COMPANY</h6>
					<h3 class="heading3">Bringing New IT Business <span>Solution</span></h3>
					<h4>Cutting-Edge Innovation</h4>
					<p>
						Pioneering the future, we embrace the latest in
						technology, from advanced cloud solutions to artificial
						intelligence, ensuring your business stays at the
						forefront of innovation.
					</p>
					<h4>Client-Centric Approach</h4>
					<p>
						Your success is our priority. We work closely with you,
						understanding your unique challenges to deliver tailored
						IT solutions that align with your business goals and
						drive sustained growth.
					</p>
				</div>
			</Grid>
			<Grid xs={12} md={4} lg={5}>
				<div class="about-image">
					<img src={aboutImage} alt="S&M Scholarly Solutions" />
				</div>
			</Grid>
		</Grid>
	</div>
</div>
<VerticalSpacer --height="3rem"/>
<div class="work">
	<div class="web-container">
		<div class="banner-text">
			<h6>OUR WORK</h6>
			<h3>How We Work</h3>
		</div>
		<Grid container gutter={15}>
			{#each workData as item}
				<Grid xs={12} md={3} lg={3}>
					<div class="tab">
						<p>{item.id}</p>
						<div class="content">
							<img src={item.image} alt="Illustration">
							<h3>{item.name}</h3>
						</div>
					</div>
				</Grid>
			{/each}
		</Grid>
	</div>
</div>
<VerticalSpacer --height="3rem"/>
<div class="team">
	<div class="web-container">
		<div class="banner-text">
			<h6>OUR EXPERT</h6>
			<h3>Team Members</h3>
			<Grid container gutter={15}>
				{#each employData as item}	
					<Grid xs={12} md={2} lg={2}>
						<div class="team-tab" style="background-image: url({item.image})">
							<div class="team-content">
								<p class="name" style="margin-bottom: 0.4rem">{item.name}</p>
								<hr>
								<p class="role" style="margin-top: 0.4rem">{item.role}</p>
								<div class="links">
									<Grid xs={3} md={3} lg={3}>
										<a href={item.linkedIn}>
											<img src={linkedInIcon} alt="linkedIn">
										</a>
									</Grid>
									<Grid xs={3} md={3} lg={3}>
										<a href={item.github}>
											<img src={githubIcon} alt="linkedIn">
										</a>
									</Grid>
									{#if item.behance}
									<Grid xs={3} md={3} lg={3}>
										<a href={item.github}>
											<img src={behanceIcon} alt="linkedIn">
										</a>
									</Grid>
									{/if}
								</div>
							</div>
						</div>
					</Grid>
				{/each}
			</Grid>
		</div>
	</div>
</div>
<VerticalSpacer --height="3rem"/>
<div class="buttons">
	<div class="web-container">
		<Grid container gutter={15}>
			<Grid xs={12} md={5} lg={5}>
				<a href="/all/services">
					<button class="service-btn">Our Services</button>
				</a>
			</Grid>
			<Grid xs={12} md={5} lg={5}>
				<a href="/all/contact">
					<button class="touch-btn">Get in touch</button>
				</a>
			</Grid>
		</Grid>
	</div>
</div>

<style>
	hr{
		border: none;
        border-top: 0.5px solid var(--color-bg-0); 
		margin: 0;
	}
	.discover {
		background-color: var(--color-bg-3);
		width: 100%;
		padding: 1.2rem;
	}
	.banner-text h3 {
		font-size: 40px;
		color: var(--color-banner-text-1);
		margin-top: -1.5rem;
	}
	.banner-text h3 span {
		color: var(--color-banner-text-2);
	}
	.content{
		margin-top: -2.2rem;
	}
	.web-container {
		max-width: 70rem;
		margin: 0 auto;
	}
	.work .banner-text{
		text-align: center;
	}
	.tab{
		border: 2px solid var(--color-bg-3);
		border-radius: 1rem;
		padding: 1rem;
		transition: 0.5s;
	}
	.tab:hover{
		background-color: var(--color-bg-3);
		border: none;
		margin-top: -2rem;
	}
	.tab img{
		width: 30%;
		text-align: center;
	}
	.tab p{
		font-size: 40px;
		margin-bottom: 0;
		margin-top: 0;
		font-weight: 600;
		opacity: 0.3;
	}
	.tab h3{
		margin-bottom: 0;
	}
	.tab .content{
		text-align: center;
		margin-top: 0.5rem;
	}
	.name{
		color: var(--color-banner-text-1);
		font-weight: 600;
	}
	.role{
		font-size: 0.8rem;
	}
	.team-tab {
        background-size: cover;
        background-position: center;
		border-radius: 1rem;
		overflow: hidden;
		height: 10.5rem;
    }
	.team-content{
		background-color: rgba(0, 0, 0, 0.651);
		padding: 5.5rem 0.5rem 1rem 0.5rem;
		transition: 1s;
	}
	.team-tab:hover .team-content {
        padding: 1.9rem 0.5rem 1rem 0.5rem; /* Adjust padding when team-tab is hovered */
    }
	.team-content .links{
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
		align-items: center;
	}
	.team-content .links a{
		background-color: #eeeeee70;
		padding: 0.5rem;
		border-radius: 5px;
		transition: 0.5s;
	}
	.team-content .links a:hover{
		background-color: var(--color-banner-text-2);
	}
	a img{
		width: 70%;
	}
	.service-btn{
		padding: 0.5rem 5rem;
		background-color: var(--color-banner-text-2);
		color: var(--color-bg-2);
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
	}
	.touch-btn{
		padding: 0.5rem 5rem;
		background-color: transparent;
		color: var(--color-bg-2);
		border: none;
		cursor: pointer;
		border-radius: 0.5rem;
		transition: 0.3s;
	}
	.touch-btn:hover{
		background-color: var(--color-banner-text-2);
	}
</style>