<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useAssignmentStore } from '../../stores/assignment';
import { computed, onMounted, ref } from 'vue';
import { TypesEnum, useBaseNotification } from '../../composable/notification';
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';

const props = defineProps<{
  submitId: string
}>();


const loading = ref(false);
const gradeModel = ref(0);
const assignmentStore = useAssignmentStore();
const route = useRoute();
const router = useRouter();
const { notification } = useBaseNotification();

const parsedContentId = computed(() => {
  const splittedUrl = route.path.split("-");
  const id = splittedUrl[1].slice(0, 24)
  return id;
});

const selectedSubmission = computed(() => {
  if (assignmentStore.$state.submissions) {
    const filteredSubmission = assignmentStore.$state.submissions.filter((submission) => submission._id === props.submitId);
    return filteredSubmission[0];
  }
  return null;
});

const fileFormat = computed(() => {
  if (selectedSubmission && assignmentStore.$state.submissions) {
    const file = selectedSubmission.value?.submission;
    const splittedStr = file?.split('/') as string[];
    const fileName = splittedStr[splittedStr?.length - 1];
    const fileExtensionSplit = fileName.split('.');
    const fileExtension = fileExtensionSplit[fileExtensionSplit.length - 1];

    return { fileName, fileExtension };
  }
  return null;
})

const openForDownloadFile = async () => {
  try {
    const fileUrl = selectedSubmission.value?.submission;
    window.open(fileUrl, "_blank")
  } catch (error) {
    console.log(error);
  }
}

const gradeAssignment = async () => {
  try {
    loading.value = true;
    notification("Grading", "Grading Student Assignment", { type: TypesEnum.Info });
    await assignmentStore.gradeAssignment(selectedSubmission.value?._id as string, gradeModel.value);
    await assignmentStore.getSubmissionsForFacil(parsedContentId.value);
    loading.value = false;
    notification("Success", "Assignment Graded!", { type: TypesEnum.Success });
    router.back();
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  try {
    if (!assignmentStore.$state.submissions) {
      loading.value = true;
      await assignmentStore.getSubmissionsForFacil(parsedContentId.value);
      loading.value = false
    }
  } catch (error) {
    console.log(error);
  }
});


</script>

<template>
  <div class="mt-20 md:mt-28 md:ml-64 mb-20">
    <loading-indicator v-show="loading"/>
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
                class="ml-1 text-xl font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Material</a>
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
                class="ml-1 text-xl  font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Report</a>
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
                class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Submission
                Report</a>
          </div>
        </li>
      </ol>
    </nav>
    <div class="flex mt-10">
      <img class="w-48 h-48 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 ml-2"
        :src="selectedSubmission?.user.photo" alt="Jese image">


      <section class="pl-3 mt-10 ml-5">
        <h1 class="text-5xl font-semibold">{{ selectedSubmission?.user.username }}</h1>
        <h1 class="text-xl font-semibold">Submitted for grading</h1>
      </section>
    </div>

    <div class="border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 ml-5 mt-10"></div>
    <label for="large-input"
      class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black text-xl ml-5">File</label>

    <div class="ml-5 flex justify-between w-11/12 bg-slate-200 p-3">
      <div class="flex space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>

        <p class="text-xl">{{ fileFormat?.fileName }}</p>

      </div>
      <p class="text-xl text-slate-400">type: {{ fileFormat?.fileExtension }}</p>

      <button @click="openForDownloadFile">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </button>

    </div>

    <form @submit.prevent="gradeAssignment" class="ml-5">
      <label class="block mb-5 mt-9 text-sm font-medium text-gray-900 dark:text-black text-xl">Score</label>

      <div class="flex">
        <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
          <input type="number" placeholder="score" required v-model="gradeModel"
            class="peer block min-h-[auto] w-full rounded-lg ring-2 ring-black border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
            id="exampleFormControlInputCounter" data-te-input-showcounter="true"
            maxlength="20" />

          <div class="absolute w-full text-sm text-natural-900 dark:text-neutral-500" data-te-input-helper-ref></div>
        </div>
        <span class="px-4 py-2 font-bold">/ 100</span>
      </div>

      <input type="submit" value="Grade" class="primary-btn">
    </form>

  </div>
</template>