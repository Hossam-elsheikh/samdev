"use client";
import Auth from "@/components/Auth";
import Back from "@/components/Back";
import SkillForm from "@/components/SkillForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AuthContext } from "@/context/auth";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const [message, setMessage] = useState("");
  const [skills, setSkills] = useState([]);
  const [fetchMessage, setFetchMessage] = useState("");
  const { isAuth } = useContext(AuthContext);

  const fetchSkills = async () => {
    try {
      const res = await fetch("/api/skills");
      const { skills } = await res.json();

      setSkills(skills);
    } catch (error) {
      setFetchMessage(error.message);
    }
  };
  const addSkill = async (type, event, id) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const svg = formData.get("svg");
    try {
      const res = await fetch("/api/skills", {
        method: type == "Add" ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, svg, id }),
      });
      fetchSkills();
      setMessage("Success");
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <>
      {isAuth ? (
        <div className="flex flex-col gap-5">
          <Back href="/admin" />

          <SkillForm type="Add" submitForm={addSkill} />
          {message && <p>{message}</p>}
          <hr />
          <h1 className="text-xl">Tools</h1>
          <div className="flex gap-2 text-xs flex-wrap">
            {fetchMessage && fetchMessage}
            {skills?.map((skill, i) => (
              <div
                key={i}
                className="flex items-center w-64 gap-3 border p-2 rounded justify-around"
              >
                <p>{skill.title}</p>
                <Image
                  width="20"
                  className="border  rounded-full"
                  height="100"
                  src={skill.svg}
                  alt=""
                />
                <Popover>
                  <PopoverTrigger>edit</PopoverTrigger>
                  <PopoverContent>
                    <SkillForm type="edit" tool={skill} submitForm={addSkill} />
                  </PopoverContent>
                </Popover>
              </div>
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
