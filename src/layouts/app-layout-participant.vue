<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useUserStore } from '../stores/user';
import cookie from '@point-hub/vue-cookie'
import BaseLogo from '../components/additional/BaseLogo.vue';
import { useNavPaneStore } from '../stores/layoutState';


const userStore = useUserStore();
const navPaneStore = useNavPaneStore();
const isShowNav = ref(true);


onMounted(async () => {
  window.addEventListener('resize', handleResizeWindow);
  handleResizeWindow();
  await userStore.getUser(cookie.get('id'));
  navPaneStore.setState('all-course');
});


onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResizeWindow);
})

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
          <div class="pl-2">
            <router-link :to="{ name: 'participant-dashboard' }">
              <div>
                <BaseLogo class="h-11 w-11" />
              </div>
            </router-link>
          </div>
          <div class="">
            <input type="text" class="w-auto rounded-full pl-3 py-1" placeholder="Search">
          </div>
        </div>

        <div class="hidden py-2 md:flex space-x-3">

          <div class="flex-row">
            <router-link :to="{ name: 'login' }">
              <span
                class="inline-block text-sm px-4 py-2 leading-none border-black rounded text-black hover:border-transparent hover:text-natural-900 hover:bg-white mt-4 lg:mt-0">Logout</span>
            </router-link>
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
              <img :src="userStore.$state.user.photo" alt=""
                class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <div class="">
                <span>{{ userStore.$state.user.username }}</span>
                <p class="text-xs text-slate-500">{{ userStore.$state.user.role }}</p>
              </div>
            </a>

            <button class="p-2 text-red-500 md:hidden" @click="toggleShowNav"><i class="material-icons">close</i></button>
          </div>
          <ul class="relative m-0 list-none px-[0.2rem] pb-12" data-te-sidenav-menu-ref>
            <li class="relative pt-4">
              <router-link :to="{ name: 'participant-all-courses' }">
                <a @click="navPaneStore.setState('all-course')" :class="{ 'selectedNav': getNavState === 'all-course' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-neutral-900">
                  </span>
                  <span class="focused-btn">
                    All courses
                  </span>
                </a>
              </router-link>
            </li>
            <li class="relative">
              <router-link :to="{ name: 'participant-dashboard' }">
                <a @click="navPaneStore.setState('dashboard')" :class="{ 'selectedNav': getNavState === 'dashboard' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900"
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
              <router-link :to="{ name: 'std-course' }">
                <a @click="navPaneStore.setState('courses')" :class="{ 'selectedNav': getNavState === 'courses' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                  </span>
                  <span class="focused-btn">
                    My Course
                  </span>
                </a>
              </router-link>

            </li>


            <li class="relative">
              <router-link :to="{ name: 'participant-account' }">
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
              <router-link to="/login">
                <a @click="navPaneStore.setState('login')" :class="{ 'selectedNav': getNavState === 'login' }"
                  class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear motion-reduce:transition-none dark:text-natural-900 "
                  data-te-sidenav-link-ref>
                  <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">

                  </span>
                  <span class="text-red-500">
                    Logout
                  </span>
                </a>
              </router-link>
            </li>
          </ul>
        </nav>
      </transition>


    </div>

  </div>
  <RouterView />
</template>
