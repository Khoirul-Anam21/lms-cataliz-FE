<script setup lang="ts"></script>

<template>
    <div class="flex items-start justify-between ml-5 mt-5 w-11/12">
        <div class="ml-5">
            <p>Welcome to the Python and Django Full Stack Web Developer Bootcamp!</p>
            <p>In this course we cover everything you need to know to build a website using Python, Django, and many more
                web
                technologies!
                Here is just a small sampling of the topics included in this course:</p>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Bootstrap 3 and 4</li>
        </div>

        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
            class="inline-flex mt-1 pl-3 text-sm font-medium text-center text-gray-900 focus:outline-none dark:text-black focus:ring-natural-900 "
            type="button">
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z">
                </path>
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                </li>
            </ul>
        </div>

</div>
</template>