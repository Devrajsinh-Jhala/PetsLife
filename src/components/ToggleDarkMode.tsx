"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button onClick={() => toggleTheme()} variant={"outline"} size={"icon"}>
      {isDarkMode === true ? <Sun /> : <Moon />}
    </Button>
  );
}
