<script>
    export let block;
    export let init;
    export let handleKeydown;
    export let index;
    let videos;
</script>

<style>
    div {
    }
</style>

<div class="bg-gray-900 p-2 flex items-center justify-center">
    <!-- {JSON.stringify(block)} -->
    <p>Vimeo ID</p>
    <input
        bind:value={block.data.vimeo_id}
        class="p-2 bg-transparent text-4xl font-black w-64 text-center border border-gray-800 rounded shadow-inner" />
    <!-- <Vimeo videoId={492924209} playerWidth={1000} /> -->
    <!-- <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe
            src="https://player.vimeo.com/video/{block.data.vimeo_id}?title=0&byline=0&portrait=0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen />
    </div><script src="https://player.vimeo.com/api/player.js">
    </script><!-- {@html block.data.embed} -->
</div>

<div style="padding:56.25% 0 0 0;position:relative;">
    <iframe
        src="https://player.vimeo.com/video/{block.data.vimeo_id}?title=0&byline=0&portrait=0"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen />
    <script src="https://player.vimeo.com/api/player.js">
    </script>
</div>
