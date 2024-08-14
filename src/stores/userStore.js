import { create } from 'zustand'
import Cookies from 'js-cookie'
import mainAxios from '../api/mainAxios'

const userStore = create((set) => ({
    isLogin: false,
    profilePictureUrl: Cookies.get('profilePictureUrl'),
    username: Cookies.get('username'),
    personalProfile: null,
    userPosts: [],
    profilePosts: null,
    userProfile: null,
    postDetails: null,
    setLogin: (value) => set({ isLogin: value }),
    setProfilePictureUrl: (value) => set({ profilePictureUrl: value }),
    setUsername: (value) => set({ username: value }),
    setPersonalProfile: (value) => set({ personalProfile: value }),
    setTotalPosts: (value) => set({ totalPosts: value }),
    setPostDetails: (value) => set({ postDetails: value }),
    checkLogin: () => {
        if (Cookies.get("token") !== undefined) {
            set({ isLogin: true });
        } else {
            set({ isLogin: false });
        }
    },
    getPersonalProfile: async () => {
        try {
            const response = await mainAxios.get('/user/personalProfile', {
                headers: {
                    authorization: Cookies.get('token'),
                },
            });
            const data = response.data.data;
            const date = new Date(data.joinedDate);
            set({ profilePictureUrl: data.profilePictureUrl });
            set({
                personalProfile: {
                    joinedDate: `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`,
                    totalPosts: data.totalPosts,
                }
            });
        } catch (error) {
            console.log(error);
        }
    },
    getUserPosts: async (username) => {
        try {
            const response = await mainAxios.get('/travelPost/username', {
                params: {
                    username
                }
            });
            const data = response.data.data;    
            set({ profilePosts: data.posts });
            set({ userProfile: {
                username: data.username,
                profilePictureUrl: data.profilePictureUrl
            }})
        } catch (error) {
            console.log(error);
        }
    },
    getPostDetails: async (postId) => {
        try {
            const response = await mainAxios.get(`/travelPost/post`, {
                params: {
                    postId
                }
            });
            const data = response.data.data;
            set({ postDetails: data });
        } catch (error) {
            console.log(error);
        }
    },
    getPublicProfile: async (userId) => {
        try {

        } catch (error) {
            console.log(error);
        }
    }
}))

export default userStore;