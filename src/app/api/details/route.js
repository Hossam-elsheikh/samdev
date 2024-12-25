import dbConnect from "@/lib/dbConnect";
import Detail from "../models/Detail";
import mongoose from "mongoose";
export async function PATCH(req) {
  try {
    const { cvLink, socials, skills } = await req.json();

     dbConnect();
    console.log("connected");

    const details = await Detail.findOne();

    if (details) {
      details.cvLink = cvLink;
      details.socials = socials;
      details.skills = skills;
      await details.save();
    } else {
      console.log("asd2");
      const newDetails = await Detail.create({ cvLink, socials, skills });
      console.log(newDetails);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "data updated successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error }));
  }
}
