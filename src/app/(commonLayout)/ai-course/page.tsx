import CourseReview from "@/component/aiCourse/CourseReview";
import FeatureCard from "@/component/aiCourse/FeatureCard";
import AddNewCourseForm from "@/component/allForms/AddNewCourseForm";
import Container from "@/component/shared/Container";
import { LeftBorder } from "@/component/shared/LeftBorder";
import MainButton from "@/component/shared/MainButton";
import MainHeader from "@/component/shared/MainHeader";
import RedShadow from "@/component/shared/RedShadow";
import SubHeader from "@/component/shared/SubHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <RedShadow className="right-0 top-20" />
        <MainHeader
          title={
            <>
              Want to create and sell your own <br /> course like this?
            </>
          }
          subtitle={"Start a course project in 7 days"}
        >
          <div className="mt-10">
            <MainButton title="Launch my course" />
          </div>
        </MainHeader>

        {/* feature setion  */}

        <div className="lg:mt-44 mt-20 mb-30">
          <h2 className="font-semibold text-white text-4xl text-center">
            Features
          </h2>
          <FeatureCard />
        </div>

        {/* add new course  */}

        <div className="my-16 mx-auto">
          <div className="my-10">
            <SubHeader title={"Add New Course"} />
          </div>
          <LeftBorder>
            <div className="lg:p-14 py-4 sm:p-6 md:p-8">
              <AddNewCourseForm />
            </div>
          </LeftBorder>

          <div>
            <h2 className="lg:text-4xl font-semibold text-2xl text-white my-11 text-center leading-[54px]">
              Latest reviews
            </h2>
            <CourseReview></CourseReview>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
