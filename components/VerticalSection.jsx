import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DotFilledIcon } from "@radix-ui/react-icons";

const VerticalSection = ({ projects }) => {
  return (
    <section className="flex mt-6 flex-col gap-3">
      {projects.map((project, index) => (
        <div key={index} className="p-3">
          <Link href={`/${project.link}`}>
            <div className="relative h-[65vh]">
              <Image alt="image" src={project.src} fill className="object-cover" />
            </div>
          </Link>
          <div className="flex w-full items-center pt-2">
            <DotFilledIcon />
            <p className="pl-8 text-sm font-satoshi">{project.name}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VerticalSection;
