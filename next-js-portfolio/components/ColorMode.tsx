"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

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
    <Button variant="ghost" className="" onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ColorModeButton;
