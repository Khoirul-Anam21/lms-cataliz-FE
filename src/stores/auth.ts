import { defineStore } from 'pinia'
import cookie from '@point-hub/vue-cookie'
import axiosInstance from '../axios.js';
import { ref } from 'vue';
import { useUserStore } from './user.js';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    // user: {
    //   username: '',
    //   email: '',
    //   role: '',
    //   googleScopes: '',
    // },
    isLoading: ref(false),
  }),
  actions: {
    async login(email: string, password: string) {
      const response = await axiosInstance.post('/auth/signin', {
        email,
        password
      })

      if (response.status === 200) {
        cookie.set('accessToken', response.data.accessToken)
        cookie.set('refreshToken', response.data.refreshToken)
        cookie.set('id', response.data.id);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${cookie.get('accessToken')}`
      }

      return response
    },

    async signup(username: string, email: string, password: string){
      const response = await axiosInstance.post('/auth/signup', {
        username,
        email,
        password
      });
      if (response.status === 201) {
        cookie.set('accessToken', response.data.accessToken)
        cookie.set('refreshToken', response.data.refreshToken)
        cookie.set('id', response.data.id);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${cookie.get('accessToken')}`
      }
      return response
    },
    // logout() {
    //   this.$state.user.name = ''
    //   this.$state.user.email = ''
    //   this.$state.user.role = ''
    //   this.$state.user.googleScopes = ''
    //   cookie.remove('accessToken')
    // },
    async isAuthenticatedAsParticipant() {
      const userStore = useUserStore();
      const id = cookie.get('id');
      const accessToken = cookie.get('accessToken');

      await userStore.getUser(id);

      if (!accessToken || userStore.$state.user.role !== 'student') {
        return false;
      }
      return true
    },
    async isAuthenticatedAsFacil() {
      const userStore = useUserStore();
      const id = cookie.get('id');
      const accessToken = cookie.get('accessToken');

      await userStore.getUser(id);

      if (!accessToken || userStore.$state.user.role !== 'facilitator') {
        return false;
      }
      return true
    },
  },
})
