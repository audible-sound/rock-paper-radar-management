import { useState, useEffect } from 'react';
import profimg from "../../assets/images/Wavy-pic.jpg"
import { useLocation, useSearchParams } from 'react-router-dom';
import userStore from '../../stores/userStore';
import unsplashApi from '../../api/unsplashApi';
import Cookies from 'js-cookie';
import LoadingSpinner from '../ui/LoadingSpinner';
import EditProfileModal from './EditProfileModal';
import Dropdown from '../ui/Dropdown';

const AdminProfileSection = () => {

    const [isLoading, setIsLoading] = useState(true);
    const manageList = [{
        label: "Edit Profile",
        action: () => document.getElementById('editProfile').showModal(),
        modal: <EditProfileModal />
    }];
    const location = useLocation();
    const pathname = location.pathname;
    const [searchParams] = useSearchParams();
    const usernameQuery = searchParams.get('u');
    const username = userStore(state => state.username);
    const getPersonalProfile = userStore(state => state.getPersonalProfile);
    const [bannerPic, setBannerPic] = useState('');
    const profileDetails = userStore(state => state.profileDetails);
    const getPublicProfile = userStore(state => state.getPublicProfile);
    if (usernameQuery) {
        // Change modal for report user
        if (usernameQuery !== username) {
            manageList[0] = {
                label: "Report User",
                action: () => document.getElementById('editProfile').showModal(),
                modal: <LoadingSpinner />
            }
        }
    }
    const getBannerPic = async () => {
        if (!Cookies.get('bannerPic')) {
            try {
                const response = await unsplashApi.get('/photos/random?count=1');
                const data = response.data[0].urls.regular;
                Cookies.set('bannerPic', data);
                setBannerPic(data);
            } catch (error) {
                console.log(error);
            }
        } else {
            setBannerPic(Cookies.get('bannerPic'));
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (pathname) {
                if (pathname === '/user/profile') {
                    await getPersonalProfile();
                }
                await getBannerPic();
            }
            setIsLoading(false);
        };

        fetchData();
    }, [usernameQuery, username, getPublicProfile, getPersonalProfile, pathname, location]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
  return (
    <div className='flex flex-col bg-white w-full'>
            <img src={(bannerPic === '') ? profimg : bannerPic} alt="" className='object-cover h-32 min-w-0' />
            <div className='flex flex-row items-center justify-between p-4'>
                <div className='flex flex-row items-center'>
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 m-2 mr-8'>
                            <img src={(profileDetails) ? profileDetails.profilePictureUrl : ''} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-bold mb-2'>{(profileDetails) ? profileDetails.username : ''}</span>
                        <span className='text-xl text-[#ABABAB]'>Joined in {(profileDetails) ? profileDetails.joinedDate : ''}</span>
                    </div>
                </div>

                <div className='flex flex-row items-center w-fit'>
                    <Dropdown
                        items={manageList}
                    />
                </div>
            </div>
        </div>
  )
}

export default AdminProfileSection
