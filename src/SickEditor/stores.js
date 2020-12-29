import { nanoid } from "nanoid/non-secure";

import { get, writable } from "svelte/store";
import Api from "../../../utils/api";
import Resource from "./_element-components/Resource.svelte";
export const editorStore = writable();

// export const blockOptions = writable([
//   { type: "paragraph", tag: "p", data: { text: "" }, label: "P" },
//   { type: "header", tag: "h1", data: { level: 1, text: "" }, label: "H1" },
//   { type: "header", tag: "h2", data: { level: 2, text: "" }, label: "H2" },
//   {
//     type: "video",
//     tag: "div",
//     data: { embed: "", vimeo_id: "270511113" },
//     label: "Video",
//   },
//   {
//     type: "image",
//     tag: "img",
//     data: { src: "" },
//     label: "Image",
//   },
//   {
//     type: "resource",
//     tag: "div",
//     data: { component: Resource, class: "", id: "" },
//     label: "Resource",
//   },
//   {
//     type: "spacer",
//     tag: "div",
//     data: { height: 100 },
//     label: "Spacer",
//   },
//   {
//     type: "list",
//     tag: "ul",
//     data: {
//       list_style: "",
//     },
//     items: [
//       {
//         type: "list-item",
//         tag: "li",
//         data: { text: " " },
//         label: "LI",
//       },
//     ],
//     label: "UL",
//   },
//   {
//     type: "list-item",
//     tag: "li",
//     data: { text: "" },

//     label: "LI",
//   },
// ]);

export const blockOptions = writable([
  {
    type: "paragraph",
    tag: "p",
    data: { text: "" },
    label: "P",
    svgPath:
      "M448 48v32a16 16 0 0 1-16 16h-48v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96h-32v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z",
  },
  {
    type: "header",
    tag: "h1",
    data: { level: 1, text: "" },
    label: "H1",
    svgPath:
      "M280 64C257.906 64 240 81.906 240 104V216H80V104C80 81.906 62.094 64 40 64S0 81.906 0 104V408C0 430.094 17.906 448 40 448S80 430.094 80 408V296H240V408C240 430.094 257.906 448 280 448S320 430.094 320 408V104C320 81.906 302.094 64 280 64ZM536 367.992H520.375V103.967C520.375 89.027 512.063 75.34 498.797 68.463C485.594 61.65 469.578 62.682 457.359 71.244L401.359 110.654C383.281 123.375 378.953 148.314 391.656 166.41C402.797 182.225 423.328 187.506 440.375 180.037V367.992H424C401.906 367.992 384 385.9 384 407.996S401.906 448 424 448H536C558.094 448 576 430.092 576 407.996S558.094 367.992 536 367.992Z",
  },
  {
    type: "header",
    tag: "h2",
    data: { level: 2, text: "" },
    label: "H2",
    svgPath:
      "M280 64C257.906 64 240 81.906 240 104V216H80V104C80 81.906 62.094 64 40 64S0 81.906 0 104V408C0 430.094 17.906 448 40 448S80 430.094 80 408V296H240V408C240 430.094 257.906 448 280 448S320 430.094 320 408V104C320 81.906 302.094 64 280 64ZM600 368.002H507.098L582.408 295.35C633.125 247.977 639.125 167.73 596.078 112.701C574.189 84.701 541.861 67.109 507.346 64.391C472.551 61.641 439.316 73.484 413.412 97.67L391.428 118.17C375.271 133.23 374.381 158.543 389.459 174.697C404.49 190.822 429.816 191.729 445.988 176.666L467.988 156.168C477.301 147.449 489.082 143.199 501.098 144.137C513.471 145.105 524.83 151.449 533.049 161.98C550.502 184.26 548.143 217.885 527.33 237.352L380.24 379.221C368.49 390.533 364.803 407.846 370.912 422.969C377.021 438.094 391.693 448 408.006 448H600C622.094 448 640 430.094 640 408.002C640 385.908 622.094 368.002 600 368.002Z",
  },
  {
    type: "video",
    tag: "div",
    data: { embed: "", vimeo_id: "270511113" },
    label: "Video",
    svgPath:
      "M336 64H48C21.49 64 0 85.492 0 112V400C0 426.508 21.49 448 48 448H336C362.51 448 384 426.508 384 400V112C384 85.492 362.51 64 336 64ZM272.002 279.998H215.998V336.002C215.998 349.262 205.258 360 192 360C178.734 360 168.002 349.258 168.002 336.002V279.998H111.998C98.73 279.998 88 269.256 88 256C88 242.742 98.738 232.002 111.998 232.002H168.002V175.998C168.002 162.738 178.742 152 192 152S215.998 162.738 215.998 175.998V232.002H272.002C285.262 232.002 296 242.742 296 256S285.262 279.998 272.002 279.998ZM525.594 101.703L416 177.297V334.703L525.594 410.203C546.812 424.797 576 409.906 576 384.406V127.5C576 102.094 546.906 87.094 525.594 101.703Z",
  },
  {
    type: "image",
    tag: "img",
    data: { src: "" },
    label: "Image",
    svgPath:
      "M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM112 96C138.51 96 160 117.492 160 144S138.51 192 112 192S64 170.508 64 144S85.49 96 112 96ZM446.121 407.551C443.336 412.754 437.914 416 432.014 416H82.013C75.992 416 70.48 412.621 67.752 407.25C65.021 401.883 65.537 395.438 69.086 390.574L139.086 294.574C142.098 290.441 146.902 288 152.014 288S161.93 290.441 164.941 294.574L197.396 339.086L290.701 199.125C293.668 194.672 298.664 192 304.014 192S314.359 194.672 317.326 199.125L445.326 391.125C448.6 396.035 448.904 402.348 446.121 407.551Z",
  },
  {
    type: "resource",
    tag: "div",
    data: { component: Resource, class: "", id: "" },
    label: "Resource",
  },
  {
    type: "spacer",
    tag: "div",
    data: { height: 100 },
    label: "Spacer",
    svgPath:
      "M160 112C160 120.801 167.201 128 176 128H256V192H176C167.201 192 160 199.199 160 208S167.201 224 176 224H256V288H176C167.201 288 160 295.199 160 304S167.201 320 176 320H256V384H176C167.201 384 160 391.199 160 400S167.201 416 176 416H256V480C256 497.6 241.6 512 224 512H32C14.4 512 0 497.6 0 480V32C0 14.4 14.4 0 32 0H224C241.6 0 256 14.4 256 32V96H176C167.201 96 160 103.199 160 112Z",
  },
  {
    type: "list",
    tag: "ul",
    data: {
      list_style: "",
    },
    items: [
      {
        type: "list-item",
        tag: "li",
        data: { text: " " },
        label: "LI",
      },
    ],
    label: "UL",
    svgPath:
      "M80 48H16C7.156 48 0 55.156 0 64V128C0 136.844 7.156 144 16 144H80C88.844 144 96 136.844 96 128V64C96 55.156 88.844 48 80 48ZM80 208H16C7.156 208 0 215.156 0 224V288C0 296.844 7.156 304 16 304H80C88.844 304 96 296.844 96 288V224C96 215.156 88.844 208 80 208ZM80 368H16C7.156 368 0 375.156 0 384V448C0 456.844 7.156 464 16 464H80C88.844 464 96 456.844 96 448V384C96 375.156 88.844 368 80 368ZM192 128H480C497.674 128 512 113.674 512 96S497.674 64 480 64H192C174.326 64 160 78.326 160 96S174.326 128 192 128ZM480 384H192C174.326 384 160 398.326 160 416S174.326 448 192 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384ZM480 224H192C174.326 224 160 238.326 160 256S174.326 288 192 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224Z",
  },
  {
    type: "list-item",
    tag: "li",
    data: { text: "" },

    label: "LI",
  },
]);

// function addBlock(e, option) {
//   let newBlock = {
//       id: nanoid(),
//       type: option.type,
//       tag: option.tag,
//       data: option.data,
//       label: option.label,
//   };

//   $blockStore.blocks = [...$blockStore.blocks, newBlock];

function createBlockStore(val) {
  const { subscribe, set, update } = writable(val);
  return {
    subscribe,
    set,
    newPage: async (params) => {
      const data = await Api.post("/pages", params);
      set(data);
    },

    fetch: async (url) => {
      const data = await Api.get(url);

      set(data);
      // set(obj);
    },
    saveToDB: async (url) => {
      const store = get(pageStore);
      saveChanges(url, store);
      // console.log("data :>> ", data);
    },

    insertBlock: (blockOptionToInsert, position) => {
      console.log("position :>> ", position);
      let newBlock = JSON.parse(JSON.stringify(blockOptionToInsert));
      newBlock.id = nanoid(4);
      update((store) => {
        return Object.assign(store, {
          blocks: [
            ...store.blocks.slice(0, position + 1),
            newBlock,
            ...store.blocks.slice(position + 1),
          ],
        });
      });
    },
    addItemToList: (block) => {
      // let newBlockObj = JSON.parse(JSON.stringify(option));
      console.log("block :>> ", block);
      update((store) => {
        return Object.assign(store, {
          blocks: [
            ...store.blocks.slice(0, position + 1),
            newBlock,
            ...store.blocks.slice(position + 1),
          ],
        });
      });
    },
    addBlock: (option) => {
      let newBlockObj = JSON.parse(JSON.stringify(option));
      newBlockObj.id = nanoid(4);
      update((store) => {
        return Object.assign(store, {
          blocks: [...store.blocks, newBlockObj],
        });
      });
    },
    delete: (block) => {
      update((store) => {
        console.log("store :>> ", store);
        let blockIndex = store.blocks.indexOf(block);
        // console.log("blockIndex :>> ", blockIndex);

        return Object.assign(store, {
          blocks: store.blocks.filter((b) => b.id !== block.id),
        });
      });
    },

    // async function fetchPage(slug) {

    // let slug = "new-page";
    // $: fetchPage(slug);

    reset: () => set(),
  };
}

const saveChanges = async (url, page) => {
  let params = {
    page,
  };
  console.log("params :>> ", params);
  const data = await Api.patch(url, params);
  console.log("data :>> ", data);
};

export const pageStore = createBlockStore({});

export const pageStorePreview = writable(false);
export const pageStoreResources = writable();
