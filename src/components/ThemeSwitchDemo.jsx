"use client";

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Dynamic colors
  const [iconColor, setIconColor] = useState(theme === "light" ? "#D8B4FE" : "#4C1D95"); // Lavender for Sun, Deep Purple for Moon
  const [strokeColor, setStrokeColor] = useState(theme === "light" ? "#C084FC" : "#9F7AEA"); // Purple Glow for Sun, Soft Lavender for Moon

  useEffect(() => {
    setMounted(true);
    setIconColor(theme === "light" ? "#D8B4FE" : "#4C1D95");
    setStrokeColor(theme === "light" ? "#C084FC" : "#9F7AEA");
  }, [theme]);

  if (!mounted) return null;

  return (
    <Button
      className="text-foreground-500"
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="light"
      size="md"
      isIconOnly
      aria-label="Theme-Switcher"
    >
      {theme === "light" ? (
        <Sun stroke={strokeColor} strokeWidth={1.5} fill={iconColor} fillOpacity={0.9} />
      ) : (
        <Moon stroke={strokeColor} strokeWidth={1.5} fill={iconColor} fillOpacity={0.9} />
      )}
    </Button>
  );
}