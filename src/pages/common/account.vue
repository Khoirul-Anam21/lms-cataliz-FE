<script setup lang="ts">
import LoadingIndicator from '../../components/additional/LoadingIndicator.vue';
import { useUserStore } from '../../stores/user';
import { computed, onMounted, ref } from 'vue';
import cookie from '@point-hub/vue-cookie'
import getFileNameFromUrl from '../../composable/getFileName'


const userStore = useUserStore();
const loading = ref(true);
const formData = ref({
  photo: '',
  username: '',
  job: ''
});



onMounted(async () => {
  try {
    const response = await userStore.getUser(cookie.get('id'));
    console.log(userStore.$state.photoStorage);
    formData.value.job = userStore.$state.user.job;
    formData.value.username = userStore.$state.user.username;
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
});

const photoExist = computed(() => userStore.$state.user.photo);
// const photo = userStore.$state.photoStorage;

const handlePhotoChange = (event: Event) => {
  const eventTarget: any = event.target;
  const file = eventTarget.files[0];
  formData.value.photo = file;
}

const onSubmit = async () => {
  loading.value = true;
  console.log(userStore.$state.user);
  const fileName = getFileNameFromUrl(userStore.$state.user.photo);
  try {
    const form = new FormData();
    form.append('username', formData.value.username );
    form.append('job', formData.value.job );
    form.append('photo', formData.value.photo);
    await userStore.updateUser(cookie.get('id'), form);
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <div class="mt-20 md:mt-28 md:ml-64 mb-20">
    <LoadingIndicator v-show="loading" />
    <div class="mt-10 ml-5 font-medium border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-5/12">
      <h1 class="space-x-1 text-3xl font-bold mb-3">Edit My Account</h1>
    </div>

    <form @submit.prevent="onSubmit" class="w-11/12 ml-5 mt-10">
      <div class="mb-6">
        <label for="photo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Profile</label>
        <div class="flex flex-row items-end">
          <img v-if="photoExist" :src="userStore.$state.user.photo" class="w-[200px] h-[200px]" alt="no pict">
          <div v-else class="w-[200px] h-[200px] bg-slate-200 flex items-center justify-center">
            <p class="text-slate-600">No photo yet</p>
          </div>
          <input type="file" @change="handlePhotoChange" name="photo" id="photo" accept="image/*">
        </div>
      </div>
      <div class="mb-6">
        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
        <input v-model="formData.username" type="text" id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="">
      </div>


      <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-6">Role</label>
      <p class="text-slate-600">{{ userStore.$state.user.role }}</p>

      <div>
        <label for="job" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark mt-5">Position</label>
        <input v-model="formData.job" type="text" id="job"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Fill your job">
      </div>

      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black mt-5">Email</label>
        <input type="email" id="email" :value="userStore.$state.user.email" disabled
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@cataliz.com" required>
      </div>

      <!-- <div class="mt-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
        <input type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required>
      </div> -->

      <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Save</button>


    </form>

  </div>
  <RouterView />
</template>