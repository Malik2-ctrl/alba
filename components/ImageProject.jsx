import Image from "next/image";
import React from "react";

export default function ImageProject({ src }) {
  return (
    <div className="h-[50vw] max-h-[400px] max-w-[250px] w-[35vw] relative">
      <Image alt="image" src={src} fill className="object-cover" />
    </div>
  );
}
