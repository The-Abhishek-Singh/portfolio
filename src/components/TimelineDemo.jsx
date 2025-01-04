// import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
export function TimelineDemo() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Class 10th
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Growing up, I was always curious about technology, but it was in
            10th grade, through my cousins, that I was introduced to coding.
            They sparked my interest, and that’s when I decided to explore
            Python. Since then, I’ve been hooked, diving deeper into the world
            of coding and development.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            B.Tech First Year
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            In my first year of B.Tech, I dove into the fundamentals of
            programming by learning the C language through the PPS subject. Soon
            after, I discovered my favorite language, C++, and began my Data
            Structures and Algorithms journey.
          </p>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Today, I’m proud to be a <strong>5★ C++ programmer</strong> and a{" "}
            <strong>2★ competitive programmer</strong> on CodeChef.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            B.Tech Second Year
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            My coding journey expanded further when I learned Java and explored
            my field of interest—Web Development. This was the year I began
            building the foundation for creating impactful web applications.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            Internship and Growth
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Between my 4th and 5th semester, I completed a one-month internship
            in Frontend Web Development. During this time, I mastered HTML, CSS,
            Tailwind, JavaScript, Bootstrap, and Responsive Web Design.
          </p>
          <p className="text-neutral-950 dark:text-slate-50 text-sm md:text-md font-normal font-openSans mb-8">
            Later, in my third year, I secured a Full Stack internship with
            Chanakyans Education Foundation. Here, I worked on projects that
            involved transitioning Chanakyans to <strong>Careertronic</strong>.
            I contributed to building the official Careertronic website while
            learning AWS, Python, and Django.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-neutral-950 dark:text-slate-50 text-lg md:text-xl font-semibold font-inter mb-2">
            {" "}
            Building the Future
          </h3>
          <p className="text-neutral-950 dark:text-slate-50 text-xs md:text-sm font-normal mb-8">
            With experience in Full Stack Development and UI libraries, I have
            successfully built this portfolio website using a modern stack that
            includes <strong>Next.js</strong>. My journey continues as I aim to
            create scalable and innovative solutions.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-8">
      <Timeline
        data={data}
        className="timeline transition-all ease-in-out duration-300"
      />
    </div>
  );
}
