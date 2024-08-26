import React from "react";
import Header from "../../components/layouts/Header";
import AdminLayout from "../../components/layouts/AdminLayout";
import TitleBar from "../../components/layouts/TitleBar";
import { FormProvider, useForm } from "react-hook-form";
import BackButton from "../../components/navigation/BackButton";

const CreateUserGuide = () => {
  const userGuideForm = useForm();
  return (
    <FormProvider {...userGuideForm}>
      <AdminLayout>
        <Header>
          <span className="px-1 text-2xl flex flex-row">
            <BackButton to="/admin/user-guide" />
            <b className="mx-3">Write User Guide</b>
          </span>
        </Header>
        <div className="flex flex-row">
          <TitleBar />
        </div>
      </AdminLayout>
    </FormProvider>
  );
}

export default CreateUserGuide;