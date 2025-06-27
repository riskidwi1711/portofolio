
import React from 'react';
import { Code } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WorkExperience from '@/components/WorkExperience';
import TechnicalSkills from '@/components/TechnicalSkills';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollReveal from '@/components/ScrollReveal';
import ChatBubble from '@/components/ChatBubble';

const Index = () => {
  const portfolioData = {
    name: "Riski Dwi Patrio",
    title: "Software Developer",
    description: "I'm a Software Developer who loves learning new technologies, adaptable to any situation, and driven to grow self and others.",
    contact: {
      email: "riskidwipatrio.ext@gmail.com",
      phone: "082121110509",
      github: "https://github.com/riskidwipatrio"
    },
    work_experiences: [
      {
        company: "PT Asia Pelangi Remiten",
        position: "Backend Developer",
        duration: "May 2023 – Present",
        responsibilities: [
          "Developed and managed APIs",
          "Designed and managed databases",
          "Handled application security (SQL Injection, XSS, CSRF)",
          "Integrated third-party services and optimized systems"
        ]
      },
      {
        company: "PT Brothersindo Saudara Sejati",
        position: "Web Developer",
        duration: "Feb 2022 – Dec 2022",
        responsibilities: [
          "Built UI/UX for Frontend & Backend",
          "Designed & secured databases",
          "Optimized performance and integrated third-party APIs",
          "Debugged and maintained applications"
        ]
      }
    ],
    education: {
      institution: "Institut Informatika dan Bisnis Darmajaya",
      degree: "Bachelor of Computer Science",
      year: 2021,
      gpa: 3.38
    },
    certifications: [
      {
        title: "HTML – IBI Darmajaya",
        duration: "2021 – 2025"
      },
      {
        title: "The Complete Flutter and Dart Guide – Udemy"
      },
      {
        title: "Learn React Angular Step by Step – Udemy"
      },
      {
        title: "Learn NodeJS in 2024 – Udemy"
      }
    ],
    skills: {
      frontend: [
        { name: "React.js", icon: "⚛️", level: "Advanced" },
        { name: "Vue.js", icon: "🟢", level: "Intermediate" },
        { name: "Redux", icon: "🔄", level: "Advanced" },
        { name: "React Router", icon: "🛣️", level: "Advanced" },
        { name: "React Native", icon: "📱", level: "Intermediate" },
        { name: "Ajax", icon: "🔗", level: "Advanced" },
        { name: "jQuery", icon: "💙", level: "Intermediate" },
        { name: "Bootstrap", icon: "🎨", level: "Advanced" },
        { name: "HTML/CSS", icon: "🌐", level: "Advanced" }
      ],
      backend: [
        { name: "Express.js", icon: "🚀", level: "Advanced" },
        { name: "Nest.js", icon: "🐱", level: "Intermediate" },
        { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
        { name: "Sequelize", icon: "🔍", level: "Advanced" },
        { name: "MongoDB", icon: "🍃", level: "Advanced" },
        { name: "Redis", icon: "🔴", level: "Intermediate" },
        { name: "socket.io", icon: "🔌", level: "Intermediate" },
        { name: "GraphQL", icon: "📊", level: "Intermediate" },
        { name: "Mocha", icon: "☕", level: "Intermediate" },
        { name: "Chai", icon: "🍵", level: "Intermediate" },
        { name: "Jest", icon: "🃏", level: "Advanced" },
        { name: "AWS", icon: "☁️", level: "Intermediate" },
        { name: "GCP", icon: "🌥️", level: "Beginner" }
      ],
      languages: [
        { name: "TypeScript", icon: "🔷", level: "Advanced" },
        { name: "JavaScript", icon: "💛", level: "Advanced" },
        { name: "Go", icon: "🐹", level: "Beginner" }
      ]
    },
    projects: [
      {
        name: "Skypedia",
        description: "A simple website to book flights",
        technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
        url: "https://github.com/riskidwipatrio/skypedia",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
      },
      {
        name: "FancyTodo",
        description: "A todo board for task management",
        technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
        url: "https://github.com/riskidwipatrio/FancyTodo",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
      },
      {
        name: "Kanban",
        description: "A kanban board for project management",
        technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL"],
        url: "https://github.com/riskidwipatrio/kanban",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
      },
      {
        name: "CMS H8 Store",
        description: "A simple marketplace CMS",
        technologies: ["React.js", "Node.js", "MongoDB"],
        url: "https://linktr.ee/riskidwipatrio_cms",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
      },
      {
        name: "E-Commerce App",
        description: "An online store for various products",
        technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
        url: "https://github.com/riskidwipatrio/ecommerce-app",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
      },
      {
        name: "Blog Platform",
        description: "A platform for managing blogs",
        technologies: ["Vue.js", "Node.js", "MongoDB"],
        url: "https://github.com/riskidwipatrio/blog-platform",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection portfolioData={portfolioData} />
      
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      
      <ScrollReveal direction="left" delay={0.2}>
        <WorkExperience experiences={portfolioData.work_experiences} />
      </ScrollReveal>
      
      <ScrollReveal direction="right" delay={0.1}>
        <TechnicalSkills skills={portfolioData.skills} />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.3}>
        <ProjectsSection projects={portfolioData.projects} />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <ContactSection contact={portfolioData.contact} name={portfolioData.name} />
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal>
        <footer className="border-t border-gray-800 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-orange-500 p-2">
                  <Code className="h-6 w-6 text-black" />
                </div>
                <span className="text-xl font-bold text-white">{portfolioData.name}</span>
              </div>
              <p className="text-gray-400 text-center sm:text-right">
                © {new Date().getFullYear()} {portfolioData.name}. Built with React, Tailwind CSS, and lots of ☕
              </p>
            </div>
          </div>
        </footer>
      </ScrollReveal>

      {/* Floating Chat Bubble */}
      <ChatBubble />
    </div>
  );
};

export default Index;
