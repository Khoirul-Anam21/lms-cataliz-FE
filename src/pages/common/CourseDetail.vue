<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import ChatArea from '../../components/chat/ChatArea.vue';
import { useCourseStore } from '../../stores/courses';
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';
import BaseSwitch from '../../components/additional/BaseSwitch.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';
import { useCommentStore } from '../../stores/comment';
import cookie from '@point-hub/vue-cookie'
import { TypesEnum, useBaseNotification } from '../../composable/notification';
import TheFacilCourseParticipant from "../../components/course/TheFacilCourseParticipants.vue"

const props = defineProps({
  title: {
    type: String
  }
})

const router = useRouter();
const courseStore = useCourseStore();
const userStore = useUserStore();
const commentStore = useCommentStore();
const { notification } = useBaseNotification();

const isLoading = ref(false);
const participantPopupOpen = ref(false);

const courseTitleSplit = computed(() => props.title?.split('-') as string[]);

const completed = computed(() => {
  if (!courseStore.$state.currentCourseParticipation){
    return;
  }
  const completions = courseStore.$state.currentCourseParticipation.contentDetail;
  const isComplete = completions.every(participation => participation.isComplete);
  return isComplete;
})

onMounted(async () => {
  isLoading.value = true;
  try {
    if (cookie.get("accessToken")) {
      await userStore.getUser(cookie.get('id'));
    }
    console.log(courseTitleSplit.value[1]);
    await courseStore.getCourseById(courseTitleSplit.value[1]);
    if (userStore.$state.user.role === 'facilitator') {
      await courseStore.getFacilCourses();
    } else if (userStore.$state.user.role === 'student') {
      await courseStore.getParticipantCourses();
    }
    if (!isFacil.value && cookie.get("accessToken")) await courseStore.getCourseParticipation(courseTitleSplit.value[1]);
    commentStore.$state.visible = false;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
});


const isFacil = computed(() => userStore.$state.user.role === 'facilitator');

const courseBeingLearned = computed(() => {
  if (isLoading.value) return false;
  if (!cookie.get("accessToken")) return false;
  const currentCourse = courseStore.$state.currentCourse;
  const participantCourses = courseStore.$state.participantCourses;
  console.log(participantCourses);
  const beingLearned = participantCourses?.filter((participantCourse) => participantCourse._id === currentCourse?._id) ?? [];
  if (beingLearned.length === 0) return false;
  return true;
});

const goMaterials = () => {
  router.push({ name: 'std-materials' });
}

const startLearning = async () => {
  try {
    if (!cookie.get('accessToken')) {
      router.push({ name: 'login' });
      notification("Unable to learn", "Please Login / Signup first", { type: TypesEnum.Warning });
      return;
    }
    isLoading.value = true;
    notification("Loading", "Learning a course", { type: TypesEnum.Info });
    await courseStore.startLearningCourse(courseStore.$state.currentCourse?._id as string);
    await courseStore.getCourseById(courseTitleSplit.value[1]);
    notification("Congratulations!!", "You are learning this course", { type: TypesEnum.Success });
    goMaterials();
    isLoading.value = false;
  } catch (error) {
    notification("Failed", "Failed to learn a course", { type: TypesEnum.Danger });
    console.log(error);
  }
}

const goFacilMaterials = () => {
  router.push({ name: 'facil-materials' });
}

const goEditCourse = () => {
  router.push({ name: 'course-edit' })
}

</script>

<template>
  <div
    :class="{ 'mt-24 md:mt-28 md:mx-14 md:ml-60 mb-20': cookie.get('accessToken'), 'mt-24 md:mt-28 md:mx-14': !cookie.get('accessToken') }">
    <LoadingIndicator v-show="isLoading" />
    <div v-show="participantPopupOpen" class="fixed z-10 w-full md:w-[768px] h-[480px] md:h-[512px] bg-slate-100 rounded-lg shadow-xl m-4 overflow-auto">
      <TheFacilCourseParticipant :course-id="courseTitleSplit[1]" @close-modal="()=> participantPopupOpen = !participantPopupOpen"/>
    </div>
    <div class="flex flex-col md:flex-row">
      <img :src="courseStore.$state.currentCourse?.thumbnail" alt="" class="max-w-full h-auto rounded md:w-96 ml-5">
      <div class="ml-5 space-y-1">
        <h1 class="space-x-1 text-3xl font-bold py-2 space-x-reverse">{{ courseStore.$state.currentCourse?.title }}</h1>
        <div class="flex">
          <ul class="text-lg">Category: <span>{{ courseStore.$state.currentCourse?.category }}</span></ul>
        </div>

        <ul class="text-lg">{{ courseStore.$state.currentCourse?.contents.length }} materi pelajaran</ul>
        <br>
        <p v-if="completed && !isFacil" class="p-4 bg-green-200 text-green-900 rounded-lg w-fit"> <i class="fa-solid fa-check-to-slot fa-xl mr-2"></i> You have completed this course</p>

        <!-- <ul class="text-lg">{{ courseStore.$state.currentCourse?.totalDuration }} jam belajar</ul> -->
        <div v-if="isFacil">
          <button type="button" @click="goFacilMaterials" class="primary-btn mr-2">View
            Material</button>
          <button type="button" @click="goEditCourse"
            class="mt-5 text-slate-800 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit
            Course</button>
            <button type="button" @click="() => participantPopupOpen = !participantPopupOpen"
            class="mt-5 text-slate-800 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Participant</button>
        </div>
        <div v-else>
          <button v-if="courseBeingLearned" type="button" @click="goMaterials"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue
            Learning</button>
          <button v-else type="button" @click="startLearning"
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
    <div v-show="cookie.get('accessToken')" class="flex ml-5 py-4 space-x-4">
      <span>Show Comment </span>
      <BaseSwitch :value="commentStore.$state.visible" @update:value="value => commentStore.$state.visible = value" />
    </div>
    <ChatArea :course-id="courseTitleSplit[1]" v-show="commentStore.$state.visible" />


  </div>
  <RouterView />
</template>
