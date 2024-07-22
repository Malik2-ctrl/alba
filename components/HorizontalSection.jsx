"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import Project from "./Project";
export default function HorizontalSection({ projects }) {
  const galleryWrapperRef = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let galleryWidth = galleryRef.current.offsetWidth;
    let amountToScroll = galleryWidth - window.innerWidth;

    gsap.to(galleryRef.current, {
      x: -amountToScroll,
      scrollTrigger: {
        trigger: galleryWrapperRef.current,
        // markers: true,
        start: "top top",
        end: "+=" + amountToScroll,
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section ref={galleryWrapperRef} className="gallery-wrapper">
      <div
        ref={galleryRef}
        className="pl-4 gallery h-screen min-h-32 w-fit flex flex-nowrap gap-4 items-center"
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            src={project.src}
            link={project.link}
            name={project.name}
          />
        ))}
      </div>
    </section>
  );
}
