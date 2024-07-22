"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function HorizontalSlider({ projects }) {
  // TODO: map over proejcts
  // TODO: make a project page with [slug] and then show the correspondong images for each project

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["115%", "-115%"]);

  return (
    <section ref={targetRef} className="h-[500vh] relative">
      <div className="h-[80vh] borderr pt-[10vh] sticky top-12 flex items-center overflow-hidden">
        <motion.div style={{ x: x }} className="flex gap-4">
          <Image src={"/1.jpg"} alt="description" height={500} width={500} />
          <Image src={"/2.jpg"} alt="description" height={500} width={500} />
          <Image src={"/3.jpg"} alt="description" height={500} width={500} />
          <Image src={"/4.jpg"} alt="description" height={500} width={500} />
          <Image src={"/5.jpg"} alt="description" height={500} width={500} />
          <Image src={"/5.jpg"} alt="description" height={500} width={500} />
          <Image src={"/5.jpg"} alt="description" height={500} width={500} />
          <Image src={"/5.jpg"} alt="description" height={500} width={500} />
        </motion.div>
      </div>
    </section>
  );
}
