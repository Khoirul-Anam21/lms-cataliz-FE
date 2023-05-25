<template>
    <a class="mt-2 flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-gray hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-natural-900 dark:hover:bg-white/10 dark:focus:bg-black/10 dark:active:bg-gray"
        data-te-sidenav-link-ref>
        <span class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-natural-900">
            <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        </span>

        <div class="flex justify-between w-11/12">
            <router-link to="/desc">
                <span>
                    <p class="text-xl">What is interaction design</p>
                    <p class="text-[lg] space-x-3">
                        <span>Video</span>
                        <span>12m</span>
                    </p>
                </span>
            </router-link>

            <router-link to="/desc">
                <div class="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6   h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </router-link>
        </div>
</a>
</template>