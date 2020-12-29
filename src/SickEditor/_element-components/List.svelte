<script>
    import ListItem from "./ListItem.svelte";

    export let block;
    export let init, handleKeydown;
</script>

<ul class={block.data.list_style ? block.data.list_style : ''}>
    {#if block.items}
        {#each block.items as item}
            <!-- {item.text} -->
            <ListItem bind:item {init} {handleKeydown} />
            <!-- <li>{item.data.text}</li> -->
        {/each}
    {/if}
</ul>
