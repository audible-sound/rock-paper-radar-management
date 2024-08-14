import Navbar from '../Navigation/Navbar'
import ContentLayout from './ContentLayout'

const UserLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-full min-h-dvh h-full scrollbar-hidden ">
            <Navbar />
            <ContentLayout>
                {children}
            </ContentLayout>
        </div>

    )
}

export default UserLayout
