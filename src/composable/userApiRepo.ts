import axiosInstance from "../axios";


class UserApiRepository {
    // private baseUrl: string = 'users';
    async fetchUser(userId: string) {
        const response = await axiosInstance.get('/users/' + userId)
        return response;
    }
    async updateUser(userId: string, body: any) {
        const response = await axiosInstance.put('/users/' + userId, body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    }
    async deleteUser(userId: string) {
        const response = await axiosInstance.delete('/users/' + userId);
        return response;
    }
}


export function useUserApiRepo(): UserApiRepository {
    const userRepo = new UserApiRepository();
    return userRepo;
}