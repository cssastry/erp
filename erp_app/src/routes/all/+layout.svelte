<script>
	import Header from "./Header.svelte";
	import "../styles.css";

	import logo from "$lib/images/logoS&M.svg";
    import Grid from "svelte-grid-responsive";
    import mailIcon from "$lib/images/icons/mail.svg";
    import linkedInIcon from "$lib/images/icons/linkedin.png";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer">
			<Grid container gutter={15}>
				<Grid xs={12} md={3} lg={3}>
					<img src={logo} alt="S&M logo" width="80%">
					<p>Plot no 30, 2nd floor, BN Rao Homes, North H Block, Journalist Colony, VST Colony, Punjagutta, Hyderabad, Telangana 500082</p>
				</Grid>
				<Grid xs={12} md={8} lg={8}>
					<div class="links">
						<Grid xs={12} md={4} lg={4}>
							<h3>Quick Links</h3>
							<ol>
								<li>HOME</li>
								<li>ABOUT</li>
								<li>SERVICES</li>
								<li>PROJECTS</li>
								<li>CONTACT</li>
							</ol>
						</Grid>
						<Grid xs={12} md={4} lg={4}>
							<h3>Our Services</h3>
							<ol>
								<li>WEB DEVELOPMENT</li>
								<li>MOBILE APP DEVELOPMENT</li>
								<li>WEB HOSTING</li>
								<li>SUPPORT & MAINTANANCE</li>
								<li>IoT SOLUTIONS</li>
							</ol>
						</Grid>
						<Grid xs={12} md={4} lg={4}>
							<h3>Social Links</h3>
							<div class="social">
								<img src={mailIcon} alt="icon">
								<p>contact@goscholarly.com</p>
							</div>
							<div class="social">
								<img src={linkedInIcon} alt="icon">
								<p>S&M Scholarly Solutions</p>
							</div>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</div>
	</footer>
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.footer{
        background-color: var(--color-bg-3);
        padding: 2rem 15%;
        margin-top: 2rem;
    }
    h3{
        color: #fff;
    }
    .links{
        display: flex;
        margin-left: 5rem;
        width: 100%;
    }
    ol{
        list-style-type:none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
    }
    li{
        margin: 1rem 0;
        font-size: 0.8rem;
    }
    .social{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .social img{
        width: 10%;
        height: 10%;
        margin-right: 1rem;
    }


	@media (min-width: 480px) {

	}
</style>