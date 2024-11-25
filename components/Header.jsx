import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="py-3 px-4 sm:fixed top-0 text-sm w-full z-10 bg-white flex justify-between">
      <Link href={"/"} className="font-recia">
        Alba Preysing
      </Link>
      <div className="w-[30%] font-satoshi flex justify-between">
        <Link className="headerLink" href={"/"}>
          Projects
        </Link>
        <Link className="headerLink" href={"/about"}>
          About
        </Link>
      </div>
    </div>
  );
}
