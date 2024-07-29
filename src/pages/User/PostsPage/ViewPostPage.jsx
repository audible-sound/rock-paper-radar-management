import ViewPostBody from '../../../components/Posts/ViewPostBody'
import UserLayout from '../../../components/Layouts/UserLayout'
import Header from '../../../components/ui/Header'

const ViewPostPage = () => {
  return (
    <UserLayout>
      <Header>
        <span className='text-2xl'><b>Posts</b></span>
      </Header>
      <ViewPostBody />
    </UserLayout>
  )
}

export default ViewPostPage
