<script>
    import logo from "$lib/images/logoS&M.svg";
    import loginImage from "$lib/images/login.png"
    import Grid from "svelte-grid-responsive";
    import {message} from "antd"

    // @ts-ignore
    let type = "login";

    // @ts-ignore
    var setType = (newType) => {
        type = newType;
    }

    let loginData = {
        email: '',
        password: ''
    };

    let registerData = {
        email: '',
        password: '',
        confirmPassword: '',
    }

    const handleLoginSubmit = () => {
        if (!loginData.email || !loginData.password) {
            message.error("Please fill in all fields");
            return;
        }
        const userData = JSON.stringify(loginData);
        localStorage.setItem("userData", userData);
        message.success("login successfull")
        console.log(loginData);
        loginData = {email: '', password: ''}
        window.location.href = '/app/dashboard'
    }

    const handleRegisterSubmit = () => {
        if(registerData.password === registerData.confirmPassword){
            const data = {
                email: registerData.email,
                Password : registerData.password
            }
            const userData = JSON.stringify(data);
            localStorage.setItem("userData", userData);
            message.success("user registered successfully")
            console.log(data);
            registerData = {email: '', password : '', confirmPassword: ''};
            window.location.href = '/app/dashboard'
        } else {
            message.error("password dosen't match")
        }
    }

</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="login">
    <div class="web-container">
        <div class="banner-text">
            <Grid container gutter={15}>
                <Grid xs={3} md={3} lg={3}>
                    <img src={logo} alt="logo" class="loginImg">
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                    <h3>Employ Portal</h3>
                </Grid>
            </Grid>
        </div>
        <div class="content">
            <Grid container gutter={15}>
                <Grid xs={12} md={5} lg={5}>
                    <img src={loginImage} alt="login illustration">
                </Grid>
                <Grid xs={12} md={5} lg={5}>
                    <div class="credentials">
                        <div class="banner-text">
                            <h4>{type === "login" ? "Welcome Back !" : "Welcome!"}</h4>
                            <p>{type === "login" ? "please enter your details to login" : "Please enter your details to register as employ"}</p>
                            <div class="tabs">
                                <Grid container gutter={10}>
                                    <Grid xs={6} md={6} lg={6}>
                                        <button class:selected={type === 'login'} on:click={() => setType('login')}>Login</button>
                                    </Grid>
                                    <Grid xs={6} md={6} lg={6}>
                                        <button class:selected={type === 'register'} on:click={() => setType('register')}>Register</button>
                                    </Grid>
                                </Grid>
                            </div>
                            {#if type === "login"}
                                <form on:submit|preventDefault = {handleLoginSubmit}>
                                    <div class="form-group">
                                        <input type="email" placeholder="Email" bind:value={loginData.email} class="input-field" />
                                    </div>
                                    <div class="form-group" style="margin-top: 0.5rem;">
                                        <input type="text" placeholder="Password" bind:value={loginData.password} class="input-field" />
                                    </div>
                                    <div class="forgot">
                                        <a href="https://www.smscholarly.com">forgot password?</a>
                                    </div>
                                    <!-- <a href="/app/dashboard"> -->
                                        <button type="submit">Submit</button>
                                    <!-- </a> -->
                                </form>
                            {/if}
                            {#if type === "register"}
                                <form on:submit|preventDefault = {handleRegisterSubmit}>
                                    <div class="form-group">
                                        <input type="email" placeholder="Email" bind:value={registerData.email} class="input-field" />
                                    </div>
                                    <div class="form-group" style="margin-top: 0.5rem;">
                                        <input type="text" placeholder="Password" bind:value={registerData.password} class="input-field" />
                                    </div>
                                    <div class="form-group" style="margin-top: 0.5rem;">
                                        <input type="text" placeholder="Confirm password" bind:value={registerData.confirmPassword} class="input-field" />
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            {/if}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
</div>

<style>
    .web-container {
		max-width: 70rem;
		margin: 0 auto;
	}
    .banner-text h3 {
		font-size: 40px;
		color: var(--color-banner-text-1);
        text-align: center;
	}
    .banner-text h4{
        font-size: 30px;
        color: var(--color-banner-text-1);
        text-align: center;
        margin: 0;
    }
    .banner-text p{
        font-size: 10px;
        color: var(--color-bg-1);
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .content{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .content img{
        width: 90%;
        margin-top: 3.2rem;
    }
    .credentials{
        background-color: var(--color-bg-3);
        padding: 2rem 0.8rem;
        border-radius: 0.5rem;
        margin-top: 3rem;
    }
    .tabs{
        margin-bottom: 1.5rem;
    }
    .tabs button {
        margin: 0;
        padding: 0.5rem;
        cursor: pointer;
        font-size: 15px;
        transition: background-color 0.3s ease;
        border-radius: 0.3rem;
        border: none;
        width: 100%;
        background-color: transparent;
        color: var(--color-bg-2);
    }
    .tabs button.selected {
        background-color: var(--color-bg-4);
    }
    form{
        text-align: center;
    }
    .forgot{
        width: 100%;
        text-align: end;
        margin-top: 0.5rem;
    }
    .forgot a{
        font-size: 0.7rem;
        color: #aaa;
    }
    form input{
        width: 95%;
        margin: 0.2rem 0;
        padding: 0.8rem 0.5rem;
        background-color: transparent;
        border: 1px solid var(--color-bg-2);
        border-radius: 0.5rem;
        color: var(--color-bg-2);
    }
    form button{
        margin-top: 1.5rem;
        width: 95%;
        padding: 0.6rem;
        border-radius: 0.5rem;
        background-color: var(--color-banner-text-2);
        border: none;
        color: var(--color-bg-2);
        font-weight: 600;
    }
    .input-field::placeholder {
    color: #aaa;
    font-weight: 300;
    font-size: 0.8rem;
}

.input-field:focus {
    outline: none;
    border-color: var(--color-bg-2); /* Border color on focus */
}
</style>