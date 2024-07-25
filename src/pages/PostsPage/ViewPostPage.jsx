import React from 'react'
import ViewPostBody from '../../components/Posts/ViewPostBody'
import UserLayout from '../../components/Layouts/UserLayout'
import Header from '../../components/ui/Header'

const ViewPostPage = () => {
  return (
    <UserLayout>
      <Header title="Post" />
      <ViewPostBody />
    </UserLayout>
  )
}

export default ViewPostPage
