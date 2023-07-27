<script setup lang="ts">
import { SubmissionInterface } from '@/stores/assignment';
import { computed } from 'vue';


const props = defineProps<{
    submissionProp: SubmissionInterface
}>();

const submissionFileName = computed(() => {
    const splitStr = props.submissionProp.submission.split('/');
    return splitStr[splitStr.length - 1];
});

const gradeStatus = computed(() => props.submissionProp.isGraded ? "Graded" : "Not Graded");

</script>
<template>
    <div class="basic-card px-6 py-4 flex w-fit">
        <section class="space-y-4 pr-6 border-r">
            <p class="text-slate-500">Your submission:</p>
            <p class="text-base text-slate-700"><i class="fa-solid fa-file fa-xl mr-2"></i>{{ submissionFileName }}</p>
        </section>
        <section class="flex items-start flex-col ml-4">
            <p class="text-slate-500">status: <span class="font-bold" :class="{ 'text-green-600': gradeStatus === 'Graded', 'text-red-500': gradeStatus === 'Not Graded' }">{{ gradeStatus }}</span></p>
            <p class="text-slate-500">score: </p>
            <p class="text-2xl font-bold">{{ props.submissionProp.score }}<span class="text-base font-semibold">/100</span></p>
        </section>
    </div>
</template>