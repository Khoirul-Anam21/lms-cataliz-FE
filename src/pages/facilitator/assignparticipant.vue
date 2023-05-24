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
              <router-link to="/assignment">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Assignment</a>
              </router-link>
            </div>
          </li>

          <li>
            <div class="inline-flex items-center">
              <router-link to="/assignparticipant">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400 inline-flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-xl text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Course Participant</a>
              </router-link>
            </div>
          </li>
        </ol>
    </nav>

      <div class="mt-10 ml-5 font-medium border-b border-gray-200 dark:text-natural-900 dark:border-gray-700 w-5/12">
        <h1 class="space-x-1 text-3xl font-bold mb-2">Create simple website</h1>
      </div>

      
      <div class="ml-5 mt-10 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 w-11/12">
        <ul class="flex flex-wrap justify-between">
          <div class="flex flex-wrap">
            <li class="mr-2">
                <router-link to="/assigninstruction">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Instruction</a>
                </router-link>
            </li>
            <li class="mr-2">
                <router-link to="/assignreport">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Report</a>
                </router-link>
            </li>
            <li class="mr-2">
                <router-link to="/assignparticipant">
                    <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Course participant</a>
                </router-link>
            </li>
          </div>
        </ul>
      </div>

      <div class="ml-5 mt-10">
          <ul class="w-11/12 divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Arlene McCoy
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Eleanor Pena
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Darlene Robertson
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Cody Fisher
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Marvin McKinney
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Kathryn Murphy
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Dianne Russell
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Jacob Jones
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Courtney Henry
                      </p>
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-10 h-10 rounded-full" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png" alt="Neil image">
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-black text-xl">
                        Jenny Wilson
                      </p>
                    </div>
                </div>
            </li>
          </ul>

        </div>

  </div>
  <RouterView />
</template>