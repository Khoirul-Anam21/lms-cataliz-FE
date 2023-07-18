<script setup lang="ts">
import { FacilReportCourseDetailInterface, ParticipantReportCourseDetailInterface } from '../../stores/report';


const props = defineProps<{
    facilReportStore?: FacilReportCourseDetailInterface,
    participantReportStore?: ParticipantReportCourseDetailInterface;
}>()

</script>

<template>
    <div v-if="facilReportStore">
        <div class="flex border-b px-4">
            <section class="number-box">
                <h5 class="text-3xl md:text-4xl font-bold">{{
                    props.facilReportStore?.participantCount }}
                </h5>
                <p class="text-sm">Participants</p>
            </section>
            <section class="number-box">
                <h5 class="text-3xl md:text-4xl font-bold">{{
                    props.facilReportStore?.contentCount }}
                </h5>
                <p class="text-sm">Contents</p>
            </section>
            <section class="number-box">
                <h5 class="text-3xl md:text-4xl font-bold">{{
                    props.facilReportStore?.assignmentCount }}
                </h5>
                <p class="text-sm">Assignments</p>
            </section>
        </div>
        <section class="h-max">
            <span>Assignments</span>
            <ul class="p-2 overflow-auto">
                <li v-for="(item, index) in props.facilReportStore?.assignments" :key="index"
                    class="p-4 border rounded-md mb-2">
                    <h5 class="font-bold">{{ item.title }}</h5>
                    <p class="text-sm">{{ item.createdAt }}</p>
                </li>
            </ul>
        </section>
    </div>
    <div v-else class="space-y-2">
        <div class="flex border-b px-4">
            <section class="number-box">
                <h5 class="text-3xl md:text-4xl font-bold">{{
                    props.participantReportStore?.totalContents }}
                </h5>
                <p class="text-sm">Total Contents</p>
            </section>
            <section class="number-box">
                <h5 class="text-3xl md:text-4xl font-bold">{{
                    props.participantReportStore?.completedContents }}
                </h5>
                <p class="text-sm">Completed Contents</p>
            </section>
            <section class="number-box">
                <h5 class="text-3xl md:text-4xl font-bold">{{
                    props.participantReportStore?.assignments.length }}
                </h5>
                <p class="text-sm">Assignments</p>
            </section>
        </div>
        <section class="h-full">
            <span>Assignments</span>
            <div class="">
                <ul class="p-4 h-[220px] overflow-y-auto">
                <li v-for="(item, index) in props.participantReportStore?.assignments" :key="index"
                    class="p-4 border rounded-md mb-2">
                    <h5 class="font-bold">{{ item.title }}</h5>
                    <p class="text-sm">{{ item.createdAt }}</p>
                </li>
            </ul>
            </div>
        </section>
    </div>
</template>