<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import ChatArea from '../../components/chat/ChatArea.vue';
import { useCourseStore } from '../../stores/courses';
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';
import cookie from '@point-hub/vue-cookie'

const props = defineProps({
  title: {
    type: String
  }
})

const router = useRouter();
const courseStore = useCourseStore();
const userStore = useUserStore();


const isLoading = ref(true);
const courseTitleSplit = computed(() => props.title?.split('-') as string[])

onMounted(async () => {
  isLoading.value = true;
  try {
    await userStore.getUser(cookie.get('id'));
    console.log(props.title);
    await courseStore.getCourseById(courseTitleSplit.value[1]);
    // await courseStore.getParticipantCourses();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
});

const isFacil = computed(() => userStore.$state.user.role === 'facilitator');

const courseBeingLearned = computed(() => {
  if (isLoading.value) return false;
  const currentCourse = courseStore.$state.currentCourse;
  const participantCourses = courseStore.$state.participantCourses;
  console.log(participantCourses);
  const beingLearned = participantCourses?.filter((participantCourse) => participantCourse._id === currentCourse?._id) ?? [];
  if (beingLearned.length === 0) return false;
  return true;
});


const comments = [{
  text: 'tess',
  replies: [
    {
      id: 4,
      text: 'reply',
      openInput: false
    },
    {
      id: 5,
      text: 'reply dua',
      openInput: false

    }
  ]
}, {
  text: 'tess',
  replies: [
    {
      id: 4,
      text: 'reply',
      openInput: false
    },
    {
      id: 5,
      text: 'reply dua',
      openInput: false

    }
  ]
}];

const goMaterials = () => {
  router.push({ name: 'std-materials' });
}

const goFacilMaterials = () => {
  router.push({ name: 'facil-materials' });
}

const goEditCourse = () => {
  router.push({ name: 'course-edit' })
}

</script>

<template>
  <div class="mt-20 md:mt-28 md:mx-14 md:ml-60 mb-20">
    <LoadingIndicator v-show="isLoading" />
    <div class="flex">
      <img :src="courseStore.$state.currentCourse?.thumbnail" alt="" class="w-36 h-52rounded sm:w-96 ml-5">
      <div class="ml-5 space-y-1">
        <h1 class="space-x-1 text-3xl font-bold pb-2 space-x-7 space-x-reverse">{{ courseStore.$state.currentCourse?.title }}</h1>
        <div class="flex">
          <ul class="text-lg">Category: <span>{{ courseStore.$state.currentCourse?.category }}</span></ul>
        </div>

        <ul class="text-lg">{{ courseStore.$state.currentCourse?.content }} materi pelajaran</ul>
        <ul class="text-lg">{{ courseStore.$state.currentCourse?.totalDuration }} jam belajar</ul>


        <div v-if="isFacil">
          <button type="button" @click="goFacilMaterials" class="primary-btn mr-2">View
            Material</button>
          <button type="button" @click="goEditCourse"
            class="mt-5 text-slate-800 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit
            Course</button>
        </div>
        <div v-else>
          <button v-if="courseBeingLearned" type="button" @click="goMaterials"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue
            Learning</button>
          <button v-else type="button" @click="goMaterials"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn
            now</button>
        </div>


      </div>
    </div>

    <div class="border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 ml-5 mt-10"></div>


    <div class="w-11/12 ml-5 justify-between flex mt-3">
      <h2 class="text-xl font-bold">Description</h2>

      <!-- Dropdown menu -->
      <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="ml-5 py-3 w-11/12 border-b">
      <span class="">{{ courseStore.$state.currentCourse?.description }}</span>
    </div>

    <ChatArea :comments="comments" />


  </div>
  <RouterView />
</template>

