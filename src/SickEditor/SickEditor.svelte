<script>
    export let url;
    import SidebarSickEditorPanel from "./sidebar/SidebarSickEditorPanel.svelte";
    import { pageStore, blockOptions, pageStorePreview } from "./stores.js";
    // import ToggleSwitch from "./ToggleSwitch.svelte";
    // import ButtonAddBlock from "./ButtonAddBlock.svelte";
    // import Footer from "./Footer.svelte";
    import SortablePageBuilder from "./SortablePageBuilder.svelte";
    import { onDestroy, onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { backOut } from "svelte/easing";
    // import ImageUploader from "./ImageUploader.svelte";
    import envURL from "../../../env-url.js";
    import { sidebarStore } from "../../../custom-store.js";
    let editing = true;

    import { parse } from "himalaya";

    function handleKeydown(e, block) {
        let blockOptionToInsert;

        if (block.type === "list") {
            blockOptionToInsert = $blockOptions.find(
                (o) => o.type === "list-item"
            );
            let newListItemBlock = JSON.parse(
                JSON.stringify(blockOptionToInsert)
            );
            block.items.push(newListItemBlock);
            $pageStore = $pageStore;
        } else {
            blockOptionToInsert = $blockOptions[0];
            pageStore.insertBlock(
                blockOptionToInsert,
                $pageStore.blocks.indexOf(block)
            );
        }
    }

    let prose = false;

    const sortList = (ev) => {
        $pageStore.blocks = ev.detail;
    };
    $: pageStore.fetch(url);
    // console.log("$pageStore :>> ", $pageStore);
    // $sidebarStore.right_panel.component = SidebarSickEditorPanel;
    $sidebarStore.container.width = 300;
    // document.addEventListener(
    //     "focus",
    //     (e) => updateFocusedBlockInPageStore(e),
    //     true
    // );
    // });

    onDestroy(() => {
        document.removeEventListener("focus", updateFocusedBlockInPageStore);
    });

    function updateFocusedBlockInPageStore(e) {
        if (e.target.getAttribute("contenteditable") === "true") {
            $pageStore.focusedBlockIndex = e.target.dataset.index;
        }
    }

    let imageSrcUrl;

    let activeElement;

    // const onFocus =()=>isFocused=true;
    // const onBlur =()=>isFocused=false;
    // $: $pageStore.cover_image_url = imageSrcUrl;
    let toBeParsed;
    // $: console.log("toBeParsed :>> ", parse(toBeParsed));
</script>

<style>
    header {
        height: 40vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    header h1 {
        z-index: 10;
    }

    header #badge {
        background: rgba(73, 73, 73, 0.466);
        color: rgba(255, 255, 255, 0.685);
    }
    .overlay {
        z-index: 0;
        background: linear-gradient(
            0deg,
            rgba(14, 14, 15, 1) 0%,
            rgba(1, 1, 1, 0.469625350140056) 7%,
            rgba(1, 1, 1, 0.2819502801120448) 18%,
            rgba(3, 3, 3, 0.5) 70%,
            rgba(13, 13, 13, 1) 100%
        );
    }
    p:active,
    [contenteditable],
    [contenteditable="true"]:active,
    [contenteditable="true"]:focus {
        border: none;
        outline: none;
    }
    main {
        color: white;
    }
    p,
    strong,
    li {
        color: white;
    }
    h1,
    h2 {
        color: white;
    }
    strong {
        font-weight: bold;
        color: white;
    }
</style>

<!-- <svelte:window
    on:mousemove={handleMousemove}
    on:mousedown={startDrag}
    on:mouseup={stopDrag} /> -->
{#if $pageStore && $pageStore.id}
    <header
        style="background-image: url({envURL}{$pageStore.cover_image_url})"
        in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
        class="relative">
        <div
            in:fade={{ delay: 300, duration: 500 }}
            class="overlay absolute w-full h-full" />
        <a
            in:fly={{ y: -20, delay: 900 }}
            href="/blog"
            class="absolute top-4 right-4">
            <!-- <XCloseButtonForPanels /> -->
        </a>
        <!-- <div
            in:fly={{ y: -20, delay: 800 }}
            id="badge"
            class="absolute top-4 left-4 rounded px-2 py-.5">
            MARKETING
        </div> -->

        <div class="flex flex-col items-center justify-center w-full h-full">
            <h1
                in:fly={{ y: -30, easing: backOut, delay: 300 }}
                class="text-3xl md:text-6xl text-white font-black"
                contenteditable="true"
                bind:innerHTML={$pageStore.name} />
        </div>
        {#if !prose}
            <!-- <ImageUploader
                bind:imageSrcUrl
                url={`/pages/${$pageStore.id}/attach_image`}
                name={'page[cover_image]'} /> -->
        {/if}
    </header>
{/if}

<!-- <textarea class="w-full" rows="20" bind:value={toBeParsed} /> -->
<main class="max-w-3xl mx-auto py-20">
    {#if $pageStore && $pageStore.blocks}
        <!-- {$pageStore.cover_image_url} -->
        <!-- <img src={`${envURL}${$pageStore.cover_image_url}`} /> -->
        <!-- {$pageStore.url} -->
        <div class={$pageStorePreview ? 'prose lg:prose-xl' : ''}>
            <SortablePageBuilder
                {pageStore}
                {handleKeydown}
                on:sort={sortList}
                {editing} />
        </div>
    {/if}
</main>
<!-- <Footer {} /> -->
