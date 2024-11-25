"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import GalleryWrapper from "@/components/GalleryWrapper";
export default function TeteateteLayout({ children }) {
  const size = useWindowSize();

  return (
    <main>
      {size.width >= 724 && (
        <>
          <GalleryWrapper extraAmount={400}>{children}</GalleryWrapper>
          {size.width >= 724 && (
            <div className="flex p-4 fixed bottom-12 bg-white w-full">
              <div className="flex flex-col">
                <h1 className="font-satoshi w-full whitespace-nowrap">
                  Creative Spaces - Interview with Wilfrid Wood
                </h1>
                <h1 className="font-satoshi">April 2022</h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                End-to-end production (storyboarding, interviewing, filming and
                editing) of a mini-documentary about the plasticine artist
                Wilfrid Wood.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex flex-col">
            <h1 className="font-satoshi">
              Creative Spaces - Interview with Wilfrid Wood
            </h1>
            <h1 className="font-satoshi">April 2022</h1>
          </div>
          <p className="text-sm font-satoshithin">
            End-to-end production (storyboarding, interviewing, filming and
            editing) of a mini-documentary about the plasticine artist Wilfrid
            Wood.
          </p>
          {children}
          <div></div>
        </section>
      )}
    </main>
  );
}
