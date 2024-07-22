"use client";
import ImageProject from "@/components/ImageProject";
import InstaEmbed from "@/components/InstaEmbed";
import Link from "next/link";
export default function page() {


  return (
    <>
      <ImageProject src={"/teteatete/Film Pic 1 (Also use as cover).jpg"} />
      <InstaEmbed url={"https://www.instagram.com/reel/C8ccxrmiUXx/"} />
      <ImageProject src={"/teteatete/3 Film Pic 2.jpg"} />
      <Link
        target="_blank"
        href={
          "https://www.tiktok.com/@tete.a.tete.dining/photo/7391460446651288864?is_from_webapp=1&sender_device=pc&web_id=7390413366928770593"
        }
      >
        <ImageProject src={"/teteatete/teteatete_tiktok.png"} />
      </Link>
      <ImageProject src={"/teteatete/nach tiktok_ Menu Curation & Design_.jpg"} />
      <Link target="_blank" href={"https://www.instagram.com/tete.a.tete.dining/"}>
        <ImageProject src={"/teteatete/ig_teteatete.png"} />
      </Link>
    </>
  );
}
