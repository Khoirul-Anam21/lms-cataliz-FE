<script setup lang="ts">
import { computed } from 'vue';
import { FacilitatorCourseDisplayProps } from '../../stores/courses';

defineEmits(['getDetail']);
const props = defineProps<{
    course: FacilitatorCourseDisplayProps
    role: string,
    title: string
}>()

const courseParams = computed(() => props.title + "-" + props.course._id);

// console.log(props.role);

</script>

<template>
    <button @click="$emit('getDetail', props.course._id)"
        class="flex flex-row p-2 border focus:selected-dashboard-course rounded-lg justify-start items-center mb-1 w-full">
        <i class="fa-solid fa-book fa-lg p-2"></i>
        <div class="-space-y-1 flex flex-col items-start">
            <h6 class="text-sm md:text-base font-bold text-left">{{ props.course.title }}</h6>
            <router-link
                :to="{ name: props.role === 'facilitator' ? 'facil-course-detail' : 'std-course-detail', params: { title: courseParams } }"
                class="text-xs w-fit">View course</router-link>
        </div>
    </button>
</template>