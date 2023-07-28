<script setup lang="ts">
import { SubmissionInterface } from '@/stores/assignment';
import AssignmentReportItem from './AssignmentReportItem.vue';

const props = defineProps<{
    submissions: SubmissionInterface[] | null
}>();

</script>

<template>
  <div class="mt-2">
      
        <div class="ml-5 mt-5 w-11/12 relative overflow-x-auto shadow-md sm:rounded-lg">
            
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Student Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th> 
                        <th scope="col" class="px-6 py-3">
                            Grade
                        </th>      
                        <th scope="col" class="pr-10">
                            Graded
                        </th>    
                    </tr>
                </thead>
                
                <tbody v-if="props.submissions">
                    <AssignmentReportItem v-for="(item, index) in props.submissions" :key="index" :submission="item"/>
                </tbody>
                <tbody v-else class="w-full flex items-center justify-start p-6 ">
                    <tr>
                        No submission yet
                    </tr>
                </tbody>
            </table>
        </div>

  </div>
  <RouterView />
</template>