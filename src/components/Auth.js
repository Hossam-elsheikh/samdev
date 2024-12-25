"use client";
import { AuthContext } from "@/context/auth";
import React, { useContext, useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Auth = () => {
    const {setIsAuth} = useContext(AuthContext)
  const [error, setError] = useState(null);
  const [accessKey,setAccessKey] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (accessKey === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      setIsAuth(true);
    } else {
      setError("you're not authorized, or key is incorrect!");
    }
  };
  return (
    <form className="text-lg flex gap-2 flex-col" onSubmit={submitHandler}>
      <Input label="Secret Key" title="secret" value={accessKey} onChange={(e)=> setAccessKey(e.target.value)}/>
      <Button title="access" />
      {error && <p>{error}</p>}
    </form>
  );
};

export default Auth;
