import React from "react";

const SectionHeading = ({ title, subtitle, isDiv, isFlex,classes }) => {
  const Tag = isDiv ? "div" : "p"; // Determine the tag dynamically
   // Determine the absolute class dynamically
  // Dynamically set the class for the subtitle based on isFlex
  const subtitleClass = isFlex ? "flex flex-row" : "";

  return (
    <section className={`flex flex-col text-center w-full justify-center items-center gap-6 md:gap-10 px-4 ${classes}`}>
      <div className="max-w-lg text-center flex justify-center items-center flex-col gap-2">
        {/* Title with responsive text sizes */}
        <p className="text-2xl md:text-4xl font-ysabeau text-purple-500">
          {title}
        </p>
        {/* Subtitle with dynamic class */}
        <Tag className={`text-sm md:text-lg lg:text-xl text-primary font-ubuntu font-medium ${subtitleClass}`}>
          {subtitle}
        </Tag>
      </div>
    </section>
  );
};

export default SectionHeading;