<script setup lang="ts">
import { onMounted, ref } from "vue";
import DashboardListItem from "../../components/dashboard/DashboardListItem.vue";
import LoadingIndicator from "../../components/additional/LoadingIndicator.vue";
import LoadingIndicatorPlain from "../../components/additional/LoadingIndicatorPlain.vue";
import BaseLogo from "../../components/additional/BaseLogo.vue";
import { ParticipantReportCourseDetailInterface, useReportStore } from "../../stores/report";
import DashboardCourseDetail from "../../components/dashboard/DashboardCourseDetail.vue";


const reportStore = useReportStore();
const loading = ref(false);
const courseLoading = ref(false);
const placeholderLoading = ref(true);

const getDetail = async (id: string, title: string) => {
    try {
        courseLoading.value = true;
        placeholderLoading.value = false;
        await reportStore.getParticipantReportByCourse(id);
        reportStore.$state.currentCourseTitle = title;
        courseLoading.value = false;
        if (reportStore.$state.participantReportCourse) placeholderLoading.value = false;
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    try {
        if (!reportStore.$state.participantReport) {
            loading.value = true;
            await reportStore.getParticipantReport();
        }
        loading.value = false
    } catch (error) {
        console.log(error);
    }
});


</script>
<template>
    <LoadingIndicator v-show="loading" />
    <div class="mt-20 md:mt-28 md:ml-64 mb-20 space-y-4 p-6">
        <h1 class="text-2xl font-bold">Participant Dashboard</h1>
        <!-- course info wrapper -->
        <div class="flex flex-col md:flex-row">
            <div class="flex flex-col justify-between space-y-4 md:pr-4">
                <div class="flex flex-row space-x-4">
                    <section class="number-box dashboard-card">
                        <h5 class="text-3xl md:text-4xl font-bold">{{
                            reportStore.$state.participantReport?.enrolledCoursesTotal }}</h5>
                        <p class="text-sm">Enrolled course</p>
                    </section>
                    <section class="number-box dashboard-card">
                        <h5 class="text-3xl md:text-4xl font-bold">{{ reportStore.$state.participantReport?.completedCourses
                        }}</h5>
                        <p class="text-sm">Completed Courses</p>
                    </section>
                    <section
                        class="px-5 py-3 md:px-8 md:py-4 bg-slate-400 flex flex-col items-center md:hidden dashboard-card">
                        <h5 class="text-3xl md:text-4xl font-bold">{{ reportStore.$state.participantReport?.assignmentCount
                        }}</h5>
                        <p class="text-sm">Total Assignments</p>
                    </section>
                </div>
                <section class="p-4 w-full h-[400px] dashboard-card">
                    <h5 class="">Course list:</h5>
                    <div class="h-full overflow-scroll max-h-full">
                        <DashboardListItem v-for="(item, index) in reportStore.$state.participantReport?.enrolledCourses" role="participant"  :title="item.title"
                            :key="index" v-on:get-detail="getDetail(item._id, item.title)" :course="item" />
                    </div>
                </section>
            </div>
            <div class="flex flex-col justify-between space-y-4">
                <section class="hidden  dashboard-card md:flex px-5 py-3 md:px-8 md:py-4 flex-col items-center w-fit">
                    <h5 class="text-3xl md:text-4xl font-bold">{{ reportStore.$state.participantReport?.assignmentCount }}
                    </h5>
                    <p class="text-xs md:text-sm">Total Assignments</p>
                </section>
                <section class="p-4 w-full md:min-w-[400px] md:max-w-fit h-[400px] dashboard-card"
                    :class="{ 'flex items-center justify-center': placeholderLoading || courseLoading, 'flex items-start justify-start': !placeholderLoading && !courseLoading }">
                    <BaseLogo v-show="placeholderLoading" />
                    <LoadingIndicatorPlain mode="dark" v-if="courseLoading" />
                    <div v-else-if="!placeholderLoading && !courseLoading" class="space-y-1 w-full">
                        <DashboardCourseDetail
                            :participant-report-store="(reportStore.$state.participantReportCourse as ParticipantReportCourseDetailInterface)" />
                    </div>
                </section>
            </div>
        </div>

</div></template>

<style scoped></style>