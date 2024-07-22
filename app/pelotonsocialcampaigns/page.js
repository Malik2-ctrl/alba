"use client";
import ImageProject from "@/components/ImageProject";
import InstaEmbed from "@/components/InstaEmbed";
export default function page() {

  return (
    <>
      <InstaEmbed
        url={
          "https://www.instagram.com/reel/C5a34yeOJmA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
      />
      <InstaEmbed
        url={"https://www.instagram.com/reel/Cx3A99QIP0P/?igsh=MWEyNWdieTdkaXdpbg=="}
      />
      <InstaEmbed
        url={"https://www.instagram.com/reel/Cz6w8qGMs2Z/?igsh=MTBlc2s0bWZ6Nmg1dw=="}
      />
      <InstaEmbed
        url={"https://www.instagram.com/reel/C6g6DS-IPsI/?igsh=MTY0emxsaW5vdmZxcg=="}
      />
      <InstaEmbed
        url={"https://www.instagram.com/reel/C5I6GbMoIOr/?igsh=MWRlbzQ0YmQycmR6ZA=="}
      />
    </>
  );
}
