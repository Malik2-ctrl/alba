"use client";
import { InstagramEmbed } from "react-social-media-embed";

export default function InstaEmbed({ url }) {
  return (
    <div className="flex overflow-hidden justify-center h-[50vh] w-full sm:h-[45vw] sm:w-[35vw]">
      <InstagramEmbed url={url} width={358} />
    </div>
  );
}
