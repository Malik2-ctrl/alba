"use client";
import HorizontalSection from "@/components/HorizontalSection";
import projects from "./projects";
import { useWindowSize } from "@uidotdev/usehooks";
import VerticalSection from "@/components/VerticalSection";
export default function Home() {
  const size = useWindowSize();

  return (
    <main className="overflow-x-hidden">
      {/* OVERFLOW-X-HIDDEN is ESSENTIAL FOR horizontal scroller to work */}
      {size.width >= 724 && <HorizontalSection projects={projects} />}
      {size.width < 724 && <VerticalSection projects={projects} />}
    </main>
  );
}
