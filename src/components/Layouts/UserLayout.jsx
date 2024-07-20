import Navbar from '../Navbar'
import ContentLayout from './ContentLayout'

const UserLayout = ({ children, title }) => {
    return (
        <>
            <Navbar />
            <ContentLayout title={title}>
                {children}
            </ContentLayout>
        </>

    )
}

export default UserLayout
