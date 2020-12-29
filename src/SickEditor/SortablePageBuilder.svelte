<script>
    // export let prose;

    import { quintOut } from "svelte/easing";
    import { crossfade } from "svelte/transition";
    import { flip } from "svelte/animate";
    export let editing, handleKeydown;
    // FLIP ANIMATION
    const [send, receive] = crossfade({
        duration: (d) => Math.sqrt(d * 200),

        fallback(node, params) {
            const style = getComputedStyle(node);
            const transform = style.transform === "none" ? "" : style.transform;

            return {
                duration: 400,
                easing: quintOut,
                css: (t) => `
                      transform: ${transform} scale(${t});
                      opacity: ${t}
                  `,
            };
        },
    });

    // DRAG AND DROP
    let isOver = false;
    const getDraggedParent = (node) =>
        node.dataset && node.dataset.index
            ? node.dataset
            : getDraggedParent(node.parentNode);
    const start = (ev) => {
        ev.dataTransfer.setData("source", ev.target.dataset.index);
    };
    const over = (ev) => {
        ev.preventDefault();
        // console.log("ev :>> ", ev);
        let dragged = getDraggedParent(ev.target);
        // console.log("dragged :>> ", dragged);
        if (isOver !== dragged.id) isOver = dragged.id;
    };
    const leave = (ev) => {
        let dragged = getDraggedParent(ev.target);
        if (isOver === dragged.id) isOver = false;
    };
    const drop = (ev) => {
        isOver = false;
        ev.preventDefault();
        let dragged = getDraggedParent(ev.target);
        let from = ev.dataTransfer.getData("source");
        let to = dragged.index;
        reorder({ from, to });
    };

    // DISPATCH REORDER
    import { createEventDispatcher } from "svelte";

    export let pageStore;
    import Block from "./Block.svelte";
    import BlockToolbar from "./BlockToolbar.svelte";

    const dispatch = createEventDispatcher();
    const reorder = ({ from, to }) => {
        let newList = [...$pageStore.blocks];
        newList[from] = [newList[to], (newList[to] = newList[from])][0];

        dispatch("sort", newList);
    };

    // UTILS
    // const getKey = (item) => (key ? item[key] : item);

    // PROPS
    // export let list;
    // export let key;
</script>

<style>
    div {
        border: 4px dotted transparent;
        transition: border 0.1s linear;
    }
    .over {
        border-color: rgba(48, 12, 200, 0.4);
    }
</style>

{#each $pageStore.blocks as block, index (block.id)}
    <div
        data-index={index}
        data-id={block.id}
        draggable="true"
        on:dragstart={start}
        on:dragover={over}
        on:dragleave={leave}
        on:drop={drop}
        in:receive={{ key: block.id }}
        out:send={{ key: block.id }}
        animate:flip={{ duration: 200 }}
        class:over={block.id === isOver}>
        <!-- {#if !prose}
            <BlockToolbar bind:block {pageStore} />
        {/if} -->
        <Block
            {index}
            {pageStore}
            bind:block
            {editing}
            on:keydown={(e) => handleKeydown(e, block)} />
    </div>
{/each}
