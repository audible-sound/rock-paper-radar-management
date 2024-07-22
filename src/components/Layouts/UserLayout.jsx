import Navbar from '../Navbar'
import ContentLayout from './ContentLayout'

const UserLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-screen h-screen scrollbar-hidden ">
            <Navbar />
            <ContentLayout>
                {children}
            </ContentLayout>
        </div>

    )
}

export default UserLayout
