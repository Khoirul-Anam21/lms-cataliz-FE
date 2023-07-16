<script setup lang="ts">

</script>

<template>
  <div class="mx-auto max-w-full h-1531">
    <div class="flex flex-col">
      <!-- Header -->
      <div class="fixed top-0 z-50 w-full flex items-center justify-between bg-slate-200 p-5 ">
        <div class="flex space-x-5">
          <div class="pl-4">
            <router-link to="/">
              Logo
            </router-link>
          </div>
          <div class="">
            <input type="text" class="w-auto rounded-full pl-3 py-1" placeholder="Search">
          </div>
        </div>

        <div class="py-2 md:flex space-x-3">

          <div class="flex-row">
            <router-link to="/login">
              <span
                class="inline-block text-sm px-4 py-2 leading-none border-black rounded text-black hover:border-transparent hover:text-natural-900 hover:bg-white mt-4 lg:mt-0">Login</span>
            </router-link>
            <router-link to="/signup">
              <span 
                class="inline-block text-sm px-4 py-2 bg-slate-600 leading-none rounded-full text-white hover:border-transparent hover:text-slate-600 hover:bg-white mt-4 lg:mt-0">Signup</span>
            </router-link>
          </div>
        </div>
      </div>


  </div>

</div>
<RouterView />
</template>