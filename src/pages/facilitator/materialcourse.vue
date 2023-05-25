<script setup lang="ts">
import CourseMaterialItem from '../../components/course/CourseMaterialItem.vue';
import TheLearningPurposes from '../../components/course/TheLearningPurposes.vue';

</script>

<template>
  <div class="pl-4 sm:ml-64 ">
    <nav class="mt-20 md:mt-28 inline-flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/mycourse">
            <a href="#"
              class="md:text-xl inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                </path>
              </svg>
              My Course</a>
          </router-link>
        </li>
        <li>
          <div class="inline-flex items-center">
            <router-link to="/materialcourse">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <a href="#"
                class="ml-1 md:text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Material</a>
            </router-link>
          </div>
        </li>
      </ol>
    </nav>

    <div class="mt-10">
      <h1
        class="space-x-1 text-3xl font-bold border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 pb-6 space-x-reverse">
        Fundamental of Web Design</h1>

      <TheLearningPurposes/>

      <div
        class="inline-flex space-x-10 w-11/12 flex items-center justify-between border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 space-x-7 space-x-reverse">
        <h2 class="text-xl mt-5 mb-5 font-bold ">Material Courses</h2>

        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 focus:outline-none dark:text-black focus:ring-natural-900 "
          type="button">
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>

      <!-- Dropdown menu -->
      <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
          </li>
        </ul>
      </div>
    </div>

    <CourseMaterialItem />
    <CourseMaterialItem />
    <CourseMaterialItem />
    <CourseMaterialItem />
    <CourseMaterialItem />
  </div>
</div>
<RouterView /></template>