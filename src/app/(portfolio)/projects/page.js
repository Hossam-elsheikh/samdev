"use client";
import ProjectBlock from "@/components/ProjectBlock";
import React, { useEffect, useState } from "react";
const page = () => {
  const [fetchedProjects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const res = await fetch("/api/projects");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const { projects } = await res.json();

        setProjects(projects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);
  return (
    <div className="flex gap-3">
      {loading && <p>Loading projects, please be patient ...</p>}
      {error && <p>{error}</p>}
      {fetchedProjects?.map((project, index) => {
        return <ProjectBlock project={project} key={index} />;
      })}
    </div>
  );
};

export default page;
