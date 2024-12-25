"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SkillForm = ({ type, tool, submitForm }) => {
  const [form, setForm] = useState({
    title: tool?.title || "",
    svg: tool?.svg || "",
  });
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        submitForm(type, event, tool?._id || '');
      }}
    >
      <h1 className="text-xl">{type} a Tool</h1>
      <hr />
      <Input
        value={form.title}
        label="Title"
        title="title"
        type="text"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <Input
        value={form.svg}
        label="svg link"
        title="svg"
        type="text"
        onChange={(e) => setForm({ ...form, svg: e.target.value })}
      />
      <Button />
    </form>
  );
};

export default SkillForm;
