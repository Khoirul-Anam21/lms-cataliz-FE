<template>
    <div class="inline-flex justify-between ml-5 mt-5 w-11/12">
        <span class="">For this assignment you will be creating a personal website. It will be hosted (located) in your
            allotted university web space. You may NOT host it anywhere else. And if you have created a website before, that
            is great, but you willnot be able to use that in place of this assignment. I am not looking for a commercial
            grade
            site. I expect that mostpeople will code it in html. For those of you who know other website languages, before
            you
            use them you MUST clear it with me</span>

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
</div></template>