"use client";
import ImageProject from "@/components/ImageProject";
import { useWindowSize } from "@uidotdev/usehooks";
export default function page() {
  const size = useWindowSize();
  const projects = [
    "/jeportecelia/COVER - Coming Soon Profil.JPG",
    "/jeportecelia/Wiese mit Brille.jpeg",
    "/jeportecelia/Stehend Schuh.JPG",
    "/jeportecelia/SW Abends.jpeg",
    "/jeportecelia/Polaroids.jpg",
    "/jeportecelia/Lara Wand SW.jpeg",
    "/jeportecelia/Lara Stehend Bad.jpeg",
    "/jeportecelia/Lara Profil.jpeg",
    "/jeportecelia/Geschrei.jpeg",
    "/jeportecelia/Coming Soon.JPG",
    "/jeportecelia/Brunnen.JPG",
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ImageProject key={index} src={project} />
      ))}
    </>
  );
}
