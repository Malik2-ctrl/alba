"use client";
import { TikTokEmbed } from "react-social-media-embed";

export default function TikEmbed({ url }) {
  return (
    <div className="flex overflow-hidden justify-center md:h-[45vw] h-full w-full md:w-[35vw]">
      <TikTokEmbed url={url} width={358} />
    </div>
  );
}