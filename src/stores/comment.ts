import { useCommentApiRepo } from '../composable/commentApiRepo';
import { defineStore } from 'pinia'
import { UserInterface } from './user';

export interface ReplyCommentInterface {
    _id: string;
    comment_id: string;
    comment: string;
    createdAt: string;
    user: UserInterface;
}

export interface CommentInterface {
    _id: string;
    comment: string;
    createdAt: string;
    user: UserInterface;
    replies: ReplyCommentInterface[];
}

const commentApiRepo = useCommentApiRepo();
export const useCommentStore = defineStore('comment', {
    state: () => ({
        comments: null as CommentInterface[] | null,
        visible: false
    }),
    actions: {
        async getAllComments(courseId: string) {
            const response = await commentApiRepo.fetchAllCommentByCourse(courseId);
            this.$state.comments = response.data;
            return response;
        }
    }
})
