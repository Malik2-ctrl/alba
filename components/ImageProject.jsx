import Image from "next/image";
import React from "react";

export default function ImageProject({ src }) {
  return (
    <div className="sm:h-[50vw] h-[65vh] sm:max-h-[400px] sm:max-w-[250px] sm:w-[35vw] relative">
      <Image alt="image" src={src} fill className="object-cover" />
    </div>
  );
}
