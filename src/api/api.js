import * as axios from "axios";

const instanse =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4cfe74e4-a219-4a55-83fd-ff6ab42f5f29"
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
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instanse.put(`profile/photo`, formData, {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
        })
    },
    saveProfile(profile) {
        return instanse.put(`profile/`, profile);
    }

}

export const authAPI = {
    getMe() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, { email, password, rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}

