"use client";
import ImageProject from "@/components/ImageProject";
import InstaEmbed from "@/components/InstaEmbed";
export default function page() {
  return (
    <>
      <ImageProject src={"/pelotonxbiggospel/1. Gospel Titelbild.jpeg"} />
      <ImageProject src={"/pelotonxbiggospel/Cliff Gospel 2.jpeg"} />
      <InstaEmbed
        url={"https://www.instagram.com/reel/C5veUIaoIgO/?igsh=MW1tZW5sNGNrMXV0"}
      />
      <InstaEmbed
        url={
          "https://www.instagram.com/reel/C5a34yeOJmA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
      />
      <InstaEmbed
        url={"https://www.instagram.com/reel/C5I6GbMoIOr/?igsh=MWRlbzQ0YmQycmR6ZA=="}
      />
    </>
  );
}
