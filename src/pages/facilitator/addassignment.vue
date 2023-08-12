<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';
import { computed, onMounted, ref } from 'vue';
import { useCourseStore } from '../../stores/courses';
import { useAssignmentStore } from '../../stores/assignment';
import { TypesEnum, useBaseNotification } from '../../composable/notification';


const props = defineProps<{
  contentId: string;
}>();

const route = useRoute();
const router = useRouter();
const assignmentStore = useAssignmentStore();

const form = ref({
  title: '',
  instruction: '',
  content_id: ''
})
const loading = ref(false);
const { notification } = useBaseNotification()

const parsedContentId = computed(() => {
  const splitStr = route.path.split('/');
  return splitStr[splitStr.length - 1];
});

const submitCreateAssignment = async () => {
  try {
    loading.value = true;
    notification("Creating", "Creating new assignment...", { type: TypesEnum.Info });
    await assignmentStore.createAssignment(form.value);
    router.back()
    notification("Success", "Assignment Created", { type: TypesEnum.Success });
  } catch (error) {
    notification("Failed", "Failed to create assignment", { type: TypesEnum.Danger });
    router.back();
  }
}

onMounted(async () => {
  try {
    form.value.content_id = parsedContentId.value;
  } catch (error) {
    console.log(error);
  }
})

</script>

<template>
  <div class="mt-28 md:ml-64 mb-20">
    <LoadingIndicator v-show="loading" />
    <nav class="inline-flex ml-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
            <a href="#"
              class="text-xl inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                </path>
              </svg>
              My Course</a>
        </li>
        <li>
          <div class="inline-flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Material</a>
          </div>
        </li>
        <li>
          <div class="inline-flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 text-xl font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Assignment</a>
          </div>
        </li>
        <li>
          <div class="inline-flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Add
                New Assignment</a>
          </div>
        </li>
      </ol>
    </nav>

    <div class="mt-10 ml-5 font-medium border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-full ">
      <h1 class="space-x-1 text-3xl font-bold">Create New Assignment </h1>
    </div>
    <form @submit.prevent="submitCreateAssignment">
      <section class="mt-10 ml-5">
        <div class="mb-6">
          <label for="title" class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black">Title</label>
          <input type="text" id="title" v-model="form.title"
            class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Assignment title">
        </div>
      </section>

      <section class="mb-6 ml-5">
        <label for="instruction"
          class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black">Instruction</label>
        <input type="text" id="instruction" v-model="form.instruction" placeholder="Instruction for student"
          class="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </section>

      <section class="ml-5 mt-10 mb-5">
        <input value="Create" type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      </section>
    </form>
  </div>
  <RouterView />
</template>