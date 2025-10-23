import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Apply theme on mount
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-gradient-start to-gradient-end font-inter">
      {/* Theme Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card border border-border"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-primary" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </Button>

      <Hero />
      <About />
      <Services />
      <Technologies />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
