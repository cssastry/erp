<script>
    import "../styles.css"
	import {onMount} from 'svelte';

	let isNavOpen = true;
onMount(() => {
	localStorage.setItem('isNavOpen', isNavOpen.toString());
})

</script>

<div class="app">
    <main>
        <slot />
    </main>
</div>

<footer>

</footer>

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
</style>