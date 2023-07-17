import { defineStore } from 'pinia'
import cookie from '@point-hub/vue-cookie'
import axiosInstance from '../axios.js';
import { ref } from 'vue';
import { useCategoryApiRepo } from '../composable/categoryApiRepo.js';

export interface CategoryInterface {
    _id: string;
    name: string;
}

const categoryApiRepo = useCategoryApiRepo();
export const useCategoryStore = defineStore('category', {
    state: () => ({
        // category: null as CategoryInterface | null,
        categories: null as CategoryInterface[] | null,
    }),
    actions: {
        async getCategories() {
            const response = await categoryApiRepo.fetchAllCategories();
            this.$state.categories = response.data.category
            return response;
        },
        async createCategory(name: string) {
            const response = await categoryApiRepo.createCategory(name);
            return response;
        }
    }
})
