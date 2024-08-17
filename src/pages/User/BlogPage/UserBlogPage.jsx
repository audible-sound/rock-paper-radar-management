import Header from "../../../components/ui/Header";
import UserLayout from "../../../components/Layouts/UserLayout";
import Blogs from "../../../components/Blog/Blogs";

const UserBlogPage = () => {
  return (
    <UserLayout>
        <Header className={"flex flex-row justify-between items-center"}>
            <span className='text-2xl'><b>Blogs</b></span>
        </Header>
        <Blogs />
    </UserLayout>
  )
}

export default UserBlogPage
