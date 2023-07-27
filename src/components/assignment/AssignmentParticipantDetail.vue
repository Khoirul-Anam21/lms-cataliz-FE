
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import BaseFileUpload from '../base/BaseFileUpload.vue';
import { SubmissionInterface, useAssignmentStore } from '../../stores/assignment'
import LoadingIndicatorPlain from '../additional/LoadingIndicatorPlain.vue';
import { TypesEnum, useBaseNotification } from '../../composable/notification';
import TheParticipantSubmission from './TheParticipantSubmission.vue';

const props = defineProps<{
    contentId: string
}>();

const { notification } = useBaseNotification();

const assignmentStore = useAssignmentStore();
const loading = ref(false);

const fileSubmission = ref('');

const submissionExist = computed(() => assignmentStore.$state.currentParticipantSubmission);
const assignmentExist = computed(() => assignmentStore.$state.currentAssignment);

const submitAssignment = async () => {
    try {
        loading.value = true;
        notification("Submitting", "Submitting your assignment", { type: TypesEnum.Info })
        const assignment = assignmentStore.$state.currentAssignment;
        const form = new FormData();
        form.append('assignment', fileSubmission.value);
        await assignmentStore.submitAssignment(assignment?._id as string, form);
        await assignmentStore.getParticipantSubmission(props.contentId);
        loading.value = false;
        notification("Success", "Success submit assignment", { type: TypesEnum.Success });
    } catch (error) {
        console.log(error);
        notification("Failed", "Failed to submit your assignment", { type: TypesEnum.Danger })
    }
}

watch(fileSubmission, (newv, old) => {
    console.log(newv);
})

onMounted(async () => {
    try {
        loading.value = true;
        await assignmentStore.getParticipantAssignmentData(props.contentId);
        await assignmentStore.getParticipantSubmission(props.contentId);
        loading.value = false
    } catch (error) {
        console.log(error);
    }
});


</script>

<template>
    <div v-if="loading" class="w-full h-200 flex items-center justify-center mt-10">
        <LoadingIndicatorPlain mode="black" />
    </div>
    <div v-else class="p-4 space-y-4">
        <section v-if="assignmentExist" class="flex flex-col justify-between space-y-4 basic-card shadow-lg px-6 py-4">
            <h1 class="text-black text-4xl">{{ assignmentStore.$state.currentAssignment?.title }}</h1>
            <section>
                <caption class="text-slate-600">Instruction:</caption>
                <p class="text-base text-slate-900">{{ assignmentStore.$state.currentAssignment?.instruction }}</p>
                <br>
            </section>
        </section>
        <section v-else class="flex flex-col justify-between space-y-4 basic-card shadow-lg px-6 py-4">
            <section>
                <span class="text-slate-600">No Assignment yet</span>
            </section>
        </section>
        <form v-show="!submissionExist && assignmentExist" @submit.prevent="submitAssignment">
            <div class="flex justify-between">
                <h2 class="text-black text-2xl pb-2">Submit your assignment</h2>
                <input type="submit" value="Submit" class="px-4 py-2 mb-1 rounded-lg text-white bg-blue-900 disabled:bg-slate-400" :disabled="fileSubmission === ''">
            </div>
            <BaseFileUpload @model:add-thumbnail="file => fileSubmission = file"/>
        </form>
        <section v-show="assignmentExist">
            <h2 class="text-black text-2xl pb-2">Submission</h2>
            <!-- kasi v-if -->
            <TheParticipantSubmission v-if="submissionExist" :submissionProp="(assignmentStore.$state.currentParticipantSubmission as SubmissionInterface)"/>
            <p v-else>No submission yet</p>
        </section>
    </div>
</template>