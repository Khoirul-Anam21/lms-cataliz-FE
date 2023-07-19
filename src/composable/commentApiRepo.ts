import axiosInstance from "../axios";


class CommentApiRepository {

    private readonly baseUrl = '/comments'
    async fetchAllCommentByCourse(courseId: string) {
        const response = await axiosInstance.get(this.baseUrl + '/course/' + courseId);
        return response;
    }

    async createComment(courseId: string, comment: string) {
        const response = await axiosInstance.post(this.baseUrl + '/', { course_id: courseId, comment });
        return response;
    }

    async createReply(commentId: string, comment: string) {
        const response = await axiosInstance.post(this.baseUrl + '/replies', { comment_id: commentId, comment })
        return response;
    }

    async updateComment(commentId: string, comment: string) {
        const response = await axiosInstance.put(this.baseUrl + '/' + commentId, { comment });
        return response;
    }

    async updateReply(replyId: string, comment: string) {
        const response = await axiosInstance.put(this.baseUrl + '/replies/' + replyId, { comment });
        return response;
    }

    async deleteComment(commentId: string) {
        const response = await axiosInstance.delete(this.baseUrl + '/' + commentId);
        return response;
    }

    async deleteReply(replyId: string) {
        const response = await axiosInstance.delete(this.baseUrl + '/replies/' + replyId);
        return response;
    }
}


export function useCommentApiRepo(): CommentApiRepository {
    const commentRepo = new CommentApiRepository();
    return commentRepo;
}