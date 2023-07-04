<script setup lang="ts">
import DashboardListItem from "../../components/dashboard/DashboardListItem.vue"

</script>
<template>
    <div class="mt-20 md:mt-28 md:ml-64 mb-20 space-y-4 p-6">
        <h1 class="text-2xl font-bold">Participant Dashboard</h1>
        <!-- course info wrapper -->
        <div class="flex flex-col md:flex-row">     
            <div class="flex flex-col justify-between space-y-4 md:pr-4">
                <div class="flex flex-row space-x-4">
                    <section class="number-box">
                        <h5 class="text-3xl md:text-4xl font-bold">90</h5>
                        <p class="text-sm">Enrolled course</p>
                    </section>
                    <section class="number-box">
                        <h5 class="text-3xl md:text-4xl font-bold">90</h5>
                        <p class="text-sm">Completed Courses</p>
                    </section>
                    <section class="px-5 py-3 md:px-8 md:py-4 bg-slate-400 flex flex-col items-center md:hidden">
                        <h5 class="text-3xl md:text-4xl font-bold">90</h5>
                        <p class="text-sm">Total Assignments</p>
                    </section>
                </div>
                <section class="p-4 w-full h-[400px] bg-slate-400">
                    <h5 class="">this is a list of course</h5>
                    <div class="h-full overflow-scroll max-h-full">
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                        <DashboardListItem />
                    </div>
                </section>
            </div>
            <div class="flex flex-col justify-between space-y-4">
                <section class="hidden md:flex px-5 py-3 md:px-8 md:py-4 bg-slate-400 flex-col items-center w-fit">
                    <h5 class="text-3xl md:text-4xl font-bold">90</h5>
                    <p class="text-xs md:text-sm">Total Assignments</p>
                </section>
                <section class="p-4 md:w-[400px] h-[400px] bg-slate-400">part. detail</section>
            </div>
        </div>

    </div>
</template>

<style scoped>
.number-box {
    @apply px-5 py-3 md:px-8 md:py-4 bg-slate-400 flex flex-col items-center
}

</style>