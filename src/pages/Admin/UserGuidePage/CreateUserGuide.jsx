import React from 'react'
import Header from "../../../components/ui/Header";
import UserLayout from "../../../components/Layouts/UserLayout";
import UserGuideExample from '../../../components/UserGuide/UserGuideExample';
import BackButton from '../../../assets/images/BackButton.svg';
import TitleBar from "../../../components/UserGuide/TitleBar";

function CreateUserGuide () {
  return (
    <UserLayout>
      <Header>
        <span className="text-2xl flex flex-row">
            <img src={BackButton} className='w-5 h-5 m-2 mr-4' />
          <b>Write User Guide</b>
        </span>
      </Header>
      <div className="flex flex-row">
        <TitleBar />
      </div>
    </UserLayout>
  )
}

export default CreateUserGuide;
