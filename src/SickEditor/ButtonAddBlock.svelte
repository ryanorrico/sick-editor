<script>
    import { page } from "@roxi/routify";

    export let option;
    export let pageStore;

    function addBlock() {
        // console.log(
        //     "$pageStore.focusedBlockIndex :>> ",
        //     $pageStore.focusedBlockIndex
        // );
        // let focusedBlock = $pageStore.blocks[$pageStore.focusedBlockIndex];
        pageStore.insertBlock(option, $pageStore.focusedBlockIndex);
        // if (focusedBlock) {
        // } else {
        //     // pageStore.addBlock(option);
        // }
        // console.log("focusedBlock :>> ", focusedBlock);
    }
</script>

<style>
    svg {
        width: 1.5em;
    }
</style>

<button
    on:click={addBlock}
    class="flex items-center text-xs justify-center py-1 rounded px-2 border-r border-gray-800">
    {#if option.svgPath}
        <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 650 550">
            <path fill="currentColor" d={option.svgPath} />
        </svg>
    {:else}{option.label}{/if}
</button>
