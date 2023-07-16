<script setup lang="ts">
import AssignmentReportItem from './AssignmentReportItem.vue';

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
                        <th scope="col" class="pr-10">
                            Check
                        </th>    
                    </tr>
                </thead>
                <tbody>
                    <AssignmentReportItem/>
                    <AssignmentReportItem/>
                    <AssignmentReportItem/>
                    <AssignmentReportItem/>
                </tbody>
            </table>
        </div>

  </div>
  <RouterView />
</template>