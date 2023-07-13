"use client";

// import MoonIcon from "@icons/moon.svg";
// import SunIcon from "@icons/sun.svg";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="rounded-sm p-0.5 focus:outline-none focus:ring-primary/50 focus-visible:ring-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Sun" : "Moon"}
    </button>
  );
};
