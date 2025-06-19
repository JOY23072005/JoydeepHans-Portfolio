import ImageSlideShow from "./ImageSlideshow.jsx"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

export default function ProjectSection() {
  const projects = [
        {
      id: 1,
      title: "Chatty-Realtime-Chat-App",
      description:`A MERN-based web application that allows users to chat in real time.`,
      images: ["/projects/chatty1.png","/projects/chatty2.png","/projects/chatty3.png"],
      tags: ["React","Node.js","Express","Socket.IO","JWT Auth","MongoDB"],
      demoUrl:"https://real-time-chat-app-swart-five.vercel.app",
      githubUrl:"https://github.com/JOY23072005/RealTime-Chat-App",
    },
    {
      id: 2,
      title: "VidMeet-Video-Calling-App",
      description:`A browser-based video calling platform with real-time chat and screen sharing — no plugins required.`,
      images: ["/projects/VidMeet1.png","/projects/VidMeet2.png","/projects/VidMeet3.png"],
      tags: ["React","TypeScript","Node.js","Express","Socket.IO","WebRtc Rest API","Tailwind"],
      demoUrl:"https://vidmeet-video-calling-app.vercel.app",
      githubUrl:"https://github.com/JOY23072005/Vidmeet-Video-Calling-App",
    },
    {
      id: 3,
      title: "AI-Voice-Assistant-App",
      description:`A voice-enabled AI assistant that responds to user commands and queries directly in the browser.`,
      images: ["/projects/AI1.png","/projects/AI2.png","/projects/AI3.png"],
      tags: ["Django","Python","HTML/CSS","JS","Gemini API","SpeechRecognition API","SpeechSynthesisUtterance API"],
      demoUrl:"https://ai-voice-enabled.vercel.app/",
      githubUrl:"https://github.com/JOY23072005/AI-voice-enabled",
    },
  ]
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully 
          crafted with attention to detail, performance, and use experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project)=>(
              <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <ImageSlideShow 
                    images={project.images}
                    alt={project.title}
                    slideInterval={2500}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag,key)=>(
                      <span key={key} className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20}/>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/JOY23072005" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
              Check My Github <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  )
}
