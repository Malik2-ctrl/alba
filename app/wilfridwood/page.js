"use client";
import ImageProject from "@/components/ImageProject";
import InstaEmbed from "@/components/InstaEmbed";
import Vimeo from "@u-wave/react-vimeo";

export default function page() {
  return (
    <>
      <ImageProject src={"/covers/wilfrid-wood.webp"} />
      <ImageProject src={"/wilfridwood/COVER & 1. Bild.png"} />
      {/* <div className="flex justify-center p-2">
        <Vimeo video="https://vimeo.com/702637165" autoplay />
      </div> */}
      <ImageProject src={"/wilfridwood/2.png"} />
      <ImageProject src={"/wilfridwood/3.png"} />
      <ImageProject src={"/wilfridwood/4.png"} />
    </>
  );
}
