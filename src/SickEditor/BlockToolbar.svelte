<script>
    export let block, pageStore;
</script>

<div class="" style="">
    <!-- <button
        class="text-xs  text-gray-300 border border-gray-300 p-1 rounded-full w-6 h-6">
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 92.1 19.5"
            style="width:100%"
            fill="currentColor">
            <g id="Regular-M_1_" transform="matrix(1 0 0 1 1395.06 1126)">
                <path
                    d="M-1375.4-1116.2c0-5.4-4.4-9.8-9.9-9.8c-5.4,0-9.8,4.3-9.8,9.8s4.4,9.8,9.8,9.8
                    C-1379.8-1106.5-1375.4-1110.8-1375.4-1116.2z M-1339.2-1116.2c0-5.4-4.3-9.8-9.8-9.8c-5.4,0-9.7,4.3-9.7,9.8s4.3,9.8,9.7,9.8
                    C-1343.6-1106.5-1339.2-1110.8-1339.2-1116.2z M-1303-1116.2c0-5.4-4.3-9.8-9.8-9.8c-5.5,0-9.9,4.3-9.9,9.8s4.3,9.8,9.9,9.8
                    C-1307.3-1106.5-1303-1110.8-1303-1116.2z" />
            </g>
        </svg>
    </button> -->

    <!-- <div class="w-20 rounded bg-black absolute " style="margin-left:-30px;">
        asdfasdf
    </div> -->
    <button
        class="text-xs border border-gray-300 p-1 rounded"
        on:click={() => pageStore.delete(block)}>Delete</button>
</div>
