<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-10 h-10 rounded-full"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png"
                alt="Jese image">
            <router-link :to="{ name: 'submission-detail', params: { submitId: 'iniIDbang00' } }">
                <div class="pl-3">
                    <div class="text-xl font-semibold">Arlene McCoy</div>
                </div>
            </router-link>
        </th>
        <td class="px-6 py-4">
            <div class="flex items-center text-xl">
                <div class="text-xl"></div> Submmited
            </div>
        </td>
        <td class="w-4 p-4">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
    </tr>
</template>