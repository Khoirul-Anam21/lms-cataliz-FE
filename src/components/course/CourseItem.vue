<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { CourseDisplayProps, useCourseStore } from '../../stores/courses';
// import cookie from '@point-hub/vue-cookie';


const route = useRoute();
const router = useRouter();
const courseStore = useCourseStore();

// router.push({})
const courseDetail = ref('');

const propsCourse = defineProps<{
    course: CourseDisplayProps
}>()

onMounted(() => {
    // console.log(propsCourse.course);
    route.path.includes('participant') ? courseDetail.value = 'participant-all-course-detail' : courseDetail.value = 'course-detail';
})

const goCourseDetail = () => {
    courseStore.$state.currentCourseId = propsCourse.course._id;
    router.push({ name: courseDetail.value, params: { title: propsCourse.course.title + '-' + propsCourse.course._id } });
}

</script>

<template>
    <div class="rounded-xl border overflow-auto shadow-md h-fit">
        <section @click="goCourseDetail" class="cursor-pointer flex flex-col">
            <img class="rounded-t-lg h-1/2 w-full" :src="propsCourse.course.thumbnail" alt="" />
            <div class="px-3 py-2 md:p-5 md:pt-2">
                <h5 class="mb-1 text-sm md:text-lg font-bold text-gray-900">{{ propsCourse.course.title }}</h5>
                <p class=" font-normal text-gray-500 dark:text-gray-400 text-xs md:text-sm">{{ propsCourse.course.facilitator.username
                }}</p>  
                <p class=" font-normal text-gray-700 dark:text-gray-400 text-xs md:text-sm">{{ propsCourse.course.category }}
                </p>
            </div>
        </section>
    </div>
</template>