import { useState } from "react";
import {cn} from "@/lib/utils"
const skills = [
  // Languages
  { name: "C/C++", level: 80, category: "language" },
  { name: "Python", level: 90, category: "language" },
  { name: "SQL", level: 95, category: "language" },
  { name: "JavaScript", level: 85, category: "language" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "R", level: 70, category: "language" },

  // Libraries
  { name: "Pandas", level: 80, category: "other" },
  { name: "NumPy", level: 80, category: "other" },
  { name: "Matplotlib", level: 75, category: "other" },

  // Frameworks/Tools
  { name: "Django", level: 70, category: "fullstack"},
  { name: "React", level: 80, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend"},
  { name: "Postgres SQL", level: 85, category: "backend"},
  { name: "Git", level: 70, category: "tool" },
  { name: "GitHub", level: 70, category: "tool" },
  { name: "VS Code", level: 90, category: "tool" },
  { name: "Jupyter", level: 75, category: "tool" },

  // Relevent CourseWork
  { name: "DSA/DAA", level: 80, category: "other" },
  { name: "OOPs", level: 85, category: "other" },
  { name: "Linux/Mac/Windows", level: 85, category: "other" },
  { name: "Computer Networks", level: 80, category: "other" },
];

const categories =["all","frontend","backend","fullstack","language","tool","other"]

export default function SkillsSection() {
  const [activeCat,setActiveCat] = useState("all");

  const filteredSkills = skills.filter((skill)=>activeCat === "all" ||
  (activeCat === "fullstack" && ((skill.category==="backend")||(skill.category==="frontend"))) ||
  skill.category===activeCat);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category,key)=>(
            <button 
            key={key}
            onClick={()=>setActiveCat(category)}
            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer hover:text-primary",
              activeCat === category?"bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-gray-100"
            )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill,key)=>(
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out " 
                style={{width:`${skill.level}%`}}
                />
              </div>
              <div className="text-right mt-1">
              <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}
