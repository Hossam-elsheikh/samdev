import dbConnect from "@/lib/dbConnect";
import Project from "../models/Project";
export async function GET(req) {
  try {
    await dbConnect();
    const projects = await Project.find({}).populate('tools');

    return new Response(JSON.stringify({ success: true, projects }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "error" }));
  }
}
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    await dbConnect();
    await Project.findOneAndDelete({ _id: id });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "error" }));
  }
}

export async function POST(req) {
  try {
    const {
      title,
      type,
      date,
      description,
      role,
      gitLink,
      features,
      livePreview,
      icon,
      specs,
      tools,
    } = await req.json();

    dbConnect();
    console.log("connected");

    const newProject = await Project.create({
      title,
      type,
      date,
      description,
      role,
      gitLink,
      features,
      livePreview,
      icon,
      specs,
      tools,
    });
    console.log("created succesfully");

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
    console.log(error);

    return new Response(JSON.stringify({ message: error }));
  }
}

export async function PATCH(req) {
  try {
    const {
      title,
      type,
      date,
      description,
      role,
      gitLink,
      features,
      livePreview,
      icon,
      specs,
      tools,
      id,
    } = await req.json();

    dbConnect();
    console.log("connected");

    const newProject = await Project.findByIdAndUpdate(
      { _id: id },
      {
        title,
        type,
        date,
        description,
        role,
        gitLink,
        features,
        livePreview,
        icon,
        specs,
        tools,
      }
    );
    console.log("updated succesfully");

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
    console.log(error);

    return new Response(JSON.stringify({ message: error }));
  }
}
