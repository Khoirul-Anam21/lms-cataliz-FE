<script setup lang="ts">
import { ref, Ref } from 'vue';

const fileInputRef: Ref<HTMLInputElement | null> = ref(null);
const fileName: Ref<string | null> = ref(null);
const file: Ref<FileList | null> = ref(null);

const emit = defineEmits(['model:addThumbnail'])

const deleteFile = (): void => {
    fileName.value = '';
    fileInputRef.value = null
    file.value = null
}

const highlightDropzone = (event: DragEvent): void => {
    event.preventDefault();
    (event.target as HTMLElement).classList.add('border-blue-500');
};

const unhighlightDropzone = (event: DragEvent): void => {
    (event.target as HTMLElement).classList.remove('border-blue-500');
};

const handleFileUpload = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    console.log("terupload");
    if (files) {
        file.value = files;
        fileName.value = files[0].name;
        emit("model:addThumbnail", files[0])
    }
};

const handleFileDrop = (event: DragEvent): void => {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    console.log("terdrop");
    if (files) {
        file.value = files;
        fileName.value = files[0].name;
        emit("model:addThumbnail", files[0])
    }
};
</script>
<template>
    <div class="border-2 border-dashed border-gray-400 p-4">
        <input id="drop-file" type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
        <label v-if="!fileName" for="drop-file" class="py-8" @dragover.prevent="highlightDropzone"
            @dragleave="unhighlightDropzone" @drop="handleFileDrop">
            <div class="flex flex-col items-center justify-center">
                <div class="text-gray-500 mb-2 text-center">
                    <i class="fa-solid fa-upload fa-xl mb-4 mt-2"></i>
                    <p>Drag and drop files here</p>
                    <p class="text-sm">(or click to browse)</p>
                </div>
            </div>
        </label>
        <div v-else class="flex flex-row p-2 border justify-between">
            <div class="flex flex-row">
                <i class="fa-solid fa-file fa-lg p-2 pr-2"></i>
                <p>{{ fileName }}</p>
            </div>
            <i @click="deleteFile" class="fa-solid fa-xmark fa-lg p-2 text-red-500"></i>
        </div>
    </div>
</template>
  
