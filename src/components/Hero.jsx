import {
  Github,
  Linkedin,
  Mail,
  MailCheck,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import React from "react";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Resume from "./Resume";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Particles
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: `rgba(0, ${Math.floor(Math.random() * 200) + 100}, ${Math.floor(
          Math.random() * 50
        )}, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="backdrop-blur-sm bg-black/30 border border-green-500/20 rounded-xl p-18 mt-6  shadow-[0_0_15px_rgba(0,255,0,0.1)]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-900/30 text-green-300 border border-green-400/30 hover:bg-green-800/50 transition">
              Web Developer
            </span>
            <h1 className="text-6xl font-bold text-white mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Hi 👋, I'm Abdul Jabbar
              </span>
            </h1>

            <p className="text-xl mt-2 text-gray-300 max-w-md mx-auto lg:mx-0">
              A passionate Frontend Developer & MERN Stack Enthusiast building
              the future of the web
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-green-600 rounded-lg shadow-2xl"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 via-green-500 to-green-400"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white font-semibold">
                  Contact Me
                </span>
              </Link>

              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium border border-green-500 rounded-lg"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-500/10 via-green-500/20 to-green-500/30 group-hover:opacity-100"></span>
                <span className="relative text-green-500 transition duration-300 group-hover:text-white ease">
                  View Projects
                </span>
              </Link>
            </div>
            {/* Social Links */}
            <div className="w-full flex justify-center lg:justify-start mt-10 gap-6">
              <a
                href="https://github.com/Abdul-Jabbar22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 hover:text-green-500" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/abdul-jabbar-b7b2b3249"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 hover:text-green-500" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:abduljabbarray@gmail.com"
                className="bg-card hover:bg-card/80 p-3 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <MailCheck className="h-6 w-6 hover:text-green-500" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://wa.me/923017376974"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-card/80 p-3 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <PhoneCall className="h-6 w-6 hover:text-green-500" />
                <span className=" sr-only">WhatsApp</span>
              </a>
            </div>
            <Resume />
          </div>

          {/* Image on the Right */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src="/profile.png"
              alt="Abdul Jabbar"
              className="relative w-38 h-38 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full border-2 border-green-400 p-1 bg-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
