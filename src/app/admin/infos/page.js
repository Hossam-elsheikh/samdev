'use client'
import Back from "@/components/Back";
import Button from "@/components/Button";
import Input from "@/components/Input";

import React, { useState } from "react";

const page = () => {
  const [message,setMessage] = useState(null)
  
  
  const submitForm = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const cvLink = formData.get("cv");
    const socials = [
      { title: "Linkedin", link: formData.get("Linkedin") },
      { title: "GitHub", link: formData.get("GitHub") },
      { title: "Gmail", link: formData.get("Gmail") },
    ];
    const skills = formData
      .get("skills")
      .split(/[\n,]+/)
      .map((str) => str.trim());
    try {
      
      const res = await fetch("/api/details", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cvLink, socials, skills }),
      });
      
      setMessage('Success')
    } catch (error) {
      setMessage(error.message)
    }
    
  };

  return (
    <div className="w-full md:w-[70%] flex flex-col mx-auto gap-4">
      <Back href='/admin' />
      <form className="flex flex-col gap-4  w-full" onSubmit={submitForm}>
        <Input type="text" title="cv" label="Your CV link" />
        <Input type="text" title="Linkedin" label="Linkedin profile" />
        <Input type="text" title="GitHub" label="GitHub profile" />
        <Input type="email" title="Gmail" label="Gmail" />
        <div className="flex flex-col gap-2">
          <label htmlFor="skills">Current Skills</label>
          <textarea
            id="skills"
            rows="7"
            className="bg-background text-foreground border p-2"
            name="skills"
            placeholder="list your skills here ..."
          ></textarea>
        </div>
        <div>
          {message && <p>{message}</p>}
        <Button />
        </div>
      </form>
    </div>
  );
};

export default page;
