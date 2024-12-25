import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

import { formattedDate } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
const MoreDetails = ({ project }) => {
  const emph = "text-[#fa913c] text-sm";
  return (
    <div className="flex flex-col gap-3 overflow-scroll">
      <p>
        <span className={emph}>Description</span> : {project.description}
      </p>
      <p>
        <span className={emph}>My role </span>: {project.role}
      </p>
      <div className="flex items-center flex-wrap gap-2">
        <span className={emph}>Tools </span>:
        {project.tools.map((t,i) => {
          return (
            <div key={i} className="flex items-center gap-2 p-2 border border-foreground px-3 rounded  text-sm justify-between">
              <p>{t.title}</p>
              <Image
                key={t._id}
                src={t.svg}
                width="25"
                height="30"
                alt={t.title}
              />
            </div>
          );
        })}
      </div>
      {project.contributers && 
      <div>
        <span className={emph}>Contributers </span>:
      </div>
      }
      <div className="flex flex-col gap-3">
        <span className={emph}>Features </span>
        {project.features.map((f, i) => {
          const spec = project.specs[i];
          return (
            <div className="flex flex-col" key={i}>
              <p>{f}</p>
              <img src={spec} />
            </div>
          )
        })}
      </div>
    </div>
  );
};
const ProjectBlock = ({ project }) => {
  return (
    <div className="flex gap-2 shadow-[5px_5px_0px_0px_rgba(250,_145,_60,_1)] w-[50%] h-48 md:h-40 border border-foreground rounded-md ">
      <div className="flex flex-col gap-1 p-3">
        <h1 className="text-md">{project.title}</h1>
        <h1 className="text-sm">{project.type}</h1>
        <p className="">{formattedDate(project.date)}</p>

        <div className="flex text-sm gap-2 items-center">
          Resources :
          <a
            href={project.gitLink}
            className="hover:scale-105 transition-transform duration-200"
            target="_blank"
          >
            <FaGithub />
          </a>
          {project.livePreview && (
            <a
              href={project.livePreview}
              className="hover:scale-105 transition-transform duration-200"
              target="_blank"
            >
              <FaLink />
            </a>
          )}
        </div>
          <Dialog>
            <DialogTrigger>
              <p className=" underline text-left ">more details</p>
            </DialogTrigger>
            <DialogContent className="max-h-[70%] overflow-scroll">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>...</DialogDescription>
              </DialogHeader>
              <MoreDetails project={project} />
            </DialogContent>
          </Dialog>
      </div>
    </div>
  );
};

export default ProjectBlock;
