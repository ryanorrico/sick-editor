<script>
    import { fly } from "svelte/transition";
    import { blockOptions, blockStore } from "../stores";

    export let block;

    let activeIndex = $blockOptions.findIndex((t) => t.tag === block.tag);
    // console.log("activeIndex :>> ", activeIndex);
    console.log("activeIndex :>> ", activeIndex);
    function toggleType() {
        console.log(
            "$blockOptions[activeIndex++] :>> ",
            $blockOptions[activeIndex++]
        );
        block.type = $blockOptions[activeIndex++].type;
        block.level = $blockOptions[activeIndex++].level;
        block.tag = $blockOptions[activeIndex++].tag;
    }
</script>

<style>
    button {
        @apply text-xs bg-gray-200 px-3 py-1 text-gray-800 shadow-sm border border-gray-300  rounded;
    }
</style>

<div transition:fly class="flex items-center justify-center p-2  w-28">
    <button on:click={toggleType}> {block.tag} </button>
</div>
