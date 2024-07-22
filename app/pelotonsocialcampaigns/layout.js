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
            <div className="flex p-4 fixed bg-white bottom-12 w-full">
              <div className="flex flex-col">
                <h1 className="font-satoshi w-full whitespace-nowrap">
                  Peloton Social Campaigns
                </h1>
              </div>
              <div className="ml-16 text-sm font-satoshithin">
                Throughout my years at Peloton, I was in charge of several major social
                media campaigns, both across instructor channels and brand social
                channels. This included storyboarding, ideation, filming, editing,
                scheduling and overseeing talent and production crews. These projects were
                produced cross-platform, both to implement long-term strategy and to
                encourage immediate engagement with Peloton content.
              </div>
            </div>
          )}
        </>
      )}
      {size.width < 724 && (
        <section className="flex mt-2 p-4 flex-col gap-3">
          <div className="flex">
            <h1 className=" font-satoshi"> Peloton Social Campaigns</h1>
          </div>
          <p className="text-sm font-satoshithin">
            Throughout my years at Peloton, I was in charge of several major social media
            campaigns, both across instructor channels and brand social channels. This
            included storyboarding, ideation, filming, editing, scheduling and overseeing
            talent and production crews. These projects were produced cross-platform, both
            to implement long-term strategy and to encourage immediate engagement with
            Peloton content.
          </p>
          {children}
          <div></div>
        </section>
      )}
    </main>
  );
}
