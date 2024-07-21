"use client";
import { TikTokEmbed } from "react-social-media-embed";

export default function TikEmbed({ url }) {
  return (
    <div className="flex justify-center h-[50vw] w-[35vw]">
      <TikTokEmbed url={url} width={358} />
    </div>
  );
}