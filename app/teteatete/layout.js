

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
                <h1 className="font-satoshi w-full whitespace-nowrap">Tête-à-Tête</h1>
                <h1 className="font-satoshi">2024</h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                In May 2024, I co-founded TÊTE-À-TÊTE Supper Clubs, hosting monthly events
                for individuals of all backgrounds to come together and connect in a
                unique dining setting.
                <br />
                Creating a brand, planning entire events from start to finish, working
                with sponsors, curating and designing menus, working in the kitchen,
                styling tables, and promoting each event cross-platform via Instagram and
                TikTok is at the heart of my activities.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex">
            <h1 className=" font-satoshi">Tête-à-Tête</h1>
            <h1 className="ml-16 font-satoshi">2024</h1>
          </div>
          <p className="text-sm font-satoshithin">
            In May 2024, I co-founded TÊTE-À-TÊTE Supper Clubs, hosting monthly events for
            individuals of all backgrounds to come together and connect in a unique dining
            setting.
            <br />
            <br />
            Creating a brand, planning entire events from start to finish, working with
            sponsors, curating and designing menus, working in the kitchen, styling
            tables, and promoting each event cross-platform via Instagram and TikTok is at
            the heart of my activities.
          </p>
          {children}
          <div></div>
        </section>
      )}
    </main>
  );
}
