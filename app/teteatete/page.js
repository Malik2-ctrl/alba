"use client";
import ImageProject from "@/components/ImageProject";
import InstaEmbed from "@/components/InstaEmbed";
import Link from "next/link";
export default function page() {
  return (
    <>
      <ImageProject src={"/teteatete/1.webp"} />
      <ImageProject src={"/teteatete/2.webp"} />
      <ImageProject src={"/teteatete/3.webp"} />
      <ImageProject src={"/teteatete/4.webp"} />
      <ImageProject src={"/teteatete/5.webp"} />
      <ImageProject src={"/teteatete/6.webp"} />
      <ImageProject src={"/teteatete/7.webp"} />
      <ImageProject src={"/teteatete/8.webp"} />
      <ImageProject src={"/teteatete/9.webp"} />
      <ImageProject src={"/teteatete/10.webp"} />
      <ImageProject src={"/teteatete/11.webp"} />
      <InstaEmbed url={"https://www.instagram.com/reel/C8ccxrmiUXx/"} />
      <InstaEmbed url={"https://www.instagram.com/reel/DBrVxqMCNav/"} />
      <InstaEmbed url={"https://www.instagram.com/tete.a.tete.dining/"} />
      {/* <Link
        target="_blank"
        href={
          "https://www.tiktok.com/@tete.a.tete.dining/photo/7391460446651288864?is_from_webapp=1&sender_device=pc&web_id=7390413366928770593"
        }
      >
        <ImageProject src={"/teteatete/teteatete_tiktok.png"} />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/tete.a.tete.dining/"}
      >
        <ImageProject src={"/teteatete/ig_teteatete.png"} />
      </Link> */}
    </>
  );
}
