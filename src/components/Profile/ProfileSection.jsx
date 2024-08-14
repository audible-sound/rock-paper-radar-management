import profimg from "../../assets/images/Wavy-pic.jpg"
import DotMenu from "../../assets/images/DotMenu.svg"
import Cookies from 'js-cookie'
import userStore from "../../stores/userStore"
import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import unsplashApi from "../../api/unsplashApi"

const ProfileSection = () => {
    const [searchParams] = useSearchParams();
    const usernameQuery = searchParams.get('u');
    const profilePictureUrl = userStore(state => state.profilePictureUrl);
    const username = userStore(state => state.username);
    const personalProfile = userStore(state => state.personalProfile);
    const getPersonalProfile = userStore(state => state.getPersonalProfile);
    const [bannerPic, setBannerPic] = useState('');
    const getBannerPic = async () => {
        try {
            const response = await unsplashApi.get('/photos/random?count=1');
            const data = response.data[0].urls.regular;
            setBannerPic(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (usernameQuery) {

        } else {
            getPersonalProfile();
        }
        getBannerPic();
    }, []);
    return (
        <div className='flex flex-col bg-white w-full'>
            <img src={(bannerPic === '') ? profimg : bannerPic} alt="" className='object-cover h-32 min-w-0' />
            <div className='flex flex-row items-center justify-between p-4'>
                <div className='flex flex-row items-center'>
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 m-2 mr-8'>
                            <img src={Cookies.get("profilePictureUrl")} alt="" />
                            <img src={profilePictureUrl} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-bold mb-2'>{username}</span>
                        <span className='text-xl text-[#ABABAB]'>Joined in {(personalProfile) ? personalProfile.joinedDate : ''}</span>
                    </div>
                </div>

                <div className='flex flex-row items-center w-fit'>
                    <span className='text-2xl mb-2'>{(personalProfile) ? ((personalProfile.totalPosts === 1) ? `${personalProfile.totalPosts} Post` : `${personalProfile.totalPosts} Posts`) : `0 Posts`}</span>
                    <img src={DotMenu} alt="" className='w-12 ml-4' />
                </div>
            </div>
        </div>
    )
}

export default ProfileSection
