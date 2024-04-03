<script>
    export let text = "demo";
    export let link = "#";
</script>

<a class="styled-button" href={link}>{text}</a>

<style>
    a.styled-button {
        background-color: var(--color-banner-text-2);
        color: var(--color-banner-text-1);
        padding: 10px 15px;
        border-radius: 5px;
    }
</style>
