import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  // Initialize slim particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesLoaded(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "#14931fff" }, // light green tone - fresh field color
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#2e7d32", "#81c784", "#a5d6a7"] }, // shades of green
      links: {
        color: "#66bb6a",
        distance: 140,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        outModes: "bounce",
      },
      number: { value: 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 🌱 Animated Agriculture-Themed Particle Background */}
        {particlesLoaded && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
        )}

        {/* 🌾 Light Overlay to make content readable */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.7))",
            zIndex: 0,
            backdropFilter: "blur(1px)",
          }}
        />

        {/* Main App Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            paddingBottom: "3rem",
            fontFamily: "'Poppins', sans-serif",
            color: "#2e7d32",
          }}
        >
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
