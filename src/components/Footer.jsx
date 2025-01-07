"use client";
import { useState } from "react";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Github, Linkedin, Mail, Twitter, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/The-Abhishek-Singh",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhisheksingh2494/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/i_amAbhishek_07", label: "Twitter" },
  ];

  const quickLinks = [
    { nam: "Home", href: "/home" },
    { nam: "About", href: "/about" },
    { nam: "Projects", href: "/projects" },
    { nam: "Contact", href: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative h-[55rem] gridtoota:h-[33rem] sm:h-[50.5rem] md:h-[52rem] lg:h-[43.5rem] w-full overflow-hidden bg-[#000013]">
      <div className="absolute inset-0 flex justify-center items-center">
        <ShootingStars className="hidden sm:block" />
        <StarsBackground className="hidden sm:block" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block w-full h-full object-cover absolute top-[-57px] md:top-[-58px] md:max-w-[1440px] sm:top-[-114px] sm:max-h-[40rem] md:max-h-[40.7rem] lg:max-h-[40.3rem] lg:top-[-3px]"
          src="/webm/blackhole.webm"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="backdrop-blur-xl pt-16 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gridtoota:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-24 mb-12 pr-8 pl-8 xs:px-20 gridtoota:px-6">
              {/* Brand Section */}
              <div
                className="space-y-4 group"
                onMouseEnter={() => setHoveredSection("brand")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <h3 className="text-white font-bold text-lg font-serif relative inline-block">
                  Abhishek .
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full" />
                </h3>
                <p className="text-gray-400 text-sm font-openSans gridtoota:pr-0 pr-12 transition-all duration-300 ease-out group-hover:text-gray-300">
                  Crafting digital{" "}
                  <strong className="text-white opacity-25 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    ecstasies
                  </strong>{" "}
                  with code, creativity (& a bit of caffiene of course!).
                  <br />
                  <br /> Thanks for stopping by!
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold font-openSans">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((item) => (
                    <li key={item.nam}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans relative inline-block group"
                      >
                        {item.nam}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold font-openSans">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a
                    href="mailto:abhi120730@gmail.com"
                    className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans flex items-center group"
                  >
                    <span className="transform transition-all duration-300 ease-out group-hover:translate-x-1">
                      <Mail
                        size={16}
                        className="transition-colors duration-300 ease-out group-hover:text-white"
                      />
                    </span>
                    <span className="ml-2 relative">
                      abhi120730@gmail.com
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </a>
                  <div className="text-gray-400 text-sm font-openSans flex items-center group">
                    <span className="transform transition-all duration-300 ease-out group-hover:translate-x-1">
                      <MapPin
                        size={16}
                        className="transition-colors duration-300 ease-out group-hover:text-white"
                      />
                    </span>
                    <span className="ml-2">Raipur, Chhattisgarh, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold font-openSans">
                  Connect
                </h4>
                <div className="flex space-x-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      className="group relative"
                      onMouseEnter={() => setHoveredIcon(label)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <div className="relative">
                        <Icon
                          size={20}
                          className="text-gray-400 transform transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105"
                        />
                        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:text-white whitespace-nowrap">
                          {label}
                        </span>
                      </div>
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 px-4 mt-8 text-center md:flex md:justify-between md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Abhishek | Portfolio. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service"].map((text) => (
                  <a
                    key={text}
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm mx-3 relative inline-block group"
                  >
                    {text}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
