import React from "react";

export default function page() {
  return (
    <div className="h-full font-satoshi p-4">
      <div className="text-3xl mt-0 sm:mt-8">
        My name is Alba, I am a driven Producer specifying in end-to-end project
        execution, shoot production, and digital content creation. My creative goal is to
        craft memorable cross-platform content that captivates diverse audiences, engages
        global consumers, and maximises client engagement.
      </div>
      <div className="mt-16 uppercase flex text-sm sm:text-lg">
        <p>Services</p>
        <div className="ml-16">
          <div>Project Management</div>
          <div>Art Direction</div>
          <div>Ideation</div>
          <div>Branding</div>
          <div>Shoot Production</div>
          <div>Social Strategy</div>
          <div>Content Creation</div>
        </div>
      </div>
      <div className="mt-12 uppercase  flex text-sm sm:text-lg">
        <p>Contact</p>
        <div className="ml-16 flex flex-col">
          <div>General Inquiries:</div>
          <a href="mailto:albapreysing@gmail.com" className="hover:opacity-60">
            albapreysing@gmail.com
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/alba-preysing/"
            className="hover:opacity-60"
          >
            LinkedIn
          </a>
          <a
            href="https://the-dots.com/users/alba-preysing-1638332"
            className="hover:opacity-60"
          >
            The Dots
          </a>

          <br />
          <div>Instagram: @albaelena</div>
        </div>
      </div>
    </div>
  );
}
