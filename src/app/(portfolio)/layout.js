import NavBar from "@/components/NavBar";
import Image from "next/image";


export const metadata = {
  title: "Hossam Elsheikh",
  description: "your expert MERN stack developer",
};

export default function layout({ children }) {
  return (
    <>
        <div className="flex justify-around gap-5 items-center">
          <div>
            <h1 className="text-lg md:text-2xl">
              Hello, it's{" "}
              <span className="text-orange-400">Hossam Elsheikh</span>
            </h1>
            <h1 className="text-md md:text-xl">And this is my portfolio!</h1>
            <h1 className="text-sm md:text-md">And i know it's pretty simple :D</h1>
          </div>

          <div className=" rounded-full ">
            <Image
              src={"/pic.png"}
              width="250"
              height="250"
              alt="my not loaded yet pic!"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex  w-full xl:w-[90%]  mx-auto border border-foreground flex-col justify-center ">
          <NavBar />
    <div className="p-4">

          {children}
    </div>
        </div>
        </>

  );
}
