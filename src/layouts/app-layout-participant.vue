<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user';
import cookie from '@point-hub/vue-cookie'


const userStore = useUserStore();
const isShowNav = ref(true);


onMounted(async () => {
  window.addEventListener('resize', handleResizeWindow);
  handleResizeWindow();
  await userStore.getUser(cookie.get('id'));
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
</script>

<template>
  <div class="mx-auto max-w-full h-1531">
    <div class="flex flex-col">
      <!-- Header -->
      <div class="fixed top-0 z-50 w-full md:pl-60 flex items-center justify-between bg-slate-200 p-5 ">
        <div class="flex space-x-5">
          <div class="flex md:hidden">
            <button id="hamburger" class="pr-1" @click="toggleShowNav">
              <i class="material-icons">menu</i>
            </button>
          </div>
          <div class="pl-4">
            <router-link to="/">
              Logo
            </router-link>
          </div>
          <div class="">
            <input type="text" class="w-auto rounded-full pl-3 py-1" placeholder="Search">
          </div>
        </div>

        <div class="hidden py-2 md:flex space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
            <path
              d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
          </svg>

          <div class="flex-row">
            <router-link to="/login">
              <a href="#"
                class="inline-block text-sm px-4 py-2 leading-none border-black rounded text-black hover:border-transparent hover:text-natural-900 hover:bg-white mt-4 lg:mt-0">Logout</a>
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
              <img :src="userStore.$state.user.photo" alt="" class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <div class="">
                <span>{{ userStore.$state.user.username }}</span>
                <p class="text-xs text-slate-500">{{ userStore.$state.user.role }}</p>
              </div>
            </a>

            <button class="p-2 text-red-500 md:hidden" @click="toggleShowNav"><i class="material-icons">close</i></button>
          </div>
          <ul class="relative m-0 list-none px-[0.2rem] pb-12" data-te-sidenav-menu-ref>
            <li class="relative pt-4">
              <a class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear hover:bg-natural-900  hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref>
                <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-neutral-900">
                </span>
                <span class="focused-btn">
                  <router-link :to="{ name: 'participant-all-courses'}">
                    All courses
                  </router-link>
                </span>
              </a>
            </li>
            <li class="relative">
              <a class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear hover:bg-natural-900  hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref>
                <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-neutral-900">
                </span>
                <span class="focused-btn">
                  <router-link :to="{name: 'participant-dashboard'}">
                    Dashboard
                  </router-link>
                </span>
              </a>
            </li>
            <li class="relative">
              <a class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref>
                <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                </span>
                <span class="focused-btn">
                  <router-link :to="{ name: 'std-course'}">
                    My Course
                  </router-link>
                </span>
              </a>
            </li>


            <li class="relative">
              <a class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear hover:bg-natural-900 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref>
                <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">

                </span>
                <span class="focused-btn">
                  <router-link :to="{ name: 'participant-account' }">
                    Account
                  </router-link>
                </span>
              </a>
            </li>

            <li class="relative md:hidden">
              <a class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-natural-900 outline-none transition duration-300 ease-linear hover:bg-natural-900 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref>
                <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">

                </span>
                <span class="text-red-500">
                  <router-link to="/login">
                    Logout
                  </router-link>
                </span>
              </a>
            </li>
          </ul>
        </nav>


      </transition>


  </div>

</div>
<RouterView />
</template>