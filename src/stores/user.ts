import { defineStore } from 'pinia'
import cookie from '@point-hub/vue-cookie'
import axiosInstance from '../axios.js';
import { ref } from 'vue';
import { useUserApiRepo } from '../composable/userApiRepo.js';

export interface UserInterface {
    _id: string;
    username: string;
    photo: string | null;
    job?: string | null;
    email?: string;
    role?: string;
  }

const userApiRepo = useUserApiRepo();
export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            _id: '',
            username: '',
            email: '',
            role: '',
            job: '',
            photo: '',
        },
        photoStorage: '',

    }),
    actions: {
        async getUser(userId: string) {
            const response = await userApiRepo.fetchUser(userId);
            this.$state.user = response.data;
            return response;
        },
        async updateUser(userId: string, body: any) {
            const response = await userApiRepo.updateUser(userId, body);
            return response;
        }
    }
})
