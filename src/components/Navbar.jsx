import {cn} from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useState,useEffect } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export default function Navbar() {
    const [isScrolled,setIsScrolled] = useState(false);
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    useEffect (()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY>10)
        }

        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    })

    return (
    <nav className={ cn("fixed w-full z-40 transition-all duration-300 px-20",
    isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs": "py-5" )}>
        
        <div className="container flex items-center justify-between">
            
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Joydeep Hans </span>{" "} Portfolio
                </span>
            </a>
            
            {/* desktop version */}
            <div className="hidden md:flex space-x-8 ">
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" >{item.name}</a>
                ))}
            </div>
            
            {/* mobile version */}
            <button onClick={()=>setIsMenuOpen((prev)=>!prev)}
             className="md:hidden p-2 text-foreground z-50"
             aria-label={isMenuOpen?"Close Menu":"Open Menu"}
             >
                {isMenuOpen?<X size={24}/>:<Menu size={24}/>}
            </button>

            <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen?"opacity-100 pointer-events-auto":
                "opacity-0 pointer-events-none"
            )}
            style={{ width:'100%',height: '100vh'}}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item,key)=>(
                        <a 
                        key={key} 
                        href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
  )
}
