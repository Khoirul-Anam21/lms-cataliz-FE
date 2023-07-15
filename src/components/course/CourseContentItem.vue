<script setup lang="ts">
import { CourseContentDisplayProps, useCourseStore } from '../../stores/courses';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
    content: CourseContentDisplayProps
}>();

const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();


const isFacil = computed(() => route.path.includes('facil'));
const duration = computed(() => props.content.duration === 0 ? "" : props.content.duration );

const goMaterialDetail = () => {
    courseStore.$state.currentCourseContent = props.content;
    if (!isFacil.value) {
        return router.push({ name: 'std-material-detail', params: { id: props.content._id } })
    }
    return router.push({ name: 'facil-material-detail', params: { id: props.content._id } })
}


</script>

<template>
    <a @click="goMaterialDetail"
        class="mt-2 flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-gray hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-black/10 dark:active:bg-gray"
        data-te-sidenav-link-ref>
        <i v-if="props.content.type === 'video'" class="fa-regular fa-circle-play fa-2xl mr-4"></i>
        <i v-else class="fa-regular fa-file-lines fa-2xl mr-4 ml-1"></i>

        <div class="flex justify-between w-11/12">
            <span>
                <p class="text-xl">{{ props.content.title }}</p>
                <p class="text-[lg] space-x-3">
                    <span>{{ props.content.type }}</span>
                    <span>{{ duration }}</span>
                </p>
            </span>
            <div class="mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6   h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    </a>
</template>