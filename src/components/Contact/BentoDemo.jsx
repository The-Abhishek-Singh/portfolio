import React, { useEffect, useRef, useState } from "react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { GlobeLock, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { BentoCard, BentoGrid } from "../ui/Contact/bento-grid";
import Marquee from "@/components/ui/marquee";
import AnimatedBeamMultipleOutputDemo from "@/components/AnimatedBeamsDemo";
import { Calendar } from "@/components/ui/calendar";
import { useTheme } from "next-themes";

const Globe = ({ className }) => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: theme === "dark" ? 1 : 0,
      diffuse: theme === "dark" ? 1.2 : 1.1, // Increased diffuse for stronger contrast
      mapSamples: 16000,
      mapBrightness: theme === "dark" ? 8 : 3, // Reduced brightness for more dramatic effect
      baseColor:
        theme === "dark"
          ? [0.4, 0.2, 0.6] // Dark mode: Deep purple
          : [0.85, 0.8, 0.95], // Light mode: Soft lavender base
      markerColor: theme === "dark" ? [0.8, 0.2, 0.8] : [0.1, 0.1, 0.15], // Deep zealy black markers
      glowColor: theme === "dark" ? [0.6, 0.3, 0.9] : [0.05, 0.05, 0.1], // Intense zealy black glow
      markers: [
        // Raipur, India
        {
          location: [21.2514, 81.6296],
          size: 0.08,
        },
        // Ottawa, Canada
        {
          location: [45.4215, -75.6972],
          size: 0.08,
        },
        // California (San Francisco coordinates)
        {
          location: [37.7749, -122.4194],
          size: 0.08,
        },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.045;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: 600,
        height: 600,
        maxWidth: "100%",
        aspectRatio: 1,
        transform: "rotate(4deg",
      }}
      className={className}
    />
  );
};

// Rest of your code remains exactly the same...
const files = [
  // ... your existing files array
  {
    body: "Mentoring Abhishek was an enriching experience, as he displayed a strong passion for programming and an impressive commitment to excellence. Abhishek consistently approached challenges with determination and a thoughtful problem-solving mindset. Their enthusiasm for learning and ability to deliver high-quality work make them an asset to any team or project. ",
    name: "Rajendra K Pandey",
  },
  {
    body: "I highly recommend Abhishek, an outstanding  developer and a valued colleague at Chanakyans Education Foundation.  ",
    name: "Kritika Dewangan",
  },
  {
    body: "It is my pleasure to recommend Abhishek, a driven and intellectually curious individual with a remarkable zeal for technology.",
    name: "Vishal Singh",
  },
  {
    body: "Abhishek is a talented Full-Stack Developer with excellent technical skills, creativity, and teamwork, delivering exceptional user experiences consistently.",
    name: "Tanay Saksena",
  },
  {
    body: "Abhishek has demonstrated excellent proficiency in web development, contributing significantly to various aspects of the project. ",
    name: "Vatsalya Gautam",
  },
  {
    body: "Abhishek is an exceptional developer with a keen eye for detail.",
    name: "Divyanshu Goswami",
    title: "Runner-up@ Navonmesh'24  AIML Student @ SSIPMT",
  },
];

export function BentoDemo() {
  // ... rest of your component code remains identical
  const [date, setDate] = React.useState(new Date());
  const features = [
    {
      Icon: FileTextIcon,
      name: "Recommended by Professionals",

      cta: "",
      className: "col-span-3 font-ysabeau lg:col-span-1",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <p className="mt-2 text-xs  leading-none ">{f.body}</p>
            </figure>
          ))}
        </Marquee>
      ),
    },
    {
      Icon: GlobeLock,
      name: "Open to Work",
      description: "Available to work over the Globe except { Antarctica }",
      className:
        "col-span-3 lg:col-span-2 relative overflow-hidden font-ysabeau",
      background: (
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute -bottom-64 -right-52">
            <Globe />
          </div>
        </div>
      ),
      isWidthHalf: true,
    },
    {
      Icon: Share2Icon,
      name: "Modern Stacks",
      description: "Sleek, Secure, & Robust. Built to Excel.",
      href: "",
      cta: "",
      className: "col-span-3 lg:col-span-2 font-ysabeau",
      background: (
        <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: CalendarIcon,
      name: "Book an appointment",
      description: "Let's have a talk on the next BIG thing",
      className: "col-span-3 lg:col-span-1 font-ysabeau",
      href: "https://calendar.app.google/i5wYC2m7owTyd9me9",
      cta: "Google Calendar",
      background: (
        <Calendar
          mode="single"
          selected={new Date(2022, 4, 11, 0, 0, 0)}
          onSelect={setDate}
          className="absolute left-[32%] top-[5%] lg:left-6 lg:top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
        />
      ),
    },
  ];
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default BentoDemo;
