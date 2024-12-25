"use client";

import React from "react";
import ProjectForm from "./ProjectForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const ProjectEdit = ({ project, editProject }) => {
  const deleteProject = async () => {
    try {
      await fetch("/api/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: project._id,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border border-1 border-foreground flex w-64 gap-2 items-center justify-around p-3 rounded-md">
      <h1 className="text-xl">{project.title}</h1>
      <Dialog>
        <DialogTrigger>Edit</DialogTrigger>
        <DialogContent className="h-[70%]">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <ProjectForm
            formType="Edit"
            project={project}
            addEditProject={editProject}
          />
        </DialogContent>
      </Dialog>
      <p
        className="text-red-400 underline cursor-pointer"
        onClick={deleteProject}
      >
        Delete
      </p>
    </div>
  );
};

export default ProjectEdit;
