<script setup lang="ts">
</script>

<!-- soon will use md renderer --> 

<template>
    <div class="flex items-start justify-between ml-5 mt-5 w-11/12">
        <div class="ml-5">
            <p>This is reading material</p>
            <p>In this course we cover everything you need to know to build a website using Python, Django, and many more
                web
                technologies!
                Here is just a small sampling of the topics included in this course
                Esse officia fugiat Lorem eiusmod et commodo enim cupidatat labore sint. Adipisicing velit deserunt exercitation adipisicing excepteur. Excepteur ut nulla minim voluptate anim velit sunt ad tempor labore mollit. Est qui pariatur ea laborum ex dolore consectetur irure et irure reprehenderit anim. Sint ipsum culpa voluptate cillum magna est deserunt non. Aliquip excepteur excepteur amet exercitation mollit minim et elit consequat labore. Ipsum Lorem duis mollit dolore cupidatat est labore magna officia eiusmod.
                <br>
                Nisi esse reprehenderit ea sit voluptate et. Esse aliquip cillum aliqua nisi ipsum officia incididunt consequat irure ad reprehenderit. Est veniam minim sunt anim occaecat nostrud incididunt eu. Eu aliquip elit reprehenderit laborum ad.
                <br>
                Magna irure pariatur deserunt commodo est occaecat Lorem. Adipisicing labore incididunt est sit culpa elit. Velit et sunt nisi eiusmod occaecat eiusmod ad aliquip laboris consectetur ut aute occaecat. Mollit ut excepteur laborum esse irure culpa fugiat sint in irure dolor occaecat aute qui. Pariatur id adipisicing elit elit consequat pariatur nulla. Eu sint aliqua fugiat sunt. Consequat commodo sit voluptate officia.
                <br>
                Do et deserunt eiusmod eu. Laborum amet occaecat ut nostrud aliqua irure. Proident laboris sunt nostrud aliqua sit veniam pariatur consectetur voluptate deserunt exercitation fugiat sunt. Nostrud esse ea do laboris reprehenderit ullamco eu.
                <br>
                Minim veniam proident laboris qui aliquip. Eiusmod sunt velit id id quis ipsum. Sint laborum non qui consectetur adipisicing eu cillum deserunt ex magna incididunt laboris cupidatat sunt. Adipisicing do nostrud mollit sit officia in deserunt. Ea ullamco officia minim ullamco sunt elit ea veniam nisi. Amet eiusmod veniam qui voluptate et culpa dolore id pariatur veniam veniam velit dolor.
                <br>
                Nisi veniam elit non commodo sint minim minim velit labore. Et aliquip ea et elit nisi magna sunt nostrud incididunt incididunt ea. Sint Lorem proident nulla ut cillum proident elit veniam mollit nulla do irure exercitation esse. Adipisicing occaecat anim eu ullamco do esse do.
                <br>
                Duis sint Lorem esse deserunt minim. Excepteur esse adipisicing eiusmod do adipisicing eu adipisicing tempor ad esse amet eu anim. Incididunt sit eu irure tempor ut Lorem mollit ex consequat. Minim et cillum ullamco occaecat duis ad ad nulla ex ut deserunt magna. Eu incididunt officia deserunt ipsum reprehenderit irure irure laborum id adipisicing sunt mollit. Ipsum sint incididunt veniam aliqua.
                <br>
                Commodo magna Lorem Lorem officia officia cupidatat duis reprehenderit elit et. Quis pariatur esse laboris ad cillum ipsum incididunt do eu eiusmod duis quis do ipsum. Exercitation eu amet minim quis. Aliqua ipsum laborum consectetur excepteur magna commodo sint amet dolore cillum aute.
                :</p>
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