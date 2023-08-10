<script setup lang="ts">
import { FacilitatorCourseDisplayProps } from '../../stores/courses';
import { computed, onMounted, ref } from 'vue';
import { useCourseStore } from '../../stores/courses'

const props = defineProps<{
    course: FacilitatorCourseDisplayProps
}>();

const courseStore = useCourseStore();

const publishStatus = computed(() => props.course.published ? 'published' : 'draft');
const tesParam = ref('tetes');

onMounted(async () =>{
});

</script>

<template>
    <div class="rounded-xl border overflow-auto shadow-md">
        <router-link :to="{ name: 'facil-course-detail', params: { title: props.course.title + '-' + props.course._id } }">
            <img :src="props.course.thumbnailPath" alt="tes" />
            <section class="p-5">
                <h5 class="mb-2 text-2xl font-bold text-gray-900">{{ props.course.title }}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ props.course.studentCount }} Participant</p>
                <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Status: <span
                        :class="{ 'text-green-500': publishStatus === 'published', 'text-red-500': publishStatus === 'draft' }">{{
                            publishStatus
                        }}</span></p>
            </section>
        </router-link>
    </div>
</template>