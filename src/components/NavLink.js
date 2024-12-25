"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, title,newWindow }) => {
  const path = usePathname();
  console.log(path);

  return (
    <Link
    target={newWindow && '_blank'}
      className={`hover:text-background transition-all hover:scale-y-110 duration-200  w-full text-center p-2 hover:bg-foreground ${
        path == href && "scale-y-110 bg-foreground text-background"
      }`}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
