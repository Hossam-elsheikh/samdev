import React from "react";
import NavLink from "./NavLink";


const NavBar = () => {
  return (
      <nav className="border-b border-foreground overflow-hidden" >
        <ul className="flex flex-row   text-lg md:text-xl items-center ">
          <NavLink href="/" title="About" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/education" title="Education" />
          {/* <NavLink href="/skills" title="Skills" /> */}
          {/* <NavLink href="/contacts" title="Contacts" /> */}
        </ul>
      </nav>
  );
};

export default NavBar;
