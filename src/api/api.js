import * as axios from "axios";

const instanse =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "04ac6a9e-d7d2-402e-be7f-eabba36ebd64"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 50) {
        return instanse.get( `users?page=${currentPage}&count=${pageSize}`)
            .then( response => {
                return response.data;
            });

    },
    follow(userId)  {
        return instanse.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unFollow(userId)  {
        return instanse.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Plese use profileAPI object.');
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instanse.put('profile/status', { status: status});
    }

}

export const authAPI = {
    getMe() {
        return instanse.get(`auth/me`);
    }
}

