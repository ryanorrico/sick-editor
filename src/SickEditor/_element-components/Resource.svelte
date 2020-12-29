<script>
    import Api from "../../../../utils/api";

    import { pageStoreResources } from "../stores";
    import Checklist from "./Checklist.svelte";

    export let block, init, handleKeydown, index, pageStore;

    async function fetchResources() {
        $pageStoreResources = await Api.get(
            `${$pageStore.url}/resource_options`
        );
    }
    $: fetchResources();
</script>

<style>
    div {
        /* min-height: 200px; */
    }
</style>

<div class="text-white bg-gray-900 p-4 space-y-4">
    <!-- {#if $pageStoreResources && $pageStoreResources.data} -->

    <!-- {JSON.stringify($pageStoreResources)} -->
    <Checklist {block} {pageStoreResources} />
    <!-- <div class="text-white">{JSON.stringify(data)}</div> -->
    <!-- {#each data as resource_option}{JSON.stringify(resource_option)}{/each} -->
    <!-- {/if} -->
</div>
