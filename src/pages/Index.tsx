
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
        name: "SIREKAP Clone",
        description: "Blockchain-based e-voting system for transparent election vote tabulation from TPS to KPU with public transparency",
        technologies: ["Python", "FastAPI", "MongoDB", "Hyperledger Fabric", "IPFS", "Docker"],
        url: "#",
        image: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=500&h=300&fit=crop"
      },
      {
        name: "ActionPay FDS",
        description: "Comprehensive fraud detection system with identity verification, risk scoring, and screening for financial transactions",
        technologies: ["Go", "PostgreSQL", "RabbitMQ", "Docker", "GCP"],
        url: "#",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop"
      },
      {
        name: "Omni Payment Integration",
        description: "Payment gateway integration system with Virtual Account, Money Out, and automated settlement processing",
        technologies: ["Laravel", "PHP", "Queue Jobs", "MySQL"],
        url: "#",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
      },
      {
        name: "ID News Portal",
        description: "Multi-tenant CMS news portal with React theme builder and CDN service for media management",
        technologies: ["Next.js", "React", "Hono", "PostgreSQL", "CDN"],
        url: "#",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop"
      },
      {
        name: "International Money Transfer",
        description: "Cross-border remittance system with dynamic payload validation for multiple countries and currencies",
        technologies: ["Node.js", "Express.js", "RabbitMQ", "MySQL"],
        url: "#",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop"
      },
      {
        name: "Payment Dashboard",
        description: "Financial dashboard with optimized reporting for member contributions and payment history tracking",
        technologies: ["Laravel", "PostgreSQL", "Vue.js", "ECharts"],
        url: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
      },
      {
        name: "Telegram Registration Bot",
        description: "Telegram bot for user registration and area monitoring with filtering by location (Kabupaten/Kecamatan/Kelurahan)",
        technologies: ["Node.js", "Telegram Bot API", "JSON Storage"],
        url: "#",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=500&h=300&fit=crop"
      },
      {
        name: "Riski-Labs CDN",
        description: "Internal CDN service for serving static assets with Nginx optimization and SPA rewrite rules",
        technologies: ["Nginx", "Node.js", "Docker"],
        url: "#",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop"
      },
      {
        name: "Microservices Frontend Platform",
        description: "Modular frontend platform with microservices architecture, deployed with pm2 and Nginx reverse proxy",
        technologies: ["Vite", "Vue.js", "pm2", "Nginx", "MinIO", "RabbitMQ"],
        url: "#",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
      },
      {
        name: "Skypedia",
        description: "A simple website to book flights",
        technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
        url: "https://github.com/riskidwipatrio/skypedia",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
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
