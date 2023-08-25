"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ColorModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="" onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ColorModeButton;
