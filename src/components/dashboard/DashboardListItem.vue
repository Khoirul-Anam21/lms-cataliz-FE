<script setup lang="ts">
import { FacilitatorCourseDisplayProps } from '@/stores/courses';

defineEmits(['getDetail']);
const props = defineProps<{
    course: FacilitatorCourseDisplayProps
}>()

</script>

<template>
    <button @click="$emit('getDetail', props.course._id)"
        class="flex flex-row p-2 border focus:selected-dashboard-course rounded-lg justify-start items-center mb-1 w-full">
        <i class="fa-solid fa-book fa-lg p-2"></i>
        <div class="-space-y-1 flex flex-col">
            <h6 class="text-base font-bold">{{ props.course.title }}</h6>
            <router-link :to="{ name: 'facil-courses' }" class="text-xs w-fit">View course</router-link>
        </div>
    </button>
</template>