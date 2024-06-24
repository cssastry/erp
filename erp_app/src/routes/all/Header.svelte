<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/logoS&M.svg";
	import loginIcon from "$lib/images/icons/login.svg";
	import menuIcon from "$lib/images/icons/menu.svg";
</script>

<div class="pin-bar">
	<div class="options">
		<p><span>Call us :</span> +91-9961800932</p>
		<p>|</p>
		<p><span>Write to us :</span> contact@goscholarly.com</p>
	</div>
</div>
<header>
	<div class="corner brand">
		<a href="https://www.smscholarly.com">
			<img src={logo} alt="S&M Scholarly Solutions" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li 
				aria-current={$page.url.pathname === "/all/"
					? "page"
					: undefined}
			>
				<a href="/all/">Home</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/all/about"
					? "page"
					: undefined}
			>
				<a href="/all/about">About</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/all/services"
					? "page"
					: undefined}
			>
				<a href="/all/services">Services</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/all/projects"
					? "page"
					: undefined}
			>
				<a href="/all/projects">Projects</a>
			</li>
			<li
				aria-current={$page.url.pathname === "/all/contact"
					? "page"
					: undefined}
			>
				<a href="/all/contact">Contact</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="actions" style="display: flex;">
		<div class="corner login">
			<button>
				<a href="/login">
					<img src={loginIcon} alt="Employee Portal" title="Employe Login"/>
				</a>
			</button>
		</div>
		<div class="corner menuBar">
			<button>
				<!-- <a href="/login"> -->
					<img src={menuIcon} alt="Employee Portal" title="Employe Login"/>
				<!-- </a> -->
			</button>
		</div>
	</div>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 5em;
		height: 5em;
	}

	.corner button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: none;
		height: 100%;
		cursor: pointer;
	}

	.corner img {
		width: 2em;
		height: 3em;
		object-fit: contain;
	}

	.brand img {
		width: 8em;
		height: 8em;
		margin-left: 40%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: #ccc2;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.pin-bar {
		width: 100%;
		display: block;
		background-color: #0e1e33;
		padding: 5px 0 5px 40px;
	}

	.pin-bar > .options p {
		display: inline;
		color: #eee;
		padding: 5px;
		font-size: 13px;
	}

	.menuBar{
		display: none;
	}

	@media (max-width: 400px) {
		nav, .login {
			display: none;
		}

		.menuBar {
			display: block;
		}
	}
</style>
