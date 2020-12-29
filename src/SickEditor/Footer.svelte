<script>
    export let blockStore, showTools;
</script>

<footer class=" bg-gray-100 w-full">
    <input type="checkbox" bind:checked={showTools} />
    {showTools}
    {JSON.stringify($blockStore)}
</footer>
