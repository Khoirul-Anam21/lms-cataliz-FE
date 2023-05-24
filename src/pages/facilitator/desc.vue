<script setup lang="ts">
</script>

<template>
  <div class="mt-20 sm:ml-64 mb-20">
    <nav class="inline-flex ml-5" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/mycourse">
              <a href="#" class="text-xl inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 inline-flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              My Course</a>
            </router-link>
          </li>
          <li>
            <div class="inline-flex items-center">
              <router-link to="/materialcourse">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Material</a>
              </router-link>
            </div>
          </li>
          <li>
            <div class="inline-flex items-center">
              <router-link to="/description">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Description</a>
              </router-link>
            </div>
          </li>
        </ol>
    </nav>

      <div class="mt-10 ml-5 font-medium border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-5/12">
        <h1 class="space-x-1 text-3xl font-bold">What is Interaction Design</h1>
        <p class="mt-3 text-xl mb-5">Course: Fundamental of Web Design</p>
      </div>

      
    <div class="ml-5 mt-10 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 w-11/12">
        <ul class="flex flex-wrap justify-between">
          <div class="flex flex-wrap">
            <li class="mr-2">
                <router-link to="/desc">
                    <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Description</a>
                </router-link>
            </li>
            <li class="mr-2">
                <router-link to="/assignment">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Assignment</a>
                </router-link>
            </li>
            <li class="mr-2">
                <router-link to="/annoucement">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Announcement</a>
                </router-link>
            </li>
          </div>
            
        
        </ul>
    </div>
 
    <div class="inline-flex justify-between ml-5 mt-5 w-11/12">
      <div class="ml-5">
       <p>Welcome to the Python and Django Full Stack Web Developer Bootcamp!</p>
       <p>In this course we cover everything you need to know to build a    website using Python, Django, and many more web technologies!
        Here is just a small sampling of the topics included in this course:</p>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>Bootstrap 3 and 4</li>
    </div>

    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex mt-1 pl-3 text-sm font-medium text-center text-gray-900 focus:outline-none dark:text-black focus:ring-natural-900 " type="button"> 
                  <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
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
    
  </div>
  <RouterView />
</template>