<script>
    import { params } from "@roxi/routify";

    import { fade } from "svelte/transition";
    import { uploadedImage } from "../../../../stores";
    import ImageUploader, { uploadedImageStore } from "../ImageUploader.svelte";
    import { pageStore } from "../stores";

    export let block, index;
    let imageSrcUrl;
    $: if (!block.data.src) {
        block.data.src = imageSrcUrl;
    }
</script>

{#if block.data.src}
    <img class="object-cover w-full h-64" src={block.data.src} />
{:else}
    <ImageUploader
        bind:imageSrcUrl
        url={`/pages/${$pageStore.id}/attach_image`}
        name={'page[images]'} />
{/if}
