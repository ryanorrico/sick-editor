<script>
    import { params, page } from "@roxi/routify";
    // import { createdLessThanAMinuteAgo } from "../../../utils/timeAgoInWords";
    import { fly, slide } from "svelte/transition";
    // import { currentCourse } from "../../courses/course-stores";
    import {
        pagesIndexStore,
        pageStore,
        sidebarStore,
    } from "../../../custom-store";
    import BookTextIcon from "../../_components/svg/BookTextIcon.svelte";
    import SquareStackUpIcon from "../../_components/svg/SquareStackUpIcon.svelte";
    import SidebarPagesPanel from "./SidebarSickEditorPanel.svelte";

    // const course = $currentCourse;
    // export let course;

    // import Sidebar from "../Sidebar/Sidebar.svelte";
    // $: $sidebarStore.sidebarContainerWidth = 300;
    function openRightPanel() {
        $sidebarStore.right_panel.component = SidebarPagesPanel;
        $sidebarStore.right_panel.width = 200;
        $sidebarStore.right_panel.open = !$sidebarStore.right_panel.open;
        // console.log("$sidebarStore :>> ", $sidebarStore);
    }
    let items = [
        { icon: SquareStackUpIcon, text: "Elements", func: openRightPanel },
    ];
    function newElement() {}
</script>

<style>
</style>

{#each items as item}
    <!-- {#if item.type === 'function'} -->
    <button
        on:click={() => item.func()}
        class="text-gray-600 font-normal w-8 focus:outline-none">
        <svelte:component this={item.icon} />
        <!-- {item.text} -->
    </button>
{/each}
