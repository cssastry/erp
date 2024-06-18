<script>
    import "../styles.css"
    import SideNav from "./SideNav.svelte"
	import Head from "./Head.svelte"
</script>

<div class="app">
        <SideNav/>
        <main>
			<Head/>
            <slot />
        </main>
</div>

<style>
	.app {
		display: flex;
		min-height: 98.5vh;
		padding: 0.3rem;
		gap: 0.3rem;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 70%;
		margin: 0 auto;
		box-sizing: border-box;
		border-radius: 0.5rem;
	}
</style>