
<script setup lang="ts">
import { onMounted } from 'vue';
import ContentInput from '../../components/course/ContentInput.vue';
import { CourseContentDisplayProps, useCourseStore } from '../../stores/courses';

const props = defineProps<{
    id: string
}>();

const courseStore = useCourseStore();

onMounted(async () => {
    try {
        const courseId = localStorage.getItem("courseId");
        await courseStore.getCourseContentById(courseId as string, props.id);
    } catch (error) {
        console.log(error);
    }
});

</script>
<template>
    <div class="mt-20 md:mt-28 md:ml-64 mb-20">
        <div class="mt-10 ml-5 space-y-8">
            <h1 class="text-4xl font-bold">Edit Content</h1>
            <ContentInput :content="(courseStore.$state.currentCourseContent as CourseContentDisplayProps)"/>
        </div>
    </div>
    <RouterView/>
</template>