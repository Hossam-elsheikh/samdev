"use client";

import CourseBlock from "@/components/CourseBlock";
import React, { useEffect, useState } from "react";

const page = () => {
  const [fetchedCourses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/courses");
        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }
        const { courses } = await res.json();

        setCourses(courses);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className="flex gap-3">
      {loading && <p>Loading education details, please be patient ...</p>}
      {error && <p>{error}</p>}
      {fetchedCourses.map((course) => {
        return <CourseBlock key={course._id} course={course} />;
      })}
    </div>
  );
};

export default page;
