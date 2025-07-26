import AddNewCourseForm from "@/component/allForms/AddNewCourseForm";
import AddNewToolsForm from "@/component/allForms/AddNewTools";
import ProjectForm from "@/component/allForms/ProjectForm";
import Container from "@/component/shared/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <ProjectForm />
        <AddNewToolsForm />
        <AddNewCourseForm />
      </Container>
    </div>
  );
};

export default page;
