import { create } from 'zustand'
import Cookies from 'js-cookie'
import mainAxios from '../api/mainAxios'

const userStore = create((set, get) => ({
    isLogin: false,
    profilePictureUrl: Cookies.get('profilePictureUrl'),
    username: Cookies.get('username'),
    personalProfile: null,
    setLogin: (value) => set({ isLogin: value }),
    setProfilePictureUrl: (value) => set({ profilePictureUrl: value }),
    setUsername: (value) => set({ username: value }),
    setPersonalProfile: (value) => set({ personalProfile: value }),
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
            set({ profilePictureUrl: data.profilePictureUrl});
            set({ personalProfile: {
                joinedDate: `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
            } });
        } catch (error) {
            console.log(error);
        }
    }
}))

export default userStore;