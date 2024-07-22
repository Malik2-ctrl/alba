"use client";
import ImageProject from "@/components/ImageProject";
import InstaEmbed from "@/components/InstaEmbed";
import Link from "next/link";
export default function page() {
  return (
    <>
      <InstaEmbed url="https://www.instagram.com/p/CdEQFg4LSl9/?img_index=1" />
      <ImageProject src="/covers/COVER.jpg" />
      <InstaEmbed url="https://www.instagram.com/p/C8PnP2NiV4p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
      <InstaEmbed url="https://www.instagram.com/albaaelena/" />
    </>
  );
}
