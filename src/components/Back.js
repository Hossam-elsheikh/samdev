import Image from "next/image";
import Link from "next/link";
import React from "react";

const Back = ({ href }) => {
  return (
    <Link href={href} className="flex items-center gap-4">
      <Image src="/back.svg" width="50" height="50" alt="pic" />
      <h1 className="text-2xl">Back</h1>
    </Link>
  );
};

export default Back;
