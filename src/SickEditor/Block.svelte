<script>
    export let pageStore, index, block, editing;

    import { createEventDispatcher, onMount } from "svelte";
    // import { fly } from "svelte/transition";
    // import { blockOptions, pageStore } from "../stores";

    import Spacer from "./_element-components/Spacer.svelte";
    import Paragraph from "./_element-components/Paragraph.svelte";
    import Header from "./_element-components/Header.svelte";
    import Video from "./_element-components/Video.svelte";
    // import ToolsToggle from "./ToolsToggle.svelte";
    import Image from "./_element-components/Image.svelte";
    import List from "./_element-components/List.svelte";
    // import { nanoid } from "nanoid";
    import Resource from "./_element-components/Resource.svelte";

    // $: editing;

    const dispatch = createEventDispatcher();
    function handleKeydown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (this.innerHTML.length) {
                // let option = $blockOptions.find((o) => o.type === block.type);
                // console.log("option :>> ", option);
                // let newBlockObj = {
                //     id: nanoid(),
                //     type: option.type,
                //     tag: option.tag,
                //     data: option.data,
                //     label: option.label,
                // };
                // newBlockObj.data.text = "";
                dispatch("keydown", "insertBlock");
            } else {
                this.focus();
            }
        }
        if (e.key === "Backspace" && block.data.text === "") {
            pageStore.delete(block);
            // $pageStore.splice($pageStore.indexOf(block), 1);
            // $pageStore = $pageStore;
        }
    }

    function init(el) {
        setTimeout(function () {
            el.focus();
        }, 0);
    }

    // onMount(() => {
    //     console.log("this :>> ", this);
    // });
    // const blockString = (block) => {
    //     return `<${block.tag} ${editing ? "contenteditable='true'" : ""} >${
    //         block.data.text
    //     }</${block.tag}>`;
    // };

    // const blockTags = (block) => {
    //     return {
    //         open: `<${block.tag} ${editing ? "contenteditable='true'" : ""}>`,
    //         close: `</${block.tag}>`,
    //     };
    // };
</script>

<style>
    [contenteditable="true"]:focus {
        outline: none;
    }
    button {
        @apply text-xs  px-3 py-1 border rounded;
    }
</style>

<!-- <div class="flex">
    {#if showTools}
        <ToolsToggle bind:block />
    {/if}
    <div class="p-2">
    </div>
</div> -->
<!-- <button class="absolute  bg-red-500 rounded text-xs text-white left-2">
    delete
</button> -->
{#if block.type === 'paragraph'}
    <Paragraph bind:block {index} {init} {handleKeydown} {pageStore} />
{:else if block.type === 'header'}
    <Header bind:block {index} {init} {handleKeydown} />
{:else if block.type === 'spacer'}
    <Spacer bind:block {index} {init} {handleKeydown} />
{:else if block.type === 'video'}
    <Video bind:block {index} {init} {handleKeydown} />
{:else if block.type === 'image'}
    <Image bind:block {index} />
{:else if block.type === 'list'}
    <List bind:block {index} {init} {handleKeydown} />
{:else if block.type === 'resource'}
    <Resource bind:block {index} {init} {handleKeydown} {pageStore} />
{/if}

<!-- <Buttons bind:block /> -->
<!-- <div contenteditable use:init on:keydown={handleKeydown}>{block.data.text}</div> -->
<!-- {#if block.type}
    {@html blockString(block)}
{:else}
    <p
        contenteditable="true"
        bind:innerHTML={block.data.text}
        use:init
        on:keydown={handleKeydown} />
{/if} -->
