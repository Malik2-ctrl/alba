"use client"
import { InstagramEmbed } from "react-social-media-embed";

export default function Page() {
  return (
    <div className="mt-0 sm:mt-8 h-screen p-4">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CdEQFg4LSl9/?img_index=1"
          width={328}
        />
      </div>
    </div>
  );
}
