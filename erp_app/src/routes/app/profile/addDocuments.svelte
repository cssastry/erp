<!-- AddDocumentModal.svelte -->

<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let documentName = '';
    // @ts-ignore
    /**
   * @type {null}
   */
    let file = null;

    const handleSubmit = () => {
        // You can handle form submission here
        // @ts-ignore
        const formData = { documentName, file };
        console.log(formData);

        // Dispatch an event to inform the parent component
        dispatch('submit', formData);
    };
</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <label for="documentName">Document Name:</label>
            <input type="text" id="documentName" bind:value={documentName} required />
        </div>
        <div>
            <label for="file">File:</label>
            <input type="file" id="file" bind:files={file} required />
        </div>
        <button type="submit">Submit</button>
    </form>
</div>

<style>
    /* Add your modal styles here */
</style>
