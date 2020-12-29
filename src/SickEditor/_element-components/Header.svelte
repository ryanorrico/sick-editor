<script>
    export let index, block, init, handleKeydown;
</script>

<style>
    [contenteditable="true"]:focus,
    [contenteditable="true"]:active {
        outline: none;
        border: none;
    }
</style>

{#if block.data.level == 3}
    <h3
        contenteditable="true"
        use:init
        bind:innerHTML={block.data.text}
        on:keydown={handleKeydown} />
{:else if block.data.level == 2}
    <h2
        class="text-2xl font-semibold"
        contenteditable="true"
        use:init
        bind:innerHTML={block.data.text}
        on:keydown={handleKeydown} />
{:else}
    <h1
        class="text-3xl font-bold"
        contenteditable="true"
        use:init
        bind:innerHTML={block.data.text}
        on:keydown={handleKeydown} />
{/if}
