"use client";
import Back from "@/components/Back";
import ProjectForm from "@/components/ProjectForm";
import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/Button";
import ProjectEdit from "@/components/ProjectEdit";
import { AuthContext } from "@/context/auth";
import Auth from "@/components/Auth";

const page = () => {
  const [projects, setProjects] = useState([]);
  const { isAuth } = useContext(AuthContext);
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const { projects } = await res.json();
    setProjects(projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const submitData = async (formType, projectData, id) => {
    projectData.features = projectData.features
      .split(/[\n,]+/)
      .map((str) => str.trim());
    projectData.specs = projectData.specs
      .split(/[\n,]+/)
      .map((str) => str.trim());
    try {
      const res = await fetch("/api/projects", {
        method: formType == "Add" ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...projectData,
          id: id || "",
        }),
      });
      fetchProjects();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isAuth ? (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Back href="/admin" />
            <Dialog>
              <DialogTrigger>
                {/* <Button title="Add new project" /> */}
                <p className="border border-foreground p-2 w-fit mx-auto hover:bg-foreground hover:text-background">
                  Add Project
                </p>
              </DialogTrigger>
              <DialogContent className="h-[70%]">
                <DialogHeader>
                  <DialogTitle>Add new Project</DialogTitle>
                </DialogHeader>
                <ProjectForm formType="Add" addEditProject={submitData} />
              </DialogContent>
            </Dialog>
          </div>

          <hr />
          <h1 className="text-3xl">Projects</h1>
          <div className="flex gap-3">
            {projects?.map((p, i) => {
              return (
                <ProjectEdit key={i} project={p} editProject={submitData} />
              );
            })}
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default page;
