import React from "react";
import { BentoGrid2, BentoGridItem2 } from "../ui/Contact/bento-grid2";
import { Linkedin, Mail, Twitter } from "lucide-react";

export function BentoGridDemo() {
  return (
    <BentoGrid2 className="max-w-4xl mx-auto pb-16 object-contain">
      {items.map((item, i) => (
        <BentoGridItem2
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </BentoGrid2>
  );
}

const items = [
  {
    title: "LinkedIn",
    description: "Connect with me on LinkedIn.",
    header: <img src="/images/AbhishekLinkding.png" alt="LinkedIn" />,
    icon: <Linkedin className="h-4 w-4 text-neutral-500" />,
    href: "https://www.linkedin.com/in/abhisheksingh2494/",
  },
  {
    title: "Gmail",
    description: "Reach out to me via Gmail",
    header: <img src="/images/outlook.png" alt="Gmail" />,
    icon: <Mail className="h-4 w-4 text-neutral-500" />,
    href: "mailto:abhi120730@gmail.com",
  },
  {
    title: "Twitter",
    description: "Follow me on Twitter, now X",
    header: <img src="/images/AbhishekX.png" alt="Twitter" />,
    icon: <Twitter className="h-4 w-4 text-neutral-500" />,
    href: "https://x.com/79off47",
  },
];
