<script>
	import Counter from "./Counter.svelte";
	import logo from "$lib/images/logoS&M.svg";
	import Grid from "svelte-grid-responsive";
	import banner from "$lib/images/hero 1home.png";
	import Button from "../components/generic/Button.svelte";
	import VerticalSpacer from "../components/generic/VerticalSpacer.svelte";
	import svelteImage from "$lib/images/image 2svelte.svg";
	import TechStack from "../components/generic/TechStack.svelte";
	import aboutImage from "$lib/images/about us image.jpg";
	import icon1 from "$lib/images/services/icon1.svg";
	import icon2 from "$lib/images/services/icon2.svg";
	import icon3 from "$lib/images/services/icon3.svg";
	import icon4 from "$lib/images/services/icon4.svg";
</script>

<svelte:head>
	<title>S&M Scholarly Solutions-Home Page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<VerticalSpacer --height="5rem" />
<section class="web-container">
	<Grid container gutter={15}>
		<Grid xs={12} md={7} lg={7}>
			<div class="banner-text">
				<h3>
					We provide the best <span>Solutions</span> to boost your
					<span>Business</span>
				</h3>
				<p>
					Because we know, our expertise in technology can help your
					Business to realise it's true potential. We specialize in
					native app development on Android and IOS platforms,
					customized web applications and server management.
				</p>
				<VerticalSpacer --height="2rem" />
				<Button text="Discover more" link="#"></Button>
			</div>
		</Grid>
		<Grid xs={12} md={4} lg={5}>
			<div class="banner-image">
				<img src={banner} alt="S&M Scholarly Solutions" />
			</div>
		</Grid>
	</Grid>
</section>
<VerticalSpacer --height="5rem" />
<div class="tech-stack">
	<div class="web-container">
		<TechStack />
	</div>
</div>
<VerticalSpacer --height="5rem" />
<div class="discover">
	<div class="web-container">
		<Grid container gutter={15}>
			<Grid xs={12} md={7} lg={7}>
				<div class="banner-text">
					<h6 class="heading6">DISCOVER OUR COMPANY</h6>
					<h3 class="heading3">Bringing New IT Business Solution</h3>
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
<VerticalSpacer --height="3rem" />
<div class="services">
	<div class="web-container">
		<Grid container gutter={15}>
			<Grid xs={12} md={12} lg={12}>
				<h6 class="heading6">SERVICES</h6>
				<h3 class="heading3">Services We Provide</h3>
			</Grid>

			<Grid xs={12} md={6} lg={6}>
				<div class="service-text">
					<div class="service-desc">
						<div class="service-header">
							<img src={icon1} alt="service" />
							<h4>Web Development</h4>
						</div>
						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>

					<div class="service-desc">
						<div class="service-header">
							<img src={icon4} alt="service" />
							<h4>Web Hosting</h4>
						</div>
						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>
				</div>
			</Grid>
			<Grid xs={12} md={6} lg={6}>
				<div class="service-text">
					<div class="service-desc">
						<div class="service-header">
							<img src={icon2} alt="service" />
							<h4>Mobile App Development</h4>
						</div>
						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>

					<div class="service-desc">
						<div class="service-header">
							<img src={icon3} alt="service" />
							<h4>Support & Maintenance</h4>
						</div>

						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>
				</div>
			</Grid>
		</Grid>
	</div>
</div>
<VerticalSpacer --height="3rem" />
<div class="discover">
	<div class="web-container">
		<Grid container gutter={15}>
			<Grid xs={12} md={12} lg={12}>
				<h6 class="heading6">SELECTED WORK</h6>
				<h3 class="heading3">Our Recent Projects</h3>
			</Grid>

			<Grid xs={12} md={6} lg={6}>
				<div class="service-text">
					<div class="service-desc">
						<div class="service-header">
							<img src={icon1} alt="service" />
							<h4>Web Development</h4>
						</div>
						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>

					<div class="service-desc">
						<div class="service-header">
							<img src={icon4} alt="service" />
							<h4>Web Hosting</h4>
						</div>
						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>
				</div>
			</Grid>
			<Grid xs={12} md={6} lg={6}>
				<div class="service-text">
					<div class="service-desc">
						<div class="service-header">
							<img src={icon2} alt="service" />
							<h4>Mobile App Development</h4>
						</div>
						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>

					<div class="service-desc">
						<div class="service-header">
							<img src={icon3} alt="service" />
							<h4>Support & Maintenance</h4>
						</div>

						<p>
							Crafting digital excellence tailored to your vision,
							we design and develop websites that seamlessly blend
							aesthetics with functionality, setting the stage for
							your online success.
						</p>
					</div>
				</div>
			</Grid>
		</Grid>
	</div>
</div>

<style>
	section {
		display: inline;
	}
	.banner-text h3 {
		font-size: 40px;
		color: var(--color-banner-text-1);
	}
	.banner-text h3 span {
		color: var(--color-banner-text-2);
	}
	.banner-image img {
		width: 100%;
	}
	.tech-stack,
	.discover {
		background-color: var(--color-bg-3);
		width: 100%;
		padding: 1.2rem;
	}
	.services {
		padding: 1.2rem;
	}
	.web-container {
		max-width: 70rem;
		margin: 0 auto;
	}
	.about-image img {
		border-radius: 20px;
	}
	.heading6 {
		text-align: center;
		font-weight: 500;
		letter-spacing: 2px;
		font-size: 16px;
	}
	.heading3 {
		text-align: center;
		font-weight: 600;
		letter-spacing: 1px;
		font-size: 30px;
	}
	.services h3,
	.services h4 {
		color: var(--color-banner-text-1);
	}
	.service-desc {
		border: 1px solid var(--color-bg-3);
		margin: 1rem auto;
		padding: 1rem;
		border-radius: 20px;
	}
	.service-header {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		overflow-x: hidden;
		width: 100%;
		padding-left: 2rem;
	}
	.service-header h4 {
		font-size: 25px;
		font-weight: 500;
		letter-spacing: 1px;
	}
</style>
