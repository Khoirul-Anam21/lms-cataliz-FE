<script setup lang="ts">
defineEmits(['getDetail']);
const props = defineProps({
    info: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <button @click="$emit('getDetail', props.info.detail)"
        class="flex flex-row p-2 border focus:border-4 rounded-lg justify-start items-center mb-1 w-full">
        <i class="fa-solid fa-book fa-lg p-2"></i>
        <div class="-space-y-1 flex flex-col">
            <h6 class="text-base font-bold">{{ props.info.title }}</h6>
            <router-link :to="{ name: 'facil-courses' }" class="text-xs w-fit">View course</router-link>
        </div>
    </button>
</template>