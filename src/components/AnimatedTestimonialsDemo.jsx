import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Abhishek provides expert proficiency in development, words and code — making him the ultimate choice for your next website.",
      name: "Proficiency",
      designation: " ",
      src: "/images/freelancer.png",
    },
    {
      quote:
        "Turning expectations into reality, where 100% satisfaction isn’t just a promise—it’s the minimum standard.",
      name: "Satisfaction",
      designation: "",
      src: "/images/satisfaction2.png",
    },
    {
      quote:
        "Bringing you thoughtful responses, daily—because every detail matters.",
      name: "Reliability",
      designation: "",
      src: "/images/responses.png",
    },
    {
      quote:
        "An unwavering passion that grows beyond boundaries, shaping innovative solutions with every line of code.",
      name: "Passion",
      designation: "",
      src: "/images/passion2.png",
    },
    {
      quote:
        "Abhishek is a talented Developer with excellent technical skills, creativity, and teamwork, delivering exceptional user experiences consistently.",
      name: "Tanay Saksena",
      designation: "Sr. Project Manager",
      src: "/images/TanaySirTestimonial.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
