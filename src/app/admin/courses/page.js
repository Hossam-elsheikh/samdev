"use client";
import Auth from "@/components/Auth";
import Back from "@/components/Back";
import CourseForm from "@/components/CourseForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AuthContext } from "@/context/auth";
import { formattedDate } from "@/lib/utils";
import React, { useContext, useEffect, useState } from "react";

const CourseBox = ({ course, addEditCourse }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const deleteCourse = async () => {
    try {
      await fetch("/api/courses", {
        method: "DELETE",
        body: JSON.stringify({
          id: course._id,
        }),
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex text-md flex-col w-fit  overflow-scroll p-3 border border-foreground rounded-md">
      <div className="flex justify-between gap-2">
        <h1 className="">{course.title}</h1>
        <div>
          <Dialog open={isDialogOpen} onOpenChange={setDialog}>
            <DialogTrigger>
              <p className="border border-foreground p-2 w-fit mx-auto hover:bg-foreground hover:text-background">
                Edit
              </p>
            </DialogTrigger>
            <DialogContent className="h-[70%]">
              <DialogHeader>
                <DialogTitle>Edit {course.title}</DialogTitle>
              </DialogHeader>
              <CourseForm
                type="Edit"
                course={course}
                id={course._id}
                submitData={addEditCourse}
              />
            </DialogContent>
          </Dialog>
          <p
            className="text-sm text-red-500 p-2 cursor-pointer"
            onClick={deleteCourse}
          >
            Delete
          </p>
        </div>
      </div>
      <hr />

      <p>
        {course.organization} - {formattedDate(course.date)}
      </p>
      <a href={course.link} className="underline text-blue-500" target="_blank">
        Validate
      </a>
    </div>
  );
};

const page = () => {
  const [isDialogOpen, setDialog] = useState(false);
  const [coursesData, setCourses] = useState([]);
  const [fetchMessage, setFetchMessage] = useState("");
  const { isAuth } = useContext(AuthContext);
  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/courses");
      const { courses } = await res.json();
      setCourses(courses);
      console.log(courses);
    } catch (error) {
      setFetchMessage(error.message);
    }
  };
  const addEditCourse = async (formType, courseData, id) => {
    courseData.topics = courseData.topics
      .split(/[\n,]+/)
      .map((str) => str.trim());

    try {
      const res = await fetch("/api/courses", {
        method: formType == "Add" ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...courseData,
          id: id || "",
        }),
      });
      setDialog(false);
      fetchCourses();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      {isAuth ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <Back href="/admin" />
            <Dialog open={isDialogOpen} onOpenChange={setDialog}>
              <DialogTrigger>
                <p className="border border-foreground p-2 w-fit mx-auto hover:bg-foreground hover:text-background">
                  Add Course
                </p>
              </DialogTrigger>
              <DialogContent className="h-[70%]">
                <DialogHeader>
                  <DialogTitle>Add new Course</DialogTitle>
                </DialogHeader>
                <CourseForm type="Add" submitData={addEditCourse} />
              </DialogContent>
            </Dialog>
          </div>
          <hr />
          <div className="flex gap-5 flex-wrap">
            <p>{fetchMessage}</p>
            {coursesData.map((c) => (
              <CourseBox key={c._id} course={c} addEditCourse={addEditCourse} />
            ))}
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default page;
