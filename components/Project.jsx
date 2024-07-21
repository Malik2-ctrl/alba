import Image from "next/image";
import React from "react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Project({ src, name, link }) {
  return (
    <div className="">
      <Link href={`/${link}`}>
        <div className="hover:opacity-80 transition-opacity duration-300 h-[50vw] max-h-[400px] max-w-[250px] w-[35vw] relative">
          <Image alt="image" src={src} fill className="object-cover" />
        </div>
      </Link>
      <div className="flex w-full items-center pt-1">
        <DotFilledIcon />
        <p className="pl-8 text-xs font-satoshi">{name}</p>
      </div>
    </div>
  );
}
