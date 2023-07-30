
<script setup lang="ts">
import { useCourseStore } from '../../stores/courses';
import ContentInput from '../../components/course/ContentInput.vue';
import ContentModifyList from '../../components/course/ContentModifyList.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { TypesEnum, useBaseNotification } from '../../composable/notification';
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';

const route = useRoute();

const courseStore = useCourseStore();
const { notification } = useBaseNotification();
const loading = ref(false);

const parsedCourseId = computed(() => {
    const splitRoute = route.path.split('-');
    const courseId = splitRoute[1].slice(0, 24);
    return courseId;
});

const deleteAndRefreshList = async (contentId: string) => {
    try {
        loading.value = true;
        const courseId = parsedCourseId.value;
        await courseStore.deleteCourseContent(courseId, contentId);
        await courseStore.getCourseById(courseId);
        loading.value = false;
        notification('Success', 'Delete Course Content', { type: TypesEnum.Success });
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    try {
        await courseStore.getCourseById(parsedCourseId.value);
        // console.log(props.courseId);
        if (courseStore.$state.currentCourse?.contents.length === 0) {
        }
    } catch (error) {
        console.log(error);
    }
})

</script>

<template>
    <div class="mt-20 md:mt-28 md:ml-64 mb-20">
        <LoadingIndicator v-show="loading" />
        <div class="mt-10 ml-5 space-y-8">
            <h1 class="text-4xl font-bold">Edit Course Content</h1>
            <div>
                <label for="countries_disabled" class="block font-medium text-gray-900 dark:text-black text-2xl">Course
                    title:</label>
                <h1 class="text-4xl">{{ courseStore.$state.currentCourse?.title }}</h1>
            </div>
            <ContentModifyList :contents="courseStore.$state.currentCourse?.contents"
                @delete-and-reload="deleteAndRefreshList" :edit-mode="true" :course-id="parsedCourseId" />
        </div>

    </div>
    <RouterView />
</template>