import { create } from 'zustand'
import Cookies from 'js-cookie'

const userStore = create((set) => ({
    isLogin: false,
    checkLogin: () => {
        if (Cookies.get("token")) {
            set({ isLogin: true });
        }
    }
}))

export default userStore;