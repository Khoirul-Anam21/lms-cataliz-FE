<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CourseDisplayProps, useCourseStore } from '../../stores/courses';

const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();

router.push({})
const courseDetail = ref('');

const propsCourse = defineProps<{
    course: CourseDisplayProps
}>()

onMounted(() => {
    route.path.includes('participant') ? courseDetail.value = 'participant-all-course-detail' : courseDetail.value = 'course-detail';
})

const goCourseDetail = () => {
    courseStore.$state.currentCourseId = propsCourse.course._id;
    router.push({ name: courseDetail.value, params: { title: propsCourse.course.title + '-' + courseStore.$state.currentCourseId } });
}

</script>

<template>
    <div class="rounded-xl border overflow-auto shadow-md">
        <section @click="goCourseDetail" class="cursor-pointer flex flex-col">
            <img class="rounded-t-lg h-1/2 w-full" :src="propsCourse.course.thumbnail" alt="" />
            <div class="p-5 pt-2">
                <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ propsCourse.course.title
                }}</h5>
                <p class=" font-normal text-gray-700 dark:text-gray-400 text-sm">{{ propsCourse.course.facilitator.username
                }}</p>
                <p class=" font-normal text-gray-700 dark:text-gray-400 text-sm">Category: {{ propsCourse.course.category }}
                </p>
            </div>
        </section>
    </div>
</template>