import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="space-y-6">
          <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-yellow-300">Your Name</span>!
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A passionate software developer building modern web applications.
            Welcome to my portfolio.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg" className="text-blue-600 hover:text-blue-800">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-card text-card-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I am a dedicated software developer with a strong focus on creating
            intuitive and efficient web experiences. My journey in tech began
            with a fascination for how digital products can solve real-world
            problems, leading me to specialize in front-end development with
            React and TypeScript.
          </p>
          <p className="text-lg leading-relaxed">
            I thrive in collaborative environments and am always eager to learn
            new technologies and best practices. When I'm not coding, you can
            find me exploring new hiking trails or experimenting with new recipes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted text-muted-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="default" className="px-4 py-2 text-base">React</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">TypeScript</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">JavaScript</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">Tailwind CSS</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">Node.js</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">Express.js</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">MongoDB</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">Git</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">REST APIs</Badge>
            <Badge variant="default" className="px-4 py-2 text-base">UI/UX Design</Badge>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card text-card-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Project One</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A brief description of Project One, highlighting its key features and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
                <Button variant="link" className="px-0">View Project</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Project Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A brief description of Project Two, highlighting its key features and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
                <Button variant="link" className="px-0">View Project</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Project Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A brief description of Project Three, highlighting its key features and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                </div>
                <Button variant="link" className="px-0">View Project</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted text-muted-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg leading-relaxed mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:your.email@example.com" className="text-primary hover:text-primary-foreground transition-colors">
              <Mail size={48} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground transition-colors">
              <Github size={48} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground transition-colors">
              <Linkedin size={48} />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;