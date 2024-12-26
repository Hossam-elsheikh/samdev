import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
  const emphisize = "text-orange-400 italic";
  return (
    <div>
      <h1 className="text-xs md:text-lg">
        My name is <span className={emphisize}>Hossam Elsheikh</span>, and I’m a
        28-year-old <span className={emphisize}>software engineer </span>. As a
        dedicated self-learner, I’ve followed the path of computer science
        through the Open Source Community University{" "}
        <span className={emphisize}>(OSCU)</span>. <hr /> After obtaining{" "}
        <span className={emphisize}> ITI certificate </span> in web development
        using MERN stack, I've specialized in building modern and efficient web
        applications using the <span className={emphisize}>MERN</span> stack
        (MongoDB, Express.js, React, and Node.js), combining my passion for
        technology with hands-on experience to deliver{" "}
        <span className={emphisize}>high-quality</span> solutions.
      </h1>
      <br />
      <div className="flex gap-3 items-center text-sm md:text-md">
        <h1>Reach me at :</h1>
        <div className="flex gap-2">
          <a href="https://github.com/Hossam-elsheikh" target="_blank" className="hover:scale-105 transition-all duration-200">
            <FaGithub />
          </a>
          <a className="hover:scale-105 transition-all duration-200" href="https://www.linkedin.com/in/hossam-elsheikh-5459a1166/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="mailto:hossam.m.elsheikh@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-200">
            <IoMail />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">

          <p>and </p>
          <a href="https://wa.me/201121680101" target="_blank" className="hover:scale-105 transition-all duration-200">
            <RiWhatsappFill />
          </a>
          <p>for those lazy ones.</p>
      </div>
    </div>
  );
}
