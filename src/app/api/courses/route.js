import dbConnect from "@/lib/dbConnect";
import Course from "../models/Course";
export async function GET(req) {
  try {
    await dbConnect();
    const courses = await Course.find({});

    return new Response(JSON.stringify({ success: true, courses }), {
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
    await Course.findOneAndDelete({ _id: id });

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
    const { title, date, description, link, organization, topics } =
      await req.json();

    dbConnect();
    console.log("connected");

    const newCourse = await Course.create({
      title,
      date,
      description,
      link,
      organization,
      topics,
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
    const { title, date, description, link, organization, topics, id } =
      await req.json();

    dbConnect();
    console.log("connected");

    const newProject = await Course.findByIdAndUpdate(
      { _id: id },
      {
        title,
        date,
        description,
        link,
        organization,
        topics,
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
