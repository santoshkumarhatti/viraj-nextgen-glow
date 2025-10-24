import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gradient-start to-gradient-end">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNsKDE5NSAxMDAlIDUwJSkiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
        {/* Company Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground tracking-tight font-times uppercase">
          VaroTech
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 mb-6 animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
          Empowering Businesses with Scalable IT Solutions
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
          Next-generation IT services powered by cloud computing, artificial intelligence, and cutting-edge automation
        </p>

        {/* CTA Button */}
        <a href="mailto:sndsanthosh74@gmail.com" className="inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--tech-glow)/0.5)]"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
