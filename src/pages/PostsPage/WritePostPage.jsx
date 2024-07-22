import React from 'react'
import UserLayout from '../../components/Layouts/UserLayout'
import Header from '../../components/ui/Header'
import CreatePostBody from '../../components/Posts/CreatePostBody'

const WritePostPage = () => {
    return (
        <UserLayout>
            <Header title="Write Post" />
            <CreatePostBody />
        </UserLayout>
    )
}

export default WritePostPage
