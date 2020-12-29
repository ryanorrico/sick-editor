<script>
    export let item;
    export let init;
    export let handleKeydown;
    // export let parent_id;
    // item.data.parent_id = parent_id;
</script>

<style>
    [contenteditable="true"]:focus {
        outline: none;
        border: none;
    }
</style>

<li
    contenteditable="true"
    bind:innerHTML={item.data.text}
    use:init
    on:keydown={handleKeydown} />
