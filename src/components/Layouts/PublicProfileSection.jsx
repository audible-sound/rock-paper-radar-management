import { useState, useEffect } from 'react';
import BackgroundImage from "../../assets/images/public/background.png"
import { useLocation, useSearchParams } from 'react-router-dom';
import staffStore from '../../stores/staffStore';
import unsplashApi from '../../api/unsplashApi';
import Cookies from 'js-cookie';
import LoadingSpinner from '../ui/LoadingSpinner';

const PublicProfileSection = ({ username }) => {
    const [isLoading, setIsLoading] = useState(true);
    const getPublicProfile = staffStore(state => state.getPublicProfile);
    const [bannerPic, setBannerPic] = useState('');
    const [profileDetails, setProfileDetails] = useState(null);

    const getBannerPic = async () => {
        if (!Cookies.get('bannerPic')) {
            try {
                const response = await unsplashApi.get('/photos/random?count=1');
                const data = response.data[0].urls.regular;
                Cookies.set('bannerPic', data);
                setBannerPic(data);
            } catch (error) {
                console.error("Error fetching banner pic:", error);
            }
        } else {
            const cookieBannerPic = Cookies.get('bannerPic');
            setBannerPic(cookieBannerPic);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (username) {
                const data = await getPublicProfile(username);
                setProfileDetails(data);
                await getBannerPic();
            }
            setIsLoading(false);
        };

        fetchData();
    }, [username, getPublicProfile]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='flex flex-col bg-white w-full'>
            <img src={bannerPic || BackgroundImage} alt="" className='object-cover h-32 min-w-0' />
            <div className='flex flex-row items-center justify-between p-4'>
                <div className='flex flex-row items-center'>
                    <div className='avatar'>
                        <div className='ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 m-2 mr-8'>
                            <img src={(profileDetails) ? profileDetails.profilePictureUrl : ''} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-3xl font-bold mb-2'>{(profileDetails) ? profileDetails.username : ''}</span>
                        <span className='text-xl text-[#ABABAB]'>
                            Joined on {(profileDetails && profileDetails.joinedDate) 
                                ? new Date(profileDetails.joinedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
                                : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicProfileSection