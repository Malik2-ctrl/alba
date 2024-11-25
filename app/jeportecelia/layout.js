"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import GalleryWrapper from "@/components/GalleryWrapper";
export default function JePorteCeliaLayout({ children }) {
  const size = useWindowSize();

  return (
    <main>
      {size.width >= 724 && (
        <>
          <GalleryWrapper>{children}</GalleryWrapper>
          {size.width >= 724 && (
            <div className="flex p-4 fixed bg-white pb-12 bottom-0 w-full">
              <div className="flex flex-col">
                <h1 className="font-satoshi w-full whitespace-nowrap">je porte celia</h1>
                <h1 className="font-satoshi">2024</h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                We shot Jeporte Celia&apos;s 2024 LBD campaign in Paris in just one day with a
                team of only three people. Our goal was to use various visual formats to
                create lifestyle, commercial, and editorial content, showcasing the
                endless possibilities of the little black dress.
                <br />
                Planning, styling, directing, and partially shooting and modeling this
                campaign was an incredible experience. It proved that even with limited
                time and a small crew, it&apos;s possible to create high-end content that
                resonates with the audience.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex">
            <h1 className=" font-satoshi">je porte celia</h1>
            <h1 className="ml-16 font-satoshi">2024</h1>
          </div>
          <p className="text-sm font-satoshithin">
            We shot Jeporte Celia&apos;s 2024 LBD campaign in Paris in just one day with a team
            of only three people. Our goal was to use various visual formats to create
            lifestyle, commercial, and editorial content, showcasing the endless
            possibilities of the little black dress.
            <br />
            <br />
            Planning, styling, directing, and partially shooting and modeling this
            campaign was an incredible experience. It proved that even with limited time
            and a small crew, it&apos;s possible to create high-end content that resonates with
            the audience.
          </p>
          {children}
        </section>
      )}
    </main>
  );
}
