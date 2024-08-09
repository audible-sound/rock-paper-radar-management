import React from "react";
import Header from "../../../components/ui/Header";
import UserLayout from "../../../components/Layouts/UserLayout";
import TitleBar from "../../../components/UserGuide/TitleBar";
import { FormProvider, useForm } from "react-hook-form";
import BackButton from "../../../components/ui/BackButton";

function CreateUserGuide() {
  const userGuideForm = useForm();
  return (
    <FormProvider {...userGuideForm}>
      <UserLayout>
        <Header>
          <span className="px-1 text-2xl flex flex-row">
            <BackButton to="/admin/user-guide" />
            <b className="mx-3">Write User Guide</b>
          </span>
        </Header>
        <div className="flex flex-row">
          <TitleBar />
        </div>
      </UserLayout>
    </FormProvider>
  );
}

export default CreateUserGuide;
