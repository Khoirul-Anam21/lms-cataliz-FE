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
  }

const userApiRepo = useUserApiRepo();
export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: '',
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
            this.$state.user.id = response.data._id;
            this.$state.user.username = response.data.username;
            this.$state.user.email = response.data.email;
            this.$state.user.job = response.data.job;
            this.$state.user.role = response.data.role;
            this.$state.user.photo = response.data.photo;
            return response;
        },
        async updateUser(userId: string, body: any) {
            await userApiRepo.updateUser(userId, body);
            const response = await userApiRepo.fetchUser(userId);
            this.$state.user.id = response.data._id;
            this.$state.user.username = response.data.username;
            this.$state.user.email = response.data.email;
            this.$state.user.job = response.data.job;
            this.$state.user.role = response.data.role;
            this.$state.user.photo = response.data.photo;
            return response;
        }
    }
})
