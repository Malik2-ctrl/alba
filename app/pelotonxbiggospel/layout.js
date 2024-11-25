"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import GalleryWrapper from "@/components/GalleryWrapper";
export default function TeteateteLayout({ children }) {
  const size = useWindowSize();

  return (
    <main>
      {size.width >= 724 && (
        <>
          <GalleryWrapper>{children}</GalleryWrapper>
          {size.width >= 724 && (
            <div className="flex p-4 fixed pb-12 bottom-0 bg-white w-full">
              <div className="flex flex-col">
                <h1 className="font-satoshi w-full whitespace-nowrap">Peloton x Big Gospel Choir</h1>
                <h1 className="font-satoshi">2024</h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                This project brought together music and fitness unlike anything we have
                seen in the industry. The Big Gospel Choir moved everyone in the room,
                cycling while delivering incredible live performances.
                <br />
                Leading this project and overseeing global teams from start to finish has
                provided me with invaluable insights into every facet of production, from
                lighting design to audio routing and beyond.
                <br />
                The room was packed with enthusiastic members, marking a significant
                achievement not just for myself but also for Peloton Germany and globally.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex">
            <h1 className=" font-satoshi">Peloton x Big Gospel Choir</h1>
            <h1 className="ml-16 font-satoshi">2024</h1>
          </div>
          <p className="text-sm font-satoshithin">
            This project brought together music and fitness unlike anything we have seen
            in the industry. The Big Gospel Choir moved everyone in the room, cycling
            while delivering incredible live performances.
            <br />
            <br />
            Leading this project and overseeing global teams from start to finish has
            provided me with invaluable insights into every facet of production, from
            lighting design to audio routing and beyond.
            <br />
            <br />
            The room was packed with enthusiastic members, marking a significant
            achievement not just for myself but also for Peloton Germany and globally.
          </p>
          {children}
          <div></div>
        </section>
      )}
    </main>
  );
}
