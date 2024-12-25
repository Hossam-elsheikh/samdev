"use client";
import Auth from "@/components/Auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import  { AuthContext } from "@/context/auth";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const SelectLink = ({ href, children }) => {
  return (
    <Link
      className="text-2xl px-2 py-1 border border-foreground rounded-md hover:cursor-pointer hover:bg-foreground hover:text-background hover:rounded-none transition-all duration-75"
      href={href}
    >
      {children}
    </Link>
  );
};

const page = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
 

  useEffect(() => {
    
  }, [isAuth]);

  return (
    <>
      {isAuth ? (
        <div className="h-dvh mx-auto my-auto flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl">Choose what to edit</h1>
          <div className="flex flex-col md:flex-row justify-center gap-5 items-center ">
            <SelectLink href="admin/infos">Personal Data</SelectLink>
            <SelectLink href="admin/projects">Projects</SelectLink>
            <SelectLink href="admin/courses">Courses</SelectLink>
            <SelectLink href="admin/tools">Tools</SelectLink>
          </div>
        </div>
      ) : (
      <Auth />
      )}
    </>
  );
};

export default page;
