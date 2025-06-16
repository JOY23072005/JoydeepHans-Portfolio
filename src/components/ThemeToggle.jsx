import { Moon, Sun } from "lucide-react";
import { useState,useEffect } from "react";
import { cn } from "../lib/utils";

export default function ThemeToggle() {
    const [isDarkMode,setIsDarkMode] = useState(false);

    useEffect (()=>{
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    },[])

    const ToggleTheme = ()=>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    };

    return (
    <button className={cn("fixed top-5 right-5 z-50 p-2 rounded-full", 
        "transition-colors duration-300 focus:outlin-hidden")}
    onClick={ToggleTheme}> 
    {isDarkMode ? 
    <Sun className="h-6 w-6 text-yellow-300"/>
    :<Moon className="h-6 w-6 text-blue-900" /> }
    </button>
  )
}
