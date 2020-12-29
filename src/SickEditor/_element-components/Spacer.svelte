<script>
    import { slide } from "svelte/transition";

    export let block;

    let dragging = false;

    function start() {
        dragging = true;
    }
    function stop() {
        dragging = false;
    }

    function drag() {
        if (dragging) {
        }
    }

    let h;
    // $: console.log("h :>> ", h);
</script>

<style>
    [contenteditable="true"]:focus {
        outline: none;
        border: none;
    }
</style>

<svelte:window on:mouseup={stop} />
<!-- <svelte:window  /> -->

<!-- on:mousemove={handleMousemove} -->
<div
    in:slide
    style="height: {block.data.height}px;"
    bind:clientHeight={h}
    class="bg-gray-200" />
<div class="bg-blue-500 w-28 h-5" on:mousedown={start} />
