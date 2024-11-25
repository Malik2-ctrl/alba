"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
const GalleryWrapper = ({ extraAmount = 0, children }) => {
  const galleryWrapperRef = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let galleryWidth = galleryRef.current.offsetWidth;
    let amountToScroll = galleryWidth - window.innerWidth + 25 + extraAmount;

    gsap.to(galleryRef.current, {
      x: -amountToScroll,
      scrollTrigger: {
        trigger: galleryWrapperRef.current,
        start: "top top",
        end: "+=" + amountToScroll,
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section ref={galleryWrapperRef} className="gallery-wrapper">
        <div
          ref={galleryRef}
          className="pl-4 gallery h-screen min-h-32 w-fit flex flex-nowrap gap-4 items-center"
        >
          {children}
        </div>
      </section>
    </div>
  );
};

export default GalleryWrapper;
