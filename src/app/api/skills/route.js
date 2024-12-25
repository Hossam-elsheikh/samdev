import dbConnect from "@/lib/dbConnect";
import Skill from "../models/Skill";
import { revalidatePath } from "next/cache";
export async function POST(req) {
  try {
    const { title, svg } = await req.json();

    dbConnect();
    console.log("connected");

    const newSkill = await Skill.create({ title, svg });

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
export async function PATCH(req) {
  try {
    const { title, svg, id } = await req.json();

    dbConnect();
    console.log("connected");

    const skill = await Skill.findOneAndUpdate({_id:id},{title,svg});
    revalidatePath('/admin/tools')

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
export async function GET(req) {
  try {
    dbConnect();
    console.log("connected");

    const skills = await Skill.find();

    return new Response(
      JSON.stringify({
        success: true,
        skills,
        message: "data retrieved successfully!",
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
