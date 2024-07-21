import Image from "next/image";
import React from "react";

export default function ImageProject({ src }) {
  return (
    <div className="sm:h-[50vw] h-[60vh] w-full sm:w-[35vw] relative">
      <Image alt="image" src={src} fill className="object-cover" />
    </div>
  );
}
