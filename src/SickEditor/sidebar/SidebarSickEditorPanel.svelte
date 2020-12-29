<script>
  // import { params, page } from "@roxi/routify";
  // import { createdLessThanAMinuteAgo } from "../../../utils/timeAgoInWords";
  // import { fly, slide } from "svelte/transition";
  // import { currentCourse } from "../../courses/course-stores";

  // const course = $currentCourse;
  // export let course;

  // import Sidebar from "../Sidebar/Sidebar.svelte";
  // $: $sidebarStore.sidebarContainerWidth = 300;
  function newPageElement() {
    pageStore.createElement();
  }

  function showNewLessonForm() {}

  import { fade, fly, slide } from "svelte/transition";

  import { cubicInOut } from "svelte/easing";
  import { blockOptions, pageStore, pageStorePreview } from "../stores";
  // import { pageStore } from "../../../../custom-store";

  import ButtonAddBlock from "../ButtonAddBlock.svelte";
  import ToggleSwitch from "../ToggleSwitch.svelte";

  import envURL from "../../../../env-url";
  import ImageUploader from "../ImageUploader.svelte";

  // $: previewModeOn = $pageStore.edit_mode;
  let imageSrcUrl;
  let changeCoverImagePanelOpen = false;
  function toggle() {}

  // $: console.log(pluck($pageStore.element_options, "id"));

  // let selectedValue = items.find((i) => i.value === task.reset_unit);

  // let items = [
  //   { value: "day", label: "Day" },
  //   { value: "week", label: "Week" },
  //   { value: "hour", label: "Hour" },
  //   { value: "month", label: "Month" },
  // ];

  // $: {
  //   task.reset_unit = selectedValue.value;
  // }
</script>

<style>
  li {
    border-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  }

  li svg {
    width: 15px;
  }
  .notSaved {
    background-color: rgb(41, 41, 41);
  }
  .active {
    border-right: 2px solid #8614f8;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    font-weight: bold;
  }
</style>

<!-- {JSON.stringify($pageStore)} -->

<!-- <button on:click={() => pagesIndexStore.newPage()}>New</button> -->

<!-- {#if !$pageStore.element_options}
    ...
  {:else}
    <p class="font-medium text-2xl text-gray-100">Your stuff</p>
    <ul class="w-full text-gray-400">
      {#each $pageStore.element_options as element}
        <li class="bg-gray-900">
          <div class="p-4 h-full w-full text-sm">{element.title}</div>
        </li>
      {/each}
    </ul>
  {/if} -->
<!-- {#each $newCourseStore.lessons as lesson, i}
      <li
        in:fly|local={{ x: -20, delay: 300 + i * 100, duration: 200 }}
        class="p-4 text-gray-300 text-sm"
        class:active={$params.lesson_slug === lesson.slug}
        class:notSaved={!lesson.id}>
        <a href="/courses/{$newCourseStore.slug}/{lesson.slug}">
          {lesson.name}
        </a>
        {#if lesson.assignments}
          <p class="text-xs font-normal text-gray-500">
            {lesson.assignments.length}
            assignments
          </p>
        {/if}
        {#if lesson.description}
          <p class="text-xs font-normal text-gray-500">{lesson.description}</p>
        {/if}
      </li>
    {/each} -->

<!-- {#if $adminStore.admin_mode}
    <div transition:slide class="bg-gray-900 h-28">
      <button on:click={newLesson}>New</button>
    </div>
  {/if} -->
{#if $pageStore && $pageStore.id}
  <div
    class="flex border rounded bg-gray-900 text-gray-300 border-gray-700 text-sm">
    {#each $blockOptions as option}
      <ButtonAddBlock {option} {pageStore} />
    {/each}
  </div>
  <!-- {JSON.stringify(block)} -->
  <ul class="text-white">
    <!-- <li
    class="p-4 text-gray-300 text-sm"
    class:active={$page.path === `/courses/:slug/index`}>
    <a href="/courses/{$newCourseStore.slug}"> {$newCourseStore.name} </a>
  </li> -->
    <li
      in:fly|local={{ x: -20, duration: 200 }}
      class=" text-gray-300 text-sm p-4 flex flex-col">
      <div class="justify-between flex">
        <img
          class="w-1/3 shadow-sm border border-transparent hover:border-gray-500 transition"
          src="{envURL}/{$pageStore.cover_image_url}"
          on:click={() => (changeCoverImagePanelOpen = !changeCoverImagePanelOpen)} />
        <div class="flex flex-col items-center justify-between">
          <button
            class="purple-gradient px-3 py-1 rounded-sm text-sm text-white"
            on:click={() => pageStore.saveToDB(`/pages/${$pageStore.id}`)}>Save</button>
          <ToggleSwitch bind:setting={$pageStorePreview} />
        </div>
      </div>
      {#if changeCoverImagePanelOpen}
        <div
          class="h-20 mt-4"
          transition:slide={{ duration: 300, easing: cubicInOut }}>
          <ImageUploader
            bind:imageSrcUrl
            url={`/pages/${$pageStore.id}/attach_image`}
            name={'page[cover_image]'} />
        </div>
      {/if}
    </li>
    <li class="p-4 text-gray-300  flex flex-col justify-between space-y-2">
      <input
        class="text-black p-2 rounded shadow"
        bind:value={$pageStore.name} />
    </li>
    <!-- url=`{${$pageStore.url}/attach_image}` -->
    {#if $pageStore.blocks}
      {#each $pageStore.blocks as block, i}
        <li
          in:fly|local={{ x: -20, delay: 300 + i * 100, duration: 200 }}
          class="px-3 py-2 text-gray-300 text-sm flex flex-col justify-between ">
          <div class="overflow-hidden">
            <!-- <p class="text-gray-500 uppercase text-xs">{block.type}</p> -->
            <div class="flex  justify-between ">
              <div class="flex items-center space-x-1">
                <svg
                  aria-hidden="true"
                  role="img"
                  class="text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 650 550">
                  <path
                    fill="currentColor"
                    d={$blockOptions.find((b) => b.type === block.type).svgPath} />
                </svg>
                <p class="text-sm text-gray-200 truncate">
                  {block.data.text ? block.data.text : ''}
                  {block.data.image_url ? block.data.image_url : ''}
                </p>
              </div>
              <button
                class="text-xs inline-flex w-auto border border-gray-500 px-1 py-0.5 text-gray-500 rounded"
                on:click={() => pageStore.delete(block)}>Delete</button>
            </div>
          </div>

          <div class="flex" />
          <!-- <BlockToolbar bind:block {pageStore} /> -->

          <!-- class:notSaved={!lesson.id} -->
          <!-- class:active={active(lesson)} -->
          <!-- <a href="/courses/{$newCourseStore.slug}/{lesson.slug}">
        {lesson.name}
      </a> -->
          <!-- {#if lesson.tasks_attributes}
        <p class="text-xs font-normal text-gray-500">
          {lesson.tasks_attributes.length}
          assignments
        </p>
        {#if active(lesson)}
          <div class="mt-3" transition:slide={{ delay: 400, duration: 200 }}>
            {#each lesson.tasks_attributes as assignment}
              <div
                class="flex items-center font-normal space-x-2 text-gray-300 text-xs">
                <input type="checkbox" checked={assignment.complete} />
                <p>{assignment.content}</p>
              </div>
            {/each}
          </div>
        {/if}
      {/if} -->
          <!-- {#if lesson.description}
        <p class="text-xs font-normal text-gray-500">{lesson.description}</p>
      {/if} -->
          <!-- {#if $params.lesson_slug === lesson.slug}
        <input type="checkbox" bind:value={editModeOn} />
      {/if} -->
        </li>
      {/each}
    {/if}
  </ul>

  <!-- {#each $blockOptions as option}
      <ButtonAddBlock {option} {pageStore} />
    {/each} -->
{/if}
