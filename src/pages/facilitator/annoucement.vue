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
              <router-link to="/announcement">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Announcement</a>
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
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Description</a>
                </router-link>
            </li>
            <li class="mr-2">
                <router-link to="/assignment">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Assignment</a>
                </router-link>
            </li>
            <li class="mr-2">
                <router-link to="/annoucement">
                    <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Announcement</a>
                </router-link>
            </li>
          </div>
            
        </ul>
    </div>

    <div class="mt-10 ml-5 mb-20 w-11/12">
      <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an announcement..." required></textarea>
            </div>
            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Post
                </button>
                <div class="flex pl-0 space-x-1 sm:pl-2">
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Attach file</span>
                    </button>
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Set location</span>
                    </button>
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Upload image</span>
                    </button>
                </div>
            </div>
        </div>
      </form>
    </div>

    
    <div id="" class="ml-5 w-11/12 p-4 text-gray-500 bg-white dark:text-natural-900" role="">
      <div class="inline-flex w-11/12 justify-between">
          <div class="flex">
            <img class="w-20 h-20 rounded-full" src="http://4.bp.blogspot.com/-1D1VrjtMOCw/TzKlmHe_H7I/AAAAAAAADVc/N-rBg-THE-4/s1600/contoh%2Bwajah%2Btersenyum.jpg" alt="Jese Leos image"/>

            <div class="ml-3">
              <span class="text-2xl font-semibold text-gray-900 dark:text-black">You</span>
              <p class="text-lg">February 27</p>
            </div>

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
        <div class="ml-3 text-sm font-normal">
            <div class="mb-2 text-xl font-normal">Happy Friday! In this week's blog post, we wrote about some of the most popular regression algorithms in Python. You can check it out here:
            </div> 
            <div class="mb-2 text-xl font-normal">
              <a href="https://pieriantraining.com/7-machine-learning-regression-algorithms-python">https://pieriantraining.com/7-machine-learning-regression-algorithms-python</a>
            </div>
            <div class="mb-2 text-xl font-normal">Have a great weekend,</div>
            <div class="mb-2 text-xl font-normal">John</div>
          </div>
    </div>

    <div id="" class="ml-5 w-11/12 p-4 text-gray-500 bg-white dark:text-natural-900" role="">
        <div class="inline-flex w-11/12  justify-between">
          <div class="flex">
            <img class="w-20 h-20 rounded-full" src="http://4.bp.blogspot.com/-1D1VrjtMOCw/TzKlmHe_H7I/AAAAAAAADVc/N-rBg-THE-4/s1600/contoh%2Bwajah%2Btersenyum.jpg" alt="Jese Leos image"/>

            <div class="ml-3">
              <span class="text-2xl font-semibold text-gray-900 dark:text-black">You</span>
              <p class="text-lg">February 27</p>
            </div>

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
        <div class="ml-3 text-sm font-normal">
            <div class="mb-2 text-xl font-normal">Hello Everyone! Our latest blog post is on self-supervised learning, you can check it out here:
            </div> 
            <div class="mb-2 text-xl font-normal">
              <a href="https://pieriantraining.com/self-supervised-learning">https://pieriantraining.com/self-supervised-learning</a>
            </div>
            <div class="mb-2 text-xl font-normal">Enjoy!</div>
            <div class="mb-2 text-xl font-normal">John</div>
          </div>
    </div>

  </div>
  <RouterView />
</template>