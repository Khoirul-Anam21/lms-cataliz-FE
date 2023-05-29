<script setup lang="ts">
</script>

<template>
  <div class="mt-20 md:mt-28 md:ml-64 mb-20">
    <div class="mt-20">
        <div class="inline-flex rounded-md shadow-sm" role="group">
            <router-link to="/mycourse">
            <button type="button" class="px-4 py-2 text-sm font-medium text-natural-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-black dark:hover:text-white dark:focus:bg-gray-700 text-xl">
            My Course</button>
            </router-link>
            <router-link to="/addcourse">
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-black dark:hover:text-white dark:focus:bg-gray-700 text-xl">
            Add New Course</button>
            </router-link>  
        </div>
    </div>

    <div class="mt-10 ml-5">
        <h1 class="text-5xl font-bold">Add New Course</h1>
    </div>

    <div class="w-11/12 mt-10 ml-5">
        <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <router-link to="/addcoursedesc">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                   Course<span class="hidden sm:inline-flex sm:ml-2">Description</span>
                </span>
              </router-link>
          </li>
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <router-link to="/addcoursematerial">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                   Material<span class="hidden sm:inline-flex sm:ml-2"></span>
              </span>
            </router-link>
          </li>
          <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            <router-link to="/addcoursepublish">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  Publish<span class="hidden sm:inline-flex sm:ml-2">Course</span>
              </span>
            </router-link>
          </li>
        </ol>
    </div>

      <div class="mt-10 ml-5">
        <label for="countries_disabled" class="block mb-2 font-medium text-gray-900 dark:text-black text-2xl">Category:</label>
        <h1 class="text-4xl">Fundamental of Web Design</h1>
      </div>

      
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 ml-5 w-11/12 ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Material
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Duration
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        What is interaction design
                    </th>
                    <td class="px-6 py-4">
                        20h 10m
                    </td>
                    <td class="px-6 py-4">
                        Video
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Steps to make responsive web
                    </th>
                    <td class="px-6 py-4">
                        20h 10m
                    </td>
                    <td class="px-6 py-4">
                        Video
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Design tools
                    </th>
                    <td class="px-6 py-4">
                        20h 10m
                    </td>
                    <td class="px-6 py-4">
                        Reading
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
                
                
            </tbody>

        </table>
        <span class="w-11/12 item-center">
            <div class="grid  px-4 py-5 text-sm text-gray-700 border-b  gap-x-16 ">
                <div class="text-gray-500 dark:text-gray-400"></div>
                    <div>
                        <router-link :to="{ name: 'material-add' }">
                            <a href="#" class="text-white block w-full bg-gray-600 hover:bg-white-700 focus:ring-4 focus:ring-white-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-white-900 ">Add New Material</a>
                        </router-link>
                    </div>
             </div>
        </span>

    </div>
    <router-link to="/">
        <button type="button" class="ml-5 text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-50 ">Publish Course</button>
    </router-link>
      
  </div>
  <RouterView />
</template>