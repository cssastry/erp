<script>
    import { onMount } from 'svelte';

onMount(() => {
    const userData = localStorage.getItem("userData");
    if(userData){
        window.location.href = '/app/dashboard';
    } else {
        window.location.href = '/all';
    }
});
</script>