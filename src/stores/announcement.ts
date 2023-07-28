import { defineStore } from 'pinia'
import { useAnnouncementApiRepo } from '../composable/announcementApiRepo.js';
import { useUserApiRepo } from '../composable/userApiRepo.js';

export interface AnnouncementInterface {
    _id: string;
    description: string;
    user: any;
    course_id: string;
    createdAt: string;
}

const announcementApiRepo = useAnnouncementApiRepo();
const userApiRepo = useUserApiRepo();
export const useAnnouncementStore = defineStore('announcement', {
    state: () => ({
        announcements: null as AnnouncementInterface[] | null,
    }),
    actions: {
        async createAnnouncement(courseId: string, description: string) {
            await announcementApiRepo.createAnnouncement(courseId, description);
            const response = await announcementApiRepo.fetchAllAnnouncementByCourse(courseId);
            if (response.data.announcements.length > 0) {
                this.$state.announcements = response.data.announcements.sort((a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
            }
            return response;
        },
        async getAllAnnouncement(courseId: string) {
            const response = await announcementApiRepo.fetchAllAnnouncementByCourse(courseId);
            if (response.data.announcements.length > 0) {
                this.$state.announcements = response.data.announcements.sort((a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
            }
            return response;
        }
    }
})
