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
            <div className="flex p-4 fixed bg-white pb-12 bottom-0 w-full">
              <div className="flex flex-col">
                <h1 className="font-satoshi w-full whitespace-nowrap">
                  Personal Social Media
                </h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                On my personal social media I share lifestyle and fashion content and have
                collaborated with clients like Sezane and AboutYou.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex">
            <h1 className=" font-satoshi">Personal Social Media</h1>
          </div>
          <p className="text-sm font-satoshithin">
            On my personal social media I share lifestyle and fashion content and have
            collaborated with clients like Sezane and AboutYou.
          </p>
          {children}
          <div></div>
        </section>
      )}
    </main>
  );
}
