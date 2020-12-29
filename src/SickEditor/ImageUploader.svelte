<script>
    import FilePond, { registerPlugin, supported } from "svelte-filepond";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    export let imageSrcUrl;
    // import { quillStore } from "../quill-store";

    import envURL from "../../../env-url";
    import { user } from "../../../stores";
    import { writable } from "svelte/store";
    import { pageStore } from "./stores";
    // import { editorStore } from "./stores";
    export const uploadedImageStore = writable();
    // import AudioControls from "../_components/AudioPlayer/AudioControls.svelte";
    registerPlugin(FilePondPluginImagePreview);

    let pond;
    export let name;
    export let url;
    export let method = "PATCH";
    // export let onComplete =

    export let processOptions = {
        url: url,
        method: method,
        // headers: {
        //     "X-AUTH-TOKEN": $user.auth_token,
        // },
        // withCredentials: false,
        instantUpload: false,
        onprocessfile: (response) => console.log("response :>> ", response),
        onload: (response) => {
            const data = JSON.parse(response);
            console.log("data :>> ", data);
            if (data.cover_image_url) {
                $pageStore.cover_image_url = data.cover_image_url;
            } else if (data.image_url) {
                imageSrcUrl = data.image_url;
            }
            // $quillStore.uploaded_image = data.uploaded_image_url;
            // console.log("data :>> ", data);
            // if (name === "user[image]") updateUserStore(data);
            // if (name === "document[cover_image]")
            // //     $currentDocument.cover_image = data.cover_image;
            // if (name === "document[images]") updateUploadedImageStore(data);
            // if (name === "game[cover_image]")
            //     $currentGame.cover_image = data.cover_image;
            // if (name === "course[cover_image]")
            //     $currentCourse.cover_image = data.cover_image;
            // return res;
        },
        onerror: (response) => response.data,
        ondata: (formData) => {
            formData.append("Authorization", $user.auth_token);
            return formData;
        },
    };
    console.log("processOptions :>> ", processOptions);
    const serverOptions = {
        url: envURL,
        timeout: 7000,
        process: processOptions,
    };
    console.log("processOptions :>> ", processOptions);
    // function updateDocumentStore(data) {
    //     console.log("data :>> ", data);
    // }

    // function updateUserStore(data) {
    //     let authToken = JSON.parse(localStorage.getItem("user")).auth_token;
    //     $currentUser.auth_token = authToken;
    //     localStorage.setItem("user", JSON.stringify($currentUser));
    // }

    // function updateUploadedImageStore(data) {
    //     $uploadedImage = data;
    // }

    // function handleInit() {}
    // function handleProcessFile(err, fileItem) {}

    function handleAddFile(err, fileItem) {
        // pond.processFiles();
    }
</script>

<style global>
    @import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
    /* use a hand cursor intead of arrow for the action buttons */
    .filepond--file-action-button {
        cursor: pointer;
    }

    /* the text color of the drop label*/
    .filepond--drop-label {
        color: white;
        /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
    }

    /* underline color for "Browse" button */
    .filepond--label-action {
        text-decoration-color: #aaa;
    }

    /* the background color of the filepond drop area */
    .filepond--panel-root {
        background-color: #eee;
    }

    /* the border radius of the drop area */
    .filepond--panel-root {
        border-radius: 0.5em;
    }

    /* the border radius of the file item */
    .filepond--item-panel {
        border-radius: 0.5em;
    }

    /* the background color of the file and file panel (used when dropping an image) */
    .filepond--item-panel {
        background-color: #555;
    }

    /* the background color of the drop circle */
    .filepond--drip-blob {
        background-color: #999;
    }

    /* the background color of the black action buttons */
    .filepond--file-action-button {
        background-color: rgba(0, 0, 0, 0.5);
    }

    /* the icon color of the black action buttons */
    .filepond--file-action-button {
        color: white;
    }

    /* the color of the focus ring */
    .filepond--file-action-button:hover,
    .filepond--file-action-button:focus {
        box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.9);
    }

    /* the text color of the file status and info labels */
    .filepond--file {
        color: white;
    }

    /* error state color */
    [data-filepond-item-state*="error"] .filepond--item-panel,
    [data-filepond-item-state*="invalid"] .filepond--item-panel {
        background-color: red;
    }

    [data-filepond-item-state="processing-complete"] .filepond--item-panel {
        background-color: green;
    }

    /* bordered drop area */
    .filepond--panel-root {
        background-color: transparent;
        border: 2px solid #2c3340;
    }
</style>

<FilePond
    bind:this={pond}
    labelIdle={'Upload a photo. Click or drag & drop.'}
    {name}
    credits={false}
    instantUpload={false}
    server={serverOptions} />
