<script>
    // @ts-nocheck
    import { flip } from "svelte/animate";
    import { onMount } from "svelte";
    export let images = [];
    export let speed = 1000;

    onMount(() => {
        const rotateImages = (e) => {
            const transitionImage = images[images.length - 1];
            document.getElementById(transitionImage.id).style.opacity = 0;
            images = [
                images[images.length - 1],
                ...images.slice(0, images.length - 1),
            ];
            setTimeout(() => {
                document.getElementById(transitionImage.id).style.opacity = 1;
            }, speed);
        };
        setInterval(rotateImages, speed);
    });
</script>

<div id="carousel-container">
    <div id="carousel-images">
        {#each images as image (image.id)}
            <img
                src={image.path}
                alt={image.id}
                id={image.id}
                animate:flip={{ duration: speed }}
            />
        {/each}
    </div>
</div>

<style>
    #carousel-container {
        width: 100%;
        overflow-x: hidden;
    }
    #carousel-images {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    #carousel-images img {
        width: var(--imageWidth);
        margin: 0 var(--imageSpacing);
    }
</style>
