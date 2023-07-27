<script setup lang="ts">
import useDateFormatter from '../../composable/dateFormatter';
import { useAssignmentStore } from '../../stores/assignment';
import { ComputedRef, computed, onMounted, ref } from 'vue';
import LoadingIndicatorPlain from '../additional/LoadingIndicatorPlain.vue';

const props = defineProps<{
  contentId: string
}>();

const assignmentStore = useAssignmentStore();
let date: { formattedDate: ComputedRef<string>; formattedTime: ComputedRef<string>; };
const loading = ref(false);

const assignmentExist = computed(() => assignmentStore.$state.currentAssignment);

const postDate = computed(() => {
  if (!assignmentExist) {
    return "";
  }
  const dateFormat = useDateFormatter(assignmentStore.$state.currentAssignment?.createdAt as string);
  return dateFormat.formattedDate.value;
});

const combinedId = computed(() => assignmentStore.$state.currentAssignment?._id + "-" + assignmentStore.$state.currentAssignment?.content_id)

onMounted(async () => {
  try {
    loading.value = true;
    await assignmentStore.getFacilAssignmentData(props.contentId);
    date = useDateFormatter(assignmentStore.$state.currentAssignment?.createdAt as string);
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
})
</script>

<template>
  <div v-show="loading" class="flex items-center justify-center w-full h-[200px]">
    <loading-indicator-plain mode="black" />
  </div>
  <router-link v-if="assignmentExist && !loading" :to="{ name: 'assignment-detail', params: { id: combinedId }}">
    <div
      class="basic-card mt-2 mb-4 px-4 flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-gray hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-black/10 dark:active:bg-gray">
      <span>
        <p class="text-xl font-bold">{{ assignmentStore.$state.currentAssignment?.title }}</p>
        <p class="text-lg space-x-3">
          <span>Posted: {{ postDate }}</span>
        </p>
      </span>
    </div>
  </router-link>

  <div v-else-if="!loading" class="mt-6 p-6 basic-card text-slate-600">
    <section class="flex flex-col w-auto space-y-2">
      <h5>No Assignment yet</h5>
      <router-link :to="{ name: 'assignment-add', params: { contentId: props.contentId } }"
        class="primary-btn w-fit">New</router-link>
    </section>
  </div>
</template>