import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwitchDemo";
import { SiteConfig } from "@/lib/config";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: SiteConfig.resumeLink, target: "_blank" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        className="dark:bg-[black/70]"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand justify="start">
            <Link aria-current="page" href="/">
              <p
                className="font-semibold text-2xl justEffect font-serif bg-gradient-to-b from-purple-400 via-purple-500 to-black bg-clip-text text-transparent"
                style={{
                  backgroundSize: "100% 100%",
                  backgroundPosition: "top",
                }}
              >
                &lt; Abhishek Singh /&gt;
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              {item.target === "_blank" ? (
                <a
                  className="font-openSans"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: item.name === "Resume" ? "#880bdb" : "" }}
                >
                  {item.name}
                </a>
              ) : (
                <Link className="font-openSans" href={item.href}>
                  {item.name}
                </Link>
              )}
            </NavbarItem>
          ))}
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              {item.target === "_blank" ? (
                <a
                  className="w-full text-foreground"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <Link className="w-full text-foreground" href={item.href}>
                  {item.name}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
