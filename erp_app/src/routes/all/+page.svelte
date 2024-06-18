<script>
	import Grid from "svelte-grid-responsive";
	import banner from "$lib/images/hero 1home.png";
	import VerticalSpacer from "../../components/generic/VerticalSpacer.svelte";
	import svelteImage from "$lib/images/image 2svelte.svg";
	import TechStack from "../../components/generic/clients.svelte";
	import jagbandhu from '$lib/images/clients/jagnabdhu.png';
	import nehwe from '$lib/images/clients/nehwe.png';
	import aboutImage from "$lib/images/about us image.jpg";
	import contactImage from "$lib/images/contact 2.png"
	import icon1 from "$lib/images/services/icon1.svg";
	import icon2 from "$lib/images/services/icon2.svg";
	import icon3 from "$lib/images/services/icon3.svg";
	import icon4 from "$lib/images/services/icon4.svg";
	import locationIcon from "$lib/images/icons/location.svg";
	import mailIcon from "$lib/images/icons/mail.svg";
	import phoneIcon from "$lib/images/icons/phone.svg";
	import techImage from "$lib/images/techImage.png";
</script>

<svelte:head>
	<title>S&M Scholarly Solutions-Home Page</title>
	<meta name="description" content="Svelte demo app" />
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<VerticalSpacer --height="5rem" />
<section class="web-container" id="Home">
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
				<a href="/all/about">
					<button>Discover More</button>
				</a>
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
<div class="discover">
	<section id="About">
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
	</section>
</div>
<VerticalSpacer --height="3rem" />
<div class="services">
	<section id="Services">
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
								We offer Web development and cloud management, optimizing performance, affordability, and data security with tailored server, storage, and backup solutions.
							</p>
						</div>
						<div class="service-desc">
							<div class="service-header">
								<img src={icon4} alt="service" />
								<h4>Web Hosting</h4>
							</div>
							<p>
								We offer cloud management services, optimizing server, storage, and database configurations for performance, affordability, and data security, with expert guidance and data analytics support.
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
								We specialize in mobile app development, delivering high-performance, data security, data storage, user-friendly applications tailored to your needs.
							</p>
						</div>
						<div class="service-desc">
							<div class="service-header">
								<img src={icon3} alt="service" />
								<h4>Support & Maintenance</h4>
							</div>
							<p>
								We provide cloud management services, ensuring optimal server, storage, and database configurations for secure, efficient, and cost-effective application performance.
							</p>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	</section>
</div>
<VerticalSpacer --height="3rem" />
<div class="discover">
	<section id="techStack">
		<div class="web-container">
			<Grid container gutter={15}>
				<Grid xs={12} md={7} lg={7}>
					<div class="banner-text">
						<h6 class="heading6">OUR EXPERTISE</h6>
						<h3 class="heading3">Technologies We Use</h3>
						<p>
							We use latest and efficient software development technologies like VueJs, NuxtJs the Internet of Things to provide our clients with powerful tech solutions that help them stay on top of the competition.All of our selected experts are prone to self-perfection and eager to learn and grow both personally and professionally_ and they are welcome aboard and strongly supported.We endeavor to keep all of our team members highly motivated and create favorable conditions where our specialists can upgrade themselves and achieve their professional aims successfully.
						</p>
					</div>
				</Grid>
				<Grid xs={12} md={4} lg={5}>
					<div class="about-image">
						<img src={techImage} alt="S&M Scholarly Solutions" width="90%">
					</div>
				</Grid>
			</Grid>
		</div>
	</section>
</div>
<VerticalSpacer --height="3rem" />
<div class="work">
	<section id="Projects">
		<div class="web-container">
			<Grid container gutter={15}>
				<Grid xs={12} md={12} lg={12}>
					<h6 class="heading6">OUR WORK</h6>
					<h3 class="heading3">Recent Projects We Worked</h3>
				</Grid>
				<Grid xs={12} md={6} lg={6}>
					<div class="service-text">
						<div class="service-desc">
							<div class="service-header">
								<img src={nehwe} alt="service" width="80" />
								<h4>Nehwe</h4>
							</div>
							<p>
								An E-learning platform gamified for engagement, where users progress through courses, earn coins, and challenge friends for rewards, available on Android and iOS through cross-platform development.
							</p>
						</div>
					</div>
				</Grid>
				<Grid xs={12} md={6} lg={6}>
					<div class="service-text">
						<div class="service-desc">
							<div class="service-header">
								<img src={jagbandhu} alt="service" width="80" />
								<h4>Jagbandhu</h4>
							</div>
							<p>
								A Family Tree Application for building personal relations, creating invite lists, and customized event invitations, available on Android and iOS with the latest technology stack to serve a large user base efficiently.
							</p>
						</div>
					</div>
				</Grid>
				<!-- <Grid xs={12} md={6} lg={6}>
					<div class="service-text">
						<div class="service-desc">
							<div class="service-header">
								<img src={jagbandhu} alt="service" width="80" />
								<h4>Jagbandhu</h4>
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
								<img src={jagbandhu} alt="service" width="80" />
								<h4>Jagbandhu</h4>
							</div>
							<p>
								Crafting digital excellence tailored to your vision,
								we design and develop websites that seamlessly blend
								aesthetics with functionality, setting the stage for
								your online success.
							</p>
						</div>
					</div>
				</Grid> -->
			</Grid>
		</div>
	</section>
</div>
<VerticalSpacer --height="3rem" />
<div class="discover">
	<section id="Clients">
		<div class="web-container">
			<Grid container gutter={15}>
				<Grid xs={12} md={7} lg={7}>
						<h6 class="heading6">CLIENTELE</h6>
						<h3 class="heading3">Our Happy Clients</h3>
				</Grid>
			</Grid>
			<VerticalSpacer --height='1rem' />
			<TechStack />
		</div>
	</section>
</div>
<VerticalSpacer --height="3rem" />
<div class="contact">
	<section id="Contact">
		<div class="web-container">
			<Grid container gutter={15}>
				<Grid xs={12} md={5} lg={5}>
					<img src={contactImage} alt="S&M Scholarly Solutions" width="80%">
					<div class="details">
						<div class="data">
							<img src={locationIcon} alt="location">
							<p>Journalist colony, Pnjagutta, Hyderabad, Telangana 500082</p>
						</div>
						<div class="data">
							<img src={phoneIcon} alt="location">
							<p>+91-9961800932</p>
						</div>
						<div class="data">
							<img src={mailIcon} alt="location">
							<p>contact@goscholarly.com</p>
						</div>
					</div>
				</Grid>
				<Grid xs={12} md={6} lg={6}>
					<div class="banner-text">
						<h6>Let's Discuss Your Project</h6>
						<h3><span>Get a Quote!</span></h3>
						<form>
							<div class="inputs">
								<div class="form-group">
									<input type="text" placeholder="Name" required>
								</div>
								<div class="form-group">
									<input type="email" placeholder="Email" required>
								</div>
							</div>
							<div class="form-group">
								<textarea placeholder="Message" rows="4" required></textarea>
							</div>
							<div class="inputs">
								<div class="g-recaptcha" data-sitekey="6Lcmmq4pAAAAAA-cPQPg-fn0XUtfGGmJmZlbHx-7"></div>
								<div class="form-group">
									<button type="submit">Get Free Consultation</button>
								</div>
							</div>
						</form>
					</div>
				</Grid>
			</Grid>
		</div>
	</section>
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
	.banner-text a button{
		padding: 0.5rem 2rem;
		border-radius: 0.5rem;
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-bg-2);
		border: none;
		background-color: var(--color-banner-text-2);
	}
	.banner-image img {
		width: 100%;
	}
	/* .tech-stack, */
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
	.inputs{
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		width: 100%;
	}
	input{
		width: 100%;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid var(--color-banner-text-1);
		padding-bottom: 0.5rem;
		color: #fff;
	}
	input::placeholder{
		font-size: 0.8rem;
	}
	textarea{
		width: 100%;
		background-color: transparent;
		border: none;
		border-bottom: 1px solid var(--color-banner-text-1);
		margin-top: 2rem;
		color: #fff;
	}

	textarea::placeholder{
		font-size: 0.8rem;
	}
	.form-group button{
		margin-top: 1rem;
		padding: 0.3rem 0.8rem;
		background-color: var(--color-banner-text-2);
		border: none;
		color: #fff;
		font-size: 1rem;
		border-radius: 0.3rem;
		cursor: pointer;
	}
	.details{
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-top: 2rem;
	}
	.data{
		display: flex;
		margin: 0 1rem;
	}
	.data img{
		width: 1.2rem;
		height: 1.2rem;
		margin-right: 1rem;
	}
	.data p{
		font-size: 0.6rem;
	}
</style>
