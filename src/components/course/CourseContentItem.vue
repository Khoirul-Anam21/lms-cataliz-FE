<script setup lang="ts">
import { CourseContentDisplayProps, useCourseStore } from '../../stores/courses';
import { computed, ref, watch } from 'vue';
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
                <i v-if="props.content.isComplete" class="fa-solid fa-circle-check fa-2xl text-green-500"></i>
                <div v-else class="w-7 h-7 rounded-full bg-transparent border-4 border-slate-400"></div>
            </div>
        </div>
    </a>
</template>