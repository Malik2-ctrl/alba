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
            <div className="flex p-4 fixed bottom-12 bg-white w-full">
              <div className="flex flex-col">
                <h1 className="font-satoshi w-full whitespace-nowrap">
                  Peloton Social Shoots
                </h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                At Peloton, I led the German instructor social shoots for two years,
                introducing innovative methods for capturing images that align with the
                rapid pace of social media and instructor brands. In these contexts, I
                coordinated teams of photographers, videographers, editors, and PAs,
                ensuring adherence to detailed editorial briefs and production schedules.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex">
            <h1 className=" font-satoshi"> Peloton Social Shoots</h1>
          </div>
          <p className="text-sm font-satoshithin">
            At Peloton, I led the German instructor social shoots for two years,
            introducing innovative methods for capturing images that align with the rapid
            pace of social media and instructor brands. In these contexts, I coordinated
            teams of photographers, videographers, editors, and PAs, ensuring adherence to
            detailed editorial briefs and production schedules.
          </p>
          {children}
          <div></div>
        </section>
      )}
    </main>
  );
}
