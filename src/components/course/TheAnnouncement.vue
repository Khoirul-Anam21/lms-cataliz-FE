<script setup lang="ts">
import { useUserStore } from '../../stores/user';
import { AnnouncementInterface, useAnnouncementStore } from '../../stores/announcement';
import cookie from '@point-hub/vue-cookie'
import { computed, onMounted, ref } from 'vue';
import LoadingIndicatorPlain from '../additional/LoadingIndicatorPlain.vue';
import useDateFormatter from '../../composable/dateFormatter';
import { TypesEnum, useBaseNotification } from '../../composable/notification';

const props = defineProps<{
  courseId: string,
}>()

const { notification } = useBaseNotification();
const announcementStore = useAnnouncementStore();
const userStore = useUserStore();
const loading = ref(false);
const announcementDescription = ref('');

const userId = computed(() => {
  if (userStore.$state.user) {
    return userStore.$state.user.id
  }
  return null;
});

const isFacil = computed(() => {
  if (userStore.$state.user) {
    return userStore.$state.user.role === 'facilitator';
  }
  return null;
});

const addNewAnnouncement = async () => {
  try {
    loading.value = true;
    notification("Creating", "Creating announcement", { type: TypesEnum.Info });
    await announcementStore.createAnnouncement(props.courseId, announcementDescription.value);
    await announcementStore.getAllAnnouncement(props.courseId);
    announcementDescription.value = "";
    notification("Success", "Announcement Created", { type: TypesEnum.Success });
    loading.value = false;
  } catch (error) {
    notification("failed", "Failed to create announcement", { type: TypesEnum.Danger });
    console.log(error);
  }
}


onMounted(async () => {
  try {
    loading.value = true;
    await userStore.getUser(cookie.get('id'));
    if (!announcementStore.announcements) {
      await announcementStore.getAllAnnouncement(props.courseId);
    }
    console.log(announcementStore.$state.announcements);
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
});

</script>

<template>
  <div class="mt-4 w-11/12">
    <h1 class="text-2xl p-4">Announcements</h1>
    <form v-show="isFacil" @submit.prevent="addNewAnnouncement">
      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea id="comment" rows="4" v-model="announcementDescription"
            class="w-full p-2 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an announcement..." required></textarea>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Post
          </button>
        </div>
      </div>
    </form>
  </div>

  <div class="flex items-center justify-center w-full">
    <LoadingIndicatorPlain v-show="loading" mode="black" />
  </div>

  <div v-show="!loading" v-for="(item, index) in announcementStore.$state.announcements" :key="index"
    class="ml-5 w-11/12 p-4 text-gray-500 bg-white dark:text-natural-900 basic-card shadow-lg">
    <div class="inline-flex w-11/12 justify-between">
      <div class="flex">
        <img class="w-20 h-20 rounded-full" :src="item.user.photo" alt="Jese Leos image" />

        <div class="ml-3">
          <span v-if="userId === item.user.id" class="text-2xl font-semibold text-gray-900 dark:text-black">You</span>
          <span v-else class="text-2xl font-semibold text-gray-900 dark:text-black">{{ item.user.username }}</span>
          <p class="text-lg">{{ useDateFormatter(item.createdAt).formattedDate.value }} - {{
            useDateFormatter(item.createdAt).formattedTime.value }}</p>
        </div>

      </div>

    </div>
    <section class="ml-3 text-sm font-normal">
      <p class="mb-2 text-xl font-normal">{{ item.description }}</p>
    </section>
  </div>
  <RouterView />
</template>