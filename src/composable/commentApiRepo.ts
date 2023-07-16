import axiosInstance from "@/axios";


class CommentApiRepository {
    async fetchAllCommentByCourse(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async createComment(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async createReply(page?: number, limit?: number) {
        const response = await axiosInstance.get('/users/')
        return response;
    }

    async updateComment(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body);
        return response;
    }

    async updateReply(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }

    async deleteComment(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }

    async deleteReply(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }
}


export function useCommentApiRepo(): CommentApiRepository {
    const commentRepo = new CommentApiRepository();
    return commentRepo;
}