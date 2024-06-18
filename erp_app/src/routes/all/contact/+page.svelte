<script>
    import VerticalSpacer from "../../../components/generic/VerticalSpacer.svelte";
    import Grid from "svelte-grid-responsive";
    import contactImage from "$lib/images/contact 2.png";
    import locationIcon from "$lib/images/icons/location.svg";
    import mailIcon from "$lib/images/icons/mail.svg";
	import phoneIcon from "$lib/images/icons/phone.svg";
</script>

<svelte:head>
    <title>Contact Us</title>
    <meta name="description" content="Contact us" />
</svelte:head>

<VerticalSpacer --height="3rem" />
<div class="web-container">
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
                        <div class="banner-text discover">
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
</div>

<style>
    .banner-text h3 {
		font-size: 40px;
		color: var(--color-banner-text-1);
	}
	.banner-text h3 span {
		color: var(--color-banner-text-2);
	}
	.discover {
		background-color: var(--color-bg-3);
		width: 100%;
		padding: 2rem;
        border-radius: 1rem;
	}
	.web-container {
		max-width: 70rem;
		margin: 0 auto;
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