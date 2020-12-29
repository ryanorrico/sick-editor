<script>
    import { adminStore } from "../../../../custom-store";

    export let init, handleKeydown;
    export let block;
    export let index;
    export let pageStore;
    let hovering;
</script>

<style>
    [contenteditable="true"]:focus {
        outline: none;
        border: none;
    }

    .hovering {
        background-color: rgb(195, 195, 233);
    }
</style>

{#if $adminStore.admin_mode}
    <p
        contenteditable="true"
        bind:innerHTML={block.data.text}
        data-index={index}
        class:hovering
        use:init
        on:keydown={handleKeydown} />
{:else}
    <p>{block.data.text}</p>
{/if}
