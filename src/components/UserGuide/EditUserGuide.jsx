import React from "react";
import EditTitleBar from "./EditTitleBar";
import { FormProvider, useForm } from "react-hook-form";
import BackButton from "../ui/BackButton";
import Header from "../ui/Header";
import AdminLayout from "../Layouts/AdminLayout";
import { useParams } from "react-router-dom";

const EditUserGuide = () => {
  const { id } = useParams();
  console.log("AHHHHHHHHHHHHHHHH id: ", id);
  const userGuideForm = useForm();
  return (
    <FormProvider {...userGuideForm}>
      <AdminLayout>
        <Header>
          <span className="px-1 text-2xl flex flex-row">
            <BackButton to="/admin/user-guide" />
            <b className="mx-3">Edit User Guide</b>
          </span>
        </Header>
        <div className="flex flex-row">
          <EditTitleBar 
            id={id}
          />
        </div>
      </AdminLayout>
    </FormProvider>
  );
}

export default EditUserGuide;
