<script>
    // import { currentDocument } from "../../../stores/documentStore";
    // import { user } from "../../../stores";
    // import Api from "../../../utils/api";
    import { fly, fade } from "svelte/transition";
    export let setting;

    function toggle() {
        setting = !setting;
    }
</script>

<span
    transition:fly|local={{ y: -20, delay: 300 }}
    on:click={toggle}
    role="checkbox"
    tabindex="0"
    aria-checked="true"
    aria-labelledby="privacy-option-label-1"
    aria-describedby="privacy-option-description-1"
    class="{setting ? 'bg-green-500' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
    <span
        aria-hidden="true"
        class="{setting ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" />
</span>
