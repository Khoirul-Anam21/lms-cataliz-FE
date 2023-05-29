<script setup lang="ts">
</script>

<template>
  <div class="mt-20 md:mt-28 md:mx-14 mb-20">
    <div class="flex">
      <div class="flex items-center justify-center w-36 h-52 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 ml-5">
        <svg class="w-20 h-28 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div class="ml-5 space-y-1">
      <h1 class="space-x-1 text-3xl font-bold pb-2 space-x-7 space-x-reverse">Fundamental of Web Design</h1>
      <div class="flex">
        <ul class="text-lg">Category: Technology</ul>
      </div>

      <ul class="text-lg">198 materi pelajaran</ul>
      <ul class="text-lg">32 jam belajar</ul>

      <router-link :to="{name: 'login'}">
        <button type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn now</button>
      </router-link>
 
      
    </div>
    </div>
    
    <div class="border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-11/12 ml-5 mt-10"></div>

    
    <div class="w-11/12 ml-5 justify-between flex mt-3">
      <h2 class="text-xl font-bold">Description</h2>    
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
    <div class="ml-5 mt-3 w-11/12">
      <span class="">For this assignment you will be creating a personal website. It will be hosted (located) in your allotted university web space. You may NOT host it anywhere else. And if you have created a website before, that is great, but you willnot be able to use that in place of this assignment. I am not looking for a commercial grade site. I expect that mostpeople will code it in html. For those of you who know other website languages, before you use them you MUSTclear it with me</span>
    </div>
                
  
    

  </div>
  <RouterView />
</template>