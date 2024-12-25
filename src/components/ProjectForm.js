"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

const ProjectForm = ({ formType, project, addEditProject }) => {
  const [tools, setTools] = useState([]);
  const [message, setMessage] = useState("");

  const [projectData, setProjectData] = useState({
    title: project?.title || "",
    type: project?.type || "",
    date: project?.date || "",
    description: project?.description || "",
    role: project?.role || "",
    gitLink: project?.gitLink || "",
    features: project?.features.join("\n") || "",
    livePreview: project?.livePreview || "",
    icon: project?.icon || "",
    specs: project?.specs.join("\n") || "",
    tools: project?.tools || [],
  });
  const submitForm = (event) => {
    event.preventDefault();
    console.log(projectData.tools);

    addEditProject(formType, projectData, project?._id || '');
  };
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setProjectData({
        ...projectData,
        tools: [...projectData.tools, value],
      });
    } else {
      setProjectData({
        ...projectData,
        tools: projectData.tools.filter((option) => option !== value),
      });
    }
  };
  const fetchTools = async () => {
    try {
      const res = await fetch("/api/skills");
      const { skills } = await res.json();

      setTools(skills);
    } catch (error) {
      setMessage(error.message);
    }
  };
  useEffect(() => {
    fetchTools();
    
  }, []);
  return (
    <div className="my-5 flex flex-col overflow-scroll gap-3">
      <hr />
      <form className="flex flex-col gap-2" onSubmit={submitForm}>
        <Input
          value={projectData.title}
          type="text"
          label="title"
          title="title"
          onChange={(e) =>
            setProjectData({ ...projectData, title: e.target.value })
          }
        />
        <Input
          value={projectData.type}
          type="text"
          label="type"
          title="type"
          onChange={(e) =>
            setProjectData({ ...projectData, type: e.target.value })
          }
        />
        <Input
          value={projectData.date}
          type="date"
          label="date"
          title="date"
          onChange={(e) =>
            setProjectData({ ...projectData, date: e.target.value })
          }
        />
        <Input
          value={projectData.description}
          type="text"
          label="description"
          title="description"
          onChange={(e) =>
            setProjectData({ ...projectData, description: e.target.value })
          }
        />
        <Input
          value={projectData.role}
          type="text"
          label="role"
          title="role"
          onChange={(e) =>
            setProjectData({ ...projectData, role: e.target.value })
          }
        />
        <Input
          value={projectData.gitLink}
          type="text"
          label="gitLink"
          title="gitLink"
          onChange={(e) =>
            setProjectData({ ...projectData, gitLink: e.target.value })
          }
        />
        <label htmlFor="features">features</label>
        <textarea
          value={projectData.features}
          rows="10"
          className="border border-1 border-foreground w-full"
          id="features"
          name="features"
          onChange={(e) =>
            setProjectData({ ...projectData, features: e.target.value })
          }
        ></textarea>
        <label htmlFor="specs">specs</label>
        <textarea
          value={projectData.specs}
          rows="10"
          className="border border-1 border-foreground w-full"
          id="specs"
          name="specs"
          onChange={(e) =>
            setProjectData({ ...projectData, specs: e.target.value })
          }
        ></textarea>
        <Input
          value={projectData.livePreview}
          type="text"
          label="livePreview"
          title="livePreview"
          onChange={(e) =>
            setProjectData({ ...projectData, livePreview: e.target.value })
          }
        />
        <Input
          value={projectData.icon}
          type="text"
          label="icon"
          title="icon"
          onChange={(e) =>
            setProjectData({ ...projectData, icon: e.target.value })
          }
        />
        <div className="flex flex-col gap-2">
          <p>Tools</p>
          <div className="flex gap-2 flex-wrap">
            {message && message}
            {tools?.map((option, index) => (
              <div className="flex gap-2" key={option._id}>
                <input
                  type="checkbox"
                  name="tools"
                  id={`checkbox-${option.title}`}
                  value={option._id}
                  checked={projectData.tools.includes(option._id)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`checkbox-${option.title}`}>{option.title}</label>
              </div>
            ))}
          </div>
        </div>

        <Button />
      </form>
    </div>
  );
};

export default ProjectForm;
