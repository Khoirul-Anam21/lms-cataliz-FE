<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import TabBarView from '../components/TabBarView.vue';
import { useUserStore } from '../stores/user';
import BaseLogo from '../components/additional/BaseLogo.vue';
import { useNavPaneStore } from '../stores/layoutState';
import clearCookies from '../composable/clearCookies';
import { useRouter } from 'vue-router';


const isShowNav = ref(true);
const userStore = useUserStore();
const navPaneStore = useNavPaneStore();
const router = useRouter();


onMounted(() => {
  window.addEventListener('resize', handleResizeWindow);
  handleResizeWindow();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResizeWindow);
});

const logoutUser = async () => {
  try {
    navPaneStore.setState("login");
    clearCookies();
    await router.push({ name: "login" });
  } catch (error) {
    console.log(error);
  }
}

const handleResizeWindow = () => {
  const screenWidth = window.innerWidth;
  const breakPoint = 768
  if (screenWidth >= breakPoint) isShowNav.value = true
  if (screenWidth <= breakPoint) isShowNav.value = false
}

const toggleShowNav = () => {
  isShowNav.value = !isShowNav.value
}

const getNavState = computed(() => navPaneStore.$state.currentState);

</script>

<template>
  <div class="mx-auto max-w-full h-1531">
    <div class="flex flex-col">
      <!-- Header -->
      <div class="fixed top-0 z-50 w-full md:pl-60 flex items-center justify-between bg-slate-200 p-5 ">
        <div class="flex space-x-5 items-center">
          <div class="flex md:hidden">
            <button id="hamburger" class="pr-1" @click="toggleShowNav">
              <i class="material-icons">menu</i>
            </button>
          </div>
          <div class="pl-4">
            <router-link :to="{ name: 'facil-dashboard' }">
              <BaseLogo class="h-11 w-11" />
            </router-link>
          </div>
          <div class="">
            <input type="text" class="w-auto rounded-full pl-3 py-1" placeholder="Search">
          </div>
        </div>

        <div class="hidden py-2 md:flex space-x-3">

          <div class="flex-row">
              <a @click="logoutUser"
                class="inline-block text-sm px-4 py-2 leading-none border-black rounded text-black hover:border-transparent hover:text-natural-900 hover:bg-white mt-4 lg:mt-0">Logout</a>
          </div>
        </div>
        <!-- Hamburger Button when hidden -->
      </div>

      <transition>
        <!-- Sidenav -->
        <nav v-show="isShowNav" id="sidenav-8"
          class="transition-transform fixed top-0 left-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-slate-200"
          data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-position="absolute"
          data-te-sidenav-accordion="true">

          <!--Profile Nav-->
          <div class="flex justify-between ml-7 border-b-2 border-solid border-gray-100">
            <!--Profile identity-->
            <a class="mb-3 flex space-x-3 py-6 outline-none" href="#!">
              <img v-if="userStore.$state.user.photo" :src="userStore.$state.user.photo" alt=""
                class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <div v-else class="flex items-center justify-center w-10 h-10 bg-slate-200 text-slate-600 rounded-full">
                  <i class="fa-solid fa-user fa-xl"></i>
                </div>
              <div class="">
                <span>{{ userStore.$state.user.username }}</span>
                <p class="text-xs text-slate-500">{{ userStore.$state.user.role }}</p>
              </div>
            </a>

            <button class="p-2 text-red-500 md:hidden" @click="toggleShowNav"><i class="material-icons">close</i></button>
          </div>
          <ul class="relative m-0 list-none px-[0.2rem] pb-12" data-te-sidenav-menu-ref>
            <li class="relative pt-4">
              <router-link :to="{ name: 'facil-dashboard' }">
                <a @click="navPaneStore.setState('dashboard')" :class="{ 'selectedNav': getNavState === 'dashboard' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-neutral-900">
                  </span>
                  <span class="focused-btn">
                    Dashboard
                  </span>
                </a>
              </router-link>
            </li>

            <li class="relative">
              <router-link :to="{ name: 'facil-courses' }">
                <a @click="navPaneStore.setState('courses')" :class="{ 'selectedNav': getNavState === 'courses' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-neutral-900">
                  </span>
                  <span class="focused-btn">
                    My Course
                  </span>
                </a>
              </router-link>
            </li>


            <li class="relative">
              <router-link :to="{ name: 'facil-account' }">
                <a @click="navPaneStore.setState('account')" :class="{ 'selectedNav': getNavState === 'account' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">

                  </span>
                  <span class="focused-btn">
                    Account
                  </span>
                </a>
              </router-link>
            </li>

            <li class="relative md:hidden">
                <a @click="logoutUser" :class="{ 'selectedNav': getNavState === 'login' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">

                  </span>
                  <span class="text-red-500">
                    Logout
                  </span>
                </a>
            </li>
          </ul>
        </nav>


      </transition>


    </div>

</div>
<RouterView /></template>../composable/clearCookies