import React from "react";
import ImageRevealTitle from "@/components/ui/ImageRevealTitle";

const About = () => {
  return (
    <div className="ms-15 flex flex-col items-center justify-center p-20 w-11/12 h-[90vh]  overflow-hidden rounded-3xl">
      <ImageRevealTitle />
      <div>
        <div className="text-center pt-50">
          <h1 className="text-5xl font-merienda text-sky-950 py-5">
            Proven. Experienced. Reliable.
          </h1>
          <p className="text-lg text-sky-800">
            With nearly 15 years of industry insight, we understand the unique
            challenges modern businesses face in the digital space — and more
            importantly, how to solve them. Our results speak for themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
