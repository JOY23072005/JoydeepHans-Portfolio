import { Briefcase, Code, User } from "lucide-react";

export default function About() {
  return (
    <section
    id="about"
    className="py-30 px-4 relative"
    >
      <div
      className="container mx-auto max-w-5xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            
            <h3 className="text-2xl font-semibold">Crafting Ideas Into Impactful Digital Experiences</h3>
            
            <p className="text-muted-foreground">
              I’m a passionate creator with a sharp eye for detail and a love for problem-solving.
              With 3+ months of hands-on experience in full-stack engineering, I’ve built projects that merge technology with creativity.
              From code to design, I bring clarity, precision, and innovation—turning ideas into digital products that connect and inspire.
            </p>
            
            <p className="text-muted-foreground">
              With a commitment to continuous learning and thoughtful execution, I aim to create work that not only looks good but works beautifully.
              Let’s build something meaningful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#content" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a href="/JoydeepHans_Resume(May-2025).pdf" download className="mx-4 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive, high-performance web apps that blend clean design with functional code.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Who I Am</h4>
                  <p className="text-muted-foreground">
                    A detail-driven full-stack developer with a creative edge and a passion for problem-solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    Over 3 months of hands-on experience crafting digital products that connect, perform, and inspire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}
