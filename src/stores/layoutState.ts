import { defineStore } from 'pinia'


export const useNavPaneStore = defineStore('layout', {
    state: () => ({
        currentState: ''
    }),
    actions: {
        setState (state: string) {
            this.$state.currentState = state;
        }
    }
})
